'use client';

import React from 'react';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Music from './components/Music';
import Books from './components/Books';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
        return (
                <div className="min-h-screen bg-background">
                        <Navbar />
                        <Hero />
                        <About />
                        <Hobbies />
                        <Books />
                        <Music />
                        <Contact />
                        <Footer />
                </div>
        );
} 