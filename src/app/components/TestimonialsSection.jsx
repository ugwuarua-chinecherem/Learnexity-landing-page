'use client';
import React, { useState } from 'react';

export default function TestimonialsSection({ setCurrentPage }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoTestimonials = [
    { src: '/videos/testimonial-video-1.mp4', poster: '/images/video-image-1.PNG', name: 'Gabriella' },
    { src: '/videos/testimonial-video-2.mp4', poster: '/images/video-image-2.PNG', name: 'Kingsley' },
    { src: '/videos/testimonial-video-3.mp4', poster: '/images/video-image-3.PNG', name: 'Learnexity team' }
  ];

  const nextVideo = () => setCurrentVideoIndex(prev => prev === videoTestimonials.length - 1 ? 0 : prev + 1);
  const prevVideo = () => setCurrentVideoIndex(prev => prev === 0 ? videoTestimonials.length - 1 : prev - 1);

  return (
    <section id="about" className="bg-gradient-to-br from-purple-600 to-purple-700 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-cyan-400 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full">
            Testimonials
          </div>
        </div>
        <div className="space-y-6 mb-12 sm:mb-20">
          <div className="bg-white text-purple-600 rounded-3xl p-6 sm:p-8">
            <p className="text-base sm:text-lg mb-4">"The mentorship I received was life-changing. It connected me with someone in my dream field!"</p>
            <p className="font-bold">— Tunde A., Tech Intern</p>
          </div>
          <div className="bg-white text-purple-600 rounded-3xl p-6 sm:p-8">
            <p className="text-base sm:text-lg mb-4">"Learnexity helped me land my first internship and taught me how to stand out in interviews. I finally feel confident about my career path"</p>
            <p className="font-bold">— Grace E., UNN Graduate</p>
          </div>
          <div className="bg-white rounded-3xl p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <button onClick={prevVideo} className="text-purple-600 hover:text-purple-800 p-2">
                <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex-1">
                <video key={currentVideoIndex} controls className="w-full h-auto rounded-xl" style={{ maxHeight: '400px', objectFit: 'contain' }} poster={videoTestimonials[currentVideoIndex].poster}>
                  <source src={videoTestimonials[currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-center text-purple-600 font-bold mt-3">{videoTestimonials[currentVideoIndex].name}</p>
              </div>
              <button onClick={nextVideo} className="text-purple-600 hover:text-purple-800 p-2">
                <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {videoTestimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentVideoIndex(i)} className={`w-3 h-3 rounded-full ${i === currentVideoIndex ? 'bg-purple-600' : 'bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">Ready to Transform your Career?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
            Join thousands of professionals who have accelerated their career with our proven mentorship and support programs
          </p>
          <button onClick={() => setCurrentPage('signup')} className="bg-white text-purple-600 font-bold text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}