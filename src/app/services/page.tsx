"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  FileText,
  Users,
  RefreshCcw,
  Search,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Clock,
  Award,
  ChevronRight,
  Star,
} from "lucide-react";

const services = [
  {
    id: "strategy",
    icon: Target,
    title: "Pre-IND & Regulatory Strategy",
    subtitle: "Foundation for Success",
    description:
      "Develop comprehensive regulatory strategies that align with your business objectives and maximize the probability of approval success.",
    details: [
      "IND enabling study design and regulatory pathway assessment",
      "Target Product Profile (TPP) development",
      "Regulatory gap analysis and risk mitigation",
      "Global development strategy and planning",
      "Orphan drug and breakthrough therapy designation strategies",
    ],
    deliverables: [
      "Regulatory strategy document",
      "Development timeline with milestones",
      "Risk assessment matrix",
      "Agency meeting briefing materials",
    ],
    color: "azure",
    gradient: "from-azure to-sapphire",
  },
  {
    id: "submissions",
    icon: FileText,
    title: "NDA/BLA Submission Support",
    subtitle: "Precision Documentation",
    description:
      "Expert preparation and management of regulatory submissions to ensure completeness, compliance, and timely review.",
    details: [
      "CTD Module preparation and review",
      "eCTD publishing and submission management",
      "FDA correspondence and information requests",
      "Pre-submission meeting support",
      "Rolling submission strategies",
    ],
    deliverables: [
      "Complete submission-ready documents",
      "Quality review and gap analysis",
      "Submission timeline management",
      "Response to FDA queries",
    ],
    color: "gold",
    gradient: "from-gold to-gold-light",
  },
  {
    id: "fda-meetings",
    icon: Users,
    title: "FDA Meeting Preparation",
    subtitle: "Strategic Engagement",
    description:
      "Strategic preparation for all types of FDA meetings to ensure productive interactions and clear regulatory guidance.",
    details: [
      "Pre-IND, Type A, B, and C meeting preparation",
      "Briefing document development",
      "Meeting request strategy and timing",
      "Question development and response preparation",
      "Post-meeting analysis and follow-up",
    ],
    deliverables: [
      "Meeting request packages",
      "Comprehensive briefing documents",
      "Question & answer matrices",
      "Meeting minutes and action items",
    ],
    color: "sapphire",
    gradient: "from-sapphire to-azure",
  },
  {
    id: "lifecycle",
    icon: RefreshCcw,
    title: "Lifecycle Management",
    subtitle: "Sustained Compliance",
    description:
      "Ongoing regulatory support for approved products to maintain compliance and maximize product value.",
    details: [
      "Post-marketing commitment management",
      "Label updates and supplements",
      "Manufacturing change support (CBE, PAS)",
      "Annual report preparation",
      "Product lifecycle extension strategies",
    ],
    deliverables: [
      "Supplement submissions",
      "Updated labeling packages",
      "Compliance documentation",
      "Lifecycle strategy roadmaps",
    ],
    color: "emerald",
    gradient: "from-emerald to-teal",
  },
  {
    id: "due-diligence",
    icon: Search,
    title: "Regulatory Due Diligence",
    subtitle: "Investment Intelligence",
    description:
      "Thorough regulatory assessment for M&A transactions, licensing deals, and investment decisions.",
    details: [
      "Regulatory file review and assessment",
      "CMC and manufacturing evaluation",
      "Clinical development program review",
      "Risk identification and quantification",
      "Regulatory pathway feasibility analysis",
    ],
    deliverables: [
      "Due diligence reports",
      "Risk assessment summaries",
      "Regulatory strategy recommendations",
      "Development cost and timeline estimates",
    ],
    color: "azure",
    gradient: "from-azure-light to-azure",
  },
  {
    id: "designations",
    icon: Zap,
    title: "Orphan Drug & Fast Track",
    subtitle: "Accelerated Pathways",
    description:
      "Strategic support for obtaining FDA designations that accelerate development and provide commercial advantages.",
    details: [
      "Orphan drug designation applications",
      "Fast Track designation requests",
      "Breakthrough Therapy designation support",
      "Accelerated Approval pathway assessment",
      "Priority Review qualification",
    ],
    deliverables: [
      "Designation request packages",
      "Supporting documentation",
      "Agency communication strategy",
      "Designation maintenance plans",
    ],
    color: "gold",
    gradient: "from-gold-light to-gold",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your program, goals, and regulatory landscape",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description: "Develop tailored regulatory pathway and risk mitigation plan",
    icon: Target,
  },
  {
    number: "03",
    title: "Execution",
    description: "Hands-on support through submissions and FDA interactions",
    icon: FileText,
  },
  {
    number: "04",
    title: "Success",
    description: "Celebrate approval and plan for lifecycle management",
    icon: Award,
  },
];

