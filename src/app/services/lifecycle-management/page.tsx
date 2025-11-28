"use client";

import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { RefreshCw, FileText, AlertTriangle, Tag, Calendar } from 'lucide-react';

export default function LifecycleManagementPage() {
    const deliverables = [
        {
            title: "Post-Market Variations",
            slug: "post-market-variations",
            description: "Management of changes to your approved product (CMC, labeling, etc.) through Supplements, Amendments, and Variations.",
            icon: <RefreshCw className="w-6 h-6" />
        },
        {
            title: "Annual Reports (PADER/PSUR)",
            slug: "annual-reports",
            description: "Timely preparation and submission of mandatory periodic safety and status reports to maintain compliance.",
            icon: <Calendar className="w-6 h-6" />
        },
        {
            title: "Labeling Updates",
            slug: "labeling-updates",
            description: "Strategic management of labeling changes, including CCDS updates and negotiation with health authorities.",
            icon: <Tag className="w-6 h-6" />
        },
        {
            title: "Safety Reporting",
            slug: "safety-reporting",
            description: "Ongoing pharmacovigilance support, including adverse event reporting and safety signal management.",
            icon: <AlertTriangle className="w-6 h-6" />
        },
        {
            title: "License Renewals",
            slug: "license-renewals",
            description: "Tracking and management of marketing authorization renewals to ensure uninterrupted market access.",
            icon: <FileText className="w-6 h-6" />
        }
    ];

    const methodology = [
        {
            title: "Compliance Monitoring",
            description: "We continuously monitor your product's regulatory status and upcoming deadlines to prevent compliance lapses."
        },
        {
            title: "Change Control",
            description: "We assess the regulatory impact of proposed manufacturing or labeling changes to determine the appropriate filing strategy."
        },
        {
            title: "Efficiency Optimization",
            description: "We streamline your post-market maintenance activities to reduce burden and cost while maintaining robust compliance."
        },
        {
            title: "Commercial Alignment",
            description: "We align regulatory activities with commercial goals, supporting line extensions and new indications to maximize product value."
        }
    ];

    const stats = [
        { value: "100%", label: "Compliance Rate" },
        { value: "24/7", label: "Monitoring" },
        { value: "Zero", label: "Late Submissions" },
        { value: "Full", label: "Lifecycle Support" }
    ];

    return (
        <ServicePageLayout
            title="Sustained Compliance. Market Longevity."
            subtitle="Maximize your product's value throughout its entire commercial life. We ensure your asset remains compliant and competitive in a changing market."
            heroImage="/images/lifecycle-management-hero.png"
            themeColor="emerald"
            deliverables={deliverables}
            methodology={methodology}
            stats={stats}
        />
    );
}
