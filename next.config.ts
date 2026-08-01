import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'kemoratex.com' }],
        destination: 'https://www.kemoratex.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
