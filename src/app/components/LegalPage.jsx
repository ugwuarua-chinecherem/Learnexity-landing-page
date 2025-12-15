'use client';
import React from 'react';

export default function LegalPage({ setCurrentPage, type }) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      sections: [
        { heading: 'Information We Collect', text: 'We collect information you provide directly to us, including name, email, phone number, career interests, and education details.' },
        { heading: 'How We Use Your Information', text: 'We use your information to provide our services, match you with mentors, send updates, and improve our platform.' },
        { heading: 'Data Security', text: 'We implement appropriate security measures to protect your personal information from unauthorized access.' },
        { heading: 'Contact Us', text: 'If you have questions about this policy, contact us at info@learnexity.com' }
      ]
    },
    terms: {
      title: 'Terms of Use',
      sections: [
        { heading: 'Acceptance of Terms', text: 'By using Learnexity, you agree to these terms and conditions.' },
        { heading: 'User Responsibilities', text: 'You are responsible for maintaining the confidentiality of your account and for all activities under your account.' },
        { heading: 'Services', text: 'Learnexity provides mentorship matching, internship opportunities, and career development resources.' },
        { heading: 'Termination', text: 'We reserve the right to terminate accounts that violate our terms or engage in inappropriate behavior.' }
      ]
    }
  };

  const pageContent = content[type];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-black text-purple-600 mb-8">
          {pageContent.title}
        </h1>

        <div className="space-y-6">
          {pageContent.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {section.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            Last updated: December 2025
          </p>
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-purple-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}