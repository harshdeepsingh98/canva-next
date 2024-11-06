/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias.canvas = false

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.thewitslab.com',
        port: '',
        pathname: '/api/getFileAccess/**'
      }
    ],
    unoptimized: true
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = nextConfig
