/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
                "./app/**/*.{js,ts,jsx,tsx}",
                "./pages/**/*.{js,ts,jsx,tsx}",
                "./components/**/*.{js,ts,jsx,tsx}",
        ],
        darkMode: 'class',
        theme: {
                extend: {
                        colors: {
                                // Light mode colors (default)
                                primary: {
                                        DEFAULT: "#4F46E5",
                                        dark: "#5C6AC4"
                                },
                                secondary: {
                                        DEFAULT: "#818CF8",
                                        dark: "#3D4EAE"
                                },
                                accent: {
                                        DEFAULT: "#F59E0B",
                                        dark: "#FFD166"
                                },
                                background: {
                                        DEFAULT: "#F9FAFB",
                                        dark: "#1A1A2E"
                                },
                                card: {
                                        DEFAULT: "#FFFFFF",
                                        dark: "rgba(255, 255, 255, 0.05)"
                                },
                                text: {
                                        DEFAULT: "#1F2937",
                                        dark: "#F2F2F2"
                                },
                        },
                        fontFamily: {
                                sans: ['Inter', 'sans-serif'],
                                display: ['Montserrat', 'sans-serif'],
                        },
                        animation: {
                                'float': 'float 3s ease-in-out infinite',
                                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                                'spin-slow': 'spin 8s linear infinite',
                        },
                        keyframes: {
                                float: {
                                        '0%, 100%': { transform: 'translateY(0)' },
                                        '50%': { transform: 'translateY(-10px)' },
                                }
                        }
                },
        },
        plugins: [
                require('@tailwindcss/typography'),
        ],
} 