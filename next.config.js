/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.getcollectr.com', 
      'https://djk9wkkysj.execute-api.us-east-1.amazonaws.com',
      'www.svgrepo.com'
    ],
  },
}

module.exports = nextConfig
