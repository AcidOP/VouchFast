import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
    optimizeCss: true,
  },
  reactCompiler: true,
  allowedDevOrigins: ['localhost', '192.168.*.*'],
  productionBrowserSourceMaps: true,
};

export default nextConfig;
