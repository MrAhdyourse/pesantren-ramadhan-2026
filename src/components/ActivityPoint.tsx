'use client';

import Link from 'next/link';
import { Activity } from '../types';
import { useEffect, useState, useRef } from 'react';

interface ActivityPointProps {
  activity: Activity;
  dayNumber: number;
  index: number;
}

export default function ActivityPoint({ activity, dayNumber, index }: ActivityPointProps) {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = itemRef.current?.getBoundingClientRect();
    if (rect) {
      setRipple({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setTimeout(() => setRipple(null), 600);
    }
  };

  const href = `/day${dayNumber}/${activity.id.split('-')[1]}`;

  return (
    <Link href={href} className="block no-underline">
      <div
        ref={itemRef}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          group relative flex items-center gap-6 p-5 mx-4 my-3 
          bg-white/80 backdrop-blur-sm rounded-2xl 
          shadow-sm hover:shadow-2xl hover:bg-white 
          transition-all duration-500 ease-out cursor-pointer 
          border border-emerald-100/50 hover:border-emerald-300/50
          ${mounted ? 'animate-slide-up' : 'opacity-0'}
        `}
        style={{ 
          animationDelay: `${0.1 + index * 0.08}s`,
          transform: isHovered ? 'translateX(8px) scale(1.02)' : 'translateX(0) scale(1)',
        }}
      >
        {/* Ripple effect */}
        {ripple && (
          <span
            className="absolute rounded-full bg-emerald-400/30 animate-ripple pointer-events-none"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        )}

        {/* Glow effect on hover */}
        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 rounded-2xl" />
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20 blur-xl rounded-2xl" />
        </div>

        {/* Icon container */}
        <div className="relative">
          <div
            className={`
              flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${activity.color} 
              flex items-center justify-center text-2xl shadow-lg
              transition-all duration-500 ease-out
              ${isHovered ? 'scale-110 rotate-6 shadow-xl' : 'scale-100 rotate-0'}
            `}
          >
            {/* Icon shine effect */}
            <div className={`absolute inset-0 rounded-2xl overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700`} />
            </div>
            <span className={`transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
              {activity.icon}
            </span>
          </div>
          
          {/* Icon glow */}
          <div className={`absolute -inset-2 bg-gradient-to-br ${activity.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 relative z-10">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full shadow-sm group-hover:bg-emerald-200 transition-colors duration-300">
              {activity.time}
            </span>
            {/* Live indicator for current time */}
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="text-base font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 truncate">
            {activity.title}
          </h3>
          <p className="text-gray-500 text-sm mt-0.5 group-hover:text-gray-600 transition-colors duration-300 truncate">
            {activity.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className={`
          flex-shrink-0 w-10 h-10 rounded-full 
          flex items-center justify-center 
          transition-all duration-500 ease-out
          ${isHovered 
            ? 'bg-emerald-100 shadow-lg' 
            : 'bg-gray-50'
          }
        `}>
          <svg 
            className={`w-5 h-5 transition-all duration-500 ${isHovered ? 'text-emerald-500 translate-x-1' : 'text-gray-300'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Left border accent */}
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b ${activity.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    </Link>
  );
}
