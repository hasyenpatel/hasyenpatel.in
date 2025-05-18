'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Hobbies', href: '#hobbies' },
        { name: 'Music', href: '#music' },
        { name: 'Books', href: '#books' },
        { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
        const [isScrolled, setIsScrolled] = useState(false);
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

        // Handle scroll effect
        useEffect(() => {
                const handleScroll = () => {
                        if (window.scrollY > 50) {
                                setIsScrolled(true);
                        } else {
                                setIsScrolled(false);
                        }
                };

                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return (
                <>
                        <motion.nav
                                initial={{ y: -100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                                        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg py-2 shadow-sm'
                                        : 'bg-transparent py-6'
                                        }`}
                        >
                                <div className="container-custom flex items-center justify-between">
                                        {/* Logo */}
                                        <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                                <Link href="/">
                                                        <div className="text-xl md:text-2xl font-bold text-primary dark:text-primary-dark">Hasyen Patel</div>
                                                </Link>
                                        </motion.div>

                                        {/* Desktop Navigation */}
                                        <div className="hidden md:flex items-center space-x-6">
                                                {navItems.map((item, index) => (
                                                        <motion.div
                                                                key={item.name}
                                                                initial={{ opacity: 0, y: -20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.3, delay: 0.1 * index }}
                                                        >
                                                                <Link
                                                                        href={item.href}
                                                                        className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors px-2 py-1 rounded-md text-sm font-medium"
                                                                >
                                                                        {item.name}
                                                                </Link>
                                                        </motion.div>
                                                ))}
                                                <div className="pl-2">
                                                        <ThemeToggle />
                                                </div>
                                        </div>

                                        {/* Mobile menu button */}
                                        <div className="md:hidden flex items-center space-x-3">
                                                <div>
                                                        <ThemeToggle />
                                                </div>
                                                <button
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                        className="text-gray-700 dark:text-gray-300 focus:outline-none"
                                                        aria-label="Toggle menu"
                                                >
                                                        <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                                {isMobileMenuOpen ? (
                                                                        <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M6 18L18 6M6 6l12 12"
                                                                        />
                                                                ) : (
                                                                        <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M4 6h16M4 12h16M4 18h16"
                                                                        />
                                                                )}
                                                        </svg>
                                                </button>
                                        </div>
                                </div>
                        </motion.nav>

                        {/* Mobile Navigation Menu */}
                        <AnimatePresence>
                                {isMobileMenuOpen && (
                                        <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="md:hidden fixed top-[60px] left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 border-t border-gray-200 dark:border-gray-700 shadow-lg"
                                        >
                                                <div className="container-custom py-6">
                                                        <div className="flex flex-col space-y-2">
                                                                {navItems.map((item, index) => (
                                                                        <motion.div
                                                                                key={item.name}
                                                                                initial={{ opacity: 0, x: -20 }}
                                                                                animate={{ opacity: 1, x: 0 }}
                                                                                transition={{ duration: 0.2, delay: 0.05 * index }}
                                                                        >
                                                                                <Link
                                                                                        href={item.href}
                                                                                        className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                                >
                                                                                        {item.name}
                                                                                </Link>
                                                                        </motion.div>
                                                                ))}
                                                        </div>
                                                </div>
                                        </motion.div>
                                )}
                        </AnimatePresence>
                </>
        );
} 