"use client";

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ChevronRight, TrendingUp, ExternalLink } from 'lucide-react';
import { serviceData } from '@/lib/serviceData';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import RelatedServices from '@/components/RelatedServices';
import DownloadCTA from '@/components/DownloadCTA';

interface PageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

export default function ServiceDetailSubPage({ params }: PageProps) {
    const { category, slug } = use(params);
    const categoryData = serviceData[category];

    if (!categoryData) {
        return notFound();
    }

    const deliverable = categoryData.deliverables.find(d => d.slug === slug);

    if (!deliverable) {
        return notFound();
    }

    const { fullContent } = deliverable;

    // Determine theme color based on category
    const getThemeColor = (cat: string) => {
        switch (cat) {
            case 'regulatory-strategy': return 'teal';
            case 'cmc-quality': return 'blue';
            case 'fda-submissions': return 'purple';
            case 'global-submissions': return 'orange';
            case 'lifecycle-management': return 'emerald';
            case 'due-diligence': return 'indigo';
            default: return 'teal';
        }
    };

    const themeColor = getThemeColor(category);

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

    // Fallback image logic - reuse the category hero for now
    const heroImage = `/images/${category}-hero.png`;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt={fullContent.heroTitle}
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} to-slate-900/90 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-black/50" />
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
                        <Link href={`/services/${category}`} className="hover:text-white transition-colors">{categoryData.title}</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white truncate max-w-[200px]">{deliverable.title}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mt-12"
                    >
                        <Link
                            href={`/services/${category}`}
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to {categoryData.title}
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight text-white drop-shadow-lg">
                            {fullContent.heroTitle}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-md">
                            {fullContent.heroSubtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Column: Content */}
                        <div className="lg:w-2/3 space-y-16">
                            {/* Overview */}
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <h2 className="text-3xl font-bold text-[var(--color-primary-navy)] font-serif mb-6">Overview</h2>
                                <p className="leading-relaxed text-lg">
                                    {fullContent.introduction}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] font-serif mb-8">Key Features</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {fullContent.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                            <CheckCircle className={`w-6 h-6 ${theme.text} flex-shrink-0 mt-0.5`} />
                                            <span className="font-medium text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Our Process Timeline */}
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] font-serif mb-8">Our Process</h3>
                                <ProcessTimeline steps={fullContent.process} themeColor={themeColor} />
                            </div>

                            {/* FAQs */}
                            {fullContent.faqs && fullContent.faqs.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] font-serif mb-8">
                                        Frequently Asked Questions
                                    </h3>
                                    <FAQAccordion faqs={fullContent.faqs} themeColor={themeColor} />
                                </div>
                            )}

                            {/* Regulatory Guidance Links */}
                            {fullContent.relatedGuidance && fullContent.relatedGuidance.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] font-serif mb-6">
                                        Relevant Regulatory Guidance
                                    </h3>
                                    <div className="space-y-3">
                                        {fullContent.relatedGuidance.map((guidance, idx) => (
                                            <a
                                                key={idx}
                                                href={guidance.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:border-blue-200 hover:bg-blue-100 transition-all duration-200 group"
                                            >
                                                <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <div className="flex-1">
                                                    <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                                                        {guidance.title}
                                                    </div>
                                                    <div className="text-sm text-gray-600 mt-1">
                                                        Source: {guidance.source}
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-24 space-y-8">
                                {/* Benefits Box */}
                                <div className={`p-8 rounded-2xl bg-gradient-to-br ${theme.gradient} to-slate-900 text-white shadow-xl`}>
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                                        <TrendingUp className="w-5 h-5" /> Why Choose Us
                                    </h3>
                                    <ul className="space-y-4">
                                        {fullContent.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-white/90">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Request Info CTA */}
                                <DownloadCTA
                                    title="Get More Details"
                                    description="Request a personalized consultation and detailed information about this service."
                                    serviceName={deliverable.title}
                                    themeColor={themeColor}
                                />

                                {/* CTA Box */}
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center">
                                    <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-4">Ready to get started?</h3>
                                    <p className="text-gray-600 mb-6 text-sm">
                                        Contact our team to discuss your specific needs for {deliverable.title}.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className={`inline-flex w-full items-center justify-center px-6 py-3 rounded-xl ${theme.bg} text-white font-bold hover:opacity-90 transition-opacity`}
                                    >
                                        Schedule Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            {fullContent.testimonial && (
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-[var(--color-primary-navy)] font-serif mb-8 text-center">
                                What Our Clients Say
                            </h2>
                            <TestimonialCard
                                {...fullContent.testimonial}
                                themeColor={themeColor}
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Related Services */}
            <RelatedServices
                category={category}
                currentSlug={slug}
                services={categoryData.deliverables}
                themeColor={themeColor}
            />
        </div>
    );
}
