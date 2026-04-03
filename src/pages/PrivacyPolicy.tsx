import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last updated: March 15, 2026</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you use our services, such as when you create an account, request a product, or contact customer support. This may include your name, email address, Amazon Order ID, and PayPal email address for rebate processing.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process your product requests and rebates.</li>
            <li>Communicate with you about products, services, offers, and promotions.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except as necessary to provide our services (e.g., sharing your PayPal email with PayPal to process your rebate) or to comply with the law. We do not sell your personal data to advertisers.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at mdfarhanshahariar9@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
