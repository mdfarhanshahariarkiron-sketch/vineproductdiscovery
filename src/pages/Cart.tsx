import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ExternalLink, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Your Cart</h1>
            <p className="mt-2 text-slate-500">
              {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart.
            </p>
          </div>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Browse our catalog to find amazing free products.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-full text-slate-900 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <ul className="divide-y divide-slate-200">
              {cart.map((item) => {
                const itemId = item['PRODUCT ID'] || item['Product Id'] || item.ID || item.id;
                return (
                <li key={itemId} className="p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="w-32 h-32 flex-shrink-0 bg-slate-100 rounded-xl overflow-hidden">
                    <img
                      src={item.Images?.[0] || item['Images URL'] || item['Image URL'] || 'https://picsum.photos/seed/product/400/400'}
                      alt={item.Title}
                      className="w-full h-full object-contain mix-blend-multiply"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between h-full w-full">
                    <div>
                      <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">
                        {item.product_category?.split('›').pop()?.trim() || 'Product'}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 line-clamp-2 mb-2">
                        {item.Title}
                      </h3>
                      <div className="text-xl font-extrabold text-slate-900 mb-4">
                        {item.Price || 'Free'} <span className="text-sm text-slate-500 font-normal line-through ml-2">{item.Price}</span>
                        <span className="text-sm text-emerald-600 font-bold ml-2">100% FREE</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <a
                        href={item['Amazon Link'] || item.AmazonLink || item['Amazon URL']}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#E38800] text-slate-900 font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                      >
                        Buy on Amazon <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => removeFromCart(itemId)}
                        className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              )})}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
