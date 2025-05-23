/** @type {import('next').NextConfig} */
const nextConfig = {
        // Enable compression
        compress: true,

        // Optimize images
        images: {
                formats: ['image/webp', 'image/avif'],
                minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
        },

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