import withPlugins from 'next-compose-plugins'
import bundleAnalyzer from '@next/bundle-analyzer'
const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE !== undefined,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
        ],
    },
}

export default withPlugins([[withBundleAnalyzer], nextConfig])
