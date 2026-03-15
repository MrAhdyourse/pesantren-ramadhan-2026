import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'timeline-pesantren'; 

const nextConfig: NextConfig = {
  // 1. Wajib untuk Static Export
  output: "export",
  
  // 2. BasePath: Agar aset ditarik dari /repo-name/ bukan dari root host
  // Ini otomatis menangani link dan aset di production
  basePath: isProd ? `/${repoName}` : "",
  
  // 3. Trailing Slash: Memastikan /about menjadi /about/ (mencari index.html di dalam folder)
  // Sangat direkomendasikan untuk GitHub Pages agar tidak 404 saat refresh
  trailingSlash: true,
  
  // 4. Gambar tidak bisa di-optimize otomatis di static export tanpa server Node.js
  images: {
    unoptimized: true,
  },

  // 5. Fitur lainnya
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
