'use client';
import React from 'react';

// Functional component that receives setCurrentPage as a prop
export default function HeroSection({ setCurrentPage }) {
  return (
    // <section> is HTML5 semantic element for a distinct section of content
    // relative: position relative (allows absolute positioning of children)
    // min-h-screen: minimum height of 100vh (full viewport height)
    // bg-cover: background image covers entire container
    // bg-center: background image centered
    // pt-20: padding-top 5rem (80px) to account for fixed navbar
    // id="hero": unique identifier used for scrolling to this section
    <section className="relative min-h-screen bg-cover bg-center pt-20" id="hero">
      {/* Background Image */}
      {/* absolute: positioned absolutely within relative parent */}
      {/* inset-0: top, right, bottom, left all set to 0 (fills parent) */}
      {/* object-cover: image covers container, may crop to maintain aspect ratio */}
      <img 
        src="/images/hero-bg.png" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => e.target.style.display = 'none'}
      />
      
      {/* Dark Overlay */}
      {/* bg-black/50: black background with 50% opacity */}
      {/* This creates a semi-transparent overlay over the background image */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content Container */}
      {/* z-10: z-index 10 (appears above background and overlay) */}
      {/* flex flex-col: flexbox column layout (stack items vertically) */}
      {/* items-center: center items horizontally */}
      {/* justify-center: center items vertically */}
      {/* text-center: center text alignment */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 py-20">
        
        {/* Main Heading */}
        {/* text-3xl: font-size 1.875rem (30px) on mobile */}
        {/* sm:text-5xl: font-size 3rem (48px) on small screens+ */}
        {/* md:text-6xl: font-size 3.75rem (60px) on medium screens+ */}
        {/* lg:text-7xl: font-size 4.5rem (72px) on large screens+ */}
        {/* font-black: font-weight 900 (extra bold) */}
        {/* text-cyan-400: cyan color #22d3ee */}
        {/* mb-4 sm:mb-6: margin-bottom 1rem on mobile, 1.5rem on small+ */}
        {/* leading-tight: line-height 1.25 (tight spacing between lines) */}
        {/* drop-shadow-lg: large drop shadow for text (makes it pop) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-cyan-400 mb-4 sm:mb-6 leading-tight drop-shadow-lg">
          UNLOCK YOUR FUTURE<br />
          WITH MENTORSHIP,<br />
          INTERNSHIP & CAREER<br />
          GROWTH SUPPORT
        </h1>
        
        {/* Subtitle Paragraph */}
        {/* max-w-3xl: maximum width 48rem (768px) */}
        {/* mx-auto: margin left/right auto (centers element) */}
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8 sm:mb-12 max-w-3xl drop-shadow-lg px-4">
          Empowering young professionals with the<br className="hidden sm:block" />
          right guidance, experience and<br className="hidden sm:block" />
          opportunities to succeed in today's<br className="hidden sm:block" />
          competitive job market!
          {/* <br className="hidden sm:block" /> means: hide <br> on mobile, show on small+ screens */}
        </p>
        
        {/* CTA Buttons Container */}
        {/* flex-col: stack vertically on mobile */}
        {/* sm:flex-row: stack horizontally on small screens+ */}
        {/* gap-4 sm:gap-6: space between buttons */}
        {/* max-w-4xl: max width 56rem (896px) */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-4xl px-4">
          
          {/* Button 1: Join Now */}
          {/* hover:bg-gray-100: background changes to gray-100 on hover */}
          {/* hover:scale-105: scale to 105% on hover (slight zoom effect) */}
          {/* transition-all: smooth transition for all animatable properties */}
          {/* shadow-lg: large box shadow */}
          {/* flex-1: flex-grow 1 (buttons take equal width) */}
          <button 
            onClick={() => setCurrentPage('signup')} // Changes page to signup
            className="bg-white text-purple-600 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-lg flex-1"
          >
            Join Now - Start Your Journey
          </button>
          
          {/* Button 2: Book Session */}
          {/* bg-cyan-400: cyan background #22d3ee */}
          {/* text-black: black text */}
          <button 
            onClick={() => setCurrentPage('book-session')}
            className="bg-cyan-400 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-cyan-300 hover:scale-105 transition-all shadow-lg flex-1"
          >
            Book a Free Career Session
          </button>
          
          {/* Button 3: Explore Internships */}
          <button 
            onClick={() => setCurrentPage('internships')}
            className="bg-purple-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-purple-700 hover:scale-105 transition-all shadow-lg flex-1"
          >
            Explore Internship Offers
          </button>
        </div>
      </div>
    </section>
  );
}

/**
 * KEY CONCEPTS EXPLAINED:
 * 
 * 1. RELATIVE vs ABSOLUTE POSITIONING:
 *    - relative: element positioned relative to its normal position
 *    - absolute: element positioned relative to nearest relative parent
 *    - This allows background image to fill entire section
 * 
 * 2. Z-INDEX STACKING:
 *    - Lower z-index appears behind higher z-index
 *    - Background image (no z-index) → Overlay (no z-index) → Content (z-10)
 * 
 * 3. RESPONSIVE TEXT SIZES:
 *    - Mobile first: text-3xl is base
 *    - Progressively larger on bigger screens
 *    - Creates better readability on all devices
 * 
 * 4. FLEXBOX LAYOUT:
 *    - flex: enables flexbox
 *    - flex-col: stack vertically
 *    - items-center: horizontal centering
 *    - justify-center: vertical centering
 * 
 * 5. OPACITY IN TAILWIND:
 *    - bg-black/50 means black with 50% opacity
 *    - Can use any number from 0-100
 */