'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function BlogPage() {
        return (
                <div className="min-h-screen bg-white dark:bg-black">
                        <Navbar />

                        <main className="pt-20 pb-16">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="container-custom max-w-6xl mb-12 text-center"
                                >
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">My Blog</h1>
                                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                                Thoughts, insights, and explorations across technology, nature, personal experiences, and more.
                                        </p>
                                </motion.div>

                                <Blog />
                        </main>

                        <Footer />
                </div>
        );
} 