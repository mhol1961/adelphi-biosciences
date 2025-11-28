import { Metadata } from 'next';
import { getPostBySlug, categoryInfo } from '@/lib/insightsData';

interface Props {
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    const baseUrl = 'https://adelphibiosciences.com';

    if (!post) {
        return {
            title: 'Article Not Found',
            description: 'The requested article could not be found.',
        };
    }

    return {
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        keywords: post.tags,
        authors: [{ name: post.author.name }],
        openGraph: {
            title: post.seoTitle || post.title,
            description: post.seoDescription || post.excerpt,
            type: 'article',
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt || post.publishedAt,
            authors: [post.author.name],
            section: categoryInfo[post.category].title,
            tags: post.tags,
            url: `${baseUrl}/insights/${slug}`,
            images: [
                {
                    url: post.featuredImage || '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.seoTitle || post.title,
            description: post.seoDescription || post.excerpt,
            images: [post.featuredImage || '/og-image.png'],
        },
        alternates: {
            canonical: `${baseUrl}/insights/${slug}`,
        },
    };
}

export default function BlogPostLayout({ children }: Props) {
    return <>{children}</>;
}
