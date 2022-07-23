const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE !== undefined,
})
const { withPlaiceholder } = require('@plaiceholder/next')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})

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
    [
        withMDX,
        {
            pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
        },
    ],
    nextConfig,
])
