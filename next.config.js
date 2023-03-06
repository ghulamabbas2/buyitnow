/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://localhost:27017/buyitnow",
    NEXTAUTH_SECRET: "codingwithabbas",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
