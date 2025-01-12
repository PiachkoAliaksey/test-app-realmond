import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        port: '',
        pathname: '/image/**',
        search: '',
      },
    ],
  },
}

const nextConfig: NextConfig = {
};


export default nextConfig;
