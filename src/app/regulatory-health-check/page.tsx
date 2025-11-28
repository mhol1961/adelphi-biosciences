import React from 'react';
import ComplianceCalculator from '@/components/ComplianceCalculator';

export const metadata = {
    title: 'Regulatory Health Check | Adelphi Biosciences',
    description: 'Get a free 15-minute regulatory feasibility audit for your pharmaceutical program.',
};

export default function HealthCheckPage() {
    return (
        <div className="min-h-screen bg-[var(--color-bg-offwhite)]">
            {/* Hero */}
            <section className="bg-[var(--color-primary-navy)] py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white font-serif mb-4">
                        Regulatory Health Check
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Assess your program's readiness and identify potential hurdles before they become costly delays.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 -mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Calculator Tool */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[var(--color-accent-teal)]">
                            <h2 className="text-xl font-bold text-[var(--color-primary-navy)] mb-2">
                                Why Perform a Health Check?
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Regulatory landscapes shift constantly. A proactive audit can reveal gaps in your CMC strategy, clinical design, or submission planning that could save months of development time.
                            </p>
                        </div>

                        <ComplianceCalculator />
                    </div>

                    {/* Right Column: Lead Gen Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-primary-navy)] to-[var(--color-accent-teal)]"></div>

                        <h2 className="text-2xl font-bold text-[var(--color-primary-navy)] mb-2 font-serif">
                            Request Your Free Audit
                        </h2>
                        <p className="text-gray-500 text-sm mb-8">
                            Confidential. No obligation. Expert insights.
                        </p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-navy)] outline-none" placeholder="Jane" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-navy)] outline-none" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-navy)] outline-none" placeholder="jane@biotech.com" />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Organization</label>
                                <input type="text" id="company" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-navy)] outline-none" placeholder="Acme Pharma" />
                            </div>

                            <div>
                                <label htmlFor="phase" className="block text-sm font-medium text-gray-700 mb-1">Current Phase</label>
                                <select id="phase" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-navy)] outline-none bg-white">
                                    <option>Discovery / Pre-Clinical</option>
                                    <option>Phase I</option>
                                    <option>Phase II</option>
                                    <option>Phase III</option>
                                    <option>Registration / Submission</option>
                                    <option>Post-Market</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">Briefly describe your challenge</label>
                                <textarea id="challenge" rows={3} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-navy)] outline-none" placeholder="e.g., Preparing for Pre-IND meeting..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-[var(--color-primary-navy)] text-white font-bold rounded-lg hover:bg-[var(--color-primary-blue)] transition-colors shadow-lg">
                                Request Audit
                            </button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                By submitting this form, you agree to our privacy policy. Your IP is protected.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
