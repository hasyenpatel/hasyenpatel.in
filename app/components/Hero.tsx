'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
        // State for the animated role title
        const [roleIndex, setRoleIndex] = useState(0);
        const roles = ["Animator", "Software Engineer", "Designer", "Musician", "Software Engineer @ Amazon"];
        const [isSettled, setIsSettled] = useState(false);

        // Effect to cycle through roles and settle on the final one
        useEffect(() => {
                if (isSettled) return;

                const interval = setInterval(() => {
                        setRoleIndex(prev => {
                                const nextIndex = prev + 1;

                                // If we're at the last role, stop cycling
                                if (nextIndex === roles.length - 1) {
                                        setIsSettled(true);
                                        clearInterval(interval);
                                }

                                return nextIndex % roles.length;
                        });
                }, 1200); // Faster role changes - 1.2 seconds instead of 1.8

                return () => clearInterval(interval);
        }, [isSettled]);

        return (
                <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-4">
                        {/* Simplified background */}
                        <div className="absolute inset-0 overflow-hidden z-0">
                                {/* Static gradient - no animation to improve performance */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-black" />

                                {/* Reduced floating dots for better performance */}
                                {[...Array(4)].map((_, i) => (
                                        <motion.div
                                                key={i}
                                                className="absolute rounded-full bg-primary/5 dark:bg-primary-dark/5"
                                                style={{
                                                        top: `${20 + i * 20}%`,
                                                        left: `${10 + i * 20}%`,
                                                        width: '12px',
                                                        height: '12px',
                                                }}
                                                animate={{
                                                        y: [0, 20, 0],
                                                        opacity: [0.2, 0.4, 0.2],
                                                }}
                                                transition={{
                                                        duration: 8 + i * 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                }}
                                        />
                                ))}
                        </div>

                        <div className="container-custom relative z-10 max-w-4xl">
                                <div className="text-center">
                                        {/* Profile image - optimized loading */}
                                        <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                        duration: 0.6, // Much faster - 0.6s instead of 1.2s
                                                        type: "spring",
                                                        stiffness: 200, // Stiffer spring for snappier animation
                                                        damping: 20
                                                }}
                                                whileHover={{
                                                        scale: 1.02, // Subtle hover instead of 1.05
                                                        transition: { duration: 0.2 }
                                                }}
                                                className="relative mx-auto rounded-full overflow-hidden w-36 h-36 md:w-48 md:h-48 mb-6 border-4 border-white dark:border-gray-800 shadow-lg"
                                        >
                                                <Image
                                                        src="/images/landing.jpeg"
                                                        alt="Hasyen Patel"
                                                        width={192}
                                                        height={192}
                                                        className="object-cover w-full h-full"
                                                        priority // Critical for above-the-fold content
                                                        placeholder="blur"
                                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/xAAhEQABBAEDBQAAAAAAAAAAAAABABECITFhkfCRobHB0eH/2gAMAwEAAhEDEQA/AO5jB6PgmJ8ERADjUHIzRoYbmfgV4d4U/t2lXPktx+w+lH3LAD+gJ8E9bWt5ZF5vDOOkAQ0KqkbW9JOk5S7S7H8rGf6yFhKsE9bWt5ZF5vDOOkAQ0KqkbW9JOk5S7S7H8rGf6yFhKsE9bWt5ZF5vDOOkAQ0KqkbW9JOk5S7S7H8rGf6yFhKs"
                                                        sizes="(max-width: 768px) 144px, 192px"
                                                />
                                        </motion.div>

                                        {/* Name - faster animation */}
                                        <motion.h1
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 }} // Much faster - 0.5s with minimal delay
                                                className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-display"
                                        >
                                                Hasyen Patel
                                        </motion.h1>

                                        {/* Animated role titles - faster transitions */}
                                        <div className="h-12 mb-6 flex items-center justify-center">
                                                <AnimatePresence mode="wait">
                                                        <motion.div
                                                                key={roleIndex}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -10 }}
                                                                transition={{ duration: 0.3 }} // Much faster transitions
                                                                className={`px-4 py-2 rounded-lg ${isSettled
                                                                        ? "bg-primary/20 dark:bg-primary-dark/20 text-primary dark:text-primary-dark font-semibold"
                                                                        : "bg-gray-100 dark:bg-gray-800"
                                                                        }`}
                                                        >
                                                                <span className="text-lg md:text-xl"> {/* Slightly smaller text */}
                                                                        {roles[roleIndex]}
                                                                </span>
                                                        </motion.div>
                                                </AnimatePresence>
                                        </div>

                                        {/* Personal description - faster animation */}
                                        <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }} // Much faster - 0.5s with minimal delay
                                                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
                                        >
                                                AWS engineer by day, animator and musician at heart. I blend my technical expertise with creative
                                                passions to build solutions that are both functional and delightful. When not coding cloud
                                                solutions at Amazon, you'll find me creating animations, playing music, or exploring the
                                                outdoors through hiking and skiing adventures.
                                        </motion.p>
                                </div>
                        </div>
                </section>
        );
} 