const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE !== undefined,
})
const { withPlaiceholder } = require('@plaiceholder/next')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        newNextLinkBehavior: true,
        images: {
            allowFutureImage: true,
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: '*',
                },
            ],
        },
    },
}

module.exports = withPlugins([
    [withBundleAnalyzer],
    [withPlaiceholder, {}],
    nextConfig,
])
