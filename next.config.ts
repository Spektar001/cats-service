import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cdn2.thecatapi.com/images/**')],
  },
};

export default nextConfig;
