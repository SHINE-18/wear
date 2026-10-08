/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 2,
  },
  async redirects() {
    return [
      {
        source: '/applications/dryer-components',
        destination: '/industries/asphalt',
        permanent: true,
      },
      {
        source: '/applications/filter-components',
        destination: '/industries/asphalt',
        permanent: true,
      },
      {
        source: '/applications/mixer-components',
        destination: '/industries/concrete',
        permanent: true,
      },
      {
        source: '/applications/wear-liners-transfer-protection',
        destination: '/industries/process-industries',
        permanent: true,
      },
      {
        source: '/applications/bucket-elevators',
        destination: '/industries/asphalt',
        permanent: true,
      },
      {
        source: '/applications/drag-conveyors',
        destination: '/industries/asphalt',
        permanent: true,
      },
      {
        source: '/applications/earthmoving-bucket-tips',
        destination: '/industries/mining',
        permanent: true,
      },
      {
        source: '/applications/:slug',
        destination: '/industries',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; media-src 'self' blob:; connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com; frame-ancestors 'none';",
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
