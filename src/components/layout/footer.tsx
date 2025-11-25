"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowRight, MapPin, Clock, Sparkles, Shield } from "lucide-react";

const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Regulatory Strategy", href: "/services#strategy" },
    { name: "FDA Submissions", href: "/services#submissions" },
    { name: "Lifecycle Management", href: "/services#lifecycle" },
    { name: "Due Diligence", href: "/services#due-diligence" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050A14] overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-azure/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Top CTA Banner */}
      <div className="relative border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center md:text-left">
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to start your{" "}
                <span className="gradient-text">regulatory journey?</span>
              </h3>
              <p className="text-white/60 text-lg">
                Schedule a free consultation with Peter Parsonson today.
              </p>
            </div>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:-translate-y-1 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)" }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)" }}
              />
              <Sparkles className="relative w-5 h-5" />
              <span className="relative">Get Started</span>
              <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center group">
              <Image
                src="/images/logo-white.svg"
                alt="Adelphi Biosciences"
                width={180}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-8 text-white/60 leading-relaxed max-w-sm text-[15px]">
              Strategic regulatory affairs consulting for life sciences. Expert guidance from IND to
              FDA approval, led by Peter Parsonson — named on the FDA approval letter for Ekterly®.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/company/adelphi-biosciences"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-azure/20 flex items-center justify-center text-white/50 hover:text-azure transition-all duration-300 border border-white/[0.08] hover:border-azure/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@adelphibiosciences.com"
                className="group w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-azure/20 flex items-center justify-center text-white/50 hover:text-azure transition-all duration-300 border border-white/[0.08] hover:border-azure/30"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold text-white/40 tracking-[0.15em] uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group text-white/60 hover:text-azure transition-colors duration-300 text-[15px] inline-flex items-center gap-2"
                  >
                    {item.name}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-white/40 tracking-[0.15em] uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group text-white/60 hover:text-azure transition-colors duration-300 text-[15px] inline-flex items-center gap-2"
                  >
                    {item.name}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-white/40 tracking-[0.15em] uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@adelphibiosciences.com"
                  className="flex items-start gap-3 text-white/60 hover:text-azure transition-colors duration-300 text-[15px]"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 mt-1 text-azure/60" />
                  <span>info@adelphibiosciences.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-[15px]">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-azure/60" />
                <span>United States</span>
              </li>
            </ul>

            {/* Response Time Badge */}
            <div className="mt-8 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-emerald" />
                </div>
                <span className="font-semibold text-emerald text-sm">24h Response</span>
              </div>
              <p className="text-white/50 text-sm">
                We typically respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Shield className="w-4 h-4 text-gold" />
              <span>100% FDA Submission Success Rate</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>Named on FDA Approval Letter for Ekterly®</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>20+ Years Executive Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/30">
              © {currentYear} Adelphi Biosciences. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/30 hover:text-white/60 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
