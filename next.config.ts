import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,

  images: {
    unoptimized: true
  },
  trailingSlash: false,
};

module.exports = nextConfig;

export default nextConfig;
