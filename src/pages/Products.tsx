import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Gift, ChevronLeft, ChevronRight } from 'lucide-react';
import { products, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';

const ITEMS_PER_PAGE = 24;

export default function Products() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [location]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const filteredProducts = useMemo(() => {
    const result = [];
    // Iterate backwards to show newest products (at the end of the array) first
    for (let i = products.length - 1; i >= 0; i--) {
      const p = products[i] as any;
      if (!p) continue;

      const pCategory = p.product_category || '';
      
      let matchesCategory = false;
      if (activeCategory === 'All') {
        matchesCategory = true;
      } else {
        matchesCategory = pCategory === activeCategory;
      }

      const pId = String(p['PRODUCT ID'] || p['Product Id'] || p.ID || p.id || '');
      const searchVal = searchQuery.trim();
      const matchesSearch = searchVal === '' ? true : pId === searchVal;
      
      if (matchesCategory && matchesSearch) {
        result.push(p);
      }
    }
    return result;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">All Products</h1>
          <p className="mt-2 text-slate-500">Browse our complete catalog of free products.</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8 border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-20 z-30">
          
          {/* Categories */}
          <div className="flex overflow-x-auto hide-scrollbar w-full md:w-auto">
            <div className="flex space-x-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-colors"
              placeholder="SEARCH PRODUCTS ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6 mb-10">
              {currentProducts.map((product: any) => (
                <ProductCard key={product['PRODUCT ID'] || product['Product Id'] || product.ID || product.id} product={product} />
              ))}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8 mb-12">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm font-medium text-slate-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Gift className="mx-auto h-16 w-16 text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-900">No products found</h3>
            <p className="mt-2 text-slate-500 max-w-md mx-auto">We couldn't find any products matching your current search or category filter.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-6 bg-slate-100 text-slate-900 px-6 py-2.5 rounded-full font-medium hover:bg-slate-200 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
