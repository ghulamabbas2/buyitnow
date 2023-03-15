/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://localhost:27017/buyitnow",

    CLOUD_NAME: "shopitnow-udemy",
    CLOUDINARY_API_KEY: "357981249752881",
    CLOUDINARY_API_SECRET: "yejVn_RZb4QFtkI-2mRRyUfzdw8",

    NEXTAUTH_SECRET: "codingwithabbas",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
