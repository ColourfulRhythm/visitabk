/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/visitabk' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/visitabk/' : '',
  distDir: 'out',
}

module.exports = nextConfig
