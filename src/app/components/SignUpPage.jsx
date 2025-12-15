'use client';
import React, { useState } from 'react';

export default function SignUpPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    careerInterest: '',
    educationLevel: '',
    mentorshipField: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Welcome to Learnexity! Your profile has been created successfully.');
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-12" onError={(e) => e.target.style.display = 'none'} />
          <span className="text-2xl font-bold text-purple-600">Learnexity</span>
        </div>

        <h1 className="text-3xl font-black text-purple-600 text-center mb-2">
          Join Now - Start Your Journey
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Welcome! Let's help you get matched with the right opportunities.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Career Interest</label>
            <select
              value={formData.careerInterest}
              onChange={(e) => setFormData({...formData, careerInterest: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              required
            >
              <option value="">Select your career interest</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="fullstack">Full Stack Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="data-science">Data Science</option>
              <option value="machine-learning">Machine Learning / AI</option>
              <option value="cyber-security">Cyber Security</option>
              <option value="cloud">Cloud Computing</option>
              <option value="devops">DevOps Engineering</option>
              <option value="blockchain">Blockchain Development</option>
              <option value="game-dev">Game Development</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="product-management">Product Management</option>
              <option value="data-analysis">Data Analysis</option>
              <option value="qa">Quality Assurance / Testing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Education Level</label>
            <select
              value={formData.educationLevel}
              onChange={(e) => setFormData({...formData, educationLevel: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              required
            >
              <option value="">Select your education level</option>
              <option value="high-school">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="postgraduate">Postgraduate</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Mentorship Field</label>
            <input
              type="text"
              value={formData.mentorshipField}
              onChange={(e) => setFormData({...formData, mentorshipField: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              placeholder="e.g., Software Development, Marketing, etc."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              placeholder="Create a strong password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 hover:scale-105 transition-all shadow-lg mt-6"
          >
            Create Profile
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
