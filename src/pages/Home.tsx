import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, ArrowRight } from 'lucide-react';
import { products, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { featuredProducts, trendingProducts } = useMemo(() => {
    const featured = [];
    const trending = [];
    const len = products.length;
    
    for (let i = 0; i < 4 && len - 1 - i >= 0; i++) {
      featured.push(products[len - 1 - i]);
    }
    for (let i = 4; i < 8 && len - 1 - i >= 0; i++) {
      trending.push(products[len - 1 - i]);
    }
    
    return { featuredProducts: featured, trendingProducts: trending };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-slate-900 pb-16 pt-12 md:pt-20 md:pb-24 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500 blur-3xl"></div>
          <div className="absolute top-32 -left-24 w-72 h-72 rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Test Premium Products.</span>
            <span className="block text-amber-500 mt-2">Keep Them For Free.</span>
          </h1>
          <p className="mt-4 max-w-md mx-auto text-base text-slate-300 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl">
            Hi, I'm Farhan Shahariar, an Amazon Vine Associate. I partner with top brands to give you 100% free products in exchange for your honest feedback.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <div className="rounded-md shadow">
              <Link to="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-slate-900 bg-amber-500 hover:bg-amber-400 md:py-4 md:text-lg md:px-10 transition-colors">
                Get Started Now
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link to="/how-it-works" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-slate-800 hover:bg-slate-700 md:py-4 md:text-lg md:px-10 transition-colors">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Quick Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">How to Get Free Products</h2>
            <p className="mt-4 text-lg text-slate-500">Four simple steps to start receiving 100% free items.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Browse & Select', desc: 'Find an item you like and contact us on social media with the PRODUCT ID to confirm availability.' },
              { step: '2', title: 'Purchase on Amazon', desc: 'Purchase at full price and send us your order screenshot, number, and PayPal.' },
              { step: '3', title: 'Test & Review', desc: 'Test the product for 5 days and leave an honest review.' },
              { step: '4', title: 'Get 100% Rebate', desc: 'Email us your order number, review screenshot, and link to get a full refund.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-amber-600 font-bold hover:text-amber-700 inline-flex items-center">
              Read detailed instructions <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <Star className="w-8 h-8 text-amber-500 fill-current" />
                Featured Products
              </h2>
              <p className="mt-2 text-slate-500">Hand-picked premium items available right now.</p>
            </div>
            <Link to="/products" className="hidden sm:flex text-amber-600 font-bold hover:text-amber-700 items-center">
              View all <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredProducts.map((product: any) => (
              <ProductCard key={product['PRODUCT ID'] || product['Product Id'] || product.ID || product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/products" className="text-amber-600 font-bold hover:text-amber-700 inline-flex items-center">
              View all products <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-emerald-500" />
                Trending Free Products
              </h2>
              <p className="mt-2 text-slate-500">What everyone is claiming this week.</p>
            </div>
            <Link to="/products" className="hidden sm:flex text-amber-600 font-bold hover:text-amber-700 items-center">
              View all <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {trendingProducts.map((product: any) => (
              <ProductCard key={product['PRODUCT ID'] || product['Product Id'] || product.ID || product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Top Categories */}
      <div className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Top Categories</h2>
            <p className="mt-4 text-slate-400">Find exactly what you're looking for.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.filter(c => c !== 'All').slice(0, 8).map((cat, i) => (
              <Link 
                key={i} 
                to={`/products?category=${encodeURIComponent(cat)}`}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl p-6 text-center transition-colors group"
              >
                <h3 className="font-bold text-lg group-hover:text-amber-500 transition-colors">{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
