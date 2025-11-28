import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Client Portal | Adelphi Biosciences',
    description: 'Secure client access for regulatory submissions and project management.',
};

export default function ClientPortalPage() {
    return (
        <div className="min-h-screen bg-[var(--color-bg-offwhite)] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full text-center border border-gray-100">
                <div className="w-20 h-20 bg-[var(--color-accent-mint)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🔒</span>
                </div>

                <h1 className="text-2xl font-bold text-[var(--color-primary-navy)] font-serif mb-4">
                    Client Portal Access
                </h1>

                <p className="text-gray-600 mb-8">
                    This area is restricted to authorized clients. Please log in to access your secure project dashboard and eCTD submissions.
                </p>

                <form className="space-y-4 text-left">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-navy)] outline-none"
                            placeholder="name@company.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary-navy)] outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full py-3 bg-[var(--color-primary-navy)] text-white font-bold rounded-lg hover:bg-[var(--color-primary-blue)] transition-colors shadow-lg">
                        Secure Login
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                        Need access? <Link href="/contact" className="text-[var(--color-accent-teal)] font-semibold hover:underline">Contact your project manager</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
