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

    STRIPE_PUBLIC_KEY:
      "pk_test_51HgmC8AlHMiRMt8EK5BPmz6yWtXxNfd7SUyl3v4Eznw5laesRGGQiWM0vrVWBKzGm3dZmnO9WUBRr9JFJL4L9OlD0068rUgWEx",
    STRIPE_PRIVATE_KEY:
      "sk_test_51HgmC8AlHMiRMt8EQq51fHlYRq3lsZOIQE4LaVdj6Zi9hEoySb0s6uAPQVjQNtZf77VaL3pNQTd0XurtdMNNdH3w005Kq4agAj",

    NEXTAUTH_SECRET: "codingwithabbas",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
