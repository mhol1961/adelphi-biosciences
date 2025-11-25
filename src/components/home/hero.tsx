"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";

const achievements = [
  {
    icon: Shield,
    label: "FDA Approval",
    value: "Ekterly®",
    description: "Named on approval letter",
  },
  {
    icon: Award,
    label: "US Patent",
    value: "#9,186,363",
    description: "Intellectual property",
  },
  {
    icon: TrendingUp,
    label: "Experience",
    value: "20+ Years",
    description: "Executive leadership",
  },
];

const stats = [
  { value: "100%", label: "Success Rate", sublabel: "FDA submissions" },
  { value: "50+", label: "Submissions", sublabel: "IND/NDA/BLA" },
  { value: "20+", label: "Years", sublabel: "Industry leadership" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Base Image */}
        <Image
          src="/images/stock/hero-scientist.jpg"
          alt="Pharmaceutical research laboratory"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        {/* Premium Multi-Layer Gradient Overlay */}
        <div className="absolute inset-0 bg-[#050A14]/95" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 70% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 30% 80%, rgba(212, 168, 83, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 90% 60%, rgba(30, 64, 175, 0.1) 0%, transparent 50%),
              linear-gradient(165deg, #050A14 0%, #0A1628 30%, #0D1F3C 70%, #1A365D 100%)
            `,
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Ambient Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Azure Orb */}
        <motion.div
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gold Accent Orb */}
        <motion.div
          className="absolute bottom-20 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212, 168, 83, 0.06) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Sapphire Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "radial-gradient(circle, rgba(30, 64, 175, 0.05) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-azure/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-screen lg:min-h-0 lg:py-24">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Premium Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-azure/15 to-azure/5 text-azure-light border border-azure/20 backdrop-blur-sm shadow-lg shadow-azure/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azure opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-azure"></span>
                </span>
                FDA Regulatory Affairs Excellence
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-[1.08] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Navigate Your Path to{" "}
              <span className="relative inline-block">
                <span
                  className="relative z-10 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #D4A853 100%)",
                  }}
                >
                  FDA Approval
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-azure/30 to-gold/20 -skew-x-3 rounded-sm"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mt-4 text-sm sm:text-base text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
              Strategic regulatory consulting from{" "}
              <span className="text-white font-semibold">Peter Parsonson</span> —
              named on the FDA approval letter for Ekterly®. From IND to NDA,
              executive-level expertise that delivers results.
            </motion.p>

            {/* Achievement Cards */}
            <motion.div
              className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            >
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative p-2.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-500"
                  whileHover={{ y: -3, transition: { duration: 0.3 } }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-azure/20 to-sapphire/10 flex items-center justify-center border border-azure/20 group-hover:border-azure/30 transition-colors">
                      <item.icon className="w-3.5 h-3.5 text-azure" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/50 text-[9px] font-medium uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-white font-bold text-[11px] mt-0.5">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-sm overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)",
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
                  }}
                />
                <span className="relative flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Schedule Free Consultation
                </span>
                <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-6 flex items-center gap-5 justify-center lg:justify-start flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center gap-1.5 text-white/60 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald" />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald" />
                <span>Confidential Consultation</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald" />
                <span>No Obligation</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Premium Stats Card */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative perspective-1000">
              {/* Glow Effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-azure/20 via-transparent to-gold/10 rounded-[3rem] blur-3xl opacity-60" />
              <div className="absolute -inset-4 bg-gradient-to-br from-azure/10 to-transparent rounded-[2.5rem] blur-2xl" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em]">
                      Proven Excellence
                    </p>
                    <p className="text-white font-bold text-lg mt-1">
                      Results That Define Success
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/20">
                    <Award className="w-7 h-7 text-gold" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                    >
                      <div className="flex items-end justify-between mb-2">
                        <div>
                          <span
                            className="text-5xl font-extrabold text-white"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {stat.value}
                          </span>
                          <span className="ml-2 text-white/40 text-sm">{stat.sublabel}</span>
                        </div>
                        <span className="text-azure text-sm font-medium">{stat.label}</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: index === 0
                              ? "linear-gradient(90deg, #3B82F6, #60A5FA)"
                              : index === 1
                              ? "linear-gradient(90deg, #D4A853, #E8C97A)"
                              : "linear-gradient(90deg, #10B981, #34D399)",
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: index === 0 ? "100%" : index === 1 ? "85%" : "90%" }}
                          transition={{ duration: 1.5, delay: 1 + index * 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Featured Achievement */}
                <motion.div
                  className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/30">
                      <Shield className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <p className="text-gold font-bold text-lg">Ekterly® FDA Approval</p>
                      <p className="text-white/50 text-sm mt-0.5">
                        First oral treatment for HAE attacks
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-white/5 rounded-full" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/5 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade - subtle, doesn't obscure content */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-slate/60 text-xs uppercase tracking-[0.2em] font-medium">
          Discover More
        </span>
        <motion.div
          className="w-7 h-12 rounded-full border-2 border-slate/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-3 bg-azure rounded-full"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
