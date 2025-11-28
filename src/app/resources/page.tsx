import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Resources & Knowledge Hub | Adelphi Biosciences',
    description: 'Regulatory checklists, whitepapers, and case studies for pharmaceutical professionals.',
};

const ResourceCard = ({ type, title, description, icon }: { type: string, title: string, description: string, icon: string }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
        <div className="h-2 bg-[var(--color-primary-navy)] group-hover:bg-[var(--color-accent-teal)] transition-colors"></div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[var(--color-primary-navy)] uppercase bg-gray-100 rounded-full">
                    {type}
                </span>
                <span className="text-2xl">{icon}</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary-navy)] mb-3 font-serif group-hover:text-[var(--color-accent-teal)] transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {description}
            </p>
            <button className="text-[var(--color-accent-teal)] font-semibold text-sm flex items-center group-hover:underline">
                Download Resource <span className="ml-1">↓</span>
            </button>
        </div>
    </div>
);

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-[var(--color-bg-offwhite)]">
            <section className="bg-[var(--color-primary-navy)] py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white font-serif mb-4">
                        Knowledge Hub
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Expert insights, checklists, and strategies to keep you ahead of the regulatory curve.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ResourceCard
                            type="Checklist"
                            title="The 10-Point Pre-IND Checklist"
                            description="Ensure your program is ready for the FDA. Avoid common clinical hold triggers with this essential validation list."
                            icon="✅"
                        />
                        <ResourceCard
                            type="Whitepaper"
                            title="Navigating FDA Interactions for Virtual Biotechs"
                            description="Strategies for small teams to manage high-stakes agency meetings effectively without a massive internal department."
                            icon="📄"
                        />
                        <ResourceCard
                            type="Case Study"
                            title="Accelerating Approval: Oncology Case Study"
                            description="How we reduced clinical hold time for a novel oncologic agent by 4 months through proactive CMC negotiation."
                            icon="📈"
                        />
                        <ResourceCard
                            type="Guide"
                            title="eCTD Validation Best Practices"
                            description="Technical specifications and common pitfalls to avoid when publishing your electronic submission."
                            icon="💻"
                        />
                        <ResourceCard
                            type="Template"
                            title="Investigator's Brochure Template"
                            description="A compliant structure for your IB to ensure clinical sites have the data they need."
                            icon="📋"
                        />
                        <ResourceCard
                            type="Whitepaper"
                            title="Orphan Drug Designation Strategy"
                            description="Maximizing exclusivity and tax credits for rare disease therapies."
                            icon="🧬"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-4 font-serif">
                        Stay Updated
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Join 2,000+ regulatory professionals receiving our monthly "Austin Bio-Briefs".
                    </p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-navy)] outline-none"
                        />
                        <button className="px-6 py-3 bg-[var(--color-primary-navy)] text-white font-bold rounded-lg hover:bg-[var(--color-primary-blue)] transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
