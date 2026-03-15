import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'timeline-pesantren'; // Nama repository GitHub Anda

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  // Gunakan repoName hanya saat production (build)
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  // Optimasi kecepatan kompilasi
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
