import React from 'react';

const RegulatoryRoadmap = () => {
    const steps = [
        {
            number: '01',
            title: 'Strategic Feasibility',
            description: 'Early-stage gap analysis and regulatory pathway definition to de-risk development.',
            icon: '🧭'
        },
        {
            number: '02',
            title: 'Submission Readiness',
            description: 'Authoring and compiling IND/CTA, NDA/BLA, and MAA submissions with full eCTD compliance.',
            icon: '📄'
        },
        {
            number: '03',
            title: 'Agency Liaison',
            description: 'Direct representation and negotiation with FDA, EMA, and global health authorities.',
            icon: '🤝'
        },
        {
            number: '04',
            title: 'Lifecycle Management',
            description: 'Post-market variations, labeling updates, and CMC change controls.',
            icon: '🧬'
        }
    ];

    return (
        <section className="py-20 bg-[var(--color-bg-offwhite)]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-navy)] font-serif mb-4">
                        The Path to Approval
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Navigating the product lifecycle with precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-xl shadow-sm border-t-4 border-[var(--color-primary-navy)] hover:border-[var(--color-accent-teal)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
                        >
                            {/* Step Number Background */}
                            <div className="absolute -right-4 -top-4 text-9xl font-bold text-gray-50 opacity-50 select-none group-hover:text-[var(--color-accent-mint)] transition-colors duration-300">
                                {step.number}
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-[var(--color-accent-mint)] rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-[var(--color-accent-teal)] group-hover:text-white transition-colors duration-300">
                                    {step.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 font-serif">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RegulatoryRoadmap;
