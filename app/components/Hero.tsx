'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
        return (
                <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
                        {/* Static background */}
                        <div className="absolute inset-0 overflow-hidden z-0">
                                {/* Subtle background pattern */}
                                <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 dark:from-primary-dark/10 dark:via-secondary-dark/10 dark:to-accent-dark/10" />

                                {/* Bottom decorative bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 dark:from-primary-dark/10 dark:via-secondary-dark/10 dark:to-accent-dark/10" />
                        </div>

                        <div className="container-custom relative z-10 max-w-4xl">
                                <div className="text-center">
                                        {/* Profile image with subtle animation */}
                                        <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.8 }}
                                                className="relative mx-auto rounded-full overflow-hidden w-32 h-32 md:w-40 md:h-40 mb-8 border-4 border-white dark:border-gray-800 shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary-dark/10 dark:to-secondary-dark/10"
                                        >
                                                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-primary/50 dark:text-primary-dark/50">
                                                        HP
                                                </div>
                                        </motion.div>

                                        <motion.h1
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                                className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-display"
                                        >
                                                Hasyen Patel
                                        </motion.h1>

                                        <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                                className="mb-6"
                                        >
                                                <span className="text-xl md:text-2xl text-primary dark:text-primary-dark font-medium">
                                                        Developer, Creator & Innovator
                                                </span>
                                        </motion.div>

                                        <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
                                        >
                                                Building digital experiences that combine beautiful design with powerful functionality.
                                                I specialize in crafting responsive web applications that put users first.
                                        </motion.p>

                                        <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                                className="flex flex-wrap justify-center gap-4"
                                        >
                                                <a href="#about" className="btn-primary">
                                                        Learn More
                                                </a>
                                                <a href="#contact" className="py-3 px-6 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300">
                                                        Get in Touch
                                                </a>
                                        </motion.div>
                                </div>
                        </div>

                        {/* Scroll indicator */}
                        <motion.div
                                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                        >
                                <motion.div
                                        animate={{ y: [0, 8, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="text-primary dark:text-primary-dark"
                                >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                </motion.div>
                        </motion.div>
                </section>
        );
} 