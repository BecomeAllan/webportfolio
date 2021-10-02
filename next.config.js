
const withTM = require('next-transpile-modules')(['./node_modules/react-syntax-highlighter']);

module.exports = withTM({
  // distDir: 'out',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  webpack5: true,
})
