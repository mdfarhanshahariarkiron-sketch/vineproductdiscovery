import React from 'react';
import { Calendar, User } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Free Tech Gadgets of the Month",
      excerpt: "Discover the most popular tech gadgets our community claimed for free this month, from wireless chargers to smart home devices.",
      date: "March 12, 2026",
      author: "Farhan Shahariar",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 2,
      title: "How to Write a Great Amazon Review",
      excerpt: "Writing a helpful review is key to staying in our program. Learn the anatomy of a perfect review that helps both buyers and sellers.",
      date: "March 5, 2026",
      author: "Farhan Shahariar",
      category: "Tips & Guides",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 3,
      title: "Kitchen Essentials You Can Get for Free Right Now",
      excerpt: "Upgrade your kitchen without spending a dime. Check out these premium cookware sets and utensils currently available in our catalog.",
      date: "February 28, 2026",
      author: "Farhan Shahariar",
      category: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800&h=400"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Blog & Reviews</h1>
          <p className="mt-4 text-xl text-slate-500">
            Tips, guides, and roundups of the best free products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center text-xs text-slate-500 gap-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Want more updates?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter to get the latest blog posts and exclusive free product alerts delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-slate-800 text-white px-4 py-3 rounded-lg sm:rounded-r-none sm:rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 border border-slate-700"
            />
            <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg font-bold transition-colors w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
