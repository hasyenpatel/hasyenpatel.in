import React from 'react';

// Import light components normally (these load fast)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

// Import heavy components lazily
import {
        LazyHobbies,
        LazyMusic,
        LazyBooks,
        LazyContact
} from './components/LazyLoader';

// Dynamic import for Blog (since it's client-heavy)
import dynamic from 'next/dynamic';

const LazyBlog = dynamic(() => import('./components/Blog'), {
        loading: () => (
                <div className="py-20 bg-white dark:bg-black">
                        <div className="container-custom max-w-6xl text-center">
                                <div className="animate-pulse">
                                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-4"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto mb-8"></div>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                                {[...Array(6)].map((_, i) => (
                                                        <div key={i} className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                                                ))}
                                        </div>
                                </div>
                        </div>
                </div>
        ),
        ssr: false,
});

// Add metadata for SEO and performance
export const metadata = {
        title: 'Hasyen Patel - Personal Website',
        description: 'Personal website showcasing my work, thoughts, and experiences in technology, animation, and creativity.',
        keywords: 'Hasyen Patel, developer, animator, personal website, blog, portfolio',
        openGraph: {
                title: 'Hasyen Patel - Personal Website',
                description: 'Personal website showcasing my work, thoughts, and experiences in technology, animation, and creativity.',
                type: 'website',
        },
};

export default function Home() {
        return (
                <div className="min-h-screen bg-background">
                        {/* Load critical above-the-fold content immediately */}
                        <Navbar />
                        <Hero />
                        <About />

                        {/* Lazy load heavy components below the fold */}
                        <LazyHobbies />
                        <LazyBooks />
                        <LazyMusic />
                        <LazyBlog />
                        <LazyContact />
                        <Footer />
                </div>
        );
} 