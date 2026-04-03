import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load pages to improve initial load time
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const FAQ = lazy(() => import('./pages/FAQ'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const Blog = lazy(() => import('./pages/Blog'));
const Cart = lazy(() => import('./pages/Cart'));
const Categorize = lazy(() => import('./pages/Categorize'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
  </div>
);

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="how-it-works" element={<HowItWorks />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsConditions />} />
                <Route path="blog" element={<Blog />} />
                <Route path="cart" element={<Cart />} />
                <Route path="admin/categorize" element={
                  <ProtectedRoute requireAdmin={true}>
                    <Categorize />
                  </ProtectedRoute>
                } />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
