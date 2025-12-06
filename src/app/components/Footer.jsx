'use client';
import React from 'react';

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-purple-400 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors">Career Services</button></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">CONTACT US</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@learnexia.com" className="hover:text-purple-400 transition-colors">info@learnexia.com</a></li>
              <li><a href="tel:+11231231213" className="hover:text-purple-400 transition-colors">+1 (123) 123-1213</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm border-t border-gray-700 pt-8">
          © 2025 Learnexia, all reserved.
        </div>
      </div>
    </footer>
  );
}