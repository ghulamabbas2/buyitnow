/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://localhost:27017/buyitnow",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
