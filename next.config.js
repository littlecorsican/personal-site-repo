/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  //basePath: '/docs',
  images: {
    unoptimized: true
  },
  // images: {
  //   loader: 'akamai',
  //   path: '',
  // },
  assetPrefix: './',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig
