import React from 'react';

export default function TermsConditions() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last updated: March 15, 2026</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the service.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Program Rules</h2>
          <p>To participate in our free product discovery program, you must adhere to the following rules:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must have an active Amazon account in good standing.</li>
            <li>You must purchase the product at full price on Amazon.</li>
            <li>You must test the product for a minimum of 5 days before leaving a review.</li>
            <li>Your review must be honest, detailed, and based on your genuine experience.</li>
            <li>You must not mention that you received the product for free or received a rebate in your Amazon review.</li>
            <li>You must not return the product to Amazon after receiving a rebate from us.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Rebates</h2>
          <p>
            Rebates are processed via PayPal only. We aim to process rebates within 5 to 7 days of verifying your published review. We reserve the right to withhold a rebate if we suspect fraudulent activity, fake reviews, or violation of Amazon's terms of service.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Account Termination</h2>
          <p>
            We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Returning products to Amazon after receiving a rebate will result in an immediate and permanent ban.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Disclaimer</h2>
          <p>
            We are not affiliated with, endorsed by, or sponsored by Amazon.com, Inc. The products offered on our platform are provided by third-party sellers. We make no warranties regarding the quality, safety, or legality of the products.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
}
