import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, TrendingUp, Users, Globe } from 'lucide-react';

const LeadershipSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[var(--color-bg-offwhite)] to-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image with Stats Overlay */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[6/7]">
                            <Image
                                src="/images/peter-parsonson-v2.png"
                                alt="Peter Parsonson, Founder & Principal Consultant"
                                fill
                                className="object-cover object-top"
                                priority
                            />

                            {/* Stats Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white mb-1">20+</div>
                                        <div className="text-white/80 text-xs uppercase tracking-wider">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                                        <div className="text-white/80 text-xs uppercase tracking-wider">Success Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border-4 border-[var(--color-accent-teal)]">
                            <Award className="w-8 h-8 text-[var(--color-accent-teal)]" />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-mint)] border border-[var(--color-accent-teal)]/20">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-teal)]"></span>
                            <span className="text-xs font-bold text-[var(--color-accent-teal)] uppercase tracking-wider">The Adelphi Difference</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-navy)] font-serif leading-tight">
                            Led by Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-teal)] to-[var(--color-highlight-green)]">Expertise</span>
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Founded by <strong className="text-[var(--color-primary-navy)]">Peter Parsonson</strong>, a seasoned regulatory affairs executive with over two decades of experience navigating the complex landscape of pharmaceutical approvals.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Peter's name appears on the FDA approval letter for <strong>Ekterly®</strong>, the first new prophylaxis for Hereditary Angioedema (HAE) in decades—a testament to his ability to shepherd breakthrough therapies through the most rigorous regulatory pathways.
                        </p>

                        {/* Key Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-mint)] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-5 h-5 text-[var(--color-accent-teal)]" />
                                </div>
                                <div>
                                    <div className="font-bold text-[var(--color-primary-navy)] text-sm">Strategic Vision</div>
                                    <div className="text-gray-600 text-xs">From IND to approval</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-mint)] flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-5 h-5 text-[var(--color-accent-teal)]" />
                                </div>
                                <div>
                                    <div className="font-bold text-[var(--color-primary-navy)] text-sm">Global Reach</div>
                                    <div className="text-gray-600 text-xs">FDA, EMA, PMDA expertise</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-mint)] flex items-center justify-center flex-shrink-0">
                                    <Users className="w-5 h-5 text-[var(--color-accent-teal)]" />
                                </div>
                                <div>
                                    <div className="font-bold text-[var(--color-primary-navy)] text-sm">Trusted Partner</div>
                                    <div className="text-gray-600 text-xs">Biotech to Big Pharma</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-mint)] flex items-center justify-center flex-shrink-0">
                                    <Award className="w-5 h-5 text-[var(--color-accent-teal)]" />
                                </div>
                                <div>
                                    <div className="font-bold text-[var(--color-primary-navy)] text-sm">Proven Results</div>
                                    <div className="text-gray-600 text-xs">100% submission success</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-navy)] text-white font-bold rounded-full hover:bg-[var(--color-primary-blue)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span>Learn More About Our Team</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
