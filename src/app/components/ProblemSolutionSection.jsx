'use client';
import React from 'react';

export default function ProblemSolutionSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-purple-600 mb-6">
            The Challenge We Solve
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
              Many young talents struggle to access quality mentorship, real internship experiences, and clear career direction. 
              <span className="text-purple-600 font-bold"> Learnexity bridges this gap</span> by providing structured support, 
              expert mentors, and career tools—all in one place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <h3 className="text-2xl font-black text-red-600 mb-4">❌ The Problem</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Limited access to experienced mentors</li>
              <li>• Difficulty finding quality internships</li>
              <li>• Lack of career guidance and direction</li>
              <li>• No structured path to professional growth</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-black text-green-600 mb-4">✓ Our Solution</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• 1-on-1 mentorship with industry experts</li>
              <li>• Curated premium internship opportunities</li>
              <li>• Personalized career development plans</li>
              <li>• Comprehensive skill-building resources</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}