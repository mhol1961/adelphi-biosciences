"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Calendar, Search, Filter } from 'lucide-react';
import { getAllPosts, categoryInfo, BlogCategory, BlogPost } from '@/lib/insightsData';

export default function InsightsPage() {
    const allPosts = getAllPosts();
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter posts
    const filteredPosts = allPosts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = searchQuery === '' ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    // Get featured post (first post)
    const featuredPost = allPosts[0];
    const remainingPosts = selectedCategory === 'all' && searchQuery === ''
        ? filteredPosts.slice(1)
        : filteredPosts;

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

    return (
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6">
                            Regulatory Insights
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Expert analysis, practical guidance, and strategic insights for navigating pharmaceutical regulatory affairs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filter Bar */}
            <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-20 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-accent-teal)] focus:ring-2 focus:ring-[var(--color-accent-teal)]/20 outline-none transition-all"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                                    selectedCategory === 'all'
                                        ? 'bg-[var(--color-primary-navy)] text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                All Topics
                            </button>
                            {(Object.keys(categoryInfo) as BlogCategory[]).map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                                        selectedCategory === cat
                                            ? 'bg-[var(--color-primary-navy)] text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                                >
                                    {categoryInfo[cat].title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post (only show when no filters) */}
            {selectedCategory === 'all' && searchQuery === '' && featuredPost && (
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href={`/insights/${featuredPost.slug}`} className="group block">
                                <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-[var(--color-accent-teal)]/30 hover:shadow-xl transition-all duration-300">
                                    {/* Image */}
                                    <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-accent-teal)]">
                                        {featuredPost.featuredImage ? (
                                            <Image
                                                src={featuredPost.featuredImage}
                                                alt={featuredPost.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-6xl font-serif text-white/20">
                                                    {featuredPost.title.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[var(--color-primary-navy)]">
                                                Featured
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(featuredPost.category)}`}>
                                                {categoryInfo[featuredPost.category].title}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl lg:text-3xl font-bold font-serif text-[var(--color-primary-navy)] group-hover:text-[var(--color-accent-teal)] transition-colors">
                                            {featuredPost.title}
                                        </h2>

                                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                                            {featuredPost.excerpt}
                                        </p>

                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {formatDate(featuredPost.publishedAt)}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readTime} min read
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 pt-4">
                                            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-navy)] flex items-center justify-center text-white font-bold">
                                                {featuredPost.author.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-[var(--color-primary-navy)]">
                                                    {featuredPost.author.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {featuredPost.author.role}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-[var(--color-accent-teal)] font-semibold pt-2 group-hover:gap-3 transition-all">
                                            Read Article
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* All Posts Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    {remainingPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
                            <button
                                onClick={() => {
                                    setSelectedCategory('all');
                                    setSearchQuery('');
                                }}
                                className="mt-4 text-[var(--color-accent-teal)] font-semibold hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-[var(--color-primary-navy)] font-serif">
                                    {selectedCategory === 'all' && searchQuery === ''
                                        ? 'Latest Articles'
                                        : `${filteredPosts.length} Article${filteredPosts.length !== 1 ? 's' : ''} Found`
                                    }
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {remainingPosts.map((post, idx) => (
                                    <PostCard key={post.slug} post={post} index={idx} getCategoryColor={getCategoryColor} formatDate={formatDate} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-primary-blue)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
                            Stay Informed
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Get regulatory insights and updates delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-primary-navy)] font-bold rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                Subscribe to Updates
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Post Card Component
function PostCard({
    post,
    index,
    getCategoryColor,
    formatDate
}: {
    post: BlogPost;
    index: number;
    getCategoryColor: (cat: BlogCategory) => string;
    formatDate: (date: string) => string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/insights/${post.slug}`} className="group block h-full">
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[var(--color-accent-teal)]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-accent-teal)]">
                        {post.featuredImage ? (
                            <Image
                                src={post.featuredImage}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-5xl font-serif text-white/20">
                                    {post.title.charAt(0)}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                                {categoryInfo[post.category].title}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-[var(--color-primary-navy)] group-hover:text-[var(--color-accent-teal)] transition-colors mb-2 line-clamp-2">
                            {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(post.publishedAt)}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime} min
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}
