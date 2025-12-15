'use client';
import React, { useState } from 'react';

export default function ApplyPage({ setCurrentPage, type }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  const titles = {
    'apply-mentorship': 'Apply for 1-on-1 Mentorship',
    'apply-internship': 'Apply for Premium Internship',
    'apply-coaching': 'Apply for Career Coaching'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
        <h1 className="text-3xl font-black text-purple-600 text-center mb-8">
          {titles[type]}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
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
            <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Tell us more about yourself</label>
            <textarea
              value={formData.details}
              onChange={(e) => setFormData({...formData, details: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-all"
          >
            Submit Application
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-purple-600 hover:underline font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}