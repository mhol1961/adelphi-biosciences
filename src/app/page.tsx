import Link from "next/link";
import RegulatoryRoadmap from "@/components/RegulatoryRoadmap";
import AustinAdvantage from "@/components/AustinAdvantage";
import RegulatoryTicker from "@/components/RegulatoryTicker";
import LeadershipSection from "@/components/LeadershipSection";
import { Shield, Clock, Award, CheckCircle, Users, TrendingUp, FileCheck, Globe, Lightbulb, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Compact & Above the Fold */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[var(--color-primary-navy)]">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          {/* Deep Navy Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050A14] via-[#0A2540] to-[#1C3F60]"></div>

          {/* Animated Particle Network */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}>
          </div>
        </div>

        {/* Diagonal Overlay with Austin Skyline */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/austin-skyline-premium.png")',
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
              opacity: 0.25
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-navy)] via-[var(--color-accent-teal)]/20 to-transparent"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="container relative z-10 px-4 mx-auto py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-teal)] animate-pulse"></span>
                <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">Regulatory Precision from Austin, TX</span>
              </div>

              {/* Main Headline - SMALLER */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight">
                Accelerating Regulatory Success from{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-teal)] to-[var(--color-highlight-green)]">
                  Austin to the World
                </span>.
              </h1>

              {/* Subheadline - SMALLER */}
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl">
                Strategic guidance for pharmaceutical innovation. Navigating FDA & Global compliance with the agility of tech and the rigor of science.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/regulatory-health-check"
                  className="group relative inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white bg-[var(--color-accent-teal)] rounded-full hover:bg-[var(--color-highlight-green)] transition-all duration-300 shadow-[0_0_30px_rgba(46,139,87,0.4)] hover:shadow-[0_0_40px_rgba(46,139,87,0.6)] transform hover:-translate-y-1"
                >
                  <span className="relative z-10">Schedule a Health Check</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right Column - Compact Stats Preview */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-white/70 text-xs font-medium">FDA Submission Success</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-1">20+</div>
                <div className="text-white/70 text-xs font-medium">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-white/70 text-xs font-medium">Successful INDs</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-[var(--color-accent-teal)]" />
                  <div>
                    <div className="text-sm font-bold text-white">FDA Approved</div>
                    <div className="text-white/70 text-xs">Ekterly®</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Ticker at Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <RegulatoryTicker />
        </div>
      </section>

      {/* Excellence Section - Full Width Dark */}
      <section className="relative bg-[#050A14] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(46, 139, 87, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              <span className="text-white">Excellence That </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-teal)] to-[var(--color-highlight-green)]">
                Speaks for Itself
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proven track record of regulatory success across therapeutic areas and global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[var(--color-accent-teal)]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-teal)] to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CheckCircle className="w-10 h-10 text-[var(--color-accent-teal)] mb-4" />
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-white/70 font-medium text-sm">FDA Submission Success Rate</div>
              <p className="text-white/50 text-xs mt-2">Every submission accepted on first review</p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[var(--color-accent-teal)]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-teal)] to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Clock className="w-10 h-10 text-[var(--color-accent-teal)] mb-4" />
              <div className="text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-white/70 font-medium text-sm">Years Executive Experience</div>
              <p className="text-white/50 text-xs mt-2">Senior regulatory leadership at top pharma</p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[var(--color-accent-teal)]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-teal)] to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <FileCheck className="w-10 h-10 text-[var(--color-accent-teal)] mb-4" />
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70 font-medium text-sm">Successful INDs Filed</div>
              <p className="text-white/50 text-xs mt-2">Across multiple therapeutic areas</p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[var(--color-accent-teal)]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-teal)] to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Award className="w-10 h-10 text-[var(--color-accent-teal)] mb-4" />
              <div className="text-3xl font-bold text-white mb-2">FDA Approved</div>
              <div className="text-white/70 font-medium text-sm">Named on Ekterly® Letter</div>
              <p className="text-white/50 text-xs mt-2">First HAE prophylaxis approval in decades</p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[var(--color-accent-teal)]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent-teal)] to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Lightbulb className="w-10 h-10 text-[var(--color-accent-teal)] mb-4" />
              <div className="text-2xl font-bold text-white mb-2">#9,186,363</div>
              <div className="text-white/70 font-medium text-sm">US Patent Holder</div>
              <p className="text-white/50 text-xs mt-2">Patented innovation for AMD treatment methodology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Therapeutic Areas of Expertise</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-accent-mint)] flex items-center justify-center group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <span className="text-2xl">🧬</span>
              </div>
              <div className="text-sm font-medium text-gray-700">Oncology</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-accent-mint)] flex items-center justify-center group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <span className="text-2xl">🧠</span>
              </div>
              <div className="text-sm font-medium text-gray-700">Neurology</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-accent-mint)] flex items-center justify-center group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <span className="text-2xl">❤️</span>
              </div>
              <div className="text-sm font-medium text-gray-700">Cardiology</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-accent-mint)] flex items-center justify-center group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <span className="text-2xl">💊</span>
              </div>
              <div className="text-sm font-medium text-gray-700">Rare Diseases</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-accent-mint)] flex items-center justify-center group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <span className="text-2xl">🔬</span>
              </div>
              <div className="text-sm font-medium text-gray-700">Medical Devices</div>
            </div>
          </div>
        </div>
      </section>

      <RegulatoryRoadmap />

      {/* Comprehensive Services Grid */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0A2540 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-navy)] font-serif mb-4">
              Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end regulatory support from discovery to post-market lifecycle management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Regulatory Strategy */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-accent-teal)] hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-mint)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <TrendingUp className="w-7 h-7 text-[var(--color-accent-teal)] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 font-serif">Regulatory Strategy</h3>
              <ul className="space-y-2 text-gray-600 text-sm mb-6 flex-grow">
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Target Product Profile Development</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Regulatory Pathway Selection</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Pre-IND/CTA Meeting Preparation</li>
              </ul>
              <Link href="/services/regulatory-strategy" className="inline-flex items-center text-[var(--color-accent-teal)] font-semibold text-sm hover:underline mt-auto">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 2: CMC & Quality */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-accent-teal)] hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-mint)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <FileCheck className="w-7 h-7 text-[var(--color-accent-teal)] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 font-serif">CMC & Quality Compliance</h3>
              <ul className="space-y-2 text-gray-600 text-sm mb-6 flex-grow">
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Module 3 Authorship & Review</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>GMP Compliance Audits</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>21 CFR Part 11 Document Management</li>
              </ul>
              <Link href="/services/cmc-quality" className="inline-flex items-center text-[var(--color-accent-teal)] font-semibold text-sm hover:underline mt-auto">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 3: FDA Submissions */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-accent-teal)] hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-mint)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <Shield className="w-7 h-7 text-[var(--color-accent-teal)] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 font-serif">FDA Submissions</h3>
              <ul className="space-y-2 text-gray-600 text-sm mb-6 flex-grow">
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>IND/NDA/BLA Authoring</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>eCTD Publishing & Validation</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>505(b)(2) Applications</li>
              </ul>
              <Link href="/services/fda-submissions" className="inline-flex items-center text-[var(--color-accent-teal)] font-semibold text-sm hover:underline mt-auto">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 4: Global Submissions */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-accent-teal)] hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-mint)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <Globe className="w-7 h-7 text-[var(--color-accent-teal)] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 font-serif">Global Submissions</h3>
              <ul className="space-y-2 text-gray-600 text-sm mb-6 flex-grow">
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>EMA MAA Preparation</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Health Canada Submissions</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>PMDA Consultations</li>
              </ul>
              <Link href="/services/global-submissions" className="inline-flex items-center text-[var(--color-accent-teal)] font-semibold text-sm hover:underline mt-auto">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 5: Lifecycle Management */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-accent-teal)] hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-mint)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <Users className="w-7 h-7 text-[var(--color-accent-teal)] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 font-serif">Lifecycle Management</h3>
              <ul className="space-y-2 text-gray-600 text-sm mb-6 flex-grow">
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Post-Market Variations</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Annual Reports</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Labeling Updates</li>
              </ul>
              <Link href="/services/lifecycle-management" className="inline-flex items-center text-[var(--color-accent-teal)] font-semibold text-sm hover:underline mt-auto">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 6: Due Diligence */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-accent-teal)] hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-mint)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-teal)] transition-colors">
                <CheckCircle className="w-7 h-7 text-[var(--color-accent-teal)] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 font-serif">Due Diligence</h3>
              <ul className="space-y-2 text-gray-600 text-sm mb-6 flex-grow">
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Regulatory Gap Analysis</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>M&A Support</li>
                <li className="flex items-start"><span className="text-[var(--color-accent-teal)] mr-2">•</span>Portfolio Assessment</li>
              </ul>
              <Link href="/services/due-diligence" className="inline-flex items-center text-[var(--color-accent-teal)] font-semibold text-sm hover:underline mt-auto">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LeadershipSection />
      <AustinAdvantage />

      {/* Final CTA Section - Opus Style */}
      <section className="relative py-24 bg-gradient-to-br from-[#0A2540] via-[#1C3F60] to-[#0A2540] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Start Your FDA Journey</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6 leading-tight">
                Ready to Navigate Your Path to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-teal)] to-[var(--color-highlight-green)]">
                  FDA Approval
                </span>?
              </h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Let's discuss how Adelphi Biosciences can help accelerate your regulatory strategy. Schedule a free consultation with Peter Parsonson to explore your unique needs.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent-teal)] flex-shrink-0" />
                  <span>Free 30-minute strategic consultation</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent-teal)] flex-shrink-0" />
                  <span>Same-day response guarantee</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent-teal)] flex-shrink-0" />
                  <span>No obligation assessment</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent-teal)] flex-shrink-0" />
                  <span>Confidential discussion</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent-teal)] text-white font-bold rounded-full hover:bg-[var(--color-highlight-green)] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span>Schedule Free Consultation</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[var(--color-accent-teal)] flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Let's Connect</h3>
                  <p className="text-white/70 text-sm">We respond within 24 hours</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="text-sm text-white/60">Email</div>
                    <div className="text-white font-medium">info@adelphibiosciences.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="text-sm text-white/60">LinkedIn</div>
                    <div className="text-white font-medium">Connect with Peter Parsonson</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-6 bg-gradient-to-br from-[var(--color-accent-teal)]/20 to-transparent rounded-xl border border-[var(--color-accent-teal)]/30">
                  <Shield className="w-8 h-8 text-[var(--color-accent-teal)]" />
                  <div>
                    <div className="text-sm font-bold text-[var(--color-accent-teal)]">100% Success Rate ⭐</div>
                    <div className="text-white/70 text-xs">FDA submissions across career</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
