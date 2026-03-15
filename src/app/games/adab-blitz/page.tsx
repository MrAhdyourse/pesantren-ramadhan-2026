'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Timer, Check, X, ArrowLeft, Trophy, Play, RefreshCcw, Bomb } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

const QUESTIONS = [
  { text: "Mengejek nama orang tua teman", isGood: false },
  { text: "Membantu guru membawakan buku", isGood: true },
  { text: "Menyapa teman dengan ramah", isGood: true },
  { text: "Mengambil pensil teman tanpa izin", isGood: false },
  { text: "Menyebarkan rahasia teman", isGood: false },
  { text: "Mendoakan kebaikan untuk teman", isGood: true },
  { text: "Menertawakan teman yang jatuh", isGood: false },
  { text: "Minta maaf saat melakukan kesalahan", isGood: true },
  { text: "Menunggu giliran antre dengan sabar", isGood: true },
  { text: "Memanggil teman dengan sebutan kasar", isGood: false },
  { text: "Menghargai perbedaan pendapat", isGood: true },
  { text: "Menyembunyikan sepatu teman", isGood: false },
];

export default function AdabBlitzPage() {
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'END'>('START');
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3); // Detik per pertanyaan
  const [isWrong, setIsWrong] = useState(false);

  const nextQuestion = useCallback(() => {
    setCurrentQ(Math.floor(Math.random() * QUESTIONS.length));
    setTimeLeft(Math.max(3 - Math.floor(score / 50) * 0.5, 1.2)); // Semakin cepat seiring skor
  }, [score]);

  const handleAnswer = (answer: boolean) => {
    if (gameState !== 'PLAYING') return;

    if (answer === QUESTIONS[currentQ].isGood) {
      setScore(s => s + 10);
      nextQuestion();
    } else {
      gameOver();
    }
  };

  const gameOver = () => {
    setIsWrong(true);
    setTimeout(() => {
      setGameState('END');
      setIsWrong(false);
    }, 500);
  };

  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 0.1) {
          gameOver();
          return 0;
        }
        return t - 0.1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [gameState, currentQ]);

  return (
    <main className="relative min-h-screen bg-indigo-950 overflow-hidden flex flex-col text-white font-sans">
      <AnimatedBackground />

      <div className="relative z-20 flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <Link href="/games" className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 transition-all">
            <ArrowLeft />
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 px-6 py-2 rounded-full border border-white/20">
              <span className="font-black text-xl">SKOR: {score}</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {gameState === 'START' && (
            <motion.div 
              key="start" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center text-center"
            >
              <div className="w-24 h-24 bg-amber-500 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(245,158,11,0.5)] rotate-12">
                <Zap size={48} fill="currentColor" />
              </div>
              <h1 className="text-6xl font-black mb-4">Adab <span className="text-amber-400">Blitz</span></h1>
              <p className="text-indigo-200 text-lg mb-12 max-w-xs">
                Uji kecepatan berpikirmu! Pilih <b>Benar</b> atau <b>Salah</b> dalam sekejap mata.
              </p>
              <button onClick={() => { setScore(0); setGameState('PLAYING'); nextQuestion(); }} className="bg-white text-indigo-900 font-black text-2xl py-6 px-16 rounded-[2rem] shadow-xl hover:scale-105 transition-all">
                GAS SEKARANG!
              </button>
            </motion.div>
          )}

          {gameState === 'PLAYING' && (
            <motion.div 
              key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className={`flex-1 flex flex-col items-center justify-center transition-colors duration-200 ${isWrong ? 'bg-rose-500/50' : ''}`}
            >
              {/* Timer Bar */}
              <div className="w-full bg-white/10 h-6 rounded-full mb-12 border-2 border-white/20 overflow-hidden relative">
                <motion.div 
                  className={`h-full ${timeLeft < 1 ? 'bg-rose-500' : 'bg-amber-400'}`}
                  style={{ width: `${(timeLeft / 3) * 100}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Timer size={14} className="mr-1" />
                   <span className="text-[10px] font-black">{timeLeft.toFixed(1)}s</span>
                </div>
              </div>

              {/* Question Card */}
              <motion.div 
                key={currentQ}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl w-full text-center border-b-[12px] border-indigo-200"
              >
                <h2 className="text-3xl md:text-4xl font-black text-indigo-950 leading-tight">
                  "{QUESTIONS[currentQ].text}"
                </h2>
              </motion.div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-6 w-full mt-12">
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleAnswer(false)}
                  className="bg-rose-600 h-24 rounded-3xl flex items-center justify-center border-b-8 border-rose-800 active:border-b-0 active:translate-y-2 transition-all shadow-lg shadow-rose-900/40"
                >
                  <X size={48} strokeWidth={4} />
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleAnswer(true)}
                  className="bg-emerald-500 h-24 rounded-3xl flex items-center justify-center border-b-8 border-emerald-700 active:border-b-0 active:translate-y-2 transition-all shadow-lg shadow-emerald-900/40"
                >
                  <Check size={48} strokeWidth={4} />
                </motion.button>
              </div>
            </motion.div>
          )}

          {gameState === 'END' && (
            <motion.div 
              key="end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center"
            >
              <Bomb size={100} className="text-rose-500 mb-6" />
              <h2 className="text-2xl font-black text-rose-300 uppercase mb-2">WAKTU HABIS / SALAH!</h2>
              <h1 className="text-8xl font-black mb-8">{score}</h1>
              <button onClick={() => { setScore(0); setGameState('PLAYING'); nextQuestion(); }} className="bg-white text-indigo-900 font-black text-xl py-5 px-12 rounded-[2rem] flex items-center gap-3">
                <RefreshCcw /> COBA LAGI
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
