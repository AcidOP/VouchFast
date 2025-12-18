import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: {
    compilationMode: 'annotation',
  },
  allowedDevOrigins: ['localhost', '192.168.*.*'],
};

export default nextConfig;
