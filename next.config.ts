import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚨 THIS DISABLES ESLINT ERRORS DURING BUILD
  },
  typescript: {
    ignoreBuildErrors: true, // 🛡️ OPTIONAL: DISABLES TYPESCRIPT ERRORS TOO
  }
};

export default nextConfig;