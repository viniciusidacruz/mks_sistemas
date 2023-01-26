/** @type {import('next').NextConfig} */
const pkg = require('proxy-from-env');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  proxy: pkg.getProxyForUrl,
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;
