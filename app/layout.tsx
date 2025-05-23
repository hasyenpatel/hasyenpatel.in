import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Optimize font loading
const inter = Inter({
        subsets: ['latin'],
        display: 'swap',
        preload: true,
        variable: '--font-inter',
});

export const metadata: Metadata = {
        title: {
                default: 'Hasyen Patel - Developer, Creator, Innovator',
                template: '%s | Hasyen Patel'
        },
        description: 'Personal website of Hasyen Patel - Developer, Creator, Innovator. Showcasing work in technology, animation, and creative projects.',
        keywords: [
                'Hasyen Patel',
                'developer',
                'portfolio',
                'personal website',
                'animation',
                'technology',
                'creative projects',
                'web development',
                'software engineer'
        ],
        authors: [{ name: 'Hasyen Patel' }],
        creator: 'Hasyen Patel',
        openGraph: {
                type: 'website',
                locale: 'en_US',
                url: 'https://hasyenpatel.in',
                title: 'Hasyen Patel - Developer, Creator, Innovator',
                description: 'Personal website showcasing work in technology, animation, and creative projects.',
                siteName: 'Hasyen Patel',
        },
        twitter: {
                card: 'summary_large_image',
                title: 'Hasyen Patel - Developer, Creator, Innovator',
                description: 'Personal website showcasing work in technology, animation, and creative projects.',
        },
        robots: {
                index: true,
                follow: true,
                googleBot: {
                        index: true,
                        follow: true,
                        'max-video-preview': -1,
                        'max-image-preview': 'large',
                        'max-snippet': -1,
                },
        },
        verification: {
                // Add your verification codes here if needed
                // google: 'your-google-verification-code',
        },
};

export default function RootLayout({
        children,
}: {
        children: React.ReactNode;
}) {
        return (
                <html lang="en" className={`scroll-smooth ${inter.variable}`}>
                        <head>
                                {/* Preload critical resources */}
                                <link rel="preconnect" href="https://fonts.googleapis.com" />
                                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

                                {/* Optimized theme script - inline critical CSS */}
                                <script
                                        dangerouslySetInnerHTML={{
                                                __html: `
                                                (function() {
                                                        try {
                                                                const storedTheme = localStorage.getItem('theme');
                                                                if (storedTheme) {
                                                                        document.documentElement.classList.add(storedTheme);
                                                                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                                                                        document.documentElement.classList.add('dark');
                                                                } else {
                                                                        document.documentElement.classList.add('light');
                                                                }
                                                        } catch (e) {
                                                                document.documentElement.classList.add('light');
                                                        }
                                                })();
                                                `,
                                        }}
                                />

                                {/* Performance and SEO meta tags */}
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <meta name="theme-color" content="#000000" />
                                <meta name="color-scheme" content="light dark" />

                                {/* PWA manifest */}
                                <link rel="manifest" href="/manifest.json" />

                                {/* Favicon and icons */}
                                <link rel="icon" href="/favicon.ico" />
                                <link rel="apple-touch-icon" href="/icon-192x192.png" />
                        </head>
                        <body className={`${inter.className} antialiased`}>
                                {/* Skip to content for accessibility */}
                                <a
                                        href="#main-content"
                                        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
                                >
                                        Skip to main content
                                </a>

                                <main id="main-content" role="main">
                                        {children}
                                </main>

                                {/* Performance monitoring script */}
                                <script
                                        dangerouslySetInnerHTML={{
                                                __html: `
                                                // Track performance metrics
                                                if (typeof window !== 'undefined' && 'performance' in window) {
                                                        window.addEventListener('load', function() {
                                                                // Basic performance logging
                                                                const perfData = performance.getEntriesByType('navigation')[0];
                                                                if (perfData && window.console) {
                                                                        console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                                                                }
                                                        });
                                                }
                                                `,
                                        }}
                                />
                        </body>
                </html>
        );
} 