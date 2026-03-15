'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  ShieldCheck, 
  MessageCircle, 
  Users, 
  ArrowLeft, 
  Trophy, 
  Play, 
  RefreshCcw,
  CheckCircle2,
  XCircle,
  Star,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

// ============================================================================
// DATABASE SKENARIO ADAB & ANTI-BULLY (VERSI PESERTA)
// ============================================================================
const scenarios = [
  {
    id: 1,
    category: "Anti-Bully",
    situation: "Kamu melihat temanmu diejek karena sepatu sekolahnya sudah usang dan robek sedikit. Apa yang kamu lakukan?",
    options: [
      { text: "Ikut tertawa supaya dianggap asyik oleh teman lain.", score: -10, feedback: "Wah, itu termasuk membiarkan bullying. Sebagai Peserta, kita harus menghargai orang lain." },
      { text: "Diam saja dan pura-pura tidak melihat.", score: 0, feedback: "Diam saat melihat keburukan kurang baik. Lebih baik jika kita berani membela." },
      { text: "Mengajak teman yang mengejek untuk berhenti dan menemani teman yang sedih.", score: 10, feedback: "Maa syaa Allah! Kamu pemberani dan penyayang. Inilah ciri Peserta sejati." }
    ]
  },
  {
    id: 2,
    category: "Etika Sosial",
    situation: "Saat berjalan di koridor, kamu melihat seorang Guru sedang membawa tumpukan buku yang sangat berat. Apa sikapmu?",
    options: [
      { text: "Lari menghindar supaya tidak disuruh membantu.", score: -5, feedback: "Aduh, itu kurang sopan. Membantu guru adalah kunci keberkahan ilmu." },
      { text: "Berjalan lewat begitu saja tanpa menyapa.", score: 0, feedback: "Kurang attitude. Sebaiknya ucapkan salam atau tawarkan bantuan." },
      { text: "Segera menghampiri dan menawarkan diri membawakan buku tersebut.", score: 10, feedback: "Luar biasa! Hormat kepada guru adalah adab tertinggi bagi seorang pelajar." }
    ]
  },
  {
    id: 3,
    category: "Attitude",
    situation: "Seorang teman tanpa sengaja menumpahkan air ke bukumu sampai basah kuyup. Apa reaksimu?",
    options: [
      { text: "Membalas dengan menumpahkan air ke bukunya juga.", score: -10, feedback: "Dendam tidak menyelesaikan masalah. Sabar itu lebih mulia." },
      { text: "Marah-marah dan melaporkannya dengan nada kasar.", score: -5, feedback: "Emosi yang tidak terkontrol bisa merusak pertemanan." },
      { text: "Memaafkannya dan bilang 'Tidak apa-apa, lain kali hati-hati ya'.", score: 10, feedback: "Keren! Memaafkan adalah ciri orang yang berjiwa besar." }
    ]
  },
  {
    id: 4,
    category: "Anti-Bully",
    situation: "Ada Peserta baru yang pendiam dan belum punya teman. Teman-temanmu berniat mengerjainya siang ini. Sikapmu?",
    options: [
      { text: "Mengingatkan teman-teman bahwa itu perbuatan buruk dan mengajak Peserta baru tersebut berteman.", score: 10, feedback: "Hebat! Kamu melindungi saudaramu dari gangguan." },
      { text: "Melihat dari jauh karena ingin tahu apa yang akan terjadi.", score: -5, feedback: "Menonton perbuatan buruk tanpa mencegahnya bukan sifat Peserta teladan." },
      { text: "Ikut menyiapkan rencana 'ngerjain' supaya seru.", score: -10, feedback: "Ingat, menyakiti hati sesama itu perbuatan yang salah." }
    ]
  },
  {
    id: 5,
    category: "Etika Sosial",
    situation: "Kamu sedang antre makan di kantin, tapi teman akrabmu mengajakmu menyela antrean (nyerobot) supaya cepat. Apa keputusanmu?",
    options: [
      { text: "Ikut menyerobot karena sudah sangat lapar.", score: -10, feedback: "Menyerobot itu mengambil hak orang lain. Tidak baik lho!" },
      { text: "Tetap mengantre dengan tertib dan mengajak temanmu ikut mengantre juga.", score: 10, feedback: "Disiplin dan adab antre menunjukkan kualitas pribadimu." },
      { text: "Diam saja tapi membiarkan temanmu menyerobot sendirian.", score: -5, feedback: "Harusnya diingatkan ya, agar temanmu tidak melakukan kesalahan." }
    ]
  }
];

