"use client";

import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { TrendingUp, Target, Users, FileText, Lightbulb } from 'lucide-react';

export default function RegulatoryStrategyPage() {
    const deliverables = [
        {
            title: "Target Product Profile (TPP)",
            slug: "target-product-profile",
            description: "We help you define the optimal TPP to align commercial goals with regulatory feasibility, serving as a roadmap for your entire development program.",
            icon: <Target className="w-6 h-6" />
        },
        {
            title: "Regulatory Roadmap & Pathway",
            slug: "regulatory-roadmap",
            description: "Identify the most efficient path to market (e.g., 505(b)(2), accelerated approval) with a comprehensive strategic roadmap.",
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: "Pre-IND / Pre-CTA Meetings",
            slug: "pre-ind-meeting",
            description: "Expert preparation and representation at critical health authority meetings to gain alignment on your development plan.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Pediatric Study Plans (PSP/PIP)",
            slug: "pediatric-study-plans",
            description: "Strategic development of pediatric plans to meet FDA and EMA requirements while minimizing burden on your development timeline.",
            icon: <FileText className="w-6 h-6" />
        },
        {
            title: "Orphan Drug Designations",
            slug: "orphan-drug-designation",
            description: "Secure special status for rare disease treatments to gain financial incentives and market exclusivity.",
            icon: <Lightbulb className="w-6 h-6" />
        }
    ];

    const methodology = [
        {
            title: "Discovery & Assessment",
            description: "We begin by deeply understanding your science, your goals, and the competitive landscape to identify unique regulatory opportunities."
        },
        {
            title: "Strategic Formulation",
            description: "We develop a bespoke regulatory strategy that balances speed, risk, and commercial value, leveraging our deep institutional knowledge."
        },
        {
            title: "Agency Alignment",
            description: "We validate our strategy through early and effective interactions with health authorities, ensuring no surprises later in development."
        },
        {
            title: "Execution & Oversight",
            description: "We remain your partner through execution, adapting the strategy as data emerges and regulations evolve."
        }
    ];

    const stats = [
        { value: "100%", label: "Meeting Success Rate" },
        { value: "50+", label: "INDs Filed" },
        { value: "20+", label: "Years Experience" },
        { value: "Global", label: "Regulatory Reach" }
    ];

    return (
        <ServicePageLayout
            title="Strategic Vision. Regulatory Success."
            subtitle="Define your path to approval with data-driven regulatory intelligence. We align your scientific innovation with regulatory expectations to accelerate your journey to market."
            heroImage="/images/regulatory-strategy-hero.png"
            themeColor="teal"
            deliverables={deliverables}
            methodology={methodology}
            stats={stats}
        />
    );
}
