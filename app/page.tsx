import React from 'react';

// Import only critical components that we know work
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

// Optimized metadata for performance and SEO
export const metadata = {
        title: 'Hasyen Patel - AWS Engineer, Animator & Musician',
        description: 'AWS engineer by day, animator and musician at heart. Explore my journey in technology, creative projects, and personal insights.',
        keywords: 'Hasyen Patel, AWS engineer, developer, animator, musician, personal website, blog, portfolio, Amazon',
        authors: [{ name: 'Hasyen Patel' }],
        openGraph: {
                title: 'Hasyen Patel - AWS Engineer, Animator & Musician',
                description: 'AWS engineer by day, animator and musician at heart. Explore my journey in technology, creative projects, and personal insights.',
                type: 'website',
                url: 'https://hasyenpatel.in',
                images: [
                        {
                                url: '/images/landing.jpeg',
                                width: 192,
                                height: 192,
                                alt: 'Hasyen Patel',
                        },
                ],
        },
        twitter: {
                card: 'summary',
                title: 'Hasyen Patel - AWS Engineer, Animator & Musician',
                description: 'AWS engineer by day, animator and musician at heart.',
                images: ['/images/landing.jpeg'],
        },
        alternates: {
                canonical: 'https://hasyenpatel.in',
        },
};

export default function Home() {
        return (
                <div className="min-h-screen bg-background">
                        {/* Critical above-the-fold content - optimized for fast loading */}
                        <Navbar />
                        <Hero />
                        <About />
                        <Footer />
                </div>
        );
} 