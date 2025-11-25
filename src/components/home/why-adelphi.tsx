"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, User, Zap, Shield, Target, Star, CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    icon: User,
    title: "Direct Executive Access",
    description: "Work directly with Peter Parsonson on every engagement — no junior associates, no handoffs.",
    color: "azure",
  },
  {
    icon: Shield,
    title: "Proven FDA Track Record",
    description: "Named on FDA approval letter for Ekterly®, with 100% submission success rate.",
    color: "gold",
  },
  {
    icon: Zap,
    title: "Boutique Agility",
    description: "Fast decisions, flexible approach, without large-firm overhead or bureaucracy.",
    color: "emerald",
  },
  {
    icon: Target,
    title: "Strategic Alignment",
    description: "Regulatory strategy that aligns with your business objectives and timelines.",
    color: "sapphire",
  },
];

const metrics = [
  { value: "100%", label: "Success Rate", sublabel: "FDA Submissions" },
  { value: "20+", label: "Years", sublabel: "Experience" },
  { value: "50+", label: "Submissions", sublabel: "IND/NDA/BLA" },
  { value: "24h", label: "Response", sublabel: "Guaranteed" },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    azure: { bg: "bg-azure/10", text: "text-azure", border: "border-azure/20" },
    gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20" },
    emerald: { bg: "bg-emerald/10", text: "text-emerald", border: "border-emerald/20" },
    sapphire: { bg: "bg-sapphire/10", text: "text-sapphire", border: "border-sapphire/20" },
  };
  return colors[color] || colors.azure;
};

export function WhyAdelphi() {
  return (
    <section className="relative py-28 lg:py-36 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-azure/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-azure/20 to-gold/10 rounded-[2rem] blur-2xl opacity-50" />

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-premium-xl">
                <Image
                  src="/images/stock/professional-handshake.jpg"
                  alt="Professional consultation with Peter Parsonson"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[450px] lg:h-[550px]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/80 via-[#050A14]/20 to-transparent" />

                {/* Floating Stats Card */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-premium-xl border border-white/50">
                    <div className="grid grid-cols-4 gap-4">
                      {metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          className="text-center"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        >
                          <div
                            className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-navy to-azure bg-clip-text text-transparent"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate mt-1 font-medium">{metric.label}</div>
                          <div className="text-[10px] text-silver">{metric.sublabel}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* FDA Approved Badge */}
              <motion.div
                className="absolute -top-4 -right-4 lg:-right-8 z-10"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-gold to-gold-light text-navy-dark px-6 py-4 rounded-2xl shadow-lg shadow-gold/30">
                  <div className="flex items-center gap-2.5">
                    <Star className="w-5 h-5 fill-current" />
                    <div>
                      <div className="font-bold text-sm">FDA Approved</div>
                      <div className="text-xs opacity-80">Ekterly®</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Ring */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-azure/10 rounded-full" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-navy/5 text-navy border border-navy/10 mb-8">
              <CheckCircle2 className="w-4 h-4" />
              Why Choose Adelphi
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Adelphi{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Difference</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-azure/20 to-gold/20 -skew-x-3 rounded-sm -z-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </h2>

            <p className="text-lg text-slate mb-12 leading-relaxed">
              When you work with Adelphi Biosciences, you work directly with Peter Parsonson —
              bringing executive-level regulatory expertise to your program without the
              bureaucracy or overhead of larger consulting firms.
            </p>

            {/* Differentiators */}
            <div className="space-y-5 mb-12">
              {differentiators.map((item, index) => {
                const colorClasses = getColorClasses(item.color);
                return (
                  <motion.div
                    key={index}
                    className="group flex gap-5 p-4 rounded-2xl hover:bg-cloud transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl ${colorClasses.bg} border ${colorClasses.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-lg mb-1">{item.title}</h4>
                      <p className="text-slate text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-navy to-navy-light text-white font-semibold rounded-xl shadow-lg shadow-navy/25 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                Meet Peter Parsonson
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy font-semibold rounded-xl border border-navy/15 hover:border-navy/30 hover:bg-cloud transition-all duration-300"
              >
                Schedule a Call
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
