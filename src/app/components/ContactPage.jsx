'use client';
import React, { useState } from 'react';

export default function ContactPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white">We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-purple-600 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-black text-purple-600 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:info@learnexity.com" className="text-purple-600 hover:underline">
                      info@learnexity.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <a href="tel:+11231231213" className="text-purple-600 hover:underline">
                      +1 (123) 123-1213
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">123 Career Avenue<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-black text-purple-600 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white p-4 rounded-full hover:bg-sky-600 transition-colors">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
</svg>
</a>
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-4 rounded-full hover:bg-blue-900 transition-colors">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
</svg>
</a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
</svg>
</a>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
      <button
        onClick={() => setCurrentPage('home')}
        className="bg-white text-purple-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</div>
  );
}