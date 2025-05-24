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
                }, 900); // Change role every 0.9 seconds (was 1.8)

                return () => clearInterval(interval);
        }, [isSettled]);

        return (
                <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-4">
                        {/* Simple elegant gradient background */}
                        <div className="absolute inset-0 overflow-hidden z-0">
                                <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:hidden"
                                        animate={{
                                                background: [
                                                        "linear-gradient(to bottom right, rgba(239, 246, 255, 1), rgba(238, 242, 255, 1), rgba(250, 245, 255, 1))",
                                                        "linear-gradient(to bottom right, rgba(238, 242, 255, 1), rgba(250, 245, 255, 1), rgba(239, 246, 255, 1))",
                                                        "linear-gradient(to bottom right, rgba(250, 245, 255, 1), rgba(239, 246, 255, 1), rgba(238, 242, 255, 1))"
                                                ]
                                        }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        style={{
                                                background: "linear-gradient(to bottom right, rgba(239, 246, 255, 1), rgba(238, 242, 255, 1), rgba(250, 245, 255, 1))"
                                        }}
                                />

                                {/* Dark mode overlay - only visible in dark mode */}
                                <div className="absolute inset-0 bg-black opacity-0 dark:opacity-100 transition-opacity duration-150"></div>

                                {/* Subtle floating dots - visible in both light and dark modes */}
                                {[...Array(6)].map((_, i) => (
                                        <motion.div
                                                key={i}
                                                className="absolute rounded-full bg-primary/10 dark:bg-primary-dark/10"
                                                style={{
                                                        top: `${Math.random() * 100}%`,
                                                        left: `${Math.random() * 100}%`,
                                                        width: `${Math.random() * 16 + 6}px`,
                                                        height: `${Math.random() * 16 + 6}px`,
                                                }}
                                                animate={{
                                                        y: [0, Math.random() * 40 - 20],
                                                        x: [0, Math.random() * 40 - 20],
                                                        opacity: [0.2, 0.5, 0.2],
                                                }}
                                                transition={{
                                                        duration: Math.random() * 6 + 8,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        yoyo: true,
                                                }}
                                        />
                                ))}
                        </div>

                        <div className="container-custom relative z-10 max-w-4xl">
                                <div className="text-center">
                                        {/* Profile image */}
                                        <motion.div
                                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                transition={{
                                                        duration: 0.6,
                                                        type: "spring",
                                                        stiffness: 120
                                                }}
                                                whileHover={{
                                                        scale: 1.05,
                                                        transition: { duration: 0.2 }
                                                }}
                                                className="relative mx-auto rounded-full overflow-hidden w-36 h-36 md:w-48 md:h-48 mb-8 border-4 border-white dark:border-gray-800 shadow-lg"
                                        >
                                                <motion.div
                                                        initial={{ scale: 1.1 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                                        className="w-full h-full"
                                                >
                                                        <Image
                                                                src="/images/landing.jpeg"
                                                                alt="Hasyen Patel"
                                                                width={192}
                                                                height={192}
                                                                className="object-cover w-full h-full"
                                                                priority
                                                        />
                                                </motion.div>
                                        </motion.div>

                                        <motion.h1
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-display"
                                        >
                                                Hasyen Patel
                                        </motion.h1>

                                        {/* Animated role titles */}
                                        <div className="h-14 mb-8 flex items-center justify-center">
                                                <AnimatePresence mode="wait">
                                                        <motion.div
                                                                key={roleIndex}
                                                                initial={{ opacity: 0, y: 15 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -15 }}
                                                                transition={{ duration: 0.3 }}
                                                                className={`px-6 py-2 rounded-lg ${isSettled
                                                                        ? "bg-primary/20 dark:bg-primary-dark/20 text-primary dark:text-primary-dark font-semibold"
                                                                        : "bg-gray-100 dark:bg-gray-800"
                                                                        }`}
                                                        >
                                                                <span className="text-xl md:text-2xl">
                                                                        {roles[roleIndex]}
                                                                </span>
                                                        </motion.div>
                                                </AnimatePresence>
                                        </div>

                                        {/* Personal description */}
                                        <motion.p
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
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