/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      'rickandmortyapi.com',
      'png2.cleanpng.com'
    ]
  }
}

module.exports = nextConfig
