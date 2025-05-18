'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
        const [theme, setTheme] = useState<Theme>('light');
        const [mounted, setMounted] = useState(false);

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
        };

        if (!mounted) return null;

        return (
                <div className="relative z-50 flex items-center space-x-1 md:space-x-2 p-1 md:p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-md">
                        <button
                                aria-label="Light mode"
                                className={`p-1 md:p-2 rounded-full transition-colors ${theme === 'light' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
                                onClick={() => handleThemeChange('light')}
                        >
                                <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 md:h-5 md:w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: theme === 'light' ? [1, 1.2, 1] : 1 }}
                                        transition={{ duration: 0.3 }}
                                >
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </motion.svg>
                        </button>

                        <button
                                aria-label="Dark mode"
                                className={`p-1 md:p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-700 shadow-sm text-primary-dark' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
                                onClick={() => handleThemeChange('dark')}
                        >
                                <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 md:h-5 md:w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        initial={{ scale: 1, rotate: 0 }}
                                        animate={{
                                                scale: theme === 'dark' ? [1, 1.2, 1] : 1,
                                                rotate: theme === 'dark' ? [0, 15, 0] : 0
                                        }}
                                        transition={{ duration: 0.5 }}
                                >
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </motion.svg>
                        </button>

                        <button
                                aria-label="System theme"
                                className={`p-1 md:p-2 rounded-full transition-colors ${theme === 'system' ? 'bg-gray-200 dark:bg-gray-600 shadow-sm text-primary dark:text-primary-dark' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
                                onClick={() => handleThemeChange('system')}
                        >
                                <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 md:h-5 md:w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: theme === 'system' ? [1, 1.2, 1] : 1 }}
                                        transition={{ duration: 0.3 }}
                                >
                                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                </motion.svg>
                        </button>
                </div>
        );
} 