'use client';

import { useEffect, useState, useRef } from 'react';
import { DayData } from '../types';
import ActivityPoint from './ActivityPoint';

interface DayCardProps {
  day: DayData;
}

export default function DayCard({ day }: DayCardProps) {
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setTilt({ x: y * 5, y: -x * 5 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={`w-full max-w-2xl mx-auto perspective-1000 ${mounted ? 'animate-scale-in' : 'opacity-0'}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {/* Header Card */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 rounded-t-3xl p-8 text-white text-center shadow-2xl overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-emerald-400/0 via-amber-400/50 to-emerald-400/0" 
               style={{ backgroundSize: '200% 100%' }} />
        </div>
        
        {/* Floating particles in header */}
        <div className="absolute top-4 left-4 text-xl opacity-20 animate-float-fast">✦</div>
        <div className="absolute top-6 right-6 text-lg opacity-15 animate-float-slow animation-delay-1000">✧</div>
        <div className="absolute bottom-4 left-8 text-sm opacity-10 animate-float-medium animation-delay-500">⭐</div>

        <div className="relative z-10">
          <div className={`text-sm opacity-80 mb-2 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
               style={{ animationDelay: '0.1s' }}>
            {day.hijriDate}
          </div>
          <h2 className={`text-4xl font-bold mb-2 ${mounted ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}>
            Day {day.dayNumber}
          </h2>
          <div className={`text-lg opacity-90 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
               style={{ animationDelay: '0.3s' }}>
            {day.dayName}, {day.date}
          </div>
          
          {/* Animated dots */}
          <div className="mt-4 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <span 
                key={i}
                className={`w-2 h-2 rounded-full bg-white/50 animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 30" className="w-full h-4 fill-white/90">
            <path d="M0,15 Q300,30 600,15 T1200,15 L1200,30 L0,30 Z" />
          </svg>
        </div>
      </div>

      {/* Activities Card */}
      <div className="relative bg-gradient-to-b from-white/95 to-emerald-50/95 backdrop-blur-lg rounded-b-3xl shadow-2xl overflow-hidden">
        {/* Decorative side lines */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-400 opacity-50" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-400 opacity-50" />
        
        <div className="p-4 space-y-1">
          {day.activities.map((activity, index) => (
            <ActivityPoint 
              key={activity.id} 
              activity={activity} 
              dayNumber={day.dayNumber}
              index={index}
            />
          ))}
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-t from-emerald-200/30 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
