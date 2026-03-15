'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

interface TimelineProps {
  days: Array<{
    dayNumber: number;
    date: string;
    dayName: string;
  }>;
}

export default function Timeline({ days }: TimelineProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    // Throttled scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setScrollProgress(Math.min(progress, 100));
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-emerald-100/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-emerald-500 to-teal-500"
          style={{
            width: `${scrollProgress}%`,
            willChange: 'width',
          }}
        />
      </div>

      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md shadow-lg border-b border-emerald-100 z-40">
        {/* Animated line under nav */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex justify-center gap-3">
            {days.map((day, index) => {
              const isActive = pathname === `/day${day.dayNumber}`;
              const isTimelineRoot = pathname === '/timeline';
              const isDay1 = day.dayNumber === 1;
              const isCurrentDay = (isTimelineRoot && isDay1) || isActive;

              return (
                <Link
                  key={day.dayNumber}
                  href={isDay1 ? '/timeline' : `/day${day.dayNumber}`}
                  className={`
                    group relative flex-1 max-w-[140px] px-4 py-3 rounded-2xl font-semibold
                    transition-all duration-500 ease-out text-center overflow-hidden
                    ${mounted ? 'animate-scale-in' : 'opacity-0'}
                    ${isCurrentDay
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                      : 'bg-gray-50 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 hover:scale-102'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Shimmer effect for active */}
                  {isCurrentDay && (
                    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  )}

                  {/* Ripple container */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className={`absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300 rounded-full`} />
                  </div>

                  <div className="relative z-10">
                    <div className={`text-xs mb-0.5 transition-all duration-300 ${isCurrentDay ? 'opacity-90' : 'opacity-70 group-hover:opacity-90'}`}>
                      {day.dayName}
                    </div>
                    <div className="text-lg font-bold transition-transform duration-300 group-hover:scale-105">
                      Day {day.dayNumber}
                    </div>
                    <div className={`text-xs mt-0.5 transition-all duration-300 ${isCurrentDay ? 'opacity-80' : 'opacity-60 group-hover:opacity-80'}`}>
                      {day.date.split(' ')[0]}
                    </div>
                  </div>

                  {/* Active indicator dot */}
                  {isCurrentDay && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-lg" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
