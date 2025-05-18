'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
        const currentYear = new Date().getFullYear();

        return (
                <footer className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                        <div className="container-custom">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="text-center"
                                >
                                        <h3 className="text-2xl font-bold mb-3 text-primary dark:text-primary-dark">Hasyen Patel</h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                                                Developer, Creator & Innovator
                                        </p>


                                        <p className="text-gray-500 dark:text-gray-500 text-sm">
                                                © {currentYear} Hasyen Patel. All Rights Reserved.
                                        </p>
                                </motion.div>
                        </div>
                </footer>
        );
} 