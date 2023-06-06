/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://buyitnow-gabbasudemy-gmailcom.vercel.app",
    DB_LOCAL_URI: "mongodb://localhost:27017/buyitnow",
    DB_URI: "",

    NEXTAUTH_URL: "https://buyitnow-gabbasudemy-gmailcom.vercel.app",

    CLOUD_NAME: "shopitnow-udemy",
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_API_SECRET: "",

    STRIPE_PUBLIC_KEY: "",
    STRIPE_PRIVATE_KEY: "",

    STRIPE_WEBHOOK_SECRET: "",

    NEXTAUTH_SECRET: "codingwithabbas",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
