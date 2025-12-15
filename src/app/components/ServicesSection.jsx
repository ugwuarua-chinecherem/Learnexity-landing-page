'use client';
import React from 'react';

export default function ServicesSection({ setCurrentPage }) {
  return (
    <section id="services" className="bg-gradient-to-br from-purple-600 to-purple-700 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div id="mentorship" className="bg-gray-200 rounded-3xl p-6 sm:p-8 border-4 border-purple-400 hover:scale-105 transition-transform">
            <div className="relative h-40 sm:h-48 rounded-xl mb-6 overflow-hidden bg-blue-400">
              <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-center py-2 font-bold text-sm z-10">
                Professional Mentorship
              </div>
              <img 
                src="/images/mentorship-img.jpg" 
                alt="1 on 1 Mentorship" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-purple-600 text-xl sm:text-2xl font-black mb-4">1 on 1<br />Mentorship</h3>
            <p className="text-purple-600 text-sm leading-relaxed mb-4">
              Get matched with experienced professionals in your field. Access personalized mentorship, career strategy and insider knowledge to fast-track your success
            </p>
            <button 
              onClick={() => setCurrentPage('apply-mentorship')}
              className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Apply Now
            </button>
          </div>

          <div id="internship" className="bg-gray-200 rounded-3xl p-6 sm:p-8 border-4 border-pink-400 hover:scale-105 transition-transform">
            <div className="relative h-40 sm:h-48 rounded-xl mb-6 overflow-hidden bg-blue-400">
              <div className="absolute top-0 left-0 right-0 bg-pink-600 text-white text-center py-2 font-bold text-sm z-10">
                Top Company Internships
              </div>
              <img 
                src="/images/internship-img.png" 
                alt="Premium Internships" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-purple-600 text-xl sm:text-2xl font-black mb-4">Premium<br />Internships</h3>
            <p className="text-purple-600 text-sm leading-relaxed mb-4">
              Access exclusive opportunity at top tier companies. Gain hands-on experience, build your portfolio, and create lasting professional connection
            </p>
            <button 
              onClick={() => setCurrentPage('apply-internship')}
              className="w-full bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Apply Now
            </button>
          </div>

          <div id="career-support" className="bg-gray-200 rounded-3xl p-6 sm:p-8 border-4 border-blue-400 hover:scale-105 transition-transform">
            <div className="relative h-40 sm:h-48 rounded-xl mb-6 overflow-hidden bg-blue-400">
              <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 font-bold text-sm z-10">
                Expert Career Guidance
              </div>
              <img 
                src="/images/carrer-coaching-img.png" 
                alt="Career Coaching" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-purple-600 text-xl sm:text-2xl font-black mb-4">Career coaching</h3>
            <p className="text-purple-600 text-sm leading-relaxed mb-4">
              Master interview skills, resume building, and personal branding. Our expert coaches prepare you to stand out in competitive markets
            </p>
            <button 
              onClick={() => setCurrentPage('apply-coaching')}
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}