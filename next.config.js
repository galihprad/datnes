/** @type {import('next').NextConfig} */

// const withPWA=require("next-pwa")

// module.exports=withPWA({

//   pwa: "public"
// })

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
