/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  webpack: (config) => {
    // Map '@' to project root so imports like '@/components/..' work
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
  experimental: {
    appDir: true,
  },
}
