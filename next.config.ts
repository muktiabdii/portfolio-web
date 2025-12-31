import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow loading images from the external CDN used in the project
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
