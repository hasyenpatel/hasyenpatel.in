import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
        return (
                <section id="about" className="py-20 bg-white dark:bg-gray-900">
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        {/* Image */}
                                        <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="relative max-w-md mx-auto"
                                        >
                                                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative bg-white shadow-lg border border-gray-100 dark:border-gray-700 dark:bg-gray-800">
                                                        {/* Profile image - with placeholder solution if image doesn't load */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary-dark/10 dark:to-secondary-dark/10 z-0"></div>
                                                        <div className="relative h-full w-full z-10">
                                                                <Image
                                                                        src="/images/profile.jpg"
                                                                        alt="Hasyen Patel"
                                                                        className="object-cover"
                                                                        fill
                                                                        sizes="(max-width: 768px) 100vw, 400px"
                                                                        priority
                                                                        onError={(e) => {
                                                                                // If image fails to load, style the container to show initial
                                                                                e.currentTarget.style.display = 'none';
                                                                        }}
                                                                />
                                                                <div className="absolute inset-0 flex items-center justify-center text-primary dark:text-primary-dark text-9xl font-bold opacity-10 z-0">
                                                                        HP
                                                                </div>
                                                        </div>
                                                </div>

                                                {/* Decorative dot pattern */}
                                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 dark:bg-primary-dark/10 rounded-full z-0"></div>
                                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 dark:bg-secondary-dark/10 rounded-full z-0"></div>
                                        </motion.div>

                                        {/* Content */}
                                        <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.4 }}
                                                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                                        >
                                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-display">I'm Hasyen Patel</h3>
                                                <p className="mb-4 text-gray-600 dark:text-gray-300">
                                                        I'm currently working as a Software Engineer, specialized in creating innovative digital experiences and web applications. My work involves designing and implementing user-friendly interfaces and solving complex technical challenges.
                                                </p>
                                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                                        With a background in Computer Science, I've developed a passion for frontend technologies and interactive web experiences. I enjoy tackling challenging problems and creating solutions that make a difference.
                                                </p>

                                                {/* Current Work */}
                                                <div className="mb-6">
                                                        <h4 className="text-xl font-semibold mb-2 text-primary dark:text-primary-dark">Current Work</h4>
                                                        <p className="text-gray-600 dark:text-gray-300">
                                                                I'm currently working on developing modern web applications that combine cutting-edge frontend technologies with robust backend solutions. My focus is on creating responsive, accessible, and performant digital experiences.
                                                        </p>
                                                </div>

                                                {/* Technologies/Skills */}
                                                <div>
                                                        <h4 className="text-xl font-semibold mb-3 text-primary dark:text-primary-dark">Technologies I Work With</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                                {['JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Three.js', 'TailwindCSS'].map((tech) => (
                                                                        <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200">
                                                                                {tech}
                                                                        </span>
                                                                ))}
                                                        </div>
                                                </div>
                                        </motion.div>
                                </div>
                        </div>
                </section>
        );
} 