function getColorClasses(color: string) {
  const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    azure: {
      bg: "bg-azure/10",
      text: "text-azure",
      border: "border-azure/20",
      gradient: "from-azure to-sapphire",
    },
    gold: {
      bg: "bg-gold/10",
      text: "text-gold",
      border: "border-gold/20",
      gradient: "from-gold to-gold-light",
    },
    sapphire: {
      bg: "bg-sapphire/10",
      text: "text-sapphire",
      border: "border-sapphire/20",
      gradient: "from-sapphire to-azure",
    },
    emerald: {
      bg: "bg-emerald/10",
      text: "text-emerald",
      border: "border-emerald/20",
      gradient: "from-emerald to-teal",
    },
  };
  return colorMap[color] || colorMap.azure;
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden gradient-hero-radial">
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
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-azure/10 text-azure-light border border-azure/20 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4" />
              Comprehensive Solutions
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Expert Regulatory Affairs{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #D4A853 100%)" }}
                >
                  Services
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
              className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From early development through commercialization, we provide the strategic guidance
              and hands-on support you need to navigate the regulatory landscape with confidence.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: Shield, label: "100% Success Rate", value: "FDA Submissions" },
                { icon: Clock, label: "24h Response", value: "Client Support" },
                { icon: Award, label: "20+ Years", value: "Experience" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{stat.label}</p>
                    <p className="text-white/50 text-sm">{stat.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="relative py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-navy/5 text-navy border border-navy/10 mb-6">
              <Star className="w-4 h-4" />
              Our Expertise
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Full-Spectrum{" "}
              <span className="gradient-text">Regulatory Support</span>
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Every service is backed by decades of hands-on FDA experience and a commitment
              to your success.
            </p>
          </motion.div>

          {/* Services Cards */}
          <div className="space-y-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="group relative bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-xl transition-all duration-500 border border-slate/5">
                    {/* Gradient Top Accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />

                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                      {/* Content Side */}
                      <div className={`p-10 lg:p-12 ${!isEven ? "lg:col-start-2" : ""}`}>
                        {/* Service Number & Icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <service.icon className={`w-8 h-8 ${colors.text}`} />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-slate uppercase tracking-wider">
                              {service.subtitle}
                            </span>
                            <h3
                              className="text-2xl lg:text-3xl font-bold text-charcoal"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-slate leading-relaxed mb-8 text-[15px]">
                          {service.description}
                        </p>

                        {/* Details List */}
                        <ul className="space-y-3 mb-8">
                          {service.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                            >
                              <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                              <span className="text-charcoal/80 text-[15px]">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <Link
                          href="/contact"
                          className={`group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${service.gradient} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
                        >
                          Discuss This Service
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Deliverables Side */}
                      <div
                        className={`relative p-10 lg:p-12 bg-gradient-to-br from-cloud to-white ${!isEven ? "lg:col-start-1" : ""}`}
                      >
                        {/* Decorative Pattern */}
                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
                            backgroundSize: "24px 24px",
                          }}
                        />

                        <div className="relative">
                          <h4 className="text-sm font-bold text-charcoal/60 uppercase tracking-[0.15em] mb-6">
                            Key Deliverables
                          </h4>
                          <ul className="space-y-4">
                            {service.deliverables.map((deliverable, i) => (
                              <motion.li
                                key={i}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate/5 hover:shadow-md transition-shadow duration-300"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                              >
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                <span className="text-charcoal font-medium">{deliverable}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {/* Trust Badge */}
                          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-navy/5 to-azure/5 border border-navy/10">
                            <div className="flex items-center gap-3">
                              <Shield className="w-5 h-5 text-navy" />
                              <span className="text-sm font-semibold text-navy">
                                Backed by 100% FDA submission success rate
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden gradient-mesh">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gold/10 text-gold border border-gold/15 mb-6">
              <ChevronRight className="w-4 h-4" />
              Our Approach
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How We Work{" "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              A proven methodology refined over two decades of successful FDA interactions.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-azure/30 to-transparent" />
                )}

                <div className="relative bg-white rounded-3xl p-8 shadow-premium hover:shadow-premium-xl transition-all duration-500 hover:-translate-y-2 border border-slate/5">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-azure to-sapphire flex items-center justify-center shadow-lg shadow-azure/30">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="w-14 h-14 rounded-2xl bg-azure/10 border border-azure/20 flex items-center justify-center mb-5 group-hover:bg-azure/20 transition-colors">
                      <step.icon className="w-7 h-7 text-azure" />
                    </div>
                    <h3
                      className="text-xl font-bold text-charcoal mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-slate text-[15px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050A14] via-[#0A1628] to-[#0D1F3C]" />

        {/* Decorative Elements */}
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
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gold/15 text-gold border border-gold/20 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Sparkles className="w-4 h-4" />
              Custom Solutions Available
            </motion.span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Need a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #D4A853 100%)" }}
              >
                Customized Solution?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every program is unique. Let&apos;s discuss how we can tailor our services to meet your
              specific regulatory needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <span className="relative">Schedule a Consultation</span>
                <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300"
              >
                Learn About Peter
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
