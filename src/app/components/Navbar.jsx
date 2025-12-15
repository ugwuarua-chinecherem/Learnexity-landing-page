'use client';
import React from 'react';

// This is a functional component named Navbar
// It receives props: mobileMenuOpen, setMobileMenuOpen, scrollToSection, setCurrentPage
export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, scrollToSection, setCurrentPage }) {
  return (
    // <nav> is the HTML5 semantic element for navigation
    // className applies Tailwind CSS classes:
    // - bg-black: background color black
    <nav className="bg-black text-white py-4 px-4 sm:px-6 fixed w-full top-0 z-50 shadow-lg">
      {/* max-w-7xl: maximum width of 80rem (1280px) */}
      {/* mx-auto: margin left/right auto (centers the container) */}
      {/* flex: display flex (enables flexbox layout) */}
      {/* items-center: align items vertically centered */}
      {/* justify-between: space items with maximum space between them */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/logo.png" 
            alt="Learnexity Logo" 
            className="h-18 w-18 sm:h-20 sm:w-20 object-contain cursor-pointer"
            onClick={() => {
              setCurrentPage('home');
              setTimeout(() => { 
                const element = document.getElementById('hero'); 
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' }); 
                }
              }, 100);
            }}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button onClick={() => {
            setCurrentPage('home');
            setTimeout(() => scrollToSection('hero'), 100);
          }} className="hover:text-purple-400 transition-colors">
            Home
          </button>
          <button onClick={() => setCurrentPage('about')} className="hover:text-purple-400 transition-colors">
            About Us
          </button>
          <button onClick={() => scrollToSection('mentorship')} className="hover:text-purple-400 transition-colors">
            Mentorship
          </button>
          <button onClick={() => scrollToSection('internship')} className="hover:text-purple-400 transition-colors">
            Internship
          </button>
          <button onClick={() => scrollToSection('career-support')} className="hover:text-purple-400 transition-colors">
            Career Support
          </button>
          <button onClick={() => setCurrentPage('contact')} className="hover:text-purple-400 transition-colors">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        {/* lg:hidden: hide on large screens and up */}
        {/* focus:outline-none: removes default browser outline on focus */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Toggle menu open/closed
          className="lg:hidden text-white focus:outline-none"
        >
          {/* SVG icon - hamburger or X depending on state */}
          {/* w-6 h-6: width and height 1.5rem (24px) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Conditional rendering: show X if menu open, hamburger if closed */}
            {mobileMenuOpen ? (
              // X icon path
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon path
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Only renders when mobileMenuOpen is true (conditional rendering with &&) */}
      {/* mt-4: margin-top 1rem */}
      {/* pb-4: padding-bottom 1rem */}
      {/* space-y-3: vertical space of 0.75rem between child elements */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 space-y-3">
          {/* block: display block (full width) */}
          {/* w-full: width 100% */}
          {/* text-left: text aligned left */}
          {/* py-2 px-4: padding top/bottom 0.5rem, left/right 1rem */}
          {/* hover:bg-purple-600: background purple on hover */}
          {/* rounded: border-radius 0.25rem */}
          <button onClick={() => { 
            setCurrentPage('home'); 
            setMobileMenuOpen(false); // Close menu after click
            setTimeout(() => scrollToSection('hero'), 100);
          }} className="block w-full text-left py-2 px-4 hover:bg-purple-600 transition-colors rounded">
            Home
          </button>
          <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-4 hover:bg-purple-600 transition-colors rounded">
            About Us
          </button>
          <button onClick={() => scrollToSection('mentorship')} className="block w-full text-left py-2 px-4 hover:bg-purple-600 transition-colors rounded">
            Mentorship
          </button>
          <button onClick={() => scrollToSection('internship')} className="block w-full text-left py-2 px-4 hover:bg-purple-600 transition-colors rounded">
            Internship
          </button>
          <button onClick={() => scrollToSection('career-support')} className="block w-full text-left py-2 px-4 hover:bg-purple-600 transition-colors rounded">
            Career Support
          </button>
          <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-4 hover:bg-purple-600 transition-colors rounded">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
