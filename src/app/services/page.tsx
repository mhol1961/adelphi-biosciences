import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Regulatory Services | Adelphi Biosciences',
  description: 'Comprehensive regulatory affairs consulting services including Strategic Consulting, CMC Compliance, and Global Submissions.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-offwhite)]">
      {/* Hero Section */}
      <section className="relative bg-[var(--color-primary-navy)] pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.png"
            alt="Regulatory Compliance"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Gradient Overlay - lighter to show the COMPLIANCE text in the image */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050A14]/80 via-[#0A2540]/70 to-[#1C3F60]/80"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-teal)] animate-pulse"></span>
            <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">Full-Spectrum Regulatory Support</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6 leading-tight drop-shadow-lg">
            Comprehensive Regulatory <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-teal)] to-[var(--color-highlight-green)]">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            End-to-end expertise across the product lifecycle. We transform regulatory hurdles into strategic advantages.
          </p>
        </div>
      </section>

      {/* Services Pillars */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Pillar 1: Regulatory Strategy */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[var(--color-accent-teal)] flex flex-col">
              <div className="p-8 flex-grow">
                <div className="w-16 h-16 bg-[var(--color-accent-mint)] rounded-2xl flex items-center justify-center mb-6 text-3xl">
                  🧠
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-4 font-serif">
                  Regulatory Strategy
                </h3>
                <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                  Before the first document is written, the path must be clear. We provide high-level strategic oversight to align your scientific data with regulatory expectations.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Target Product Profile (TPP) Development',
                    'Regulatory Pathway Selection',
                    'Pre-IND/CTA Meeting Preparation',
                    'Orphan Drug Designations'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-[var(--color-accent-teal)] mr-2 mt-1">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/regulatory-strategy" className="inline-flex items-center text-[var(--color-accent-teal)] font-semibold hover:text-[#2E8B57] transition-colors group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: CMC & Quality */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[var(--color-primary-blue)] flex flex-col">
              <div className="p-8 flex-grow">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                  🔬
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-4 font-serif">
                  CMC & Quality Compliance
                </h3>
                <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                  Manufacturing is often the hurdle that stalls approval. We bridge the gap between technical operations and regulatory requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Module 3 authorship and review',
                    'GMP Compliance Audits',
                    'Stability data assessment',
                    '21 CFR Part 11 Document Management'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-[var(--color-primary-blue)] mr-2 mt-1">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/cmc-quality" className="inline-flex items-center text-[var(--color-primary-blue)] font-semibold hover:text-blue-700 transition-colors group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: FDA Submissions */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500 flex flex-col">
              <div className="p-8 flex-grow">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                  📝
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-4 font-serif">
                  FDA Submissions
                </h3>
                <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                  Flawless execution of major submissions. We handle the details so you can focus on the science.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'IND/NDA/BLA Authoring',
                    'eCTD Publishing & Validation',
                    '505(b)(2) Applications',
                    'Fast Track & Breakthrough Requests'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-purple-500 mr-2 mt-1">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/fda-submissions" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 4: Global Submissions */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500 flex flex-col">
              <div className="p-8 flex-grow">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                  🌍
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-4 font-serif">
                  Global Submissions
                </h3>
                <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                  Expanding beyond the US? We navigate international regulatory landscapes with ease.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'EMA MAA Preparation',
                    'Health Canada Submissions',
                    'PMDA Consultations',
                    'Rest of World (ROW) Strategy'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-orange-500 mr-2 mt-1">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/global-submissions" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 5: Lifecycle Management */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-teal-600 flex flex-col">
              <div className="p-8 flex-grow">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                  🔄
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-4 font-serif">
                  Lifecycle Management
                </h3>
                <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                  Maintaining compliance post-approval is just as critical as getting approved.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Post-Market Variations',
                    'Annual Reports',
                    'Labeling Updates',
                    'Safety Reporting'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-teal-600 mr-2 mt-1">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/lifecycle-management" className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 6: Due Diligence */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-indigo-500 flex flex-col">
              <div className="p-8 flex-grow">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                  🔍
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-4 font-serif">
                  Due Diligence
                </h3>
                <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                  Assess risks and opportunities before making critical business decisions.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Regulatory Gap Analysis',
                    'M&A Support',
                    'Portfolio Assessment',
                    'Risk Mitigation Strategies'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-indigo-500 mr-2 mt-1">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href="/services/due-diligence" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary-navy)] mb-6 font-serif">
            Ready to Accelerate Your Program?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your specific regulatory challenges and how we can help you navigate them.
          </p>
          <Link
            href="/regulatory-health-check"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[var(--color-primary-navy)] rounded-full hover:bg-[var(--color-primary-blue)] transition-all duration-300 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
