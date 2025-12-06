import React from 'react';

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, setCurrentPage }) {
  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Mentorship', page: 'mentorship' },
    { label: 'Internship', page: 'internship' },
    { label: 'Career Support', page: 'career-support' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact Us', page: 'contact' },
  ];

  return (
    <nav className="bg-black text-white py-5 px-6 fixed w-full top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <img src="/images/logo.png" alt="Learnexity" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-black text-cyan-400 hidden sm:block">Learnexity</span>
        </div>

        <div className="hidden lg:flex gap-10 text-lg font-medium">
          {navItems.map(item => (
            <button key={item.page} onClick={() => setCurrentPage(item.page)} className="hover:text-purple-400 transition">
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 bg-black/95 border-t border-purple-800">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => { setCurrentPage(item.page); setMobileMenuOpen(false); }}
              className="block w-full text-left py-4 px-8 hover:bg-purple-700 transition text-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}