"use client";

import React, { use } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag, Share2, Linkedin, Twitter, ChevronRight } from 'lucide-react';
import { getPostBySlug, getRelatedPosts, categoryInfo, BlogCategory } from '@/lib/insightsData';
import ReactMarkdown from 'react-markdown';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function BlogPostPage({ params }: PageProps) {
    const { slug } = use(params);
    const post = getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    const relatedPosts = getRelatedPosts(slug, 3);
    const baseUrl = 'https://adelphibiosciences.com';

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getCategoryColor = (category: BlogCategory) => {
        const colors: Record<BlogCategory, string> = {
            'regulatory-strategy': 'bg-teal-100 text-teal-800',
            'fda-guidance': 'bg-blue-100 text-blue-800',
            'global-regulatory': 'bg-orange-100 text-orange-800',
            'cmc-quality': 'bg-purple-100 text-purple-800',
            'industry-trends': 'bg-emerald-100 text-emerald-800',
            'case-studies': 'bg-indigo-100 text-indigo-800'
        };
        return colors[category];
    };

    const shareUrl = typeof window !== 'undefined' ? window.location.href : `${baseUrl}/insights/${slug}`;
    const shareText = `${post.title} - Adelphi Biosciences`;

    // JSON-LD structured data for SEO
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.role,
            "url": `${baseUrl}/about`
        },
        "publisher": {
            "@type": "Organization",
            "name": "Adelphi Biosciences",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/images/logo.svg`
            }
        },
        "datePublished": post.publishedAt,
        "dateModified": post.updatedAt || post.publishedAt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/insights/${slug}`
        },
        "image": post.featuredImage || `${baseUrl}/og-image.png`,
        "articleSection": categoryInfo[post.category].title,
        "keywords": post.tags.join(", "),
        "wordCount": post.content.split(/\s+/).length,
        "timeRequired": `PT${post.readTime}M`
    };

    return (
        <>
            {/* JSON-LD Schema for SEO */}
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[var(--color-primary-navy)] via-[var(--color-primary-blue)] to-[var(--color-accent-teal)] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-16">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-sm font-medium text-white/60 mb-8"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white truncate max-w-[300px]">{post.title}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <Link
                            href="/insights"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                                {categoryInfo[post.category].title}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            {post.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-white/80">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                                    {post.author.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{post.author.name}</div>
                                    <div className="text-sm text-white/70">{post.author.role}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {formatDate(post.publishedAt)}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime} min read
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Article Content */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:w-2/3"
                        >
                            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[var(--color-primary-navy)] prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-[var(--color-primary-navy)] prose-a:text-[var(--color-accent-teal)] prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:bg-gray-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-gray-200">
                                <ReactMarkdown
                                    components={{
                                        h2: ({ children }) => (
                                            <h2 className="text-2xl font-bold font-serif text-[var(--color-primary-navy)] mt-12 mb-4">
                                                {children}
                                            </h2>
                                        ),
                                        h3: ({ children }) => (
                                            <h3 className="text-xl font-bold font-serif text-[var(--color-primary-navy)] mt-8 mb-3">
                                                {children}
                                            </h3>
                                        ),
                                        p: ({ children }) => (
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {children}
                                            </p>
                                        ),
                                        ul: ({ children }) => (
                                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                                {children}
                                            </ul>
                                        ),
                                        ol: ({ children }) => (
                                            <ol className="list-decimal pl-6 space-y-2 mb-6">
                                                {children}
                                            </ol>
                                        ),
                                        li: ({ children }) => (
                                            <li className="text-gray-600">
                                                {children}
                                            </li>
                                        ),
                                        strong: ({ children }) => (
                                            <strong className="font-semibold text-[var(--color-primary-navy)]">
                                                {children}
                                            </strong>
                                        ),
                                        a: ({ href, children }) => (
                                            <Link
                                                href={href || '#'}
                                                className="text-[var(--color-accent-teal)] hover:underline"
                                            >
                                                {children}
                                            </Link>
                                        ),
                                        table: ({ children }) => (
                                            <div className="overflow-x-auto my-8">
                                                <table className="min-w-full border-collapse border border-gray-200 text-sm">
                                                    {children}
                                                </table>
                                            </div>
                                        ),
                                        th: ({ children }) => (
                                            <th className="bg-gray-100 border border-gray-200 p-3 text-left font-semibold text-[var(--color-primary-navy)]">
                                                {children}
                                            </th>
                                        ),
                                        td: ({ children }) => (
                                            <td className="border border-gray-200 p-3 text-gray-600">
                                                {children}
                                            </td>
                                        ),
                                        hr: () => (
                                            <hr className="my-8 border-gray-200" />
                                        ),
                                        em: ({ children }) => (
                                            <em className="text-gray-500 italic">
                                                {children}
                                            </em>
                                        ),
                                    }}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </div>

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <Tag className="w-5 h-5 text-gray-400" />
                                    {post.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Share */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-2 text-gray-500 font-medium">
                                        <Share2 className="w-5 h-5" />
                                        Share this article
                                    </span>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-[#0077B5] text-white rounded-lg hover:opacity-90 transition-opacity"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-opacity"
                                        aria-label="Share on Twitter"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3">
                            <div className="sticky top-24 space-y-8">
                                {/* Author Card */}
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[var(--color-primary-navy)] mb-4">About the Author</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-[var(--color-primary-navy)] flex items-center justify-center text-white font-bold text-xl">
                                            {post.author.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-[var(--color-primary-navy)]">{post.author.name}</div>
                                            <div className="text-sm text-gray-500">{post.author.role}</div>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                                        Peter Parsonson brings extensive experience in pharmaceutical regulatory affairs,
                                        having been named on the FDA approval letter for Ekterly® (sebetralstat). He founded
                                        Adelphi Biosciences to help companies navigate complex regulatory pathways.
                                    </p>
                                </div>

                                {/* CTA Card */}
                                <div className="bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-primary-blue)] rounded-2xl p-6 text-white">
                                    <h3 className="text-lg font-bold mb-2 text-white">Need Expert Guidance?</h3>
                                    <p className="text-white/80 text-sm mb-4">
                                        Our regulatory experts can help you navigate complex FDA requirements.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex w-full items-center justify-center px-6 py-3 bg-white text-[var(--color-primary-navy)] font-bold rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        Schedule a Consultation
                                    </Link>
                                </div>

                                {/* Newsletter */}
                                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                    <h3 className="text-lg font-bold text-[var(--color-primary-navy)] mb-2">Stay Updated</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Get regulatory insights delivered to your inbox.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex w-full items-center justify-center px-6 py-3 border-2 border-[var(--color-primary-navy)] text-[var(--color-primary-navy)] font-semibold rounded-xl hover:bg-[var(--color-primary-navy)] hover:text-white transition-colors"
                                    >
                                        Subscribe to Updates
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-serif text-[var(--color-primary-navy)] mb-8">
                            Related Articles
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost, idx) => (
                                <motion.div
                                    key={relatedPost.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <Link href={`/insights/${relatedPost.slug}`} className="group block h-full">
                                        <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[var(--color-accent-teal)]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                            <div className="relative h-48 bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-accent-teal)]">
                                                {relatedPost.featuredImage ? (
                                                    <Image
                                                        src={relatedPost.featuredImage}
                                                        alt={relatedPost.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="text-5xl font-serif text-white/20">
                                                            {relatedPost.title.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getCategoryColor(relatedPost.category)}`}>
                                                        {categoryInfo[relatedPost.category].title}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-[var(--color-primary-navy)] group-hover:text-[var(--color-accent-teal)] transition-colors mb-2 line-clamp-2">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-1">
                                                    {relatedPost.excerpt}
                                                </p>
                                                <div className="flex items-center gap-1 text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
                                                    <Clock className="w-3 h-3" />
                                                    {relatedPost.readTime} min read
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom CTA */}
            <section className="py-20 bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-primary-blue)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
                            Ready to Accelerate Your Regulatory Strategy?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Let our experts guide you through the complexities of FDA and global regulatory requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-primary-navy)] font-bold rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                Schedule a Consultation
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
