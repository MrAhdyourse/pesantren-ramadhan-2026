'use client';

import { useEffect, useState } from 'react';
import LiveClock from './LiveClock';

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative w-full bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 text-white py-12 px-4 shadow-2xl overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-emerald-600/0 via-amber-500/30 to-emerald-600/0" 
             style={{ backgroundSize: '200% 100%' }} />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-4 left-4 text-4xl opacity-20 animate-float-slow">✦</div>
      <div className="absolute top-8 right-8 text-3xl opacity-15 animate-float-medium animation-delay-1000">✧</div>
      <div className="absolute bottom-4 left-1/4 text-2xl opacity-10 animate-float-fast animation-delay-500">⭐</div>
      <div className="absolute bottom-8 right-1/4 text-3xl opacity-15 animate-float-slow animation-delay-2000">🌙</div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Top decoration */}
        <div className={`flex justify-center mb-6 ${mounted ? 'animate-bounce-in' : 'opacity-0'}`}>
          <div className="flex items-center gap-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400 rounded-full animate-shimmer" />
            <span className="text-amber-400 text-3xl animate-pulse">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400 rounded-full animate-shimmer" />
          </div>
        </div>

        {/* Title with reveal animation */}
        <h1 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight ${mounted ? 'animate-text-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}>
          <span className="inline-block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text">
            Timeline Pesantren Ramadhan
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-lg text-emerald-100 mb-6 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
           style={{ animationDelay: '0.4s' }}>
          MI Islamic Centre Indramayu
        </p>

        {/* Badge */}
        <div className={`inline-flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg animate-glow ${mounted ? 'animate-scale-in' : 'opacity-0'}`}
             style={{ animationDelay: '0.6s' }}>
          <span className="text-amber-400 text-lg animate-pulse">★</span>
          <span className="font-semibold text-white">Kelas VI Al-Qowiy</span>
          <span className="text-amber-400 text-lg animate-pulse">★</span>
        </div>

        {/* Year info with Live Clock */}
        <div className={`mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
             style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-4 text-sm text-emerald-200">
            <span className="font-semibold">2026 M</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-semibold">1447 H</span>
          </div>
          <LiveClock />
        </div>

        {/* Bottom decoration */}
        <div className={`flex justify-center mt-8 ${mounted ? 'animate-bounce-in' : 'opacity-0'}`}
             style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400 rounded-full" />
            <span className="text-amber-400 text-2xl">✦</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 40" className="w-full h-8 fill-emerald-50/30">
          <path d="M0,20 Q300,40 600,20 T1200,20 L1200,40 L0,40 Z" />
        </svg>
      </div>
    </header>
  );
}
