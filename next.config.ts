import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: {
    compilationMode: 'annotation',
  },
  allowedDevOrigins: ['localhost', '192.168.*.*'],
  productionBrowserSourceMaps: true,
};

export default nextConfig;
