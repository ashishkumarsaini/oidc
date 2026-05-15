import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/oauth2/:path*',
        destination: '/api/:path*', // Map /v1/hello to /api/hello internally
      },
    ]
  },
};

export default nextConfig;
