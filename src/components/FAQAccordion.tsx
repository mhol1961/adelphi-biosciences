"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
    themeColor?: string;
}

export default function FAQAccordion({ faqs, themeColor = 'teal' }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const getThemeClasses = (color: string) => {
        switch (color) {
            case 'teal': return { accent: 'text-[var(--color-accent-teal)]', border: 'border-[var(--color-accent-teal)]', bg: 'bg-[var(--color-accent-teal)]' };
            case 'blue': return { accent: 'text-[var(--color-primary-blue)]', border: 'border-[var(--color-primary-blue)]', bg: 'bg-[var(--color-primary-blue)]' };
            case 'purple': return { accent: 'text-purple-600', border: 'border-purple-600', bg: 'bg-purple-600' };
            case 'orange': return { accent: 'text-orange-500', border: 'border-orange-500', bg: 'bg-orange-500' };
            case 'emerald': return { accent: 'text-emerald-600', border: 'border-emerald-600', bg: 'bg-emerald-600' };
            case 'indigo': return { accent: 'text-indigo-600', border: 'border-indigo-600', bg: 'bg-indigo-600' };
            default: return { accent: 'text-[var(--color-accent-teal)]', border: 'border-[var(--color-accent-teal)]', bg: 'bg-[var(--color-accent-teal)]' };
        }
    };

    const theme = getThemeClasses(themeColor);

    return (
        <div className="space-y-3">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                            aria-expanded={isOpen}
                        >
                            <span className="font-semibold text-[var(--color-primary-navy)] text-lg flex-1">
                                {faq.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 ${theme.accent} flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
