import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
        const [formData, setFormData] = useState({
                name: '',
                email: '',
                message: '',
        });
        const [formStatus, setFormStatus] = useState<null | 'success' | 'error' | 'invalid'>(null);
        const [loading, setLoading] = useState(false);
        const [errorMessage, setErrorMessage] = useState('');

        // Basic email validation
        const isValidEmail = (email: string) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                });
                // Clear status when user modifies form
                if (formStatus) setFormStatus(null);
        };

        const handleSubmit = async (e: React.FormEvent) => {
                e.preventDefault();
                if (loading) return;

                // Validate input before submission
                if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
                        setFormStatus('invalid');
                        setErrorMessage('All fields are required.');
                        return;
                }

                if (!isValidEmail(formData.email)) {
                        setFormStatus('invalid');
                        setErrorMessage('Please enter a valid email address.');
                        return;
                }

                setLoading(true);
                setFormStatus(null);

                try {
                        const res = await fetch('/api/contact', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(formData),
                        });

                        const data = await res.json();

                        if (!res.ok) {
                                console.error('Error:', data);
                                throw new Error(data.error || 'Failed to send message');
                        }

                        setFormStatus('success');
                        setFormData({ name: '', email: '', message: '' });
                } catch (error) {
                        console.error('Submission error:', error);
                        setFormStatus('error');
                        setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
                } finally {
                        setLoading(false);
                        // We'll keep success message showing, but clear error after some time
                        if (formStatus !== 'success') {
                                setTimeout(() => setFormStatus(null), 5000);
                        }
                }
        };

        const socialLinks = [
                { name: 'GitHub', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>, url: 'https://github.com/hasyenpatel' },
                { name: 'LinkedIn', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, url: 'https://www.linkedin.com/in/hasyenpatel' },
                {
                        name: 'X',
                        icon: (
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.364 5.636l-1.414-1.414L12 9.172 7.05 4.222 5.636 5.636 10.586 10.586l-5.05 5.05 1.414 1.414L12 12l4.95 4.95 1.414-1.414-5.05-5.05z" />
                                </svg>
                        ),
                        url: 'https://x.com/hasyenpatel'
                },

        ];

        const icebreakers = [
                "If you could teleport anywhere in the world right now, where would you go and why?",
                "What's the last book you couldn't put down and why?",
                "If you had to eat only one cuisine for the rest of your life, which would it be?",
                "What's a skill you'd love to learn and why?",
                "If you could have any superpower for a day, what would it be?",
                "What's your favorite memory of a spontaneous adventure?",
                "If you could have coffee with any fictional character, who would it be and what would you ask?",
                "What's one song that always puts you in a good mood?",
                "If you could swap lives with someone for a day, who would it be and why?",
                "What's your go-to comfort movie?",
                "What's the best meal you've ever had and where was it?",
                "If you could time travel, would you visit the past or the future?",
                "What's a hobby you've always wanted to pick up but haven't yet?",
                "What’s something you learned recently that surprised you?",
                "If you could star in any movie genre, which would you choose?",
                "What's the most unusual thing on your bucket list?",
                "How do you like to unwind after a long day?",
                "If animals could talk, which would you choose as a conversation partner?",
                "What’s the last TV show you binge-watched?",
                "What's a random fact that always amazes you?"
        ];
        const [icebreaker, setIcebreaker] = useState(
                icebreakers[Math.floor(Math.random() * icebreakers.length)]
        );
        const nextIcebreaker = () => {
                setIcebreaker(icebreakers[Math.floor(Math.random() * icebreakers.length)]);
        };

        return (
                <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
                        <div className="container-custom max-w-5xl">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="text-center mb-12"
                                >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-display text-gray-900 dark:text-white">Get In Touch</h2>
                                        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                                Want to connect? Feel free to reach out!
                                        </p>
                                </motion.div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        {/* Social Media Section */}
                                        <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8 }}
                                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
                                        >
                                                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>

                                                <div className="mb-6">
                                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                                                Curious to know more about me?
                                                        Let's connect on social media or send me a message!
                                                        </p>

                                                        <div className="flex flex-wrap gap-4 mb-8">
                                                                {socialLinks.map((social, index) => (
                                                                        <motion.a
                                                                                key={social.name}
                                                                                href={social.url}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                initial={{ opacity: 0, y: 10 }}
                                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                                viewport={{ once: true }}
                                                                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                                                                whileHover={{ scale: 1.1 }}
                                                                                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-colors duration-300 text-gray-700 dark:text-gray-300"
                                                                                aria-label={social.name}
                                                                        >
                                                                                {social.icon}
                                                                        </motion.a>
                                                                ))}
                                                        </div>
                                                </div>

                                                {/* Availability Info */}
                                                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 mb-6 min-h-[150px]">
                                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                                Daily Icebreaker
                                                        </h4>
                                                        <p className="text-gray-600 dark:text-gray-400 italic">
                                                                {icebreaker}
                                                        </p>
                                                        <button
                                                                onClick={nextIcebreaker}
                                                                className="mt-4 px-3 py-1 bg-primary text-white rounded-lg hover:bg-opacity-90 transition"
                                                        >
                                                                Another one
                                                        </button>
                                                </div>
                                        </motion.div>

                                        {/* Contact Form */}
                                        <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8 }}
                                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
                                        >
                                                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>

                                                {formStatus === 'success' && (
                                                        <motion.div
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-4 rounded-lg mb-6 flex items-start"
                                                        >
                                                                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <div>
                                                                        <p className="font-medium">Message sent successfully!</p>
                                                                        <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
                                                                </div>
                                                        </motion.div>
                                                )}

                                                {formStatus === 'error' && (
                                                        <motion.div
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg mb-6 flex items-start"
                                                        >
                                                                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <div>
                                                                        <p className="font-medium">Message could not be sent</p>
                                                                        <p className="text-sm mt-1">{errorMessage || 'Please try again later or contact me directly via email.'}</p>
                                                                </div>
                                                        </motion.div>
                                                )}

                                                {formStatus === 'invalid' && (
                                                        <motion.div
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 p-4 rounded-lg mb-6 flex items-start"
                                                        >
                                                                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                                </svg>
                                                                <div>
                                                                        <p className="font-medium">Please check your input</p>
                                                                        <p className="text-sm mt-1">{errorMessage}</p>
                                                                </div>
                                                        </motion.div>
                                                )}

                                                <form onSubmit={handleSubmit}>
                                                        <div className="mb-4">
                                                                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                                                        Name
                                                                </label>
                                                                <input
                                                                        type="text"
                                                                        id="name"
                                                                        name="name"
                                                                        value={formData.name}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition-all text-gray-900 dark:text-white"
                                                                />
                                                        </div>
                                                        <div className="mb-4">
                                                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                                                        Email
                                                                </label>
                                                                <input
                                                                        type="email"
                                                                        id="email"
                                                                        name="email"
                                                                        value={formData.email}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition-all text-gray-900 dark:text-white"
                                                                />
                                                        </div>
                                                        <div className="mb-6">
                                                                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                                                        Message
                                                                </label>
                                                                <textarea
                                                                        id="message"
                                                                        name="message"
                                                                        value={formData.message}
                                                                        onChange={handleChange}
                                                                        required
                                                                        rows={4}
                                                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition-all text-gray-900 dark:text-white"
                                                                />
                                                        </div>
                                                        <motion.button
                                                                type="submit"
                                                                whileHover={{ scale: 1.02 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                disabled={loading}
                                                                className={`w-full btn-primary ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
                                                        >
                                                                {loading ? (
                                                                        <span className="flex items-center justify-center">
                                                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                                </svg>
                                                                                Sending...
                                                                        </span>
                                                                ) : 'Send Message'}
                                                        </motion.button>
                                                </form>
                                        </motion.div>
                                </div>
                        </div>
                </section>
        );
} 