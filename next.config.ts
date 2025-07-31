import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/portfolio',       
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: 'export',  
};

export default nextConfig;
