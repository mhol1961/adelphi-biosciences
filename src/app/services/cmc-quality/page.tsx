"use client";

import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Microscope, FileCheck, ShieldCheck, Activity, Database } from 'lucide-react';

export default function CMCQualityPage() {
    const deliverables = [
        {
            title: "Module 3 Authorship & Review",
            slug: "module-3-authorship",
            description: "Comprehensive writing and critical review of CTD Module 3 (Quality) to ensure your manufacturing data supports approval.",
            icon: <FileCheck className="w-6 h-6" />
        },
        {
            title: "GMP Compliance Audits",
            slug: "gmp-compliance-audits",
            description: "Mock inspections and gap analyses to ensure your manufacturing facilities and quality systems are inspection-ready.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: "21 CFR Part 11 Compliance",
            slug: "21-cfr-part-11",
            description: "Validation and documentation support for electronic records and signatures to meet strict FDA digital compliance standards.",
            icon: <Database className="w-6 h-6" />
        },
        {
            title: "Stability Data Assessment",
            slug: "stability-data-assessment",
            description: "Design and analysis of stability protocols to support shelf-life claims and storage conditions.",
            icon: <Activity className="w-6 h-6" />
        },
        {
            title: "Impurity Qualification",
            slug: "impurity-qualification",
            description: "Strategic guidance on qualifying impurities and degradants to meet ICH guidelines and ensure patient safety.",
            icon: <Microscope className="w-6 h-6" />
        }
    ];

    const methodology = [
        {
            title: "Gap Analysis",
            description: "We review your current CMC data and quality systems against current regulatory standards to identify critical vulnerabilities."
        },
        {
            title: "Remediation Planning",
            description: "We develop a prioritized action plan to address gaps, balancing compliance risks with business timelines."
        },
        {
            title: "Technical Execution",
            description: "Our experts work alongside your technical teams to generate data, write reports, and implement quality controls."
        },
        {
            title: "Submission Readiness",
            description: "We compile and polish your CMC dossier, ensuring a cohesive narrative that justifies your control strategy to regulators."
        }
    ];

    const stats = [
        { value: "0", label: "Refuse to File (RTF)" },
        { value: "100%", label: "Audit Success" },
        { value: "Global", label: "GMP Standards" },
        { value: "Qb", label: "Quality by Design" }
    ];

    return (
        <ServicePageLayout
            title="Manufacturing Excellence. Compliance Assured."
            subtitle="Bridge the gap between technical operations and regulatory requirements. We ensure your CMC strategy is robust, compliant, and ready for scrutiny."
            heroImage="/images/cmc-quality-hero.png"
            themeColor="blue"
            deliverables={deliverables}
            methodology={methodology}
            stats={stats}
        />
    );
}
