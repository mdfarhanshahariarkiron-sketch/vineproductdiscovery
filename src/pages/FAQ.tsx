import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "Are the products really free?",
      answer: "Yes! You purchase the product on Amazon, and after you leave an honest review, we reimburse you 100% of the purchase price via PayPal. You get to keep the product."
    },
    {
      question: "How do I request a product?",
      answer: "Simply browse our catalog, click on a product you like, and follow the instructions in the 'How It Works' section. Usually, this involves buying the item on Amazon and sending us your Order screenshots and PayPal account."
    },
    {
      question: "Do I need to leave a review?",
      answer: "Yes, the purpose of this program is to help brands get honest feedback on their products. A detailed, honest review on Amazon is required to receive your rebate."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with an active Amazon account in good standing and a PayPal account to receive the rebate can participate."
    },
    {
      question: "How long does it take to get my rebate?",
      answer: "Once your review is published on Amazon and you email us the link, live review screenshot and order id we typically process the PayPal rebate within 5 to 7 days."
    },
    {
      question: "Can I return the product to Amazon after getting a rebate?",
      answer: "No. If you return the product to Amazon after receiving a rebate, you will be banned from our platform permanently."
    },
    {
      question: "Do I have to leave a 5-star review?",
      answer: "No. We ask for your honest feedback. Whether it's 3, 4, or 5 stars, your review should reflect your genuine experience with the product."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-slate-500">Everything you need to know about the product discovery program.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Still have questions? <a href="/contact" className="text-amber-600 font-bold hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
