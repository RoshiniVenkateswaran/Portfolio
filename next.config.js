/** @type {import('next').NextConfig} */
const nextConfig = {
  // No output: 'export' — API routes (e.g. /api/contact) require a server
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

