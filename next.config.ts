import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  compiler: {
    removeConsole: true
  }
};

export default nextConfig;
