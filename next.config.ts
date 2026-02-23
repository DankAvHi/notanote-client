import type { NextConfig } from "next";

const localHostname = process.env.NEXT_PUBLIC_SERVER_LOCAL_HOSTNAME || `localhost`;
const hostname = process.env.NEXT_PUBLIC_SERVER_HOSTNAME || "localhost"
const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === 'production'


const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: isProduction ? 'https' : 'http',
        hostname: isProduction ? hostname : localHostname,
      },
    ],
    dangerouslyAllowLocalIP: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'http://localhost:8000/:path*',
      },
    ]
  },
  cacheComponents: true
};

export default nextConfig;
