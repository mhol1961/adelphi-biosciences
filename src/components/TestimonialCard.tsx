"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    company: string;
    themeColor?: string;
}

export default function TestimonialCard({
    quote,
    author,
    role,
    company,
    themeColor = 'teal'
}: TestimonialProps) {
    const getThemeClasses = (color: string) => {
        switch (color) {
            case 'teal': return { bg: 'bg-[var(--color-accent-teal)]', text: 'text-[var(--color-accent-teal)]', border: 'border-[var(--color-accent-teal)]' };
            case 'blue': return { bg: 'bg-[var(--color-primary-blue)]', text: 'text-[var(--color-primary-blue)]', border: 'border-[var(--color-primary-blue)]' };
            case 'purple': return { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600' };
            case 'orange': return { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500' };
            case 'emerald': return { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600' };
            case 'indigo': return { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-600' };
            default: return { bg: 'bg-[var(--color-accent-teal)]', text: 'text-[var(--color-accent-teal)]', border: 'border-[var(--color-accent-teal)]' };
        }
    };

    const theme = getThemeClasses(themeColor);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
        >
            {/* Quote Icon */}
            <div className={`absolute -top-4 left-8 w-12 h-12 rounded-full ${theme.bg} flex items-center justify-center shadow-lg`}>
                <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-4 mt-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{quote}"
            </blockquote>

            {/* Author Info */}
            <div className={`pt-4 border-t ${theme.border} border-opacity-20`}>
                <p className="font-bold text-[var(--color-primary-navy)] mb-1">
                    {author}
                </p>
                <p className="text-sm text-gray-600">
                    {role}
                </p>
                <p className={`text-sm font-semibold ${theme.text} mt-1`}>
                    {company}
                </p>
            </div>
        </motion.div>
    );
}
