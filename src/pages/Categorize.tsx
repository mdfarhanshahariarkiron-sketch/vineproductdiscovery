import React, { useState, useMemo } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { products, CATEGORIES } from '../data/products';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ScrollArea } from '../components/ui/scroll-area';
import { Badge } from '../components/ui/badge';

export default function Categorize() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [updatedProducts, setUpdatedProducts] = useState([...products]);

  const missingCategories = useMemo(() => updatedProducts.filter(p => !p.product_category), [updatedProducts]);
  const categorizedProducts = useMemo(() => updatedProducts.filter(p => p.product_category), [updatedProducts]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, msg]);
  };

  const handleCategorize = async () => {
    setIsProcessing(true);
    setLogs([]);
    
    // Initialize Gemini API
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const missing = missingCategories;
    addLog(`Found ${missing.length} products missing categories out of ${updatedProducts.length} total.`);
    
    const batchSize = 30;
    const newProducts = [...updatedProducts];
    
    for (let i = 0; i < missing.length; i += batchSize) {
      const batch = missing.slice(i, i + batchSize);
      addLog(`Processing batch ${Math.floor(i / batchSize) + 1} / ${Math.ceil(missing.length / batchSize)}`);
      
      const prompt = `Categorize the following products based on their titles into exactly one of these categories:
${CATEGORIES.filter(c => c !== 'All').map(c => `- ${c}`).join('\n')}

Products:
${batch.map(p => `ID: ${p['PRODUCT ID'] || p['Product Id'] || p.ID || p.id} | Title: ${p.Title}`).join('\n')}

Return a JSON array of objects, each with "ID" and "category".`;

      let success = false;
      let retries = 3;
      let delay = 5000;

      while (!success && retries > 0) {
        try {
          const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite-preview",
            contents: prompt,
            config: {
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    ID: { type: Type.NUMBER },
                    category: { type: Type.STRING }
                  },
                  required: ["ID", "category"]
                }
              }
            }
          });

          const results = JSON.parse(response.text || '[]');
          
          for (const result of results) {
            const productIndex = newProducts.findIndex(p => (p['PRODUCT ID'] || p['Product Id'] || p.ID || p.id) === result.ID);
            if (productIndex !== -1) {
              let cat = result.category;
              if (!CATEGORIES.includes(cat)) {
                cat = 'Others';
              }
              newProducts[productIndex] = { ...newProducts[productIndex], product_category: cat };
            }
          }
          
          setUpdatedProducts([...newProducts]);
          setProgress(Math.round(((i + batch.length) / missing.length) * 100));
          
          // Auto-save every batch to prevent data loss
          try {
            const fileContent = `// @ts-nocheck
export const CATEGORIES = [
  'All', 
  'Electronics', 
  'Home & Kitchen', 
  'Beauty & Personal Care', 
  'Gadgets',
  'Health Products',
  'Office Products',
  'Outdoor Products',
  'Fitness',
  'Tools & Home Improvement',
  'Pet Supplies',
  'Toy & Games',
  'Automotive',
  'Baby Products',
  'Sports & Outdoors',
  'Clothing, Shoes & Jewelry',
  'Health & Household',
  'Others'
];

export interface Product {
  ID?: number;
  id?: number;
  'PRODUCT ID'?: number;
  'Product Id'?: number;
  Title: string;
  product_category?: string;
  [key: string]: any;
}

export const products = ${JSON.stringify(newProducts, null, 2)} as any as Product[];
`;
            await fetch('/api/save-products', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ content: fileContent })
            });
          } catch (saveErr) {
            console.error("Auto-save failed", saveErr);
          }
          
          success = true;
        } catch (e: any) {
          const errorMessage = e.message || '';
          const isRateLimit = errorMessage.includes('429') || e.status === 429 || errorMessage.includes('RESOURCE_EXHAUSTED');
          const isQuotaExceeded = errorMessage.includes('quota') || errorMessage.includes('billing details');
          
          if (isQuotaExceeded) {
            addLog(`❌ Daily quota exceeded. Please try again tomorrow or check your billing details.`);
            success = false;
            break; // Stop completely
          } else if (isRateLimit && retries > 1) {
            addLog(`Rate limit hit. Retrying in ${delay/1000}s... (${retries - 1} retries left)`);
            await new Promise(r => setTimeout(r, delay));
            retries--;
            delay *= 2; // Exponential backoff
          } else {
            addLog(`Error processing batch: ${errorMessage}`);
            console.error(e);
            break; // Break out of retry loop
          }
        }
      }
      
      if (!success) {
        addLog(`Failed to process batch. Stopping to prevent further errors.`);
        break;
      }
      
      // Wait a bit to avoid rate limits (10 RPM = 1 request every 6 seconds)
      await new Promise(r => setTimeout(r, 6000));
    }
    
    addLog("Done processing!");
    setIsProcessing(false);
  };

  const handleDownload = async () => {
    const fileContent = `// @ts-nocheck
export const CATEGORIES = [
  'All', 
  'Electronics', 
  'Home & Kitchen', 
  'Beauty & Personal Care', 
  'Gadgets',
  'Health Products',
  'Office Products',
  'Outdoor Products',
  'Fitness',
  'Tools & Home Improvement',
  'Pet Supplies',
  'Toy & Games',
  'Automotive',
  'Baby Products',
  'Sports & Outdoors',
  'Clothing, Shoes & Jewelry',
  'Health & Household',
  'Others'
];

export interface Product {
  ID?: number;
  id?: number;
  'PRODUCT ID'?: number;
  'Product Id'?: number;
  Title: string;
  product_category?: string;
  [key: string]: any;
}

export const products = ${JSON.stringify(updatedProducts, null, 2)} as any as Product[];
`;
    
    try {
      addLog('Saving to file...');
      const res = await fetch('/api/save-products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: fileContent })
      });
      const data = await res.json();
      if (data.success) {
        addLog('Successfully saved to src/data/products.ts!');
      } else {
        throw new Error(data.error || 'API failed');
      }
    } catch (e: any) {
      addLog(`API save failed, falling back to browser download: ${e.message}`);
      // Fallback to browser download
      const blob = new Blob([fileContent], { type: 'text/typescript' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'products.ts';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      addLog('File downloaded to your computer.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Product Categorization Tool</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Products: {updatedProducts.length}</p>
              <p className="text-sm text-slate-500">
                Missing Categories: {missingCategories.length}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <Button 
                onClick={handleCategorize} 
                disabled={isProcessing || missingCategories.length === 0}
                className="w-full sm:w-auto"
              >
                {isProcessing ? `Processing (${progress}%)` : 'Start Categorizing'}
              </Button>
              <Button onClick={handleDownload} variant="outline" className="w-full sm:w-auto">
                Save products.ts
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Logs</h3>
            <ScrollArea className="h-48 w-full rounded-md border p-4 bg-slate-50">
              {logs.map((log, i) => (
                <div key={i} className="text-sm font-mono mb-1">{log}</div>
              ))}
              {logs.length === 0 && <div className="text-sm text-slate-400 italic">No logs yet...</div>}
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Preview (First 10 missing categories)</h3>
            <div className="grid gap-2">
              {missingCategories.slice(0, 10).map(p => (
                <div key={p['PRODUCT ID'] || p['Product Id'] || p.ID || p.id} className="p-3 border rounded-md flex justify-between items-center bg-white">
                  <span className="text-sm truncate mr-4">{p.Title}</span>
                  <Badge variant="secondary">Uncategorized</Badge>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Preview (Recently Categorized)</h3>
            <div className="grid gap-2">
              {categorizedProducts.slice(-10).map(p => (
                <div key={p['PRODUCT ID'] || p['Product Id'] || p.ID || p.id} className="p-3 border rounded-md flex justify-between items-center bg-white">
                  <span className="text-sm truncate mr-4">{p.Title}</span>
                  <Badge>{p.product_category}</Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
