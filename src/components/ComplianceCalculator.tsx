'use client';

import React, { useState } from 'react';

const ComplianceCalculator = () => {
    const [selectedStage, setSelectedStage] = useState('');

    const stages = [
        { value: 'discovery', label: 'Discovery Phase' },
        { value: 'phase1', label: 'Phase I Clinical' },
        { value: 'phase2', label: 'Phase II Clinical' },
        { value: 'phase3', label: 'Phase III Clinical' },
        { value: 'nda', label: 'NDA/BLA Preparation' },
    ];

    const requirements = {
        discovery: {
            title: 'Discovery Phase Requirements',
            items: [
                'Target Product Profile (TPP) Draft',
                'Regulatory Strategy Plan',
                'Gap Analysis',
                'Pre-IND Meeting Request Strategy'
            ]
        },
        phase1: {
            title: 'Phase I Requirements',
            items: [
                'IND Application Submission',
                'Investigator\'s Brochure (IB)',
                'CMC Information (Phase Appropriate)',
                'Clinical Protocol Review'
            ]
        },
        phase2: {
            title: 'Phase II Requirements',
            items: [
                'End-of-Phase 2 (EOP2) Meeting Package',
                'Pediatric Study Plan (PSP) / PIP',
                'Dose-Finding Strategy',
                'CMC Scale-Up Strategy'
            ]
        },
        phase3: {
            title: 'Phase III Requirements',
            items: [
                'Special Protocol Assessment (SPA)',
                'CMC Validation Master Plan',
                'Pre-NDA/BLA Meeting Package',
                'Integrated Summary of Safety/Efficacy Plan'
            ]
        },
        nda: {
            title: 'NDA/BLA Requirements',
            items: [
                'eCTD Structure & Validation',
                'Module 1-5 Authoring',
                'Labeling Negotiation Strategy',
                'Mock Inspection Preparation'
            ]
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-primary-navy)] font-serif mb-2">
                    Compliance Readiness Tool
                </h3>
                <p className="text-gray-500 text-sm">
                    Select your current development stage to see key regulatory requirements.
                </p>
            </div>

            <div className="mb-8">
                <label htmlFor="stage-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Development Stage
                </label>
                <select
                    id="stage-select"
                    value={selectedStage}
                    onChange={(e) => setSelectedStage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-accent-teal)] focus:border-transparent outline-none transition-all bg-gray-50"
                >
                    <option value="" disabled>Select a stage...</option>
                    {stages.map((stage) => (
                        <option key={stage.value} value={stage.value}>
                            {stage.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${selectedStage ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {selectedStage && (
                    <div className="bg-[var(--color-accent-mint)] rounded-xl p-6 border border-[var(--color-accent-teal)]/20">
                        <h4 className="font-bold text-[var(--color-primary-navy)] mb-4 flex items-center">
                            <span className="text-xl mr-2">📋</span>
                            {requirements[selectedStage as keyof typeof requirements].title}
                        </h4>
                        <ul className="space-y-3">
                            {requirements[selectedStage as keyof typeof requirements].items.map((item, index) => (
                                <li key={index} className="flex items-start text-sm text-[var(--color-primary-navy)]">
                                    <span className="text-[var(--color-accent-teal)] font-bold mr-2">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-[var(--color-accent-teal)]/20 text-center">
                            <a href="/contact" className="text-sm font-semibold text-[var(--color-accent-teal)] hover:text-[var(--color-highlight-green)] transition-colors">
                                Get expert help with these requirements →
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {!selectedStage && (
                <div className="text-center py-8 text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <span className="text-4xl block mb-2">👆</span>
                    Select a stage above to begin
                </div>
            )}
        </div>
    );
};

export default ComplianceCalculator;
