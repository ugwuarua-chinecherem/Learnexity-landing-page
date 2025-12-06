'use client';
import React from 'react';

export default function JourneySection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-700 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="bg-cyan-400 text-black font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-full text-center">
            Your Journey with Learnexity
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className="text-center">
            <div className="bg-cyan-400 text-black w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-5xl sm:text-6xl font-black">1</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">Sign up</h3>
            <p className="text-lg sm:text-xl">
              Create your profile and tell us<br />
              about your career, goals and<br />
              aspirations
            </p>
          </div>

          <div className="text-center">
            <div className="bg-cyan-400 text-black w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-5xl sm:text-6xl font-black">2</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">Get matched</h3>
            <p className="text-lg sm:text-xl">
              Our algorithm pairs you with<br />
              mentors and opportunities that<br />
              align with your ambitions
            </p>
          </div>

          <div className="text-center border-4 border-cyan-400 rounded-3xl py-8 sm:py-12 px-6 sm:px-8">
            <div className="bg-cyan-400 text-black w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-5xl sm:text-6xl font-black">3</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">Grow and learn</h3>
            <p className="text-lg sm:text-xl">
              Engage with mentors, apply to<br />
              internships, and access<br />
              exclusive resources
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}