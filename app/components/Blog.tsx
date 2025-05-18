'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define Blog Post type
type BlogPost = {
        id: string;
        title: string;
        excerpt: string;
        date: string;
        category: string;
        readTime: string;
        imageUrl?: string;
};

// Sample blog posts data
export const blogPosts: BlogPost[] = [
        {
                id: 'getting-started-with-aws',
                title: 'Getting Started with AWS',
                excerpt: 'Learn the basics of Amazon Web Services and how to set up your first cloud instance.',
                date: '2023-11-15',
                category: 'Tech',
                readTime: '8 min read',
                imageUrl: '/images/blog/aws.jpg'
        },
        {
                id: 'animation-principles',
                title: 'Core Principles of Animation',
                excerpt: 'Understanding the fundamental principles that make animations feel natural and engaging.',
                date: '2023-10-22',
                category: 'Animation',
                readTime: '6 min read',
                imageUrl: '/images/blog/animation.jpg'
        },
        {
                id: 'react-performance',
                title: 'Optimizing React Performance',
                excerpt: 'Tips and tricks to make your React applications faster and more responsive.',
                date: '2023-09-08',
                category: 'Development',
                readTime: '10 min read',
                imageUrl: '/images/blog/react.jpg'
        },
        {
                id: 'music-production',
                title: 'Home Music Production Setup',
                excerpt: 'Building an effective home studio for music production on a budget.',
                date: '2023-08-17',
                category: 'Music',
                readTime: '7 min read',
                imageUrl: '/images/blog/music.jpg'
        },
        {
                id: 'vancouver-experience',
                title: 'My Life in Vancouver',
                excerpt: 'Personal reflections on living and studying in one of Canada\'s most beautiful cities.',
                date: '2023-07-29',
                category: 'Personal',
                readTime: '12 min read',
                imageUrl: '/images/blog/vancouver.jpg'
        },
        {
                id: 'flora-fauna-bc',
                title: 'Exploring British Columbia\'s Flora and Fauna',
                excerpt: 'A naturalist\'s guide to the diverse plant and animal life in British Columbia.',
                date: '2023-06-14',
                category: 'Nature',
                readTime: '9 min read',
                imageUrl: '/images/blog/nature.jpg'
        },
        {
                id: 'yoga-for-developers',
                title: 'Yoga Practices for Desk-Bound Developers',
                excerpt: 'Simple yoga routines to combat the physical toll of prolonged coding sessions.',
                date: '2023-05-22',
                category: 'Health',
                readTime: '5 min read',
                imageUrl: '/images/blog/yoga.jpg'
        },
        {
                id: 'ai-revolution',
                title: 'The AI Revolution in Creative Industries',
                excerpt: 'How artificial intelligence is transforming animation, music, and visual arts.',
                date: '2023-04-10',
                category: 'AI',
                readTime: '11 min read',
                imageUrl: '/images/blog/ai.jpg'
        },
        {
                id: 'space-exploration',
                title: 'The New Era of Space Exploration',
                excerpt: 'From SpaceX to NASA\'s Artemis program: humanity\'s renewed journey to the stars.',
                date: '2023-03-15',
                category: 'Space',
                readTime: '13 min read',
                imageUrl: '/images/blog/space.jpg'
        },
        {
                id: 'india-tech-growth',
                title: 'India\'s Rising Tech Ecosystem',
                excerpt: 'How India is positioning itself as a global technology leader and innovation hub.',
                date: '2023-02-08',
                category: 'Tech',
                readTime: '10 min read',
                imageUrl: '/images/blog/india-tech.jpg'
        },
        {
                id: 'data-visualization',
                title: 'The Art of Data Visualization',
                excerpt: 'Techniques for transforming complex data into insightful visual stories.',
                date: '2023-01-25',
                category: 'Data',
                readTime: '8 min read',
                imageUrl: '/images/blog/data-viz.jpg'
        },
        {
                id: 'classical-music-influence',
                title: 'Classical Music\'s Influence on Modern Composition',
                excerpt: 'Tracing the threads between Bach, Mozart, and today\'s film and game scores.',
                date: '2022-12-13',
                category: 'Music',
                readTime: '7 min read',
                imageUrl: '/images/blog/classical-music.jpg'
        },
        {
                id: 'modern-literature',
                title: 'Essential Modern Literature Everyone Should Read',
                excerpt: 'A curated list of contemporary books that offer profound insights into our world.',
                date: '2022-11-07',
                category: 'Books',
                readTime: '9 min read',
                imageUrl: '/images/blog/books.jpg'
        },
        {
                id: 'sustainable-tech',
                title: 'Sustainable Technology: Beyond the Buzzwords',
                excerpt: 'How the tech industry is addressing environmental concerns through innovation.',
                date: '2022-10-15',
                category: 'Tech',
                readTime: '11 min read',
                imageUrl: '/images/blog/sustainable-tech.jpg'
        },
        {
                id: 'digital-health',
                title: 'The Digital Health Revolution',
                excerpt: 'How technology is transforming healthcare accessibility, diagnosis, and treatment.',
                date: '2022-09-20',
                category: 'Health',
                readTime: '10 min read',
                imageUrl: '/images/blog/digital-health.jpg'
        }
];

