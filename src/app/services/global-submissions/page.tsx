"use client";

import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Globe, Map, Languages, Flag, Network } from 'lucide-react';

export default function GlobalSubmissionsPage() {
    const deliverables = [
        {
            title: "EMA Marketing Authorization (MAA)",
            slug: "ema-marketing-authorization",
            description: "Navigate the centralized procedure for European approval, including PIPS, scientific advice, and dossier preparation.",
            icon: <Flag className="w-6 h-6" />
        },
        {
            title: "Health Canada Submissions",
            slug: "health-canada-submissions",
            description: "Expert support for NDS (New Drug Submission) and SNDS filings, ensuring compliance with Canadian specific requirements.",
            icon: <Map className="w-6 h-6" />
        },
        {
            title: "PMDA (Japan) Consultations",
            slug: "pmda-consultations",
            description: "Strategic guidance for entering the Japanese market, including consultation management and bridging study strategies.",
            icon: <Languages className="w-6 h-6" />
        },
        {
            title: "Rest of World (ROW) Strategy",
            slug: "row-strategy",
            description: "Efficient rollout strategies for emerging markets in Asia, Latin America, and the MENA region.",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "Multi-Regional Clinical Trials",
            slug: "mrct-alignment",
            description: "Alignment of clinical development plans to satisfy requirements of multiple global health authorities simultaneously.",
            icon: <Network className="w-6 h-6" />
        }
    ];

    const methodology = [
        {
            title: "Global Assessment",
            description: "We evaluate your product's potential in key global markets and identify regional regulatory requirements."
        },
        {
            title: "Harmonization Strategy",
            description: "We design a core dossier approach to maximize content reuse across regions while addressing specific local nuances."
        },
        {
            title: "Local Representation",
            description: "Through our network of local experts, we provide in-country representation and language support where required."
        },
        {
            title: "Lifecycle Coordination",
            description: "We manage the complex choreography of global submissions and approvals to optimize your product's launch sequence."
        }
    ];

    const stats = [
        { value: "30+", label: "Countries" },
        { value: "EU", label: "EMA Expertise" },
        { value: "JP", label: "PMDA Experience" },
        { value: "CA", label: "Health Canada" }
    ];

    return (
        <ServicePageLayout
            title="Global Reach. Local Expertise."
            subtitle="Navigate international regulatory landscapes with confidence. We help you expand your footprint beyond the US with tailored global strategies."
            heroImage="/images/global-submissions-hero.png"
            themeColor="orange"
            deliverables={deliverables}
            methodology={methodology}
            stats={stats}
        />
    );
}
