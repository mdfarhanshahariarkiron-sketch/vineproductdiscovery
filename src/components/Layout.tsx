import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User as UserIcon, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const { user, userProfile } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
              <img 
                src="https://i.ibb.co/8QhRtgG/Whats-App-Image-2026-03-15-at-15-51-removebg-preview.png" 
                alt="Farhan Shahariar Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight tracking-tight text-white">Farhan Shahariar</span>
                <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase">Vine Product Discovery</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-slate-800 text-amber-500'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center ml-4 border-l border-slate-700 pl-4 space-x-4">
                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <UserIcon className="h-4 w-4" />
                      Hello, {userProfile?.name || user.email?.split('@')[0]}
                    </span>
                    <button 
                      onClick={handleSignOut}
                      className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                ) : (
                  <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                    <UserIcon className="h-4 w-4" />
                    Sign in
                  </Link>
                )}
                
                <Link to="/cart" className="relative p-2 text-slate-300 hover:text-white transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                  {cart.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <Link to="/cart" className="relative p-2 text-slate-300 hover:text-white transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-1 border-t border-slate-700">
            {user ? (
              <div className="px-3 py-3 mb-2 border-b border-slate-700 flex justify-between items-center">
                <span className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  Hello, {userProfile?.name || user.email?.split('@')[0]}
                </span>
                <button 
                  onClick={() => {
                    handleSignOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 mb-2 border-b border-slate-700 text-base font-medium text-slate-300 hover:text-white flex items-center gap-2"
              >
                <UserIcon className="h-5 w-5" />
                Sign in / Create account
              </Link>
            )}
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-slate-900 text-amber-500'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://i.ibb.co/8QhRtgG/Whats-App-Image-2026-03-15-at-15-51-removebg-preview.png" 
                  alt="Farhan Shahariar Logo" 
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <span className="font-bold text-lg text-white">Farhan Shahariar</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Discover premium Amazon products and get them for 100% free in exchange for your honest feedback.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                <li><Link to="/products" className="hover:text-amber-500 transition-colors">Products</Link></li>
                <li><Link to="/how-it-works" className="hover:text-amber-500 transition-colors">How It Works</Link></li>
                <li><Link to="/blog" className="hover:text-amber-500 transition-colors">Blog</Link></li>
                <li><Link to="/admin/categorize" className="hover:text-amber-500 transition-colors">Categorize Tool</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faq" className="hover:text-amber-500 transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-amber-500 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Newsletter</h3>
              <p className="text-sm text-slate-400 mb-4">Subscribe to get notified about new free products.</p>
              <form className="flex flex-col sm:flex-row gap-2 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 text-white px-3 py-2 rounded-md sm:rounded-r-none sm:rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
                />
                <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md text-sm font-bold transition-colors w-full sm:w-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Farhan Shahariar. All rights reserved. Not affiliated with Amazon.com, Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}
