'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
        const [theme, setTheme] = useState<Theme>('light');
        const [mounted, setMounted] = useState(false);
        const [isHovered, setIsHovered] = useState(false);

        // When mounted on client, set the theme based on local storage or system preference
        useEffect(() => {
                setMounted(true);
                const storedTheme = localStorage.getItem('theme') as Theme | null;
                if (storedTheme) {
                        setTheme(storedTheme);
                } else {
                        setTheme('system');
                }
        }, []);

        // Update the HTML element class when theme changes
        useEffect(() => {
                if (!mounted) return;

                const root = window.document.documentElement;
                root.classList.remove('light', 'dark');

                let resolvedTheme = theme;
                if (theme === 'system') {
                        resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }

                root.classList.add(resolvedTheme);
                localStorage.setItem('theme', theme);
        }, [theme, mounted]);

        // Handle system theme changes
        useEffect(() => {
                if (!mounted || theme !== 'system') return;

                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                const handleChange = () => {
                        const root = window.document.documentElement;
                        root.classList.remove('light', 'dark');
                        root.classList.add(mediaQuery.matches ? 'dark' : 'light');
                };

                mediaQuery.addEventListener('change', handleChange);
                return () => mediaQuery.removeEventListener('change', handleChange);
        }, [theme, mounted]);

        const handleThemeChange = (newTheme: Theme) => {
                setTheme(newTheme);
                // Hide options after selection
                setIsHovered(false);
        };

        if (!mounted) return null;

        const getCurrentThemeIcon = () => {
                switch (theme) {
                        case 'light':
                                return (
                                        <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 md:h-5 md:w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                initial={{ scale: 1 }}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 0.3 }}
                                        >
                                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                        </motion.svg>
                                );
                        case 'dark':
                                return (
                                        <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 md:h-5 md:w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                initial={{ scale: 1, rotate: 0 }}
                                                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                                                transition={{ duration: 0.5 }}
                                        >
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </motion.svg>
                                );
                        case 'system':
                                return (
                                        <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 md:h-5 md:w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                initial={{ scale: 1 }}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 0.3 }}
                                        >
                                                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                        </motion.svg>
                                );
                }
        };

        return (
                <div
                        className="relative z-50"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                >
                        {/* Current theme icon */}
                        <motion.button
                                aria-label={`Current theme: ${theme}`}
                                className={`p-1 md:p-2 rounded-full transition-colors bg-gray-100 dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300`}
                        >
                                {getCurrentThemeIcon()}
                        </motion.button>

                        {/* Theme options that appear on hover */}
                        <AnimatePresence>
                                {isHovered && (
                                        <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-2"
                                        >
                                                <button
                                                        aria-label="Light mode"
                                                        className={`p-2 rounded-full transition-colors flex items-center gap-2 ${theme === 'light' ? 'bg-gray-100 dark:bg-gray-700 text-primary' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                                        onClick={() => handleThemeChange('light')}
                                                >
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-4 w-4"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                        >
                                                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm">Light</span>
                                                </button>

                                                <button
                                                        aria-label="Dark mode"
                                                        className={`p-2 rounded-full transition-colors flex items-center gap-2 ${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-700 text-primary-dark' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                                        onClick={() => handleThemeChange('dark')}
                                                >
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-4 w-4"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                        >
                                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                                        </svg>
                                                        <span className="text-sm">Dark</span>
                                                </button>

                                                <button
                                                        aria-label="System theme"
                                                        className={`p-2 rounded-full transition-colors flex items-center gap-2 ${theme === 'system' ? 'bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary-dark' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                                        onClick={() => handleThemeChange('system')}
                                                >
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-4 w-4"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                        >
                                                                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm">System</span>
                                                </button>
                                        </motion.div>
                                )}
                        </AnimatePresence>
                </div>
        );
} 