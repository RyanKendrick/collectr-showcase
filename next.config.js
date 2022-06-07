/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
    
      '/showcase': { page: '/showcase' },
  
    }
  },
}

module.exports = nextConfig
