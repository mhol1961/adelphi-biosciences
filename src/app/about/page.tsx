"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Linkedin,
  Award,
  FileCheck,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Shield,
  Sparkles,
  CheckCircle2,
  Star,
  Users,
  Building2,
  FlaskConical,
  TrendingUp,
  MapPin,
  Quote,
  Handshake,
  Clock,
  UserCheck,
  Building,
} from "lucide-react";

const careerHighlights = [
  {
    company: "KalVista Pharmaceuticals",
    role: "Head of US Regulatory Affairs",
    years: "2019 - 2024",
    description:
      "Led US regulatory strategy for sebetralstat (Ekterly®), resulting in FDA approval as the first oral on-demand treatment for HAE attacks.",
    highlight: true,
  },
  {
    company: "Alkeus Pharmaceuticals",
    role: "Head of Regulatory Affairs",
    years: "2016 - 2019",
    description:
      "Directed regulatory strategy for novel therapeutics in development for Stargardt disease and other inherited retinal disorders.",
  },
  {
    company: "Aeglea Biotherapeutics",
    role: "Senior Director, Regulatory Affairs",
    years: "2014 - 2016",
    description:
      "Managed regulatory submissions and FDA interactions for enzyme replacement therapies targeting rare metabolic diseases.",
  },
  {
    company: "Acelity / Sirion Therapeutics",
    role: "Regulatory Leadership",
    years: "2010 - 2014",
    description:
      "Led regulatory affairs for advanced wound care products and ophthalmic therapeutics through development and commercialization.",
  },
  {
    company: "Smith & Nephew / Alcon",
    role: "Senior Regulatory Positions",
    years: "2000 - 2010",
    description:
      "Built foundational regulatory expertise across medical devices and pharmaceutical products in ophthalmology and wound care.",
  },
];

const therapeuticAreas = [
  "Hereditary Angioedema (HAE)",
  "Ophthalmology & Retinal Diseases",
  "Rare & Orphan Diseases",
  "Small Molecules",
  "Biologics & Biosimilars",
  "Gene Therapy",
];

const achievements = [
  {
    icon: FileCheck,
    title: "FDA Approval",
    value: "Ekterly®",
    description: "Named on FDA approval letter",
    color: "azure",
  },
  {
    icon: Award,
    title: "US Patent Holder",
    value: "#9,186,363",
    description: "AMD treatment methodology",
    color: "gold",
  },
  {
    icon: Briefcase,
    title: "Experience",
    value: "20+ Years",
    description: "Executive regulatory leadership",
    color: "sapphire",
  },
];

const clientTypes = [
  { icon: FlaskConical, label: "Biotech Startups" },
  { icon: Building2, label: "Pharmaceutical Companies" },
  { icon: TrendingUp, label: "Life Science Investors" },
  { icon: Users, label: "Emerging Pharma" },
];

const whyAdelphiComparison = [
  {
    aspect: "Who Works on Your Project",
    bigFirm: "Junior associates with limited FDA experience",
    adelphi: "Peter Parsonson directly - 20+ years executive experience",
  },
  {
    aspect: "FDA Approval Track Record",
    bigFirm: "Varies by assigned team member",
    adelphi: "Named on FDA approval letter for Ekterly®",
  },
  {
    aspect: "Response Time",
    bigFirm: "Routed through account managers",
    adelphi: "Direct access, typically within hours",
  },
  {
    aspect: "Pricing Model",
    bigFirm: "Billable hours with overhead markup",
    adelphi: "Transparent, project-based pricing",
  },
  {
    aspect: "Strategic Insight",
    bigFirm: "Template-driven approaches",
    adelphi: "Customized strategy from real-world experience",
  },
];

const credentials = [
  {
    type: "Education",
    items: [
      { title: "M.S. Regulatory Science", institution: "University of Southern California" },
    ],
  },
  {
    type: "Professional Memberships",
    items: [
      { title: "Regulatory Affairs Professionals Society (RAPS)", institution: "Member" },
      { title: "Drug Information Association (DIA)", institution: "Member" },
    ],
  },
];

