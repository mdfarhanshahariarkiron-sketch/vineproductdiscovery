import React from 'react';
import { Search, ShoppingBag, Star, DollarSign, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-amber-500" />,
      title: "1. Browse & Select",
      description: "Discover a curated collection of over 5,000 premium products across a wide variety of categories. Found exactly what you're looking for? Reach out to us directly on social media to secure your choice. Simply send us a message with the PRODUCT ID—located just above the 'View Details on Amazon' button—so we can confirm its availability. Our daily order capacity is strictly limited and high-demand items move quickly, so don't hesitate to claim yours today!"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-amber-500" />,
      title: "2. Purchase on Amazon",
      description: (
        <div className="space-y-4 text-base">
          <p className="font-bold text-slate-800 text-lg flex items-center gap-2">
            🛒 How to Order: Quick Step-by-Step
          </p>
          <p>To ensure your order is processed correctly and you qualify for our current promotion, please follow these simple steps:</p>
          
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="font-bold text-slate-800 mb-1">1. Locate the Correct Store</p>
            <p>Click the "View Details on Amazon" button to be redirected to the official product page. Before adding the item to your cart, please verify that the "Sold by" name (located just under the product title or near the "Add to Cart" button) matches our official store name.</p>
            <p className="text-amber-600 font-medium mt-2 bg-amber-50 p-3 rounded-lg border border-amber-100">
              Important: If you cannot find our store name or it shows a different seller, please contact us immediately before placing your order. Orders from the wrong store cannot be accepted for this promotion.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="font-bold text-slate-800 mb-1">2. Complete Your Purchase</p>
            <p>Once you've confirmed the seller, proceed to checkout as usual. Purchase the item at its full price using your standard Amazon account.</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="font-bold text-slate-800 mb-1">3. Send Us Your Details</p>
            <p>After your order is placed, please send us a quick message with the following:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
              <li>Order Screenshot (showing the item and seller)</li>
              <li>Amazon Order Number</li>
              <li>Your PayPal Email Address (for your rebate/verification)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: <Star className="w-8 h-8 text-amber-500" />,
      title: "3. Test & Review",
      description: "Once you receive the product, test it thoroughly for at least 5 days. Then, leave an honest, detailed review on Amazon sharing your experience with the product."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-amber-500" />,
      title: "4. Get 100% Rebate",
      description: "Email us Amazon Order number, live review screenshot and a link to your published review. Once verified, we will send you a 100% rebate via PayPal within 5 to 7 days. You keep the product for free!"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">How It Works</h1>
          <p className="mt-4 text-xl text-slate-500">
            Getting free products is simple. Follow these four steps to start your product discovery journey.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-slate-50 rounded-full opacity-50"></div>
              <div className="flex-shrink-0 bg-amber-50 p-4 rounded-2xl border border-amber-100">
                {step.icon}
              </div>
              <div className="text-center md:text-left relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <div className="text-lg text-slate-600 leading-relaxed">{step.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of others who are already discovering great products for free. No hidden fees, no subscriptions.
          </p>
          <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-slate-900 bg-amber-500 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/30">
            Browse Products Now
          </Link>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Important Rules</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <ul className="space-y-4">
              {[
                "You must have an active Amazon account in good standing.",
                "Reviews must be honest and based on your actual experience.",
                "Do not mention that you received the product for free or a rebate in your Amazon review.",
                "Rebates are processed via PayPal only.",
                "You must wait at least 5 days after receiving the product before leaving a review."
              ].map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
