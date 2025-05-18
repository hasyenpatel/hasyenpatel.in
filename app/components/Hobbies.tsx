'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Airbnb‑style 3‑D icon wrapper — smooth rotation animation on hover
const AnimatedIcon = ({
        iconPath,
        alt,
        color,
}: {
        iconPath: string;
        alt: string;
        color: string;
}) => (
        <motion.div
                className={`relative w-24 h-24 flex items-center justify-center ${color} rounded-2xl shadow-lg overflow-hidden`}
                initial={{ rotateX: 15, rotateY: -15, rotateZ: 0 }}
                animate={{ rotateX: [15, -15, 15], rotateY: [-15, 15, -15] }}
                transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                }}
                whileHover={{
                        scale: 1.15,
                        rotateZ: 5,
                        transition: { type: "spring", stiffness: 200, damping: 15 },
                }}
                style={{ perspective: 800 }}
        >
                <motion.div
                        className="w-16 h-16"
                        whileHover={{
                                rotate: 15,
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                >
                        <object
                                data={iconPath}
                                type="image/svg+xml"
                                className="w-full h-full object-contain drop-shadow-xl"
                                aria-label={alt}
                        />
                </motion.div>
        </motion.div>
);

// Video icon component for video-based icons like astronomy
const VideoIcon = ({
        videoPath,
        alt,
        color,
}: {
        videoPath: string;
        alt: string;
        color: string;
}) => (
        <motion.div
                className={`relative w-24 h-24 flex items-center justify-center ${color} rounded-2xl shadow-lg overflow-hidden`}
                whileHover={{
                        scale: 1.15,
                        rotateZ: 5,
                        transition: { type: "spring", stiffness: 200, damping: 15 },
                }}
                style={{ perspective: 800 }}
        >
                <motion.div
                        className="w-full h-full"
                        whileHover={{
                                rotate: 5,
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                >
                        <video
                                src={videoPath}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                aria-label={alt}
                        />
                </motion.div>
        </motion.div>
);

// Hobby data with 3D icon paths
const hobbies = [
        {
                title: 'Reading',
                description: 'I love diving into books about technology, science fiction, and personal development.',
                color: 'bg-emerald-50 dark:bg-emerald-900/20',
                textColor: 'text-emerald-600 dark:text-emerald-400',
                borderColor: 'border-emerald-200 dark:border-emerald-800',
                iconPath: '/icons/book-3d.svg',
                iconAlt: 'Book 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Tennis',
                description: 'Enjoying the competitive spirit and physical exercise of tennis matches.',
                color: 'bg-green-50 dark:bg-green-900/20',
                textColor: 'text-green-600 dark:text-green-400',
                borderColor: 'border-green-200 dark:border-green-800',
                iconPath: '/icons/tennis-3d.svg',
                iconAlt: 'Tennis 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Table Tennis',
                description: 'Playing fast-paced table tennis matches to improve reflexes and coordination.',
                color: 'bg-orange-50 dark:bg-orange-900/20',
                textColor: 'text-orange-600 dark:text-orange-400',
                borderColor: 'border-orange-200 dark:border-orange-800',
                iconPath: '/icons/table-tennis-3d.svg',
                iconAlt: 'Table Tennis 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Swimming',
                description: 'Enjoying the refreshing experience of swimming for both fitness and relaxation.',
                color: 'bg-blue-50 dark:bg-blue-900/20',
                textColor: 'text-blue-600 dark:text-blue-400',
                borderColor: 'border-blue-200 dark:border-blue-800',
                iconPath: '/icons/swimming-3d.svg',
                iconAlt: 'Swimming 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Skiing',
                description: 'Gliding down snowy slopes and experiencing the thrill of alpine adventures.',
                color: 'bg-sky-50 dark:bg-sky-900/20',
                textColor: 'text-sky-600 dark:text-sky-400',
                borderColor: 'border-sky-200 dark:border-sky-800',
                iconPath: '/icons/skiing-3d.svg',
                iconAlt: 'Skiing 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Yoga & Meditation',
                description: 'Practicing mindfulness and balance through regular yoga and meditation sessions.',
                color: 'bg-indigo-50 dark:bg-indigo-900/20',
                textColor: 'text-indigo-600 dark:text-indigo-400',
                borderColor: 'border-indigo-200 dark:border-indigo-800',
                iconPath: '/icons/yoga-3d.svg',
                iconAlt: 'Yoga 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Astronomy',
                description: 'Gazing at stars and exploring the wonders of our universe through astronomy.',
                color: 'bg-purple-50 dark:bg-purple-900/20',
                textColor: 'text-purple-600 dark:text-purple-400',
                borderColor: 'border-purple-200 dark:border-purple-800',
                iconPath: '/videos/astronomy-motion.mp4',
                iconAlt: 'Astronomy motion video',
                iconType: 'video'
        },
        {
                title: 'Cycling',
                description: 'Exploring new paths and enjoying the freedom of cycling through various terrains.',
                color: 'bg-cyan-50 dark:bg-cyan-900/20',
                textColor: 'text-cyan-600 dark:text-cyan-400',
                borderColor: 'border-cyan-200 dark:border-cyan-800',
                iconPath: '/icons/cycling-3d.svg',
                iconAlt: 'Cycling 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Cricket',
                description: 'Enjoying the strategic elements and team spirit of cricket matches.',
                color: 'bg-rose-50 dark:bg-rose-900/20',
                textColor: 'text-rose-600 dark:text-rose-400',
                borderColor: 'border-rose-200 dark:border-rose-800',
                iconPath: '/icons/cricket-3d.svg',
                iconAlt: 'Cricket 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Hiking',
                description: 'Exploring nature and challenging myself on new trails and mountains.',
                color: 'bg-amber-50 dark:bg-amber-900/20',
                textColor: 'text-amber-600 dark:text-amber-400',
                borderColor: 'border-amber-200 dark:border-amber-800',
                iconPath: '/icons/hiking-3d.svg',
                iconAlt: 'Hiking 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Travel',
                description: 'Exploring new cultures, cuisines, and landscapes around the world.',
                color: 'bg-teal-50 dark:bg-teal-900/20',
                textColor: 'text-teal-600 dark:text-teal-400',
                borderColor: 'border-teal-200 dark:border-teal-800',
                iconPath: '/icons/travel-3d.svg',
                iconAlt: 'Travel 3D icon',
                iconType: 'svg'
        },
        {
                title: 'Cooking',
                description: 'Experimenting with flavors and techniques to create delicious meals.',
                color: 'bg-red-50 dark:bg-red-900/20',
                textColor: 'text-red-600 dark:text-red-400',
                borderColor: 'border-red-200 dark:border-red-800',
                iconPath: '/icons/cooking-3d.svg',
                iconAlt: 'Cooking 3D icon',
                iconType: 'svg'
        },
];

export default function Hobbies() {
        return (
                <section id="hobbies" className="py-20 bg-slate-50 dark:bg-gray-900">
                        <div className="container-custom max-w-6xl">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="mb-12 text-center"
                                >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-display text-gray-900 dark:text-white">Hobbies & Interests</h2>
                                        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                                When I'm not coding, you can find me enjoying these activities.
                                        </p>
                                </motion.div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {hobbies.map((hobby, index) => (
                                                <motion.div
                                                        key={hobby.title}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                                        whileHover={{
                                                                y: -5,
                                                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                                                        }}
                                                        className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border ${hobby.borderColor} transition-all duration-300`}
                                                >
                                                        <div className="flex justify-center mb-4">
                                                                {hobby.iconType === 'video' ? (
                                                                        <VideoIcon
                                                                                videoPath={hobby.iconPath}
                                                                                alt={hobby.iconAlt}
                                                                                color={hobby.color}
                                                                        />
                                                                ) : (
                                                                        <AnimatedIcon
                                                                                iconPath={hobby.iconPath}
                                                                                alt={hobby.iconAlt}
                                                                                color={hobby.color}
                                                                        />
                                                                )}
                                                        </div>

                                                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white text-center">{hobby.title}</h3>
                                                        <p className="text-gray-600 dark:text-gray-400 text-center">{hobby.description}</p>
                                                </motion.div>
                                        ))}
                                </div>

                                {/* "Bookshelf" inspired illustration */}
                                <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        className="mt-16 flex justify-center"
                                >
                                        <div className="w-full max-w-3xl h-6 bg-gradient-to-r from-amber-600/20 to-amber-800/20 dark:from-amber-800/30 dark:to-amber-900/30 rounded-t-lg"></div>
                                </motion.div>
                        </div>
                </section>
        );
} 