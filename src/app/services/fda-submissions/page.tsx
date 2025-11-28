"use client";

import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { FileText, UploadCloud, Zap, Shield, BookOpen } from 'lucide-react';

export default function FDASubmissionsPage() {
    const deliverables = [
        {
            title: "IND, NDA, & BLA Authoring",
            slug: "ind-nda-bla-authoring",
            description: "End-to-end management of major applications, from initial strategy and content authoring to final compilation and submission.",
            icon: <FileText className="w-6 h-6" />
        },
        {
            title: "eCTD Publishing & Validation",
            slug: "ectd-publishing",
            description: "Technical preparation of your dossier in the mandatory eCTD format, ensuring zero technical validation errors.",
            icon: <UploadCloud className="w-6 h-6" />
        },
        {
            title: "505(b)(2) Applications",
            slug: "505b2-applications",
            description: "Specialized support for streamlined approval pathways that leverage existing data to reduce development time and cost.",
            icon: <BookOpen className="w-6 h-6" />
        },
        {
            title: "Fast Track & Breakthrough Requests",
            slug: "fast-track-breakthrough",
            description: "Compelling arguments for expedited programs to accelerate the review of drugs for serious conditions.",
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: "FDA Meeting Management",
            slug: "fda-meeting-management",
            description: "Strategic preparation for Type A, B, and C meetings, including briefing packages and rehearsal sessions.",
            icon: <Shield className="w-6 h-6" />
        }
    ];

    const methodology = [
        {
            title: "Strategy & Planning",
            description: "We define the submission content, timeline, and resource requirements, identifying critical path activities early."
        },
        {
            title: "Content Development",
            description: "Our medical writers and regulatory experts author high-quality summaries and overviews (Module 2) that tell your product's story."
        },
        {
            title: "Technical Compilation",
            description: "We publish documents into the eCTD structure, hyperlinking and validating to ensure a seamless review experience for the FDA."
        },
        {
            title: "Agency Interaction",
            description: "We manage all communications with the FDA during the review cycle, helping you respond effectively to Information Requests."
        }
    ];

    const stats = [
        { value: "100%", label: "Submission Acceptance" },
        { value: "First", label: "Cycle Approvals" },
        { value: "50+", label: "Major Submissions" },
        { value: "24h", label: "Response Time" }
    ];

    return (
        <ServicePageLayout
            title="Flawless Execution. First-Cycle Approval."
            subtitle="Expert management of IND, NDA, and BLA submissions. We handle the complex details of the submission process so you can focus on the science."
            heroImage="/images/fda-submissions-hero.png"
            themeColor="purple"
            deliverables={deliverables}
            methodology={methodology}
            stats={stats}
        />
    );
}
