"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Deliverable {
    title: string;
    slug: string;
    description?: string;
    icon?: React.ReactNode;
}

interface ServicePageLayoutProps {
    title: string;
    subtitle: string;
    heroImage: string;
    themeColor: string; // hex code or tailwind color class prefix
    deliverables: Deliverable[];
    methodology?: { title: string; description: string }[];
    stats?: { value: string; label: string }[];
    ctaTitle?: string;
    ctaDescription?: string;
}

export default function ServicePageLayout({
    title,
    subtitle,
    heroImage,
    themeColor,
    deliverables,
    methodology,
    stats,
    ctaTitle = "Ready to Accelerate Your Regulatory Success?",
    ctaDescription = "Contact us today to discuss your specific needs and how we can support your goals."
}: ServicePageLayoutProps) {

    // Map theme color to specific classes
    const getThemeClasses = (color: string) => {
        switch (color) {
            case 'teal': return { bg: 'bg-[var(--color-accent-teal)]', text: 'text-[var(--color-accent-teal)]', border: 'border-[var(--color-accent-teal)]', gradient: 'from-[var(--color-accent-teal)]' };
            case 'blue': return { bg: 'bg-[var(--color-primary-blue)]', text: 'text-[var(--color-primary-blue)]', border: 'border-[var(--color-primary-blue)]', gradient: 'from-[var(--color-primary-blue)]' };
            case 'purple': return { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600', gradient: 'from-purple-600' };
            case 'orange': return { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', gradient: 'from-orange-500' };
            case 'emerald': return { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', gradient: 'from-emerald-600' };
            case 'indigo': return { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-600', gradient: 'from-indigo-600' };
            default: return { bg: 'bg-[var(--color-accent-teal)]', text: 'text-[var(--color-accent-teal)]', border: 'border-[var(--color-accent-teal)]', gradient: 'from-[var(--color-accent-teal)]' };
        }
    };

    const theme = getThemeClasses(themeColor);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} to-slate-900/90 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-0 left-4 pt-8 flex items-center gap-2 text-sm font-medium text-white/60"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">{title.split('.')[0]}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mt-16"
                    >
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6`}>
                            <span className={`w-2 h-2 rounded-full bg-white animate-pulse`}></span>
                            <span className="text-xs font-bold text-white tracking-wide uppercase">Professional Services</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight text-white drop-shadow-lg">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-md">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats / Trust Section */}
            {stats && (
                <section className="py-12 bg-white border-b border-slate-100 relative z-20 -mt-8 mx-4 rounded-2xl shadow-xl max-w-7xl lg:mx-auto">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className={`text-4xl font-bold ${theme.text} mb-1 group-hover:scale-110 transition-transform duration-300`}>{stat.value}</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Deliverables Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-navy)] font-serif mb-4">
                            Key Deliverables
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive support tailored to your specific regulatory needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {deliverables.map((item, index) => (
                            <Link
                                href={`/services/${themeColor === 'teal' ? 'regulatory-strategy' : themeColor === 'blue' ? 'cmc-quality' : themeColor === 'purple' ? 'fda-submissions' : themeColor === 'orange' ? 'global-submissions' : themeColor === 'emerald' ? 'lifecycle-management' : 'due-diligence'}/${item.slug}`}
                                key={index}
                                className="block h-full"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full"
                                >
                                    {/* Hover Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Top Border Accent */}
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                                    <div className="relative z-10">
                                        {/* Icon Container with Glow */}
                                        <div className={`w-16 h-16 rounded-2xl ${theme.bg} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
                                            <div className="relative z-10">
                                                {item.icon ? item.icon : <CheckCircle className="w-8 h-8" />}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 group-hover:text-[var(--color-primary-blue)] transition-colors">
                                            {item.title}
                                        </h3>

                                        {item.description && (
                                            <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                                {item.description}
                                            </p>
                                        )}

                                        <div className={`flex items-center text-sm font-bold ${theme.text} opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 absolute bottom-8 left-8`}>
                                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                        {/* Spacer to prevent content overlap with absolute positioned link */}
                                        <div className="h-6"></div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology / Process Section */}
            {methodology && (
                <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className={`absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full ${theme.bg} opacity-10 blur-[100px]`} />
                        <div className={`absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full ${theme.bg} opacity-10 blur-[100px]`} />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-white">
                                Our Approach
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                A proven methodology designed to minimize risk and maximize speed to market.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-12">
                                {methodology.map((step, index) => (
                                    <div key={index} className="group flex gap-6 md:gap-10 relative">
                                        {/* Connecting Line */}
                                        {index !== methodology.length - 1 && (
                                            <div className="absolute left-[20px] top-[50px] bottom-[-48px] w-0.5 bg-white/10 group-hover:bg-white/20 transition-colors md:left-[20px]" />
                                        )}

                                        <div className="flex-shrink-0 flex flex-col items-center z-10">
                                            <div className={`w-10 h-10 rounded-full ${theme.bg} flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] ring-4 ring-[#0B1120]`}>
                                                {index + 1}
                                            </div>
                                        </div>

                                        <div className="pb-4 pt-1">
                                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[var(--color-accent-teal)] transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed text-lg">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className={`py-20 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} to-slate-900 opacity-90`}></div>
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        {ctaTitle}
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                        {ctaDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-primary-navy)] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                        >
                            Schedule a Consultation
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
