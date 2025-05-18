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
                }, 1800); // Change role every 1.8 seconds

                return () => clearInterval(interval);
        }, [isSettled]);

        return (
                <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
                        {/* Simple elegant gradient background */}
                        <div className="absolute inset-0 overflow-hidden z-0">
                                <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30"
                                        animate={{
                                                background: [
                                                        "linear-gradient(to bottom right, rgba(239, 246, 255, 1), rgba(238, 242, 255, 1), rgba(250, 245, 255, 1))",
                                                        "linear-gradient(to bottom right, rgba(238, 242, 255, 1), rgba(250, 245, 255, 1), rgba(239, 246, 255, 1))",
                                                        "linear-gradient(to bottom right, rgba(250, 245, 255, 1), rgba(239, 246, 255, 1), rgba(238, 242, 255, 1))"
                                                ]
                                        }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        style={{
                                                background: "linear-gradient(to bottom right, rgba(239, 246, 255, 1), rgba(238, 242, 255, 1), rgba(250, 245, 255, 1))"
                                        }}
                                />

                                {/* Dark mode overlay - only visible in dark mode */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-indigo-950/30 to-purple-950/30 opacity-0 dark:opacity-100 transition-opacity duration-300"></div>

                                {/* Subtle floating dots */}
                                {[...Array(8)].map((_, i) => (
                                        <motion.div
                                                key={i}
                                                className="absolute rounded-full bg-primary/10 dark:bg-primary-dark/10"
                                                style={{
                                                        top: `${Math.random() * 100}%`,
                                                        left: `${Math.random() * 100}%`,
                                                        width: `${Math.random() * 20 + 8}px`,
                                                        height: `${Math.random() * 20 + 8}px`,
                                                }}
                                                animate={{
                                                        y: [0, Math.random() * 60 - 30],
                                                        x: [0, Math.random() * 60 - 30],
                                                        opacity: [0.3, 0.6, 0.3],
                                                }}
                                                transition={{
                                                        duration: Math.random() * 10 + 15,
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
                                                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                transition={{
                                                        duration: 1.2,
                                                        type: "spring",
                                                        stiffness: 100
                                                }}
                                                whileHover={{
                                                        scale: 1.05,
                                                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
                                                }}
                                                className="relative mx-auto rounded-full overflow-hidden w-36 h-36 md:w-48 md:h-48 mb-8 border-4 border-white dark:border-gray-800 shadow-lg"
                                        >
                                                <motion.div
                                                        initial={{ scale: 1.2 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ duration: 2, ease: "easeOut" }}
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
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.3 }}
                                                className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white font-display"
                                        >
                                                Hasyen Patel
                                        </motion.h1>

                                        {/* Animated role titles */}
                                        <div className="h-14 mb-8 flex items-center justify-center">
                                                <AnimatePresence mode="wait">
                                                        <motion.div
                                                                key={roleIndex}
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -20 }}
                                                                transition={{ duration: 0.5 }}
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
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.7 }}
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