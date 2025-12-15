'use client';
import React, { useState } from 'react';

export default function InternshipsPage({ setCurrentPage }) {
  const [filters, setFilters] = useState({
    role: '',
    industry: '',
    location: ''
  });

  const internships = [
    { id: 1, title: 'Software Engineering Intern', company: 'TechCorp', location: 'Remote', industry: 'Technology', description: 'Work on cutting-edge web applications' },
    { id: 2, title: 'Marketing Intern', company: 'BrandMax', location: 'Lagos', industry: 'Marketing', description: 'Assist in digital marketing campaigns' },
    { id: 3, title: 'Data Science Intern', company: 'DataHub', location: 'Abuja', industry: 'Technology', description: 'Analyze data and build ML models' },
    { id: 4, title: 'Business Analyst Intern', company: 'ConsultPro', location: 'Remote', industry: 'Business', description: 'Support business strategy projects' },
    { id: 5, title: 'UI/UX Design Intern', company: 'DesignStudio', location: 'Port Harcourt', industry: 'Design', description: 'Create beautiful user interfaces' },
    { id: 6, title: 'Finance Intern', company: 'FinanceHub', location: 'Lagos', industry: 'Finance', description: 'Learn financial analysis and reporting' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Explore Internship Offers
          </h1>
          <p className="text-xl text-white">
            Find your perfect internship opportunity
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Role</label>
              <input
                type="text"
                value={filters.role}
                onChange={(e) => setFilters({...filters, role: e.target.value})}
                placeholder="e.g., Software Engineer"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Industry</label>
              <select
                value={filters.industry}
                onChange={(e) => setFilters({...filters, industry: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              >
                <option value="">All Industries</option>
                <option value="Technology">Technology</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
                <option value="Design">Design</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                placeholder="e.g., Lagos, Remote"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship) => (
            <div key={internship.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
              <h3 className="text-xl font-black text-purple-600 mb-2">
                {internship.title}
              </h3>
              <p className="text-gray-700 font-bold mb-1">{internship.company}</p>
              <p className="text-gray-600 text-sm mb-1">📍 {internship.location}</p>
              <p className="text-gray-600 text-sm mb-4">🏢 {internship.industry}</p>
              <p className="text-gray-700 mb-4">{internship.description}</p>
              <button
                onClick={() => alert(`Applied to ${internship.title} at ${internship.company}!`)}
                className="w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
