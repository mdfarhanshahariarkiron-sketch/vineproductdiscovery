import React, { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
  id?: number;
  ID?: number;
  'PRODUCT ID'?: number;
  'Product Id'?: number;
  Title: string;
  Price?: string;
  Images?: string[];
  'Images URL'?: string;
  'Image URL'?: string;
  'Amazon Link'?: string;
  'Amazon URL'?: string;
  AmazonLink?: string;
  product_category?: string;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: any) => void;
  clearCart: () => void;
  isInCart: (id: any) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const itemId = String(item['PRODUCT ID'] || item['Product Id'] || item.ID || item.id);
      if (prev.find(i => String(i['PRODUCT ID'] || i['Product Id'] || i.ID || i.id) === itemId)) return prev;
      return [...prev, item];
    });
  };

  const removeFromCart = (id: any) => {
    setCart(prev => prev.filter(item => String(item['PRODUCT ID'] || item['Product Id'] || item.ID || item.id) !== String(id)));
  };

  const clearCart = () => setCart([]);

  const isInCart = (id: any) => {
    return cart.some(item => String(item['PRODUCT ID'] || item['Product Id'] || item.ID || item.id) === String(id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
