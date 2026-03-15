import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'pesantren-ramadhan-2026'; // Sesuaikan dengan nama repository Anda

const nextConfig: NextConfig = {
  // 1. Wajib untuk Static Export ke GitHub Pages
  output: "export",
  
  // 2. BasePath: Menangani jalur aset di sub-folder GitHub
  basePath: isProd ? `/${repoName}` : "",
  
  // 3. AssetPrefix: Menangani pemuatan file JS/CSS dari sub-folder
  assetPrefix: isProd ? `/${repoName}/` : "",

  // 4. Trailing Slash: Agar routing (seperti /day1) tidak 404 saat di-refresh di GitHub Pages
  trailingSlash: true,
  
  // 5. Images: GitHub Pages tidak mendukung optimasi gambar server-side
  images: {
    unoptimized: true,
  },

  // Fitur tambahan untuk performa
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
