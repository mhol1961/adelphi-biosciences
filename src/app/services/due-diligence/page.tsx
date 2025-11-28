"use client";

import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Search, Briefcase, FileSearch, AlertOctagon, BarChart } from 'lucide-react';

export default function DueDiligencePage() {
    const deliverables = [
        {
            title: "Regulatory Gap Analysis",
            slug: "regulatory-gap-analysis",
            description: "Deep-dive assessment of regulatory status and documentation to identify critical gaps and compliance risks.",
            icon: <Search className="w-6 h-6" />
        },
        {
            title: "M&A Support",
            slug: "ma-support",
            description: "Expert regulatory evaluation of target assets during mergers and acquisitions to inform valuation and deal structure.",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Portfolio Assessment",
            slug: "portfolio-assessment",
            description: "Strategic review of product portfolios to identify optimization opportunities and regulatory hurdles.",
            icon: <BarChart className="w-6 h-6" />
        },
        {
            title: "Compliance History Review",
            slug: "compliance-history-review",
            description: "Thorough investigation of past interactions with health authorities, inspection history, and enforcement actions.",
            icon: <FileSearch className="w-6 h-6" />
        },
        {
            title: "Risk Mitigation Strategies",
            slug: "risk-mitigation-strategies",
            description: "Actionable recommendations to address identified risks and enhance the value of the asset.",
            icon: <AlertOctagon className="w-6 h-6" />
        }
    ];

    const methodology = [
        {
            title: "Rapid Mobilization",
            description: "We understand deal timelines. We mobilize quickly to assemble a team of subject matter experts tailored to the asset."
        },
        {
            title: "Forensic Review",
            description: "We go beyond the surface, examining raw data, correspondence, and quality systems to uncover hidden liabilities."
        },
        {
            title: "Commercial Context",
            description: "We evaluate regulatory risks in the context of commercial potential, helping you understand the true value of the opportunity."
        },
        {
            title: "Actionable Reporting",
            description: "We deliver clear, concise reports that highlight red flags and provide estimated costs and timelines for remediation."
        }
    ];

    const stats = [
        { value: "$1B+", label: "Deals Supported" },
        { value: "48h", label: "Rapid Response" },
        { value: "360°", label: "Assessment" },
        { value: "Expert", label: "Insight" }
    ];

    return (
        <ServicePageLayout
            title="Risk Assessment. Value Confirmation."
            subtitle="Uncover regulatory risks and opportunities before you invest. Our due diligence services provide the clarity you need to make informed business decisions."
            heroImage="/images/due-diligence-hero.png"
            themeColor="indigo"
            deliverables={deliverables}
            methodology={methodology}
            stats={stats}
        />
    );
}
