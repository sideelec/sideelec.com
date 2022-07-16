const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE !== undefined,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: '*',
                },
            ],
        },
    },
}

module.exports = withPlugins([[withBundleAnalyzer], nextConfig])
