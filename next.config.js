/** @type {import('next').NextConfig} */
const pkg = require('proxy-from-env');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  proxy: pkg.getProxyForUrl,
};

module.exports = nextConfig;
