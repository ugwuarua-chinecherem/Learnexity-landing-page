'use client';
import React, { useState } from 'react';

// ==================== MAIN LANDING PAGE ====================

// Navbar Component
function Navbar({ mobileMenuOpen, setMobileMenuOpen, scrollToSection, setCurrentPage }) {
  return (
    <nav className="bg-black text-white py-4 px-4 sm:px-6 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/images/logo.png" 
            alt="Learnexity Logo" 
            className="h-15 w-15 sm:h-16 sm:w-16 object-contain cursor-pointer"
            onClick={() => setCurrentPage('home')}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button onClick={() => setCurrentPage('home')} className="hover:text-purple-400 transition-colors">
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

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 space-y-3">
          <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-4 hover:bg-purple-600 transition-colors rounded">
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

// Hero Section
function HeroSection({ setCurrentPage }) {
  return (
    <section className="relative min-h-screen bg-cover bg-center pt-20" id="hero">
      <img 
        src="/images/hero-bg.png" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => e.target.style.display = 'none'}
      />
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 py-20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-cyan-400 mb-4 sm:mb-6 leading-tight drop-shadow-lg">
          UNLOCK YOUR FUTURE<br />
          WITH MENTORSHIP,<br />
          INTERNSHIP & CAREER<br />
          GROWTH SUPPORT
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8 sm:mb-12 max-w-3xl drop-shadow-lg px-4">
          Empowering young professionals with the<br className="hidden sm:block" />
          right guidance, experience and<br className="hidden sm:block" />
          opportunities to succeed in today's<br className="hidden sm:block" />
          competitive job market!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-4xl px-4">
          <button 
            onClick={() => setCurrentPage('signup')}
            className="bg-white text-purple-600 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-lg flex-1"
          >
            Join Now - Start Your Journey
          </button>
          <button 
            onClick={() => setCurrentPage('book-session')}
            className="bg-cyan-400 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-cyan-300 hover:scale-105 transition-all shadow-lg flex-1"
          >
            Book a Free Career Session
          </button>
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

// Problem/Solution Section
function ProblemSolutionSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-purple-600 mb-6">
            The Challenge We Solve
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
              Many young talents struggle to access quality mentorship, real internship experiences, and clear career direction. 
              <span className="text-purple-600 font-bold"> Learnexity bridges this gap</span> by providing structured support, 
              expert mentors, and career tools—all in one place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <h3 className="text-2xl font-black text-red-600 mb-4">❌ The Problem</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Limited access to experienced mentors</li>
              <li>• Difficulty finding quality internships</li>
              <li>• Lack of career guidance and direction</li>
              <li>• No structured path to professional growth</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-black text-green-600 mb-4">✓ Our Solution</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• 1-on-1 mentorship with industry experts</li>
              <li>• Curated premium internship opportunities</li>
              <li>• Personalized career development plans</li>
              <li>• Comprehensive skill-building resources</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Benefits/Features Section
function BenefitsSection() {
  const features = [
    {
      icon: "👥",
      title: "One-on-One Mentorship",
      description: "Connect with experienced professionals who provide personalized guidance tailored to your career goals"
    },
    {
      icon: "💼",
      title: "Curated Internships",
      description: "Access exclusive internship opportunities across various industries with top companies"
    },
    {
      icon: "📄",
      title: "Career Building Tools",
      description: "Get CV templates, interview prep guides, and LinkedIn optimization to stand out"
    },
    {
      icon: "🎯",
      title: "Personalized Growth Roadmap",
      description: "Receive a customized career development plan based on your unique aspirations"
    },
    {
      icon: "🎓",
      title: "Exclusive Webinars",
      description: "Join career development webinars led by industry leaders and experts"
    },
    {
      icon: "📚",
      title: "Resource Library",
      description: "Access a comprehensive collection of career resources, guides, and templates"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-purple-600 mb-4">
            Why Choose Learnexity?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to accelerate your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-black text-purple-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
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

// Services Section
function ServicesSection({ setCurrentPage }) {
  return (
    <section id="services" className="bg-gradient-to-br from-purple-600 to-purple-700 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* 1 on 1 Mentorship */}
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

          {/* Premium Internships */}
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

          {/* Career Coaching */}
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

// Journey Section
function JourneySection() {
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

// CTA Section (Updated - Like Testimonial Badge)
function CTASection({ setCurrentPage }) {
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

// Testimonials Section (Fixed Video Display)
function TestimonialsSection({ setCurrentPage }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoTestimonials = [
    { src: '/videos/testimonial-video-1.mp4', poster: '/images/video-thumb-1.jpg', name: 'Student 1' },
    { src: '/videos/testimonial-video-2.mp4', poster: '/images/video-thumb-2.jpg', name: 'Student 2' },
    { src: '/videos/testimonial-video-3.mp4', poster: '/images/video-thumb-3.jpg', name: 'Student 3' }
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => prev === videoTestimonials.length - 1 ? 0 : prev + 1);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => prev === 0 ? videoTestimonials.length - 1 : prev - 1);
  };

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
            <p className="text-base sm:text-lg mb-4">
              "The mentorship I received was life-changing. It connected me with industry professionals who guided me every step of the way in my tech field!"
            </p>
            <p className="font-bold">— Tunde A., Tech Intern</p>
          </div>

          <div className="bg-white text-purple-600 rounded-3xl p-6 sm:p-8">
            <p className="text-base sm:text-lg mb-4">
              "Learnexity helped me land my first internship and taught me the skills I needed to stand out. I finally feel confident about my career path."
            </p>
            <p className="font-bold">— Grace E., UNN Graduate</p>
          </div>

          <div className="bg-white rounded-3xl p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={prevVideo}
                className="text-purple-600 hover:text-purple-800 transition-colors flex-shrink-0 p-2"
              >
                <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex-1">
                <div className="w-full rounded-xl overflow-hidden bg-black">
                  <video 
                    key={currentVideoIndex}
                    controls 
                    className="w-full h-auto"
                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                    poster={videoTestimonials[currentVideoIndex].poster}
                  >
                    <source src={videoTestimonials[currentVideoIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-center text-purple-600 font-bold mt-3">
                  {videoTestimonials[currentVideoIndex].name}
                </p>
              </div>

              <button 
                onClick={nextVideo}
                className="text-purple-600 hover:text-purple-800 transition-colors flex-shrink-0 p-2"
              >
                <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentVideoIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">
            Ready to<br />Transform your<br />Career?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
            Join thousands of professionals<br />
            Who have accelerated their<br />
            career with our proven<br />
            mentorship and support<br />
            programs
          </p>
          <button 
            onClick={() => setCurrentPage('signup')}
            className="bg-white text-purple-600 font-bold text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer({ scrollToSection, setCurrentPage }) {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-purple-400 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-purple-400 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors">Career Services</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-purple-400 transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-purple-400 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-purple-400 transition-colors">Terms of Use</button></li>
              <li><button onClick={() => setCurrentPage('refund')} className="hover:text-purple-400 transition-colors">Refund Policy</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">CONTACT US</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@learnexity.com" className="hover:text-purple-400 transition-colors">
                  info@learnexity.com
                </a>

                </li>
          <li>
            <a href="tel:+11231231213" className="hover:text-purple-400 transition-colors">
              +1 (123) 123-1213
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center text-sm border-t border-gray-700 pt-8">
      © 2025 Learnexity, all rights reserved.
    </div>
  </div>
</footer>
);
}
// ==================== NEW PAGES ====================
// About Us Page
function AboutPage({ setCurrentPage }) {
return (
<div className="min-h-screen bg-white">
<div className="bg-gradient-to-br from-purple-600 to-purple-700 py-20 px-4 text-white">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl font-black mb-6">About Learnexity</h1>
<p className="text-xl">Empowering the next generation of professionals</p>
</div>
</div>
  <div className="max-w-6xl mx-auto px-4 py-16">
    {/* Who We Are */}
    <section className="mb-16">
      <h2 className="text-4xl font-black text-purple-600 mb-6">Who We Are</h2>
      <p className="text-xl text-gray-700 leading-relaxed">
        Learnexity is a youth-focused platform dedicated to helping students and young professionals grow through access to quality mentorship, internship opportunities, and career support tools. We believe every young person deserves the guidance and resources they need to build a successful career.
      </p>
    </section>

    {/* Mission & Vision */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="bg-purple-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-black text-purple-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To empower the next generation of professionals by providing structured support, real-world opportunities, and expert guidance to help them build successful careers.
        </p>
      </div>

      <div className="bg-pink-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-black text-purple-600 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          A world where every young person has the mentorship, tools, and opportunities they need to thrive professionally—regardless of background or location.
        </p>
      </div>
    </div>

    {/* What We Do */}
    <section className="mb-16">
      <h2 className="text-4xl font-black text-purple-600 mb-8">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">✓</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Match Students with Mentors</h3>
            <p className="text-gray-600">Connect with industry professionals in your field of interest</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-3xl">✓</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Curate Internship Opportunities</h3>
            <p className="text-gray-600">Access premium internships across various industries</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-3xl">✓</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Career-Building Tools</h3>
            <p className="text-gray-600">CV templates, interview prep, and LinkedIn optimization</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-3xl">✓</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Organize Webinars & Resources</h3>
            <p className="text-gray-600">Continuous learning through expert-led sessions</p>
          </div>
        </div>
      </div>
    </section>

    {/* Founding Story */}
    <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-12 rounded-3xl mb-16">
      <h2 className="text-4xl font-black text-purple-600 mb-6">Our Story</h2>
      <p className="text-xl text-gray-700 leading-relaxed">
        Learnexity was founded with a simple but powerful vision: to democratize access to career opportunities for young professionals everywhere. We saw talented individuals struggling to find mentors, secure internships, and navigate their career paths. Today, we're proud to have helped thousands of students and young professionals achieve their career goals through personalized support and real-world opportunities.
      </p>
    </section>

    <div className="text-center">
      <button
        onClick={() => setCurrentPage('home')}
        className="bg-purple-600 text-white font-bold px-10 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</div>
);
}
// Contact Page
function ContactPage({ setCurrentPage }) {
const [formData, setFormData] = useState({
name: '',
email: '',
subject: '',
message: ''
});
const handleSubmit = (e) => {
e.preventDefault();
alert('Thank you for contacting us! We will get back to you soon.');
setFormData({ name: '', email: '', subject: '', message: '' });
};
return (
<div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 py-20 px-4">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h1 className="text-5xl font-black text-white mb-4">Contact Us</h1>
<p className="text-xl text-white">We'd love to hear from you!</p>
</div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl font-black text-purple-600 mb-6">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-black text-purple-600 mb-6">Get In Touch</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📧</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                <a href="mailto:info@learnexity.com" className="text-purple-600 hover:underline">
                  info@learnexity.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">📞</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                <a href="tel:+11231231213" className="text-purple-600 hover:underline">
                  +1 (123) 123-1213
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">📍</div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                <p className="text-gray-600">123 Career Avenue<br />Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-black text-purple-600 mb-6">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white p-4 rounded-full hover:bg-sky-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-4 rounded-full hover:bg-blue-900 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <button
        onClick={() => setCurrentPage('home')}
        className="bg-white text-purple-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</div>
);
}
// ==================== EXISTING ACTION PAGES (Updated Career Interests) ====================
// Sign Up Page (Updated with Tech Careers)
function SignUpPage({ setCurrentPage }) {
const [formData, setFormData] = useState({
fullName: '',
email: '',
careerInterest: '',
educationLevel: '',
mentorshipField: '',
password: ''
});
const handleSubmit = (e) => {
e.preventDefault();
alert('Welcome to Learnexity! Your profile has been created successfully.');
setCurrentPage('home');
};
return (
<div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center px-4 py-12">
<div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
<div className="flex items-center justify-center gap-2 mb-6">
<img src="/images/logo.png" alt="Logo" className="h-12 w-12" onError={(e) => e.target.style.display = 'none'} />
<span className="text-2xl font-bold text-purple-600">Learnexity</span>
</div>
    <h1 className="text-3xl font-black text-purple-600 text-center mb-2">
      Join Now - Start Your Journey
    </h1>
    <p className="text-center text-gray-600 mb-8">
      Welcome! Let's help you get matched with the right opportunities.
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Career Interest</label>
        <select
          value={formData.careerInterest}
          onChange={(e) => setFormData({...formData, careerInterest: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          required
        >
          <option value="">Select your career interest</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="fullstack">Full Stack Development</option>
          <option value="mobile">Mobile Development</option>
          <option value="data-science">Data Science</option>
          <option value="machine-learning">Machine Learning / AI</option>
          <option value="cyber-security">Cyber Security</option>
          <option value="cloud">Cloud Computing</option>
          <option value="devops">DevOps Engineering</option>
          <option value="blockchain">Blockchain Development</option>
          <option value="game-dev">Game Development</option>
          <option value="ui-ux">UI/UX Design</option>
          <option value="product-management">Product Management</option>
          <option value="data-analysis">Data Analysis</option>
          <option value="qa">Quality Assurance / Testing</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Education Level</label>
        <select
          value={formData.educationLevel}
          onChange={(e) => setFormData({...formData, educationLevel: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          required
        >
          <option value="">Select your education level</option>
          <option value="high-school">High School</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
          <option value="postgraduate">Postgraduate</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Mentorship Field</label>
        <input
          type="text"
          value={formData.mentorshipField}
          onChange={(e) => setFormData({...formData, mentorshipField: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          placeholder="e.g., Software Development, Marketing, etc."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          placeholder="Create a strong password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 hover:scale-105 transition-all shadow-lg mt-6"
      >
        Create Profile
      </button>
    </form>

    <div className="mt-6 text-center">
      <button
        onClick={() => setCurrentPage('home')}
        className="text-purple-600 hover:underline font-semibold"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</div>
);
}
// [Continue with BookSessionPage, InternshipsPage, ApplyPage, LegalPage - Keep them the same as before]
// Book Session Page
function BookSessionPage({ setCurrentPage }) {
const [formData, setFormData] = useState({
name: '',
email: '',
careerGoal: '',
preferredDate: '',
preferredTime: ''
});
const handleSubmit = (e) => {
e.preventDefault();
alert(`You're all set! A mentor will meet you at your selected time: ${formData.preferredDate} at ${formData.preferredTime}`);
setCurrentPage('home');
};
return (
<div className="min-h-screen bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center px-4 py-12">
<div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
<h1 className="text-3xl font-black text-purple-600 text-center mb-2">
Book a Free Career Session
</h1>
<p className="text-center text-gray-600 mb-8">
Schedule your personalized career consultation with an expert mentor
</p>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Career Goal</label>
        <textarea
          value={formData.careerGoal}
          onChange={(e) => setFormData({...formData, careerGoal: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
          rows="4"
          placeholder="Tell us about your career goals and what you hope to achieve..."
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
          <input
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Time</label>
          <select
            value={formData.preferredTime}
            onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
            required
          >
            <option value="">Select time</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-500 text-white font-bold py-3 rounded-lg hover:bg-cyan-600 hover:scale-105 transition-all shadow-lg mt-6"
      >
        Confirm Booking
      </button>
    </form>

    <div className="mt-6 text-center">
      <button
        onClick={() => setCurrentPage('home')}
        className="text-purple-600 hover:underline font-semibold"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</div>
);
}
// Internships Page
function InternshipsPage({ setCurrentPage }) {
const [filters, setFilters] = useState({
role: '',
industry: '',
location: ''
});
const internships = [
{ id: 1, title: 'Software Engineering Intern', company: 'TechCorp', location: 'Remote', industry: 'Technology', description: 'Work on cutting-edge web applications' },
{ id: 2, title: 'Marketing Intern', company: 'BrandMax', location: 'Lagos', industry: 'Marketing', description: 'Assist in digital marketing campaigns' },
{ id: 3, title: 'Data Science Intern', company: 'DataHub', location: 'Abuja', industry: 'Technology', description: 'Analyze data and build ML models' },
{ id: 4, title: 'Business Analyst Intern', company: 'ConsultPro', location: 'Remote', industry: 'Business', description: 'Support business strategy projects' },
{ id: 5, title: 'UI/UX Design Intern', company: 'DesignStudio', location: 'Port Harcourt', industry: 'Design', description: 'Create beautiful user interfaces' },
{ id: 6, title: 'Finance Intern', company: 'FinanceHub', location: 'Lagos', industry: 'Finance', description: 'Learn financial analysis and reporting' }
];
return (
<div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 py-20 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
Explore Internship Offers
</h1>
<p className="text-xl text-white">
Find your perfect internship opportunity
</p>
</div>
    <div className="bg-white rounded-2xl p-6 mb-8 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Role</label>
          <input
            type="text"
            value={filters.role}
            onChange={(e) => setFilters({...filters, role: e.target.value})}
            placeholder="e.g., Software Engineer"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Industry</label>
          <select
            value={filters.industry}
            onChange={(e) => setFilters({...filters, industry: e.target.value})}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          >
            <option value="">All Industries</option>
            <option value="Technology">Technology</option>
            <option value="Marketing">Marketing</option>
            <option value="Business">Business</option>
            <option value="Design">Design</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
            placeholder="e.g., Lagos, Remote"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {internships.map((internship) => (
        <div key={internship.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
          <h3 className="text-xl font-black text-purple-600 mb-2">
            {internship.title}
          </h3>
          <p className="text-gray-700 font-bold mb-1">{internship.company}</p>
          <p className="text-gray-600 text-sm mb-1">📍 {internship.location}</p>
          <p className="text-gray-600 text-sm mb-4">🏢 {internship.industry}</p>
          <p className="text-gray-700 mb-4">{internship.description}</p>
          <button
            onClick={() => alert(`Applied to ${internship.title} at ${internship.company}!`)}
            className="w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>

    <div className="mt-8 text-center">
      <button
        onClick={() => setCurrentPage('home')}
        className="bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</div>
);
}
// Apply Pages
function ApplyPage({ setCurrentPage, type }) {
const [formData, setFormData] = useState({
name: '',
email: '',
phone: '',
details: ''
});
const titles = {
'apply-mentorship': 'Apply for 1-on-1 Mentorship',
'apply-internship': 'Apply for Premium Internship',
'apply-coaching': 'Apply for Career Coaching'
};
const handleSubmit = (e) => {
e.preventDefault();
alert('Application submitted successfully! We will contact you soon.');
setCurrentPage('home');
};
return (
<div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center px-4 py-12">
<div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
<h1 className="text-3xl font-black text-purple-600 text-center mb-8">
{titles[type]}
</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Tell us more about yourself</label>
        <textarea
          value={formData.details}
          onChange={(e) => setFormData({...formData, details: e.target.value})}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
          rows="5"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-all"
      >
        Submit Application
      </button>
    </form>

    <div className="mt-6 text-center">
      <button
        onClick={() => setCurrentPage('home')}
        className="text-purple-600 hover:underline font-semibold"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</div>
);
}
// Legal Pages
function LegalPage({ setCurrentPage, type }) {
const content = {
privacy: {
title: 'Privacy Policy',
sections: [
{ heading: 'Information We Collect', text: 'We collect information you provide directly to us, including name, email, phone number, career interests, and education details.' },
{ heading: 'How We Use Your Information', text: 'We use your information to provide our services, match you with mentors, send updates, and improve our platform.' },
{ heading: 'Data Security', text: 'We implement appropriate security measures to protect your personal information from unauthorized access.' },
{ heading: 'Contact Us', text: 'If you have questions about this policy, contact us at info@learnexity.com' }
]
},
terms: {
title: 'Terms of Use',
sections: [
{ heading: 'Acceptance of Terms', text: 'By using Learnexity, you agree to these terms and conditions.' },
{ heading: 'User Responsibilities', text: 'You are responsible for maintaining the confidentiality of your account and for all activities under your account.' },
{ heading: 'Services', text: 'Learnexity provides mentorship matching, internship opportunities, and career development resources.' },
{ heading: 'Termination', text: 'We reserve the right to terminate accounts that violate our terms or engage in inappropriate behavior.' }
]
},
refund: {
title: 'Refund Policy',
sections: [
{ heading: 'Refund Eligibility', text: 'Refunds are available within 7 days of purchase if you have not yet accessed the service.' },
{ heading: 'Refund Process', text: 'To request a refund, contact our support team at info@learnexity.com with your order details.' },
{ heading: 'Processing Time', text: 'Refunds are processed within 5-7 business days after approval.' },
{ heading: 'Non-Refundable Items', text: 'Services already rendered, completed consultations, and downloadable resources are non-refundable.' }
]
}
};
const pageContent = content[type];
return (
<div className="min-h-screen bg-gray-50 py-20 px-4">
<div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
<h1 className="text-4xl font-black text-purple-600 mb-8">
{pageContent.title}
</h1>
    <div className="space-y-6">
      {pageContent.sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {section.heading}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {section.text}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-8 pt-6 border-t border-gray-200">
      <p className="text-sm text-gray-600 mb-4">
        Last updated: December 2025
      </p>
      <button
        onClick={() => setCurrentPage('home')}
        className="bg-purple-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</div>
);
}
// ==================== MAIN APP COMPONENT ====================
export default function Home() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [currentPage, setCurrentPage] = useState('home');
const scrollToSection = (sectionId) => {
setCurrentPage('home');
setTimeout(() => {
const element = document.getElementById(sectionId);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
setMobileMenuOpen(false);
}
}, 100);
};
// Render different pages
if (currentPage === 'about') return <AboutPage setCurrentPage={setCurrentPage} />;
if (currentPage === 'contact') return <ContactPage setCurrentPage={setCurrentPage} />;
if (currentPage === 'signup') return <SignUpPage setCurrentPage={setCurrentPage} />;
if (currentPage === 'book-session') return <BookSessionPage setCurrentPage={setCurrentPage} />;
if (currentPage === 'internships') return <InternshipsPage setCurrentPage={setCurrentPage} />;
if (currentPage === 'apply-mentorship' || currentPage === 'apply-internship' || currentPage === 'apply-coaching') {
return <ApplyPage setCurrentPage={setCurrentPage} type={currentPage} />;
}
if (currentPage === 'privacy' || currentPage === 'terms' || currentPage === 'refund') {
return <LegalPage setCurrentPage={setCurrentPage} type={currentPage} />;
}
// Default: Landing page
return (
<div className="bg-white">
<Navbar 
     mobileMenuOpen={mobileMenuOpen}
     setMobileMenuOpen={setMobileMenuOpen}
     scrollToSection={scrollToSection}
     setCurrentPage={setCurrentPage}
   />
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