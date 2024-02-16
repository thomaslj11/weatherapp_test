/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
      remotePatterns: [
        {
          hostname: 'cozcastel.fr', 
        },
        {
          hostname: 'openweathermap.org', 
        },
      ],
    },
  }