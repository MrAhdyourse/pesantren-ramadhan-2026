'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Rocket, Stars, Trophy } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function GamesPage() {
  return (
    <main className="relative min-h-screen bg-[#FDFCF8] pb-24">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 text-center">

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex p-6 bg-indigo-100 rounded-[3rem] text-indigo-600 mb-8 shadow-2xl border-4 border-white"
        >
          <Gamepad2 className="w-16 h-16" />
        </motion.div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Zona <span className="text-indigo-600">Edu-Games</span></h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Sedang menyiapkan petualangan seru untuk ananda. Belajar agama jadi lebih asyik 
          dengan tantangan dan hadiah menarik!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -10 }} 
            className="group bg-white/80 p-10 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:bg-indigo-50/50"
          >
            <div className="w-20 h-20 bg-indigo-100 rounded-[1.5rem] flex items-center justify-center text-indigo-600 mb-6 group-hover:rotate-12 transition-transform">
              <Rocket className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Quiz Ramadhan</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">Asah pengetahuan agamamu dengan kuis cepat 60 detik!</p>
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full uppercase tracking-widest border border-indigo-100">Segera Hadir</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }} 
            className="group bg-white/80 p-10 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:bg-amber-50/50"
          >
            <div className="w-20 h-20 bg-amber-100 rounded-[1.5rem] flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
              <Stars className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Hafalan Surah</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">Cocokkan potongan ayat surah pendek dengan benar!</p>
            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-full uppercase tracking-widest border border-amber-100">Segera Hadir</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }} 
            className="group bg-white/80 p-10 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:bg-emerald-50/50"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-[1.5rem] flex items-center justify-center text-emerald-600 mb-6 group-hover:-rotate-12 transition-transform">
              <Trophy className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Papan Skor</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">Lihat siapa yang paling unggul di kelas Al-Qowiy!</p>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full uppercase tracking-widest border border-emerald-100">Sedang Proses</span>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
