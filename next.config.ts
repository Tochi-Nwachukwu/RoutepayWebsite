import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // REQUIRED for static export
  },
  // Optional but recommended for cPanel/Apache:
  trailingSlash: true, 
  allowedDevOrigins: ["10.47.54.185", "10.47.54.48", '192.168.1.179'],
};

export default nextConfig;