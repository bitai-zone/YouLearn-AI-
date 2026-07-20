const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    // Map '@' to the app/app directory so imports like '@/components/...' work
    config.resolve.alias['@'] = path.resolve(__dirname, 'app', 'app');
    return config;
  },
  experimental: {
    appDir: true,
  },
};
