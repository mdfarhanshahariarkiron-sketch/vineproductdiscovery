import React, { useState, memo } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import ProductModal from './ProductModal';
import { useCart } from '../context/CartContext';

const ProductCard = memo(function ProductCard({ product }: { product: any, key?: React.Key }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, removeFromCart, isInCart } = useCart();
  const productId = product['PRODUCT ID'] || product['Product Id'] || product.ID || product.id;
  const inCart = isInCart(productId);

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inCart) {
      removeFromCart(productId);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <div 
        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-square bg-slate-100 overflow-hidden">
          <img 
            src={product.Images?.[0] || product['Images URL'] || product['Image URL'] || 'https://picsum.photos/seed/product/400/400'} 
            alt={product.Title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-amber-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-md sm:rounded-lg shadow-md backdrop-blur-sm bg-opacity-90">
            100% FREE
          </div>
        </div>
        <div className="p-3 sm:p-5 flex flex-col flex-grow">
          <div className="text-[10px] sm:text-xs font-bold text-amber-600 tracking-wider uppercase mb-1 sm:mb-2 line-clamp-1">{product.product_category?.split('›').pop()?.trim() || 'Product'}</div>
          <h3 className="text-sm sm:text-lg font-bold text-slate-900 line-clamp-2 mb-2 sm:mb-4 leading-snug group-hover:text-amber-600 transition-colors">{product.Title}</h3>
          
          <div className="text-[10px] sm:text-xs text-slate-500 mb-1 line-clamp-1">
            <span className="font-semibold text-slate-700">Sold by:</span> {product['Sold by'] || ''}
          </div>
          <div className="text-[10px] sm:text-xs text-slate-500 mb-3 sm:mb-5 flex-grow">
            <span className="font-semibold text-slate-700">ID:</span> {product['PRODUCT ID'] || product['Product Id'] || product.ID || product.id}
          </div>
          
<a
  href={product['Amazon Link'] || product.AmazonLink || product['Amazon URL']} 
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex items-center justify-center gap-1 sm:gap-2 bg-[#FF9900] hover:bg-[#E38800] text-slate-900 font-medium py-2 px-2 sm:py-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors duration-200 mb-2 text-xs sm:text-base text-center leading-tight"
  onClick={(e) => e.stopPropagation()}
>
  View on Amazon
</a>
<button
  onClick={handleCartClick}
  className={`w-full flex items-center justify-center gap-1 sm:gap-2 font-medium py-2 px-2 sm:py-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors duration-200 text-xs sm:text-base ${
    inCart 
      ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
      : 'bg-slate-900 text-white hover:bg-slate-800'
  }`}
>
  {inCart ? (
    <>
      <Check className="w-3 h-3 sm:w-5 sm:h-5" /> Added
    </>
  ) : (
    <>
      <ShoppingCart className="w-3 h-3 sm:w-5 sm:h-5" /> Add to Cart
    </>
  )}
</button>
        </div>
      </div>

      {isModalOpen && (
        <ProductModal product={product} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
});

export default ProductCard;
