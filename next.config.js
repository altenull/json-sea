/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
