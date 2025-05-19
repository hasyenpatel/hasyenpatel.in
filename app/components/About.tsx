import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
        return (
                <section id="about" className="py-20 bg-white dark:bg-black">
                        <div className="container-custom max-w-5xl">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="mb-8"
                                >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-display text-gray-900 dark:text-white">About Me</h2>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                                        {/* Image with improved animation */}
                                        <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="relative mx-auto h-full"
                                        >
                                                <div className="w-full max-w-md overflow-hidden relative rounded-xl shadow-xl bg-gradient-to-b from-primary/10 to-transparent p-2 dark:from-primary-dark/10 h-full">
                                                        <motion.div
                                                                initial={{ scale: 1.1 }}
                                                                whileInView={{ scale: 1 }}
                                                                whileHover={{ scale: 1.03 }}
                                                                transition={{ duration: 1.2, ease: "easeOut" }}
                                                                className="relative w-full h-full overflow-hidden rounded-lg"
                                                        >
                                                                <Image
                                                                        src="/images/profilephoto.jpeg"
                                                                        alt="Hasyen Patel"
                                                                        width={400}
                                                                        height={500}
                                                                        className="object-cover w-full h-full"
                                                                        priority
                                                                />

                                                                {/* Subtle hover effects */}
                                                                <motion.div
                                                                        initial={{ opacity: 0.7 }}
                                                                        whileInView={{ opacity: 0 }}
                                                                        whileHover={{ opacity: 0.2 }}
                                                                        transition={{ duration: 1, delay: 0.3 }}
                                                                        className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
                                                                />
                                                        </motion.div>

                                                        {/* Decorative elements */}
                                                        <div className="absolute top-0 left-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-br-full opacity-70"></div>
                                                        <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-primary/20 dark:bg-primary-dark/20 -z-10"></div>
                                                </div>
                                        </motion.div>

                                        {/* Content */}
                                        <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.4 }}
                                                className="bg-white dark:bg-black rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 h-full"
                                        >
                                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-display flex items-center">

                                                        I'm Hasyen Patel
                                                </h3>

                                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                                        I'm currently working as a Software Engineer at Amazon, where I'm part of the AWS Simple Workflow team. I focus on building scalable cloud solutions that help businesses automate and coordinate tasks across distributed applications.
                                                </p>

                                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                                        Outside of work, I'm passionate about technology, music, and creative expression. I enjoy exploring new tech stacks, creating digital content, and finding innovative solutions to complex problems. My diverse experiences have shaped my approach to software development.
                                                </p>

                                                {/* Completely Redesigned Education Section - Cleaner Version */}
                                                <div className="mt-8">
                                                        <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                                                                </svg>
                                                                Education
                                                        </h4>

                                                        <div className="space-y-4">
                                                                <div className="flex flex-col">
                                                                        <h5 className="font-bold text-lg text-gray-900 dark:text-white">Georgia Institute of Technology</h5>
                                                                        <p className="text-gray-600 dark:text-gray-400">Master's Degree</p>
                                                                </div>

                                                                <div className="flex flex-col">
                                                                        <h5 className="font-bold text-lg text-gray-900 dark:text-white">Toronto Metropolitan University</h5>
                                                                        <p className="text-gray-600 dark:text-gray-400">Bachelor's Degree</p>
                                                                </div>

                                                                <div className="flex flex-col">
                                                                        <h5 className="font-bold text-lg text-gray-900 dark:text-white">Amrita Vidyalayam, Ahmedabad</h5>
                                                                        <p className="text-gray-600 dark:text-gray-400">School Education</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </motion.div>
                                </div>
                        </div>
                </section>
        );
} 