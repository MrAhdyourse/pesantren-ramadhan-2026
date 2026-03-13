import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/pesantren-ramadhan-2026",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
