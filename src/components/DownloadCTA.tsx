"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, FileText, CheckCircle2 } from 'lucide-react';

interface DownloadCTAProps {
    title: string;
    description: string;
    serviceName?: string;
    themeColor?: string;
}

export default function DownloadCTA({
    title,
    description,
    serviceName = 'this service',
    themeColor = 'teal'
}: DownloadCTAProps) {
    const getThemeClasses = (color: string) => {
        switch (color) {
            case 'teal': return { bg: 'bg-[var(--color-accent-teal)]', hover: 'hover:bg-[var(--color-accent-teal)]/90', gradient: 'from-[var(--color-accent-teal)]' };
            case 'blue': return { bg: 'bg-[var(--color-primary-blue)]', hover: 'hover:bg-[var(--color-primary-blue)]/90', gradient: 'from-[var(--color-primary-blue)]' };
            case 'purple': return { bg: 'bg-purple-600', hover: 'hover:bg-purple-700', gradient: 'from-purple-600' };
            case 'orange': return { bg: 'bg-orange-500', hover: 'hover:bg-orange-600', gradient: 'from-orange-500' };
            case 'emerald': return { bg: 'bg-emerald-600', hover: 'hover:bg-emerald-700', gradient: 'from-emerald-600' };
            case 'indigo': return { bg: 'bg-indigo-600', hover: 'hover:bg-indigo-700', gradient: 'from-indigo-600' };
            default: return { bg: 'bg-[var(--color-accent-teal)]', hover: 'hover:bg-[var(--color-accent-teal)]/90', gradient: 'from-[var(--color-accent-teal)]' };
        }
    };

    const theme = getThemeClasses(themeColor);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${theme.gradient} to-slate-800 p-8 shadow-xl`}
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold !text-white mb-3">
                    {title}
                </h3>
                <p className="!text-white/80 leading-relaxed mb-6">
                    {description}
                </p>

                {/* What You'll Get */}
                <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-2 !text-white/90 text-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-white" />
                        <span className="text-white/90">Personalized consultation</span>
                    </div>
                    <div className="flex items-center gap-2 !text-white/90 text-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-white" />
                        <span className="text-white/90">Detailed service information</span>
                    </div>
                    <div className="flex items-center gap-2 !text-white/90 text-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-white" />
                        <span className="text-white/90">Custom timeline & proposal</span>
                    </div>
                </div>

                {/* Contact Button */}
                <Link
                    href={`/contact?service=${encodeURIComponent(serviceName)}`}
                    className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[var(--color-primary-navy)] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Request Information</span>
                </Link>

                <p className="text-xs !text-white/60 mt-4">
                    We&apos;ll respond within 24 hours
                </p>
            </div>
        </motion.div>
    );
}
