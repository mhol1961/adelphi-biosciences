import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Regulatory Insights & Blog',
    description: 'Expert analysis, practical guidance, and strategic insights for navigating pharmaceutical regulatory affairs. Stay informed on FDA guidance, regulatory strategy, CMC quality, and global submissions.',
    keywords: [
        'pharmaceutical regulatory insights',
        'FDA guidance blog',
        'regulatory strategy articles',
        'drug development insights',
        'CMC quality blog',
        'IND submission guide',
        'NDA submission tips',
        'regulatory affairs news',
        'pharmaceutical consulting blog',
    ],
    openGraph: {
        title: 'Regulatory Insights & Blog | Adelphi Biosciences',
        description: 'Expert analysis, practical guidance, and strategic insights for navigating pharmaceutical regulatory affairs.',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Adelphi Biosciences Regulatory Insights',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Regulatory Insights & Blog | Adelphi Biosciences',
        description: 'Expert analysis and strategic insights for navigating pharmaceutical regulatory affairs.',
        images: ['/og-image.png'],
    },
};

export default function InsightsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
