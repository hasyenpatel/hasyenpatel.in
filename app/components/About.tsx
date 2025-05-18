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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                        {/* Image with improved animation */}
                                        <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="relative mx-auto"
                                        >
                                                <div className="w-full max-w-md overflow-hidden relative rounded-lg shadow-lg">
                                                        <motion.div
                                                                initial={{ scale: 1.1 }}
                                                                whileInView={{ scale: 1 }}
                                                                transition={{ duration: 1.2, ease: "easeOut" }}
                                                                className="relative w-full h-full overflow-hidden"
                                                        >
                                                                <Image
                                                                        src="/images/profilephoto.jpeg"
                                                                        alt="Hasyen Patel"
                                                                        width={400}
                                                                        height={500}
                                                                        className="object-cover w-full h-auto"
                                                                        priority
                                                                />
                                                                {/* Subtle overlay */}
                                                                <motion.div
                                                                        initial={{ opacity: 0.7 }}
                                                                        whileInView={{ opacity: 0 }}
                                                                        transition={{ duration: 1, delay: 0.3 }}
                                                                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                                                                />
                                                        </motion.div>
                                                </div>
                                        </motion.div>

                                        {/* Content */}
                                        <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.4 }}
                                                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
                                        >
                                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-display">I'm Hasyen Patel</h3>
                                                <p className="mb-4 text-gray-600 dark:text-gray-300">
                                                        I'm currently working as a Software Engineer at Amazon, where I'm part of the AWS Simple Workflow team. I focus on building scalable cloud solutions that help businesses automate and coordinate tasks across distributed applications.
                                                </p>
                                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                                        My diverse background includes professional experience as an animator for several years, as well as a degree in Music. This creative foundation complements my technical skills, allowing me to approach problem-solving with both analytical and artistic perspectives.
                                                </p>

                                                {/* Redesigned Education Section */}
                                                <div className="mb-6">
                                                        <h4 className="text-xl font-semibold mb-4 text-primary dark:text-primary-dark">Education Journey</h4>
                                                        <div className="relative border-l-0 pl-6 space-y-6">
                                                                {/* Master's */}
                                                                <div className="relative before:absolute before:top-0 before:bottom-1/2 before:translate-y-[3rem] before:-left-[8px] before:w-0.5 before:bg-primary/30 dark:before:bg-primary-dark/30">
                                                                        <div className="absolute -left-[31px] top-0 h-6 w-6 rounded-full bg-primary dark:bg-primary-dark flex items-center justify-center z-10">
                                                                                <div className="h-3 w-3 rounded-full bg-white dark:bg-gray-900"></div>
                                                                        </div>
                                                                        <div className="mb-1">
                                                                                <h5 className="font-semibold text-lg text-gray-900 dark:text-white">Master's Degree</h5>
                                                                                <p className="text-primary dark:text-primary-dark font-medium">Georgia Institute of Technology</p>
                                                                        </div>
                                                                </div>

                                                                {/* Bachelor's */}
                                                                <div className="relative before:absolute before:top-0 before:bottom-1/2 before:translate-y-[3rem] before:-left-[8px] before:w-0.5 before:bg-primary/30 dark:before:bg-primary-dark/30">
                                                                        <div className="absolute -left-[31px] top-0 h-6 w-6 rounded-full bg-primary dark:bg-primary-dark flex items-center justify-center z-10">
                                                                                <div className="h-3 w-3 rounded-full bg-white dark:bg-gray-900"></div>
                                                                        </div>
                                                                        <div className="mb-1">
                                                                                <h5 className="font-semibold text-lg text-gray-900 dark:text-white">Bachelor's Degree</h5>
                                                                                <p className="text-primary dark:text-primary-dark font-medium">Toronto Metropolitan University</p>
                                                                        </div>
                                                                </div>

                                                                {/* School - no line after this */}
                                                                <div className="relative">
                                                                        <div className="absolute -left-[31px] top-0 h-6 w-6 rounded-full bg-primary dark:bg-primary-dark flex items-center justify-center z-10">
                                                                                <div className="h-3 w-3 rounded-full bg-white dark:bg-gray-900"></div>
                                                                        </div>
                                                                        <div>
                                                                                <h5 className="font-semibold text-lg text-gray-900 dark:text-white">School Education</h5>
                                                                                <p className="text-primary dark:text-primary-dark font-medium">Amrita Vidyalayam</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </motion.div>
                                </div>
                        </div>
                </section>
        );
} 