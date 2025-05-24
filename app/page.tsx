'use client';

import React, { lazy, Suspense } from 'react';

// Import critical components immediately
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

// Lazy load components that are below the fold
const Hobbies = lazy(() => import('./components/Hobbies'));
const Music = lazy(() => import('./components/Music'));
const Books = lazy(() => import('./components/Books'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading component
const LoadingSpinner = () => (
        <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary dark:border-primary-dark"></div>
        </div>
);

export default function Home() {
        return (
                <div className="min-h-screen bg-background">
                        <Navbar />
                        <Hero />
                        <About />
                        <Suspense fallback={<LoadingSpinner />}>
                                <Hobbies />
                        </Suspense>
                        <Suspense fallback={<LoadingSpinner />}>
                                <Books />
                        </Suspense>
                        <Suspense fallback={<LoadingSpinner />}>
                                <Music />
                        </Suspense>
                        <Suspense fallback={<LoadingSpinner />}>
                                <Blog />
                        </Suspense>
                        <Suspense fallback={<LoadingSpinner />}>
                                <Contact />
                        </Suspense>
                        <Suspense fallback={<LoadingSpinner />}>
                                <Footer />
                        </Suspense>
                </div>
        );
} 