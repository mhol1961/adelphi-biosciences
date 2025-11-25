"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Clock,
  ArrowRight,
  MessageSquare,
  Shield,
  Award,
  CheckCircle2,
  Sparkles,
  MapPin,
  Phone,
  Calendar,
  Star,
} from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    value: "info@adelphibiosciences.com",
    href: "mailto:info@adelphibiosciences.com",
    color: "azure",
  },
  {
    icon: Linkedin,
    title: "Connect on LinkedIn",
    description: "Follow our updates and insights",
    value: "Adelphi Biosciences",
    href: "https://www.linkedin.com/company/adelphi-biosciences",
    color: "sapphire",
    external: true,
  },
];

const benefits = [
  "Free 30-minute strategic consultation",
  "No obligation assessment",
  "Confidential discussion of your program",
  "Expert regulatory insights",
];

const reasons = [
  { icon: MessageSquare, text: "Discuss your regulatory strategy" },
  { icon: Calendar, text: "Schedule a consultation" },
  { icon: Star, text: "Get a project assessment" },
  { icon: Award, text: "Learn about our services" },
];

function getColorClasses(color: string) {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    azure: { bg: "bg-azure/10", text: "text-azure", border: "border-azure/20" },
    sapphire: { bg: "bg-sapphire/10", text: "text-sapphire", border: "border-sapphire/20" },
    gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20" },
  };
  return colorMap[color] || colorMap.azure;
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden gradient-hero-radial">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212, 168, 83, 0.06) 0%, transparent 70%)" }}
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-azure/10 text-azure-light border border-azure/20 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MessageSquare className="w-4 h-4" />
              Start the Conversation
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let&apos;s{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #D4A853 100%)" }}
                >
                  Connect
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-azure/30 to-gold/20 -skew-x-3 rounded-sm"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to discuss your regulatory strategy? We&apos;d love to hear from you.
              Reach out and we&apos;ll respond within 24 business hours.
            </motion.p>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cloud to-transparent" />
      </section>

      {/* Main Contact Section */}
      <section className="relative py-20 lg:py-28 gradient-mesh">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-azure/10 via-transparent to-gold/5 rounded-[2rem] blur-2xl opacity-50" />

                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-slate/5">
                  {/* Form Header */}
                  <div className="mb-8 pb-8 border-b border-slate/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-azure to-sapphire flex items-center justify-center shadow-lg shadow-azure/30">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2
                          className="text-2xl font-bold text-charcoal"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          Send Us a Message
                        </h2>
                        <p className="text-slate">We&apos;ll get back to you within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </motion.div>

            {/* Sidebar - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Methods */}
              {contactMethods.map((method, index) => {
                const colors = getColorClasses(method.color);
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="group block bg-white rounded-2xl p-6 shadow-premium hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1 border border-slate/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <method.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-charcoal mb-1 group-hover:text-azure transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-sm text-slate mb-2">{method.description}</p>
                        <p className={`font-medium ${colors.text}`}>{method.value}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate/30 group-hover:text-azure group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>
                );
              })}

              {/* Response Time Card */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-premium border border-slate/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald/10 border border-emerald/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Fast Response</h3>
                    <p className="text-emerald text-sm font-medium">Within 24 hours</p>
                  </div>
                </div>
                <p className="text-slate text-sm">
                  We typically respond to all inquiries within one business day.
                  Urgent matters are prioritized.
                </p>
              </motion.div>

              {/* Why Reach Out Card */}
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#050A14] via-[#0A1628] to-[#0D1F3C]" />
                <div className="absolute inset-0 bg-gradient-to-br from-azure/10 to-transparent" />
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative p-6">
                  <h3
                    className="font-bold text-white text-lg mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Why Reach Out?
                  </h3>
                  <ul className="space-y-3">
                    {reasons.map((reason, index) => (
                      <li key={index} className="flex items-center gap-3 text-white/80 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                          <reason.icon className="w-4 h-4 text-gold" />
                        </div>
                        <span>{reason.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent rounded-2xl p-5 border border-gold/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-gold" />
                  <div>
                    <p className="font-bold text-charcoal">100% Success Rate</p>
                    <p className="text-sm text-slate">FDA submissions across career</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050A14] via-[#0A1628] to-[#0D1F3C]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center lg:text-left">
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Schedule Your{" "}
                <span className="gradient-text">Free Consultation</span>
              </h3>
              <p className="text-white/60 text-lg">
                No obligation. Confidential. Expert insights.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/80 text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
