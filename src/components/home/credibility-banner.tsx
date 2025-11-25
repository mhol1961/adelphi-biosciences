"use client";

import { motion } from "framer-motion";
import { FileCheck, Award, Clock, Briefcase, Shield, TrendingUp, Users, Star, ArrowUpRight } from "lucide-react";

const credentials = [
  {
    icon: FileCheck,
    title: "FDA Approval",
    stat: "Ekterly®",
    description: "Named on FDA approval letter for first oral HAE treatment",
    highlight: "Historic Achievement",
    color: "azure",
  },
  {
    icon: Award,
    title: "US Patent Holder",
    stat: "#9,186,363",
    description: "Patented innovation for AMD treatment methodology",
    highlight: "IP Protection",
    color: "gold",
  },
  {
    icon: Clock,
    title: "Industry Experience",
    stat: "20+ Years",
    description: "Executive regulatory leadership at top pharma companies",
    highlight: "Proven Leadership",
    color: "sapphire",
  },
  {
    icon: TrendingUp,
    title: "Success Rate",
    stat: "100%",
    description: "Perfect FDA submission success throughout career",
    highlight: "Unmatched Results",
    color: "emerald",
  },
];

const companies = [
  { name: "KalVista", role: "Head of Regulatory Affairs", years: "2019-2024" },
  { name: "Alkeus Pharma", role: "VP Regulatory", years: "2016-2019" },
  { name: "Aeglea Bio", role: "Regulatory Leadership", years: "2014-2016" },
];

const clientTypes = [
  "Biotech Startups",
  "Pharmaceutical Companies",
  "Life Science Investors",
  "Academic Spinouts",
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    azure: {
      bg: "bg-azure/10",
      text: "text-azure",
      border: "border-azure/20",
      gradient: "from-azure to-azure-light",
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
      gradient: "from-emerald to-success",
    },
  };
  return colors[color] || colors.azure;
};

export function CredibilityBanner() {
  return (
    <section className="relative py-28 overflow-hidden gradient-mesh">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-azure/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sapphire/3 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-navy/5 text-navy border border-navy/10 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Shield className="w-4 h-4" />
            Verified Credentials
          </motion.span>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Excellence That{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Speaks for Itself</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-azure/20 to-gold/20 -skew-x-3 rounded-sm -z-10"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
            Real achievements backed by FDA approvals, patents, and decades of executive leadership
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {credentials.map((credential, index) => {
            const colorClasses = getColorClasses(credential.color);
            return (
              <motion.div
                key={credential.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="relative h-full bg-white rounded-2xl p-7 border border-slate/10 shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient Top Border - Always visible, enhanced on hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Hover Glow */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${colorClasses.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl ${colorClasses.bg} border ${colorClasses.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <credential.icon className={`w-7 h-7 ${colorClasses.text}`} />
                  </div>

                  {/* Stat */}
                  <div
                    className={`text-4xl font-extrabold mb-2 tracking-tight bg-gradient-to-r ${colorClasses.gradient} bg-clip-text text-transparent`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {credential.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-charcoal mb-3">{credential.title}</h3>

                  {/* Description */}
                  <p className="text-slate text-sm leading-relaxed mb-4">{credential.description}</p>

                  {/* Highlight Badge */}
                  <div className="flex items-center gap-2">
                    <Star className={`w-3.5 h-3.5 ${colorClasses.text}`} />
                    <span className={`text-xs font-semibold ${colorClasses.text}`}>
                      {credential.highlight}
                    </span>
                  </div>

                  {/* Corner Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className={`w-5 h-5 ${colorClasses.text}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Executive Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative bg-gradient-to-br from-[#050A14] via-[#0A1628] to-[#0D1F3C] rounded-3xl p-10 md:p-14 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-azure/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/8 rounded-full blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative">
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/20 flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Executive Leadership
                    </h3>
                    <p className="text-white/60 text-lg max-w-lg">
                      Head of Regulatory Affairs at industry-leading pharmaceutical and biotech companies
                    </p>
                  </div>
                </div>

                {/* Stats Summary */}
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-display)" }}>
                      3+
                    </div>
                    <div className="text-white/50 text-sm">Companies</div>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-display)" }}>
                      20+
                    </div>
                    <div className="text-white/50 text-sm">Years</div>
                  </div>
                </div>
              </div>

              {/* Company Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {companies.map((company, index) => (
                  <motion.div
                    key={company.name}
                    className="group p-6 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">{company.name}</h4>
                      <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">{company.years}</span>
                    </div>
                    <p className="text-azure text-sm font-medium">{company.role}</p>
                  </motion.div>
                ))}
              </div>

              {/* Client Types */}
              <div className="pt-10 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-azure" />
                    <span className="text-white/70 font-medium">Trusted by:</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {clientTypes.map((type, index) => (
                      <motion.span
                        key={type}
                        className="px-4 py-2 rounded-full bg-white/[0.05] text-white/70 text-sm border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      >
                        {type}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
