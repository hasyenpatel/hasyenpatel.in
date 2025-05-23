/** @type {import('next').NextConfig} */
const nextConfig = {
        reactStrictMode: true,
        swcMinify: true,
        compiler: {
                removeConsole: process.env.NODE_ENV === 'production',
        },
        images: {
                formats: ['image/webp', 'image/avif'],
                deviceSizes: [640, 750, 828, 1080, 1200, 1920],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        },
        experimental: {
                optimizePackageImports: ['framer-motion', 'three'],
        },
        poweredByHeader: false,
        compress: true,
}

module.exports = nextConfig 