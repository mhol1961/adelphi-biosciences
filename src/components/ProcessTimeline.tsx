"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ProcessStep {
    title: string;
    description: string;
    duration?: string;
}

interface ProcessTimelineProps {
    steps: ProcessStep[];
    themeColor?: string;
}

export default function ProcessTimeline({ steps, themeColor = 'teal' }: ProcessTimelineProps) {
    const getThemeClasses = (color: string) => {
        switch (color) {
            case 'teal': return { bg: 'bg-[var(--color-accent-teal)]', ring: 'ring-[var(--color-accent-teal)]', text: 'text-[var(--color-accent-teal)]' };
            case 'blue': return { bg: 'bg-[var(--color-primary-blue)]', ring: 'ring-[var(--color-primary-blue)]', text: 'text-[var(--color-primary-blue)]' };
            case 'purple': return { bg: 'bg-purple-600', ring: 'ring-purple-600', text: 'text-purple-600' };
            case 'orange': return { bg: 'bg-orange-500', ring: 'ring-orange-500', text: 'text-orange-500' };
            case 'emerald': return { bg: 'bg-emerald-600', ring: 'ring-emerald-600', text: 'text-emerald-600' };
            case 'indigo': return { bg: 'bg-indigo-600', ring: 'ring-indigo-600', text: 'text-indigo-600' };
            default: return { bg: 'bg-[var(--color-accent-teal)]', ring: 'ring-[var(--color-accent-teal)]', text: 'text-[var(--color-accent-teal)]' };
        }
    };

    const theme = getThemeClasses(themeColor);

    return (
        <div className="relative">
            <div className="space-y-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="relative flex gap-6 group"
                    >
                        {/* Timeline Line */}
                        {index !== steps.length - 1 && (
                            <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-200 group-hover:bg-gray-300 transition-colors" />
                        )}

                        {/* Step Number */}
                        <div className="relative flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full ${theme.bg} text-white flex items-center justify-center font-bold text-lg shadow-lg ring-4 ring-white z-10 relative`}>
                                {index + 1}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-xl font-bold text-[var(--color-primary-navy)]">
                                        {step.title}
                                    </h3>
                                    {step.duration && (
                                        <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${theme.bg} bg-opacity-10 ${theme.text}`}>
                                            {step.duration}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Success Indicator */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: steps.length * 0.15 }}
                className="flex items-center justify-center gap-3 mt-8 p-4 bg-green-50 border border-green-200 rounded-xl"
            >
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">
                    Project Complete & Deliverables Provided
                </span>
            </motion.div>
        </div>
    );
}
