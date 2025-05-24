import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
        title: 'Hasyen Patel',
        description: 'Personal website of Hasyen Patel - Developer, Creator, Innovator',
        keywords: ['Hasyen Patel', 'developer', 'portfolio', 'personal website'],
        icons: {
                icon: '/favicon.svg',
                shortcut: '/favicon.svg',
                apple: '/favicon.svg',
        },
        viewport: 'width=device-width, initial-scale=1',
        robots: 'index, follow',
};

export default function RootLayout({
        children,
}: {
        children: React.ReactNode;
}) {
        return (
                <html lang="en" className="scroll-smooth">
                        <head>
                                {/* Preload critical resources */}
                                <link rel="preload" href="/images/profilephoto.jpeg" as="image" />
                                <link rel="preload" href="/images/landing.jpeg" as="image" />

                                {/* DNS prefetch for external resources */}
                                <link rel="dns-prefetch" href="//fonts.googleapis.com" />

                                {/* Favicon */}
                                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                                <link rel="alternate icon" href="/favicon.ico" />

                                {/* Performance optimizations */}
                                <meta name="theme-color" content="#6366f1" />

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
                        </head>
                        <body className="antialiased">
                                <main>{children}</main>
                        </body>
                </html>
        );
} 