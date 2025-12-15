'use client';
import React from 'react';

export default function CTASection({ setCurrentPage }) {
  return (
    <section id="apply" className="bg-gradient-to-br from-purple-600 to-purple-700 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-cyan-400 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full">
            READY TO START?
          </div>
        </div>
        
        <button 
          onClick={() => setCurrentPage('signup')}
          className="text-2xl sm:text-3xl font-black hover:scale-105 transition-transform px-8 py-4"
        >
          CLICK TO<br />APPLY NOW
        </button>
      </div>
    </section>
  );
}