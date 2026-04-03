import React from 'react';
import { Gift, ShieldCheck, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">About Us</h1>
          <p className="mt-4 text-xl text-slate-500">
            Connecting great brands with honest reviewers.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/3 bg-slate-900 p-8 text-white flex flex-col justify-center items-center text-center">
              <div className="w-32 h-32 rounded-full mb-6 flex items-center justify-center shadow-lg overflow-hidden border-4 border-amber-500">
                <img 
                  src="https://i.ibb.co/Kz0Qr8xL/Whats-App-Image-20.png" 
                  alt="Farhan Shahariar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">Farhan Shahariar</h2>
              <p className="text-amber-400 font-medium tracking-wide uppercase text-sm">Amazon Vine Associate</p>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Story</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Hello! I'm Farhan Shahariar. I've been associated with Amazon's Vine program for over five years. During this time, I've developed a deep understanding of what makes a product truly great and how important authentic customer feedback is to brands.
                </p>
                <p>
                  Over the years, I've built relationships with hundreds of sellers and manufacturers who are eager to get their high-quality products into the hands of real users. That's why I created this platform.
                </p>
                <p>
                  With a curated catalog of over 5,000 products, my mission is to help you discover amazing new items for free, while helping brands gather the honest feedback they need to succeed in the competitive Amazon marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Free Products</h3>
            <p className="text-slate-600">We believe everyone should have the opportunity to test premium products without breaking the bank.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Honest Reviews</h3>
            <p className="text-slate-600">We value authenticity. We never ask for fake positive reviews—we just want your genuine opinion.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Community First</h3>
            <p className="text-slate-600">We're building a community of trusted reviewers who help shape the products of tomorrow.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
