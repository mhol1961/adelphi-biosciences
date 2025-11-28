import React from 'react';
import Link from 'next/link';

const AustinAdvantage = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 relative h-[400px] lg:h-full">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                        style={{
                            backgroundImage: 'url("/images/austin-skyline-premium.png")',
                            backgroundColor: '#0A2540'
                        }}
                    ></div>
                    {/* Gradient Overlay for text readability if needed, or just style */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-navy)]/80 to-transparent mix-blend-multiply"></div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 bg-white relative">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent-mint)] rounded-bl-full opacity-20 pointer-events-none"></div>

                    <div className="max-w-xl relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-[var(--color-accent-teal)] uppercase bg-[var(--color-accent-mint)] rounded-full">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-teal)]"></span>
                            The Austin Advantage
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-navy)] mb-6 font-serif leading-tight">
                            Agility Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-navy)] to-[var(--color-accent-teal)]">Compliance</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-body)] mb-6 leading-relaxed font-light">
                            Headquartered in Austin, Texas—a hub of biotechnology and innovation. We bring the <strong className="text-[var(--color-primary-navy)]">agility of the tech sector</strong> to the rigor of pharmaceutical compliance.
                        </p>
                        <p className="text-[var(--color-text-body)] mb-10 leading-relaxed">
                            While others are stuck in traditional consulting models, we leverage modern tools and adaptive strategies to keep your regulatory timeline moving forward.
                        </p>

                        <Link
                            href="/about"
                            className="group inline-flex items-center justify-center px-8 py-3 text-base font-bold text-[var(--color-primary-navy)] bg-transparent border-2 border-[var(--color-primary-navy)] rounded-full hover:bg-[var(--color-primary-navy)] hover:text-white transition-all duration-300"
                        >
                            Learn About Our Approach
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AustinAdvantage;
