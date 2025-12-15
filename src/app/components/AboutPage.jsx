'use client';
import React from 'react';


export default function AboutPage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-6">About Learnexity</h1>
          <p className="text-xl">Empowering the next generation of professionals</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-black text-purple-600 mb-6">Who We Are</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Learnexity is a youth-focused platform dedicated to helping students and young professionals grow through access to quality mentorship, internship opportunities, and career support tools. We believe every young person deserves the guidance and resources they need to build a successful career.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-purple-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-black text-purple-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower the next generation of professionals by providing structured support, real-world opportunities, and expert guidance to help them build successful careers.
            </p>
          </div>

          <div className="bg-pink-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-black text-purple-600 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              A world where every young person has the mentorship, tools, and opportunities they need to thrive professionally—regardless of background or location.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-black text-purple-600 mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Match Students with Mentors</h3>
                <p className="text-gray-600">Connect with industry professionals in your field of interest</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Curate Internship Opportunities</h3>
                <p className="text-gray-600">Access premium internships across various industries</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Career-Building Tools</h3>
                <p className="text-gray-600">CV templates, interview prep, and LinkedIn optimization</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Organize Webinars & Resources</h3>
                <p className="text-gray-600">Continuous learning through expert-led sessions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-12 rounded-3xl mb-16">
          <h2 className="text-4xl font-black text-purple-600 mb-6">Our Story</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Learnexity was founded with a simple but powerful vision: to democratize access to career opportunities for young professionals everywhere. We saw talented individuals struggling to find mentors, secure internships, and navigate their career paths. Today, we're proud to have helped thousands of students and young professionals achieve their career goals through personalized support and real-world opportunities.
          </p>
        </section>

        <div className="text-center">
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-purple-600 text-white font-bold px-10 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}