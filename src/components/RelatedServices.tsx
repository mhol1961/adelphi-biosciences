"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface RelatedService {
    title: string;
    slug: string;
    description: string;
    icon: LucideIcon;
}

interface RelatedServicesProps {
    category: string;
    currentSlug: string;
    services: RelatedService[];
    themeColor?: string;
}

export default function RelatedServices({
    category,
    currentSlug,
    services,
    themeColor = 'teal'
}: RelatedServicesProps) {
    // Filter out current service and limit to 3
    const relatedServices = services
        .filter(service => service.slug !== currentSlug)
        .slice(0, 3);

    const getThemeClasses = (color: string) => {
        switch (color) {
            case 'teal': return { bg: 'bg-[var(--color-accent-teal)]', text: 'text-[var(--color-accent-teal)]', gradient: 'from-[var(--color-accent-teal)]' };
            case 'blue': return { bg: 'bg-[var(--color-primary-blue)]', text: 'text-[var(--color-primary-blue)]', gradient: 'from-[var(--color-primary-blue)]' };
            case 'purple': return { bg: 'bg-purple-600', text: 'text-purple-600', gradient: 'from-purple-600' };
            case 'orange': return { bg: 'bg-orange-500', text: 'text-orange-500', gradient: 'from-orange-500' };
            case 'emerald': return { bg: 'bg-emerald-600', text: 'text-emerald-600', gradient: 'from-emerald-600' };
            case 'indigo': return { bg: 'bg-indigo-600', text: 'text-indigo-600', gradient: 'from-indigo-600' };
            default: return { bg: 'bg-[var(--color-accent-teal)]', text: 'text-[var(--color-accent-teal)]', gradient: 'from-[var(--color-accent-teal)]' };
        }
    };

    const theme = getThemeClasses(themeColor);

    if (relatedServices.length === 0) return null;

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[var(--color-primary-navy)] font-serif mb-3">
                        Related Services
                    </h2>
                    <p className="text-gray-600">
                        Explore other ways we can support your regulatory needs
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {relatedServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.slug}
                                href={`/services/${category}/${service.slug}`}
                                className="block group"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="h-full bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-lg ${theme.bg} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-6 h-6 ${theme.text}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[var(--color-primary-navy)] mb-2 group-hover:text-[var(--color-primary-blue)] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                        {service.description}
                                    </p>
                                    <div className={`flex items-center text-sm font-semibold ${theme.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
