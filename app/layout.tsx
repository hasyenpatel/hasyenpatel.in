import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
        title: 'Hasyen Patel',
        description: 'Personal website of Hasyen Patel - Developer, Creator, Innovator',
        keywords: ['Hasyen Patel', 'developer', 'portfolio', 'personal website'],
};

export default function RootLayout({
        children,
}: {
        children: React.ReactNode;
}) {
        return (
                <html lang="en" className="scroll-smooth">
                        <head>
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
                        <body>
                                <main>{children}</main>
                        </body>
                </html>
        );
} 