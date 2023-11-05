/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com']
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  // redirect
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
