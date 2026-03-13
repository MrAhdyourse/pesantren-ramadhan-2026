'use client';

import { useEffect, useState } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const isNight = time.getHours() >= 18 || time.getHours() < 6;

  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
      <span className={`text-lg ${isNight ? 'animate-pulse' : ''}`}>
        {isNight ? '🌙' : '☀️'}
      </span>
      <div className="flex items-center font-mono text-sm font-medium">
        <span className="tabular-nums">{hours}</span>
        <span className="animate-blink mx-0.5">:</span>
        <span className="tabular-nums">{minutes}</span>
        <span className="animate-blink mx-0.5 opacity-50">:</span>
        <span className="tabular-nums opacity-50">{seconds}</span>
      </div>
    </div>
  );
}
