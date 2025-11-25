"use client";

import { motion } from "framer-motion";
import { Quote, Star, Building2, Users, TrendingUp, Clock, Award } from "lucide-react";

const testimonials = [
  {
    quote:
      "Peter's strategic guidance was instrumental in our successful NDA submission. His deep understanding of FDA expectations and proactive communication style made a complex process feel manageable. We couldn't have done it without him.",
    author: "VP of Regulatory Affairs",
    company: "Mid-Size Biotech",
    rating: 5,
  },
  {
    quote:
      "Working with Adelphi Biosciences gave us the confidence we needed during our FDA interactions. Peter's experience shows in every meeting and every document. He anticipates issues before they arise.",
    author: "Chief Scientific Officer",
    company: "Emerging Pharma Company",
    rating: 5,
  },
  {
    quote:
      "The regulatory due diligence Peter provided was thorough and insightful. His assessment directly influenced our investment decision and risk mitigation strategy. Highly recommend for any life science transaction.",
    author: "Managing Partner",
    company: "Life Sciences VC Firm",
    rating: 5,
  },
];

const stats = [
  { value: "100%", label: "Client Satisfaction", icon: Star },
  { value: "50+", label: "Successful Submissions", icon: TrendingUp },
  { value: "24h", label: "Average Response Time", icon: Clock },
  { value: "20+", label: "Years Experience", icon: Award },
];

const clientTypes = [
  "Biotech Startups",
  "Pharmaceutical Companies",
  "Life Science Investors",
  "Academic Spin-offs",
];

export function Testimonials() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden gradient-mesh">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-azure/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gold/10 text-gold border border-gold/15 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Star className="w-4 h-4 fill-current" />
            Client Success Stories
          </motion.span>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trusted by{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Industry Leaders</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-gold/20 to-azure/20 -skew-x-3 rounded-sm -z-10"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
            From emerging biotech to established pharmaceutical companies, our clients
            trust us with their most critical regulatory challenges.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-premium hover:shadow-premium-xl transition-all duration-500 hover:-translate-y-3 border border-slate/5 overflow-hidden">
                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Hover Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg shadow-gold/30 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 pt-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-charcoal leading-relaxed mb-8 text-[15px] relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate/10 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy/10 to-azure/10 flex items-center justify-center border border-navy/5">
                    <Building2 className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">{testimonial.author}</p>
                    <p className="text-sm text-azure font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative bg-gradient-to-br from-[#050A14] via-[#0A1628] to-[#0D1F3C] rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-azure/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/8 rounded-full blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-4 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <stat.icon className="w-7 h-7 text-gold" />
                    </div>
                    <div
                      className="text-4xl md:text-5xl font-extrabold text-white mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </div>
                    <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Client Types */}
              <div className="pt-10 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-azure" />
                    <span className="text-white/70 font-medium">Serving:</span>
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
