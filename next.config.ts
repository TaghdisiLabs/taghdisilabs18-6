import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.79",
    "10.8.0.3"
  ],

  experimental: {
    optimizePackageImports: ["framer-motion"]
  }
};

export default nextConfig;