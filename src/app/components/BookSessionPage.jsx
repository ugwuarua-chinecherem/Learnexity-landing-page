'use client';
import React, { useState } from 'react';

export default function BookSessionPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    careerGoal: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You're all set! A mentor will meet you at your selected time: ${formData.preferredDate} at ${formData.preferredTime}`);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
        <h1 className="text-3xl font-black text-purple-600 text-center mb-2">
          Book a Free Career Session
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Schedule your personalized career consultation with an expert mentor
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Career Goal</label>
            <textarea
              value={formData.careerGoal}
              onChange={(e) => setFormData({...formData, careerGoal: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
              rows="4"
              placeholder="Tell us about your career goals and what you hope to achieve..."
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Time</label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
                required
              >
                <option value="">Select time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white font-bold py-3 rounded-lg hover:bg-cyan-600 hover:scale-105 transition-all shadow-lg mt-6"
          >
            Confirm Booking
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