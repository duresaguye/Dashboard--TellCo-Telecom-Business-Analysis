// next.config.js
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Only run ESLint on the 'pages' and 'components' directories during production builds (next build)
    dirs: ['pages', 'components'],
  },
};

module.exports = nextConfig;