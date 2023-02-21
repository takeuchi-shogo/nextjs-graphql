/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: `${ process.env.API_SERVER_URL}/:path*`,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