// Blog post card component
const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
        // Format date to be more readable
        const formatDate = (dateString: string) => {
                const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString('en-US', options);
        };

        // Get a background color based on category
        const getCategoryColor = (category: string) => {
                switch (category.toLowerCase()) {
                        case 'development':
                                return 'bg-blue-500';
                        case 'tech':
                                return 'bg-purple-500';
                        case 'animation':
                                return 'bg-green-500';
                        case 'music':
                                return 'bg-yellow-500';
                        case 'nature':
                                return 'bg-emerald-500';
                        case 'health':
                                return 'bg-red-500';
                        case 'ai':
                                return 'bg-indigo-500';
                        case 'space':
                                return 'bg-blue-700';
                        case 'personal':
                                return 'bg-amber-500';
                        case 'data':
                                return 'bg-cyan-500';
                        case 'books':
                                return 'bg-rose-500';
                        default:
                                return 'bg-gray-500';
                }
        };

        return (
                <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-black border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                        {/* Image */}
                        <div className="h-48 overflow-hidden relative">
                                {post.imageUrl ? (
                                        <div
                                                className="w-full h-full bg-cover bg-center"
                                                style={{
                                                        backgroundImage: `url(${post.imageUrl})`,
                                                }}
                                        />
                                ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary-dark/30" />
                                )}
                                {/* Category badge */}
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs text-white ${getCategoryColor(post.category)}`}>
                                        {post.category}
                                </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                                        <span>{formatDate(post.date)}</span>
                                        <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                                <Link
                                        href={`/blog/${post.id}`}
                                        className="inline-flex items-center text-primary dark:text-primary-dark font-medium text-sm"
                                >
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                </Link>
                        </div>
                </motion.div>
        );
};

export default function Blog() {
        const [searchTerm, setSearchTerm] = useState('');
        const [activeCategory, setActiveCategory] = useState('all');

        // Get unique categories
        const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category.toLowerCase())))];

        // Filter posts based on search term and category
        const filteredPosts = blogPosts.filter(post => {
                // Category filter
                if (activeCategory !== 'all' && post.category.toLowerCase() !== activeCategory) {
                        return false;
                }

                // Search filter
                if (searchTerm.trim() === '') {
                        return true;
                }

                const searchLower = searchTerm.toLowerCase();
                return (
                        post.title.toLowerCase().includes(searchLower) ||
                        post.excerpt.toLowerCase().includes(searchLower) ||
                        post.category.toLowerCase().includes(searchLower)
                );
        });

        // Expose blogPosts for external use
        Blog.getAllPosts = () => blogPosts;

        return (
                <section id="blog" className="py-20 bg-white dark:bg-black">
                        <div className="container-custom max-w-6xl">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="text-center mb-10"
                                >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-display text-gray-900 dark:text-white">Blog</h2>
                                        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                                My thoughts, tutorials, and insights on technology, development, and creativity.
                                        </p>
                                </motion.div>

                                {/* Search and filter controls */}
                                <div className="mb-8 flex flex-col md:flex-row items-center gap-4 justify-between">
                                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                                <div className="relative w-full md:w-64">
                                                        <input
                                                                type="text"
                                                                placeholder="Search blog posts..."
                                                                value={searchTerm}
                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition-all"
                                                        />
                                                        {searchTerm && (
                                                                <button
                                                                        onClick={() => setSearchTerm('')}
                                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                                                >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                                        </svg>
                                                                </button>
                                                        )}
                                                </div>

                                                {/* Category filter buttons */}
                                                <div className="flex items-center gap-3">
                                                        <span className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap">Filter by:</span>
                                                        <div className="flex gap-2 flex-wrap">
                                                                {categories.map((category) => (
                                                                        <button
                                                                                key={category}
                                                                                onClick={() => setActiveCategory(category)}
                                                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize ${activeCategory === category
                                                                                        ? 'bg-primary dark:bg-primary-dark text-white shadow-md'
                                                                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                                                                        }`}
                                                                        >
                                                                                {category}
                                                                        </button>
                                                                ))}
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                {/* Blog grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredPosts.map((post, index) => (
                                                <BlogCard key={post.id} post={post} index={index} />
                                        ))}
                                </div>

                                {/* Show message if no posts found */}
                                {filteredPosts.length === 0 && (
                                        <div className="text-center py-10">
                                                <p className="text-gray-600 dark:text-gray-400">No blog posts found matching your search criteria.</p>
                                        </div>
                                )}
                        </div>
                </section>
        );
} 