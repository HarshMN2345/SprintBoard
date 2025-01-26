import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['pm-s3-images.s3.us-east-2.amazonaws.com'],
  },
};

export default nextConfig;