export default function AdabMissionPage() {
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'RESULT'>('START');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{text: string, isGood: boolean} | null>(null);

  const startMission = () => {
    setScore(0);
    setCurrentIndex(0);
    setGameState('PLAYING');
    setFeedback(null);
  };

  const handleOptionSelect = (option: any) => {
    const isGood = option.score > 0;
    setFeedback({ text: option.feedback, isGood });
    setScore(prev => prev + option.score);
  };

  const nextQuestion = () => {
    setFeedback(null);
    if (currentIndex + 1 < scenarios.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameState('RESULT');
    }
  };

  const getRank = () => {
    if (score >= 40) return { label: "PESERTA TERBAIK", color: "text-emerald-600", icon: "🌟" };
    if (score >= 20) return { label: "GENERASI BERADAB", color: "text-indigo-600", icon: "👍" };
    return { label: "PERLU BELAJAR ADAB", color: "text-rose-600", icon: "📚" };
  };

  return (
    <main className="relative min-h-screen bg-[#FDFCF8] overflow-hidden flex flex-col">
      <AnimatedBackground />

      <div className="relative z-10 flex-1 flex flex-col max-w-4xl mx-auto w-full px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link href="/games" className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-indigo-600">
            <ArrowLeft />
          </Link>
          <div className="bg-white/80 backdrop-blur px-6 py-2 rounded-full border-2 border-indigo-100 shadow-sm">
            <span className="font-black text-indigo-600">POIN ADAB: {score}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {gameState === 'START' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex-1 flex flex-col items-center justify-center text-center"
            >
              <div className="w-24 h-24 bg-indigo-600 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-xl rotate-3">
                <ShieldCheck size={48} />
              </div>
              <h1 className="text-5xl font-black text-gray-900 mb-4">Misi <span className="text-indigo-600">Generasi Beradab</span></h1>
              <p className="text-gray-600 text-lg max-w-md mb-12">
                Jadilah Peserta yang tidak hanya pintar, tapi juga punya adab mulia, berani lawan bully, dan sayang sesama.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startMission}
                className="bg-indigo-600 text-white font-black text-2xl py-6 px-12 rounded-[2rem] shadow-xl flex items-center gap-3"
              >
                <Play className="fill-current" /> MULAI MISI
              </motion.button>
            </motion.div>
          )}

          {gameState === 'PLAYING' && (
            <motion.div 
              key="playing"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex-1 flex flex-col"
            >
              <div className="w-full h-3 bg-white rounded-full mb-12 border-2 border-indigo-50 p-0.5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / scenarios.length) * 100}%` }}
                  className="h-full bg-indigo-600 rounded-full"
                />
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border-4 border-white mb-8 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-400 text-white font-black px-6 py-2 rounded-full shadow-lg border-4 border-white">
                  MISI {currentIndex + 1}
                </div>
                <div className="flex items-center gap-3 mb-4 mt-2 justify-center">
                  <span className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                    {scenarios[currentIndex].category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center leading-tight">
                  "{scenarios[currentIndex].situation}"
                </h2>
              </div>

              <div className="space-y-4">
                {scenarios[currentIndex].options.map((opt, i) => (
                  <motion.button
                    key={i}
                    disabled={!!feedback}
                    onClick={() => handleOptionSelect(opt)}
                    whileHover={!feedback ? { x: 10, backgroundColor: '#EEF2FF' } : {}}
                    className={`w-full text-left p-6 rounded-[1.5rem] font-bold text-lg border-4 transition-all flex items-center gap-4
                      ${feedback ? 'opacity-50 grayscale cursor-not-allowed' : 'bg-white border-white shadow-md hover:border-indigo-100 text-gray-700'}
                    `}
                  >
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-indigo-600 font-black shrink-0">
                      {String.fromCharCode(65 + i)}
                    </div>
                    {opt.text}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {feedback && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-8 p-8 rounded-[2rem] border-4 text-center shadow-2xl relative
                      ${feedback.isGood ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}
                    `}
                  >
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                      {feedback.isGood ? (
                        <CheckCircle2 className="w-24 h-24 text-emerald-500 bg-white rounded-full p-2" />
                      ) : (
                        <XCircle className="w-24 h-24 text-rose-500 bg-white rounded-full p-2" />
                      )}
                    </div>
                    <p className="text-xl font-bold mb-6 mt-8">{feedback.text}</p>
                    <button 
                      onClick={nextQuestion}
                      className="bg-gray-900 text-white font-black py-4 px-12 rounded-2xl flex items-center gap-2 mx-auto"
                    >
                      LANJUTKAN MISI <ChevronRight size={24} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {gameState === 'RESULT' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center"
            >
              <div className="text-8xl mb-6">{getRank().icon}</div>
              <h2 className="text-2xl font-black text-indigo-400 uppercase tracking-widest mb-2">HASIL MISI KAMU</h2>
              <h1 className={`text-5xl md:text-7xl font-black mb-8 ${getRank().color}`}>
                {getRank().label}
              </h1>
              
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-white mb-12 w-full max-w-md">
                <p className="text-gray-500 font-bold mb-2 uppercase text-xs">Skor Adab Terkumpul</p>
                <div className="text-6xl font-black text-gray-900 mb-4">{score}</div>
                <p className="text-gray-600 font-medium">
                  {score >= 40 
                    ? "Kamu luar biasa! Pertahankan adabmu dan jadilah teladan bagi Peserta lainnya." 
                    : "Sudah bagus, tapi masih ada beberapa adab yang perlu diperbaiki. Terus belajar ya!"}
                </p>
              </div>

              <div className="flex gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startMission}
                  className="bg-indigo-600 text-white font-black py-5 px-10 rounded-[2rem] shadow-xl flex items-center gap-2"
                >
                  <RefreshCcw /> ULANGI MISI
                </motion.button>
                <Link href="/games" className="bg-white text-gray-900 font-black py-5 px-10 rounded-[2rem] shadow-md border-4 border-white">
                  SELESAI
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
