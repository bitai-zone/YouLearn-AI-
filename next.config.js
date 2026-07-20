/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static export suitable for GitHub Pages
  output: 'export',
  // optional: ensures directories end with a trailing slash which works well on Pages
  trailingSlash: true,
};

module.exports = nextConfig;
