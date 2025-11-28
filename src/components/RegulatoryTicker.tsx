'use client';

import React from 'react';

const RegulatoryTicker = () => {
    const newsItems = [
        "FDA Updates Guidance on Decentralized Clinical Trials",
        "EMA Launches New Clinical Trials Information System (CTIS) Portal",
        "ICH E6(R3) Draft Guideline Released for Public Consultation",
        "FDA Issues New Draft Guidance on AI/ML in Drug Development",
        "PMDA Updates Consultation Procedures for Regenerative Medicine"
    ];

    return (
        <div className="bg-[var(--color-primary-navy)] text-white text-xs py-2 overflow-hidden border-b border-white/10 relative z-50">
            <div className="container mx-auto flex items-center">
                <span className="font-bold bg-[var(--color-accent-teal)] px-2 py-0.5 rounded text-[10px] uppercase tracking-wider mr-4 shrink-0">
                    Regulatory Pulse
                </span>
                <div className="overflow-hidden relative flex-1">
                    <div className="animate-marquee whitespace-nowrap flex gap-12">
                        {newsItems.map((item, index) => (
                            <span key={index} className="inline-flex items-center">
                                {item}
                                <span className="mx-4 text-[var(--color-accent-teal)]">•</span>
                            </span>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {newsItems.map((item, index) => (
                            <span key={`dup-${index}`} className="inline-flex items-center">
                                {item}
                                <span className="mx-4 text-[var(--color-accent-teal)]">•</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default RegulatoryTicker;