// JSON-LD Structured Data for About Page
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Peter Parsonson",
  jobTitle: "Founder & Principal Consultant",
  worksFor: {
    "@type": "Organization",
    name: "Adelphi Biosciences",
    url: "https://adelphibiosciences.com",
  },
  description:
    "Named on FDA approval letter for Ekterly® (sebetralstat). US Patent Holder #9,186,363. Over 20 years of executive regulatory affairs leadership in pharmaceutical and biotechnology industries.",
  knowsAbout: [
    "FDA Regulatory Affairs",
    "IND/NDA/BLA Submissions",
    "Pharmaceutical Development",
    "Orphan Drug Designations",
    "Hereditary Angioedema",
    "Ophthalmology",
  ],
  award: [
    "Named on FDA Approval Letter for Ekterly® (2024)",
    "US Patent #9,186,363 - AMD Treatment Using Artemisone",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Southern California",
  },
  sameAs: ["https://www.linkedin.com/in/peterparsonson"],
};

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    azure: { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/20" },
    gold: { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20" },
    sapphire: { bg: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/20" },
  };
  return colors[color] || colors.azure;
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section - More Impactful */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/regulatory-affairs-expertise-about-hero-background.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-navy)]/90 via-[var(--color-primary-blue)]/85 to-[#0c4a6e]/90" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--color-accent-teal)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Shield className="w-4 h-4" />
              About Adelphi Biosciences
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-serif">
              Executive Regulatory Expertise,{" "}
              <span className="text-[var(--color-accent-teal)]">
                Personally Delivered
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Founded by a regulatory leader named on the FDA approval letter for Ekterly®,
              Adelphi Biosciences delivers boutique consulting with big-firm expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Achievement Banner */}
      <section className="relative -mt-8 z-10 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 p-1"
          >
            <div className="bg-[var(--color-primary-navy)] rounded-[22px] p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">
                    Featured Achievement
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-3">
                    Named on FDA Approval Letter for Ekterly®
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Peter Parsonson led the US regulatory strategy that resulted in FDA approval of
                    sebetralstat (Ekterly®) — the <strong className="text-white">first oral on-demand treatment</strong> for
                    hereditary angioedema (HAE) attacks. This landmark approval demonstrates his ability
                    to navigate complex regulatory pathways and deliver results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section - Redesigned */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent-teal)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Profile Card */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="sticky top-28">
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-primary-blue)]" />

                  {/* Profile Image - Using real photo */}
                  <div className="relative w-44 h-44 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/images/peter-parsonson-v2.png"
                      alt="Peter Parsonson - Founder & Principal Consultant"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="text-center relative z-10">
                    <h2 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-1 font-serif">
                      Peter Parsonson, MS
                    </h2>
                    <p className="text-[var(--color-accent-teal)] font-medium mb-2">
                      Founder & Principal Consultant
                    </p>
                    <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mb-6">
                      <MapPin className="w-4 h-4" />
                      Austin, Texas
                    </div>

                    <a
                      href="https://www.linkedin.com/in/peterparsonson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0077B5] text-white font-semibold text-sm hover:bg-[#006396] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  </div>

                  {/* Achievement Cards */}
                  <div className="mt-8 space-y-3">
                    {achievements.map((item, index) => {
                      const colorClasses = getColorClasses(item.color);
                      return (
                        <motion.div
                          key={index}
                          className={`flex items-start gap-4 p-4 rounded-2xl ${colorClasses.bg} border ${colorClasses.border}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className={`w-10 h-10 rounded-xl ${colorClasses.bg} flex items-center justify-center`}>
                            <item.icon className={`w-5 h-5 ${colorClasses.text}`} />
                          </div>
                          <div>
                            <p className={`text-sm font-bold ${colorClasses.text}`}>{item.value}</p>
                            <p className="text-xs text-gray-600 mt-0.5">{item.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-primary-navy)] mb-6 font-serif">
                  Executive-Level Expertise, Direct Access
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                  <p>
                    Peter Parsonson brings over two decades of regulatory affairs leadership to
                    Adelphi Biosciences. His career spans executive roles at leading pharmaceutical
                    and biotechnology companies, where he has successfully guided numerous drug
                    candidates through FDA approval.
                  </p>
                  <p>
                    Most notably, Peter was{" "}
                    <strong className="text-[var(--color-primary-navy)]">named on the FDA approval letter for Ekterly®</strong>{" "}
                    (sebetralstat), the first oral on-demand treatment for hereditary angioedema
                    attacks. This achievement represents the culmination of years of strategic
                    regulatory work and demonstrates his ability to navigate complex approval
                    pathways.
                  </p>
                  <p>
                    Peter is also a{" "}
                    <strong className="text-[var(--color-primary-navy)]">US Patent holder (#9,186,363)</strong> for an
                    innovative approach to treating age-related macular degeneration using
                    artemisone, reflecting his deep involvement in drug development beyond
                    regulatory strategy alone.
                  </p>
                </div>
              </div>

              {/* Education & Credentials */}
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-primary-navy)] mb-8 flex items-center gap-3 font-serif">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  Education & Credentials
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {credentials.map((section, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h4 className="font-bold text-[var(--color-primary-navy)] mb-4">{section.type}</h4>
                      <div className="space-y-3">
                        {section.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-teal)] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-gray-900">{item.title}</p>
                              <p className="text-sm text-gray-500">{item.institution}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Timeline */}
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-primary-navy)] mb-8 flex items-center gap-3 font-serif">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  Career Timeline
                </h3>
                <div className="space-y-6">
                  {careerHighlights.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`relative pl-8 pb-6 border-l-2 last:pb-0 ${
                        item.highlight ? "border-amber-400" : "border-gray-200"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div
                        className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-white ${
                          item.highlight ? "bg-amber-400" : "bg-[var(--color-accent-teal)]"
                        }`}
                      />
                      {item.highlight && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 mb-2">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          Key Achievement
                        </span>
                      )}
                      <h4 className="font-bold text-[var(--color-primary-navy)] text-lg">{item.company}</h4>
                      <p className="text-[var(--color-accent-teal)] text-sm font-medium mb-1">{item.role}</p>
                      <p className="text-gray-400 text-xs mb-2">{item.years}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Therapeutic Areas */}
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-primary-navy)] mb-6 flex items-center gap-3 font-serif">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-emerald-600" />
                  </div>
                  Therapeutic Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {therapeuticAreas.map((area, index) => (
                    <motion.span
                      key={area}
                      className="px-4 py-2.5 bg-gray-50 text-[var(--color-primary-navy)] text-sm font-medium rounded-xl border border-gray-200 hover:border-[var(--color-accent-teal)]/30 hover:bg-[var(--color-accent-teal)]/5 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Adelphi - Comparison Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-navy)] mb-4 font-serif">
              Why Choose{" "}
              <span className="text-[var(--color-accent-teal)]">Adelphi Biosciences</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The boutique advantage: executive expertise without the big-firm bureaucracy
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary-navy)]">
              <div className="p-6 text-white/70 font-medium"></div>
              <div className="p-6 text-center border-l border-white/10">
                <div className="flex items-center justify-center gap-2 text-white/70 font-medium">
                  <Building className="w-5 h-5" />
                  Large Consulting Firms
                </div>
              </div>
              <div className="p-6 text-center border-l border-white/10 bg-[var(--color-accent-teal)]/20">
                <div className="flex items-center justify-center gap-2 text-white font-bold">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  Adelphi Biosciences
                </div>
              </div>
            </div>

            {/* Rows */}
            {whyAdelphiComparison.map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 border-t border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-6 font-semibold text-[var(--color-primary-navy)] bg-gray-50">
                  {row.aspect}
                </div>
                <div className="p-6 text-gray-500 border-l border-gray-100 text-sm">
                  {row.bigFirm}
                </div>
                <div className="p-6 text-[var(--color-primary-navy)] border-l border-gray-100 bg-[var(--color-accent-teal)]/5 font-medium text-sm flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {row.adelphi}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types We Serve */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-navy)] mb-4 font-serif">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partnering with innovative companies across the life sciences industry
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientTypes.map((type, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[var(--color-accent-teal)]/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--color-primary-navy)]/5 flex items-center justify-center">
                  <type.icon className="w-8 h-8 text-[var(--color-accent-teal)]" />
                </div>
                <h3 className="font-bold text-[var(--color-primary-navy)]">{type.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Austin Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-[var(--color-accent-teal)] font-semibold mb-4">
                <MapPin className="w-5 h-5" />
                Based in Austin, Texas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-navy)] mb-6 font-serif">
                The Austin Advantage
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Austin has emerged as a major hub for life sciences innovation, with a thriving
                  biotech ecosystem and proximity to world-class research institutions.
                </p>
                <p>
                  Being based in Austin allows Adelphi Biosciences to work closely with local
                  biotech startups while serving clients nationwide. Our central time zone location
                  makes collaboration easy with teams across the country.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[var(--color-accent-teal)]" />
                  <span className="text-sm font-medium">Central Time Zone</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Handshake className="w-5 h-5 text-[var(--color-accent-teal)]" />
                  <span className="text-sm font-medium">In-Person Available</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="w-5 h-5 text-[var(--color-accent-teal)]" />
                  <span className="text-sm font-medium">Nationwide Clients</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FlaskConical className="w-5 h-5 text-[var(--color-accent-teal)]" />
                  <span className="text-sm font-medium">Biotech Hub Access</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/austin-skyline-premium.png"
                  alt="Austin, Texas skyline"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Austin, Texas</p>
                  <p className="text-white/80 text-sm">Heart of Texas Life Sciences</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy/Approach Section */}
      <section className="relative py-24 overflow-hidden bg-[var(--color-primary-navy)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Quote className="w-16 h-16 mx-auto mb-8 text-[var(--color-accent-teal)] opacity-50" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif">
              Our Philosophy
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mx-auto space-y-6">
              <p className="text-white/80 text-xl leading-relaxed">
                At Adelphi Biosciences, we believe that effective regulatory strategy requires more
                than technical expertise — it demands a deep understanding of your business
                objectives and the agility to adapt as your program evolves.
              </p>
              <p className="text-white/80 text-xl leading-relaxed">
                Unlike large consulting firms where your project may be staffed by junior associates,
                when you work with Adelphi Biosciences, <strong className="text-white">you work directly with Peter</strong>.
                This ensures consistent, senior-level attention to your regulatory needs without
                the overhead and bureaucracy of larger organizations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[var(--color-primary-navy)] via-[var(--color-primary-blue)] to-[var(--color-accent-teal)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
              Ready to Work Together?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Schedule a complimentary consultation to discuss how Adelphi Biosciences
              can support your regulatory strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-[var(--color-primary-navy)] bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Sparkles className="w-5 h-5" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
