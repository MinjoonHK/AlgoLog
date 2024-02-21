//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://solved.ac/api/v3/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
