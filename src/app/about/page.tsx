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
    description: "Named on FDA approval letter for first oral HAE treatment",
    color: "azure",
  },
  {
    icon: Award,
    title: "US Patent Holder",
    value: "#9,186,363",
    description: "Patented AMD treatment methodology",
    color: "gold",
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    value: "20+ Years",
    description: "Executive regulatory leadership",
    color: "sapphire",
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
    "Named on FDA Approval Letter for Ekterly® (2025)",
    "US Patent #9,186,363 - AMD Treatment Using Artemisone",
  ],
  alumniOf: "University credentials",
  sameAs: ["https://www.linkedin.com/in/peterparsonson"],
};

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    azure: { bg: "bg-azure/10", text: "text-azure", border: "border-azure/20" },
    gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/20" },
    sapphire: { bg: "bg-sapphire/10", text: "text-sapphire", border: "border-sapphire/20" },
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero-radial" />
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

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-azure/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-azure/15 text-azure-light border border-azure/20 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Shield className="w-4 h-4" />
              About Adelphi Biosciences
            </motion.span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Executive{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #D4A853 100%)" }}
              >
                Regulatory Expertise
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Boutique regulatory affairs consulting delivering executive-level expertise and
              personalized service to life sciences companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
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
                <div className="relative bg-white rounded-3xl p-8 shadow-premium-lg border border-slate/10 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-[#0D1F3C] to-[#1A365D]" />

                  {/* Profile Image */}
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/images/founder-professional.svg"
                      alt="Peter Parsonson"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center relative z-10">
                    <h2
                      className="text-2xl font-bold text-charcoal mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Peter Parsonson, MS
                    </h2>
                    <p className="text-azure font-medium mb-6">Founder & Principal Consultant</p>

                    <a
                      href="https://www.linkedin.com/in/peterparsonson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy/5 text-navy font-semibold text-sm hover:bg-navy/10 transition-colors"
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
                            <p className="text-xs text-slate mt-0.5">{item.description}</p>
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
                <h3
                  className="text-3xl font-bold text-charcoal mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Executive-Level Expertise
                </h3>
                <div className="prose prose-lg text-slate max-w-none space-y-4">
                  <p>
                    Peter Parsonson brings over two decades of regulatory affairs leadership to
                    Adelphi Biosciences. His career spans executive roles at leading pharmaceutical
                    and biotechnology companies, where he has successfully guided numerous drug
                    candidates through FDA approval.
                  </p>
                  <p>
                    Most notably, Peter was{" "}
                    <strong className="text-charcoal">named on the FDA approval letter for Ekterly®</strong>{" "}
                    (sebetralstat), the first oral on-demand treatment for hereditary angioedema
                    attacks. This achievement represents the culmination of years of strategic
                    regulatory work and demonstrates his ability to navigate complex approval
                    pathways.
                  </p>
                  <p>
                    Peter is also a{" "}
                    <strong className="text-charcoal">US Patent holder (#9,186,363)</strong> for an
                    innovative approach to treating age-related macular degeneration using
                    artemisone, reflecting his deep involvement in drug development beyond
                    regulatory strategy alone.
                  </p>
                </div>
              </div>

              {/* Career Timeline */}
              <div>
                <h3
                  className="text-3xl font-bold text-charcoal mb-8 flex items-center gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-azure/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-azure" />
                  </div>
                  Career Timeline
                </h3>
                <div className="space-y-6">
                  {careerHighlights.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`relative pl-8 pb-6 border-l-2 last:pb-0 ${
                        item.highlight ? "border-gold" : "border-cloud"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div
                        className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-white ${
                          item.highlight ? "bg-gold" : "bg-azure"
                        }`}
                      />
                      {item.highlight && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold mb-2">
                          <Star className="w-3 h-3 fill-gold" />
                          Featured Achievement
                        </span>
                      )}
                      <h4 className="font-bold text-charcoal text-lg">{item.company}</h4>
                      <p className="text-azure text-sm font-medium mb-1">{item.role}</p>
                      <p className="text-silver text-xs mb-2">{item.years}</p>
                      <p className="text-slate text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Therapeutic Areas */}
              <div>
                <h3
                  className="text-3xl font-bold text-charcoal mb-6 flex items-center gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-emerald" />
                  </div>
                  Therapeutic Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {therapeuticAreas.map((area, index) => (
                    <motion.span
                      key={area}
                      className="px-4 py-2.5 bg-cloud text-charcoal text-sm font-medium rounded-xl border border-slate/10 hover:border-azure/30 hover:bg-azure/5 transition-all duration-300"
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

      {/* Philosophy Section */}
      <section className="relative py-24 overflow-hidden gradient-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our{" "}
              <span className="gradient-text">Approach</span>
            </h2>
            <div className="prose prose-lg text-slate max-w-none mx-auto space-y-6">
              <p>
                At Adelphi Biosciences, we believe that effective regulatory strategy requires more
                than technical expertise — it demands a deep understanding of your business
                objectives and the agility to adapt as your program evolves.
              </p>
              <p>
                Unlike large consulting firms where your project may be staffed by junior associates,
                when you work with Adelphi Biosciences, you work directly with Peter. This ensures
                consistent, senior-level attention to your regulatory needs without the overhead and
                bureaucracy of larger organizations.
              </p>
              <p>
                We partner with biotech startups, pharmaceutical companies, and life science
                investors who value personalized service and proven expertise over volume-based
                consulting models.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero-radial" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-azure/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Work Together?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how Adelphi Biosciences can support your regulatory strategy.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)" }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)" }}
              />
              <Sparkles className="relative w-5 h-5" />
              <span className="relative">Schedule a Consultation</span>
              <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
