/** @type {import('next').NextConfig} */
const nextConfig = {
        // Enable experimental features for better performance
        experimental: {
                optimizeCss: true,
        },

        // Compress images
        images: {
                formats: ['image/webp', 'image/avif'],
                minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
        },

        // Enable compression
        compress: true,

        // Optimize fonts
        optimizeFonts: true,

        // Bundle analyzer (when ANALYZE=true)
        ...(process.env.ANALYZE === 'true' && {
                webpack: (config) => {
                        config.plugins.push(
                                new (require('@next/bundle-analyzer'))({
                                        enabled: true,
                                })
                        )
                        return config
                },
        }),
}

module.exports = nextConfig 