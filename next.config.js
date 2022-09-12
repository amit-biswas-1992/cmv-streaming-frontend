/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["cmv.dvcoreapi.com"]
  }
}

module.exports = nextConfig
