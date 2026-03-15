'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Heart, Zap, ArrowLeft, Trophy, Play, RefreshCcw, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

// Tipe benda yang jatuh
const ITEMS = [
  { text: "Membantu", type: "GOOD", color: "bg-emerald-500" },
  { text: "Menghargai", type: "GOOD", color: "bg-sky-500" },
  { text: "Sopan", type: "GOOD", color: "bg-indigo-500" },
  { text: "Senyum", type: "GOOD", color: "bg-amber-500" },
  { text: "Mengejek", type: "BAD", color: "bg-rose-600" },
  { text: "Memukul", type: "BAD", color: "bg-red-700" },
  { text: "Ghibah", type: "BAD", color: "bg-purple-700" },
  { text: "Nyerobot", type: "BAD", color: "bg-orange-700" },
];

export default function ShieldKindnessPage() {
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'END'>('START');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [fallingItems, setFallingItems] = useState<any[]>([]);
  const [shieldPos, setShieldPos] = useState(50); // Persentase 0 - 100
  const gameContainerRef = useRef<HTMLDivElement>(null);

  // Mulai Game
  const startGame = () => {
    setScore(0);
    setLives(3);
    setFallingItems([]);
    setGameState('PLAYING');
  };

  // Logika Pergerakan Shield (Mouse/Touch)
  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (gameState !== 'PLAYING' || !gameContainerRef.current) return;
    const containerRect = gameContainerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const relativeX = ((clientX - containerRect.left) / containerRect.width) * 100;
    setShieldPos(Math.min(Math.max(relativeX, 5), 95));
  };

  // Spawn Benda Jatuh
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const spawnInterval = setInterval(() => {
      const randomItem = ITEMS[Math.floor(Math.random() * ITEMS.length)];
      const newItem = {
        id: Date.now(),
        ...randomItem,
        left: Math.random() * 90 + 5,
        top: -10,
      };
      setFallingItems(prev => [...prev, newItem]);
    }, 800 - Math.min(score * 5, 500)); // Semakin tinggi skor, semakin cepat spawn

    return () => clearInterval(spawnInterval);
  }, [gameState, score]);

  // Animasi Jatuh & Deteksi Tabrakan
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const gameLoop = setInterval(() => {
      setFallingItems(prev => {
        const nextItems = prev.map(item => ({ ...item, top: item.top + 2 }));
        
        // Cek tabrakan atau lewat batas
        nextItems.forEach(item => {
          // Jika sampai di posisi shield (sekitar top 85-90)
          if (item.top >= 82 && item.top <= 88) {
            const dist = Math.abs(item.left - shieldPos);
            if (dist < 10) { // Jika kena perisai
              if (item.type === "GOOD") {
                setScore(s => s + 10);
              } else {
                setLives(l => l - 1);
              }
              item.top = 200; // Hilangkan
            }
          }
        });

        const filtered = nextItems.filter(item => {
          if (item.top > 100) {
            if (item.type === "GOOD" && item.top < 200) {
                // Jika item baik lewat tanpa ditangkap, tidak apa-apa (atau bisa kurangi nyawa jika ingin lebih sulit)
            }
            return false;
          }
          return true;
        });

        return filtered;
      });
    }, 30);

    return () => clearInterval(gameLoop);
  }, [gameState, shieldPos]);

  // Cek Game Over
  useEffect(() => {
    if (lives <= 0) setGameState('END');
  }, [lives]);

  return (
    <main className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col text-white">
      <AnimatedBackground />

      {/* UI Overlay */}
      <div className="relative z-20 flex items-center justify-between p-6 bg-black/40 backdrop-blur-md">
        <Link href="/games" className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
          <ArrowLeft />
        </Link>
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <Trophy className="text-amber-400" />
            <span className="text-2xl font-black">{score}</span>
          </div>
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <Heart key={i} className={`w-6 h-6 ${i < lives ? 'text-rose-500 fill-current' : 'text-slate-700'}`} />
            ))}
          </div>
        </div>
      </div>

      <div 
        ref={gameContainerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        className="relative flex-1 cursor-none overflow-hidden touch-none"
      >
        <AnimatePresence>
          {gameState === 'START' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 z-30"
            >
              <Shield size={100} className="text-indigo-500 mb-6 animate-pulse" />
              <h1 className="text-5xl font-black mb-4">Perisai <span className="text-indigo-400">Kebaikan</span></h1>
              <p className="text-slate-400 max-w-sm text-center mb-8">
                Gunakan perisaimu! Tangkap sikap <b>Terpuji</b> dan hindari kata-kata <b>Bullying</b>.
              </p>
              <button onClick={startGame} className="bg-indigo-600 px-12 py-4 rounded-2xl font-black text-xl hover:scale-105 transition-all">
                MULAI GAME
              </button>
            </motion.div>
          )}

          {gameState === 'END' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-rose-950/90 z-30 p-8"
            >
              <AlertTriangle size={80} className="text-white mb-6" />
              <h2 className="text-3xl font-bold mb-2">MISI SELESAI</h2>
              <h1 className="text-7xl font-black mb-8">{score}</h1>
              <p className="text-rose-200 mb-12 text-center max-w-xs">
                Teruslah menjaga hati dari sikap buruk dan lindungi temanmu dari bullying!
              </p>
              <button onClick={startGame} className="bg-white text-rose-900 px-12 py-4 rounded-2xl font-black text-xl flex items-center gap-2">
                <RefreshCcw /> MAIN LAGI
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Falling Items */}
        {fallingItems.map(item => (
          <div 
            key={item.id}
            className={`absolute px-4 py-2 rounded-full font-bold shadow-lg border-2 border-white/20 whitespace-nowrap ${item.color}`}
            style={{ left: `${item.left}%`, top: `${item.top}%`, transform: 'translateX(-50%)' }}
          >
            {item.text}
          </div>
        ))}

        {/* Shield */}
        {gameState === 'PLAYING' && (
          <motion.div 
            className="absolute bottom-10 flex flex-col items-center"
            style={{ left: `${shieldPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="bg-indigo-500 w-24 h-4 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)] border-2 border-white/50 mb-2" />
            <Shield size={40} className="text-indigo-400" />
          </motion.div>
        )}
      </div>
    </main>
  );
}
