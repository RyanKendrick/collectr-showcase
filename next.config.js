/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['www.getcollectr.com', 
      'https://djk9wkkysj.execute-api.us-east-1.amazonaws.com',
      'www.svgrepo.com'
    ],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/profile': { page: '/profile' },
      '/collections': {page: '/collections'},
    }
  },
}

module.exports = nextConfig
