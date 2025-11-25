"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  FileText,
  RefreshCcw,
  Search,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Regulatory Strategy",
    description:
      "Comprehensive IND/NDA/BLA planning tailored to your therapeutic area and business objectives. Map the optimal regulatory pathway from preclinical through approval.",
    features: ["IND Strategy & Planning", "NDA/BLA Development", "Regulatory Pathway Design", "Risk Assessment"],
    href: "/services#strategy",
    color: "azure",
    number: "01",
  },
  {
    icon: FileText,
    title: "FDA Submissions",
    description:
      "Expert CTD preparation, FDA correspondence management, and submission coordination. Ensure your regulatory filings meet all requirements the first time.",
    features: ["CTD Module Preparation", "FDA Meeting Support", "eCTD Publishing", "Deficiency Responses"],
    href: "/services#submissions",
    color: "sapphire",
    number: "02",
  },
  {
    icon: RefreshCcw,
    title: "Lifecycle Management",
    description:
      "Post-approval regulatory support for label extensions, manufacturing changes, and ongoing FDA compliance throughout your product's commercial life.",
    features: ["Post-Approval Changes", "Label Supplements", "CMC Updates", "Annual Reports"],
    href: "/services#lifecycle",
    color: "emerald",
    number: "03",
  },
  {
    icon: Search,
    title: "Due Diligence",
    description:
      "Thorough regulatory risk assessment for M&A transactions, licensing deals, and investment decisions in the life sciences sector.",
    features: ["Risk Assessment", "Portfolio Review", "Gap Analysis", "Investment Support"],
    href: "/services#due-diligence",
    color: "gold",
    number: "04",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; gradient: string; glow: string }> = {
    azure: {
      bg: "bg-azure/10",
      text: "text-azure",
      border: "border-azure/20",
      gradient: "from-azure to-azure-light",
      glow: "shadow-azure/20",
    },
    sapphire: {
      bg: "bg-sapphire/10",
      text: "text-sapphire",
      border: "border-sapphire/20",
      gradient: "from-sapphire to-azure",
      glow: "shadow-sapphire/20",
    },
    emerald: {
      bg: "bg-emerald/10",
      text: "text-emerald",
      border: "border-emerald/20",
      gradient: "from-emerald to-success",
      glow: "shadow-emerald/20",
    },
    gold: {
      bg: "bg-gold/10",
      text: "text-gold",
      border: "border-gold/20",
      gradient: "from-gold to-gold-light",
      glow: "shadow-gold/20",
    },
  };
  return colors[color] || colors.azure;
};

export function ServicesOverview() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-section" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-azure/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sapphire/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-azure/10 text-azure border border-azure/15 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="w-4 h-4" />
            Full-Spectrum Regulatory Expertise
          </motion.span>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Comprehensive{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Services</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-azure/20 to-gold/20 -skew-x-3 rounded-sm -z-10"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            From early development through commercialization, we provide strategic guidance
            to navigate the complex FDA regulatory landscape with confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Link href={service.href} className="block group h-full">
                  <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-premium hover:shadow-premium-xl transition-all duration-500 hover:-translate-y-3 border border-slate/5 overflow-hidden">
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 text-6xl font-extrabold text-slate/5 select-none" style={{ fontFamily: "var(--font-display)" }}>
                      {service.number}
                    </div>

                    {/* Gradient Accent Line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colorClasses.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />

                    {/* Hover Glow */}
                    <div
                      className={`absolute -top-20 -right-20 w-60 h-60 rounded-full ${colorClasses.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl ${colorClasses.bg} border ${colorClasses.border} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className={`w-8 h-8 ${colorClasses.text}`} />
                      </div>

                      {/* Content */}
                      <h3
                        className="text-2xl lg:text-3xl font-bold text-charcoal mb-4 group-hover:text-navy transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {service.title}
                      </h3>

                      <p className="text-slate mb-8 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2.5 text-sm text-slate">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${colorClasses.text}`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${colorClasses.text} group-hover:underline underline-offset-4`}>
                          Learn More
                        </span>
                        <div
                          className={`w-10 h-10 rounded-xl ${colorClasses.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <ArrowUpRight className={`w-5 h-5 ${colorClasses.text} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-navy to-navy-light text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1 shadow-lg shadow-navy/25"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-4 text-navy font-semibold hover:text-azure transition-colors"
            >
              <span>Schedule a consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
