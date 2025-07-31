import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProduction ? '/portfolio' : '',
  assetPrefix: isProduction ? '/portfolio/' : '',  // Note the trailing slash
  output: 'export',
  images: {
    unoptimized: true  // This disables Next.js image optimization
  }
};

export default nextConfig;