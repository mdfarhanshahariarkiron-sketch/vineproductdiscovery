import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formsubmit.co/ajax/e5dbd76a7f35c2166a7a7350ed13f06b', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('A network error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-slate-500">
            Have questions or need help with a rebate? We're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Support</h4>
                  <p className="text-slate-600 mt-1">For rebate requests and general inquiries:</p>
                  <a href="mailto:mdfarhanshahariar9@gmail.com" className="text-amber-600 font-bold hover:underline mt-2 inline-block">
                    mdfarhanshahariar9@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Social Media</h4>
                  <p className="text-slate-600 mt-1">Follow us for the latest free products:</p>
                  <div className="flex gap-4 mt-4 flex-wrap">
                    <a href="https://facebook.com/farhanshahariarkiron" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://x.com/dm_pro_bd" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="Twitter">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="https://instagram.com/mdfarhanshahariar" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors" aria-label="Instagram">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/dm_pro_bd" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://wa.me/8801873591909" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors" aria-label="WhatsApp">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.126.554 4.195 1.608 6.015L.234 23.766l5.88-1.542A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 22.012c-1.795 0-3.551-.482-5.09-1.394l-.365-.217-3.784.992.992-3.69-.238-.378A9.967 9.967 0 012.019 12.03c0-5.523 4.495-10.018 10.012-10.018 5.517 0 10.012 4.495 10.012 10.018 0 5.523-4.495 10.018-10.012 10.018zm5.495-7.514c-.301-.151-1.783-.88-2.06-.98-.276-.101-.477-.151-.678.151-.201.301-.778.98-.954 1.181-.176.201-.352.226-.653.075-1.428-.713-2.548-1.554-3.518-3.23-.101-.176-.01-.271.09-.371.09-.09.201-.236.301-.352.101-.116.136-.201.201-.336.065-.136.033-.256-.018-.356-.05-.101-.678-1.636-.929-2.239-.246-.59-.496-.51-.678-.52-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.51 0 1.48 1.079 2.912 1.23 3.113.151.201 2.123 3.243 5.143 4.548 2.018.87 2.766.743 3.268.623.567-.136 1.783-.728 2.034-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.578-.352z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            
            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Message Sent Successfully!</h4>
                <p className="text-emerald-700 mb-6">Thank you for reaching out. We will get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <select 
                    id="subject" 
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Rebate Status">Rebate Status</option>
                    <option value="Report an Issue">Report an Issue</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
