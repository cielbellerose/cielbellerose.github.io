import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,

  images: {
    unoptimized: true
  },
  trailingSlash: false,
};

module.exports = nextConfig;

export default nextConfig;
