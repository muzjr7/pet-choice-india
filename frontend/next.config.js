const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:8000/api', // Backend API URL
  },
};

module.exports = nextConfig;