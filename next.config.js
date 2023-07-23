/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
    enableUndici: true,
  },
  webpack: (config) => {
    // svg 사용을 위한 세팅
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },
  // reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], // scss 옵션
  },
  // images: {
  //   domains: ['storage.googleapis.com'],
  // },
  // output: 'standalone',
  // poweredByHeader: false,
};

module.exports = nextConfig;
