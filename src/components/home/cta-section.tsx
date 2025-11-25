"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, Linkedin, CheckCircle2, Sparkles, Shield, Star } from "lucide-react";

const benefits = [
  "Free 30-minute strategic consultation",
  "Same-day response guarantee",
  "No obligation assessment",
  "Confidential discussion",
];

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/stock/lab-research.jpg"
          alt="Pharmaceutical laboratory research"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-[#050A14]/90" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 30% 70%, rgba(212, 168, 83, 0.1) 0%, transparent 50%),
              linear-gradient(165deg, rgba(5, 10, 20, 0.95) 0%, rgba(10, 22, 40, 0.9) 50%, rgba(13, 31, 60, 0.85) 100%)
            `,
          }}
        />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212, 168, 83, 0.08) 0%, transparent 60%)" }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-azure/15 text-azure-light border border-azure/20 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Calendar className="w-4 h-4" />
              Start Your FDA Journey
            </motion.span>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Navigate Your Path to{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #D4A853 100%)" }}
                >
                  FDA Approval?
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-azure/30 to-gold/20 -skew-x-3 rounded-sm"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
              Let&apos;s discuss how Adelphi Biosciences can help accelerate your regulatory
              strategy. Schedule a free consultation with Peter Parsonson to explore your
              unique needs.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-4 text-white/80"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald" />
                  </div>
                  <span className="text-base">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)" }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)" }}
                />
                <Sparkles className="relative w-5 h-5" />
                <span className="relative">Schedule Free Consultation</span>
                <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300"
              >
                View Our Services
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Card */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-azure/20 via-transparent to-gold/10 rounded-[2rem] blur-2xl opacity-50" />

              {/* Main Card */}
              <div className="relative bg-white/[0.06] backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-5 mb-10 pb-8 border-b border-white/10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-azure to-sapphire flex items-center justify-center shadow-lg shadow-azure/30">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                      Let&apos;s Connect
                    </h3>
                    <p className="text-white/60 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Contact Options */}
                <div className="space-y-5 mb-10">
                  <a
                    href="mailto:info@adelphibiosciences.com"
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center group-hover:bg-azure/20 transition-colors">
                      <Mail className="w-6 h-6 text-azure" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/50 text-sm font-medium mb-1">Email</p>
                      <p className="text-white font-semibold group-hover:text-azure transition-colors">
                        info@adelphibiosciences.com
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-azure group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/adelphi-biosciences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-azure/10 border border-azure/20 flex items-center justify-center group-hover:bg-azure/20 transition-colors">
                      <Linkedin className="w-6 h-6 text-azure" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/50 text-sm font-medium mb-1">LinkedIn</p>
                      <p className="text-white font-semibold group-hover:text-azure transition-colors">
                        Connect with Peter Parsonson
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-azure group-hover:translate-x-1 transition-all" />
                  </a>
                </div>

                {/* Trust Badge */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border border-gold/30">
                      <Shield className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-gold font-bold">100% Success Rate</p>
                        <Star className="w-4 h-4 text-gold fill-gold" />
                      </div>
                      <p className="text-white/50 text-sm">FDA submissions across career</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-white/5 rounded-full" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/5 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
