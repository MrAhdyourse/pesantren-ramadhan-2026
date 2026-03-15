'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, // Semakin kecil, semakin lembut (0.05 - 0.15)
      duration: 1.5, // Durasi scroll
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5, // Membantu scroll di HP agar lebih responsif
      infinite: false,
    }}>
      {children}
    </ReactLenis>
  );
}
