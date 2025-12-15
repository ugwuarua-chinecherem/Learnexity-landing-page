'use client';
import React from 'react';

export default function BenefitsSection() {
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