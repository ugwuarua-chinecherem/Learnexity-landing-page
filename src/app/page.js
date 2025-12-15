'use client';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import BenefitsSection from './components/BenefitsSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import JourneySection from './components/JourneySection';
import CTASection from './components/CTASection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SignUpPage from './components/SignUpPage';
import BookSessionPage from './components/BookSessionPage';
import InternshipsPage from './components/InternshipsPage';
import ApplyPage from './components/ApplyPage';
import LegalPage from './components/LegalPage';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (sectionId) => {
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }, 100);
  };

  // Page routing
  if (currentPage === 'about') return <AboutPage setCurrentPage={setCurrentPage} />;
  if (currentPage === 'contact') return <ContactPage setCurrentPage={setCurrentPage} />;
  if (currentPage === 'signup') return <SignUpPage setCurrentPage={setCurrentPage} />;
  if (currentPage === 'book-session') return <BookSessionPage setCurrentPage={setCurrentPage} />;
  if (currentPage === 'internships') return <InternshipsPage setCurrentPage={setCurrentPage} />;
  if (currentPage.startsWith('apply-')) return <ApplyPage setCurrentPage={setCurrentPage} type={currentPage} />;
  if (['privacy', 'terms', 'refund'].includes(currentPage)) return <LegalPage setCurrentPage={setCurrentPage} type={currentPage} />;

  // Main Landing Page
  return (
    <div className="bg-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} scrollToSection={scrollToSection} setCurrentPage={setCurrentPage} />
      <HeroSection setCurrentPage={setCurrentPage} />
      <ProblemSolutionSection />
      <BenefitsSection />
      <StatsSection />
      <ServicesSection setCurrentPage={setCurrentPage} />
      <JourneySection />
      <CTASection setCurrentPage={setCurrentPage} />
      <TestimonialsSection setCurrentPage={setCurrentPage} />
      <Footer scrollToSection={scrollToSection} setCurrentPage={setCurrentPage} />
    </div>
  );
}