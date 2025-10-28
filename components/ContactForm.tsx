'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
  <div className="max-w-md mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
      <p className="text-lg text-gray-600">
        Ready to elevate your business strategy? Get in touch with our team.
      </p>
    </div>
    
    <div className="space-y-5">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all"
          required
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all"
          required
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all"
          required
        />
      </div>

      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project or inquiry..."
          rows={5}
          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white resize-none transition-all"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
      >
        Send Message
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        We'll respond within 24 business hours
      </p>
    </div>
  </div>
</section>
  );
}