'use client';
import React from 'react';

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-700 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-cyan-400 text-black font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-full text-center">
            OUR IMPACT<br />IN NUMBERS
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2">10K</div>
            <div className="text-lg sm:text-xl">Active Mentorship</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2">5K</div>
            <div className="text-lg sm:text-xl">Internship Placed</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2">95%</div>
            <div className="text-lg sm:text-xl">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}