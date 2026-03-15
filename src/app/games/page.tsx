'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Rocket, Stars, Trophy, ShieldCheck, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/games/mystery-box" className="block">
            <motion.div 
              whileHover={{ y: -10 }} 
              className="group bg-white/80 p-10 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:bg-indigo-50/50 h-full"
            >
              <div className="w-20 h-20 bg-indigo-100 rounded-[1.5rem] flex items-center justify-center text-indigo-600 mb-6 group-hover:rotate-12 transition-transform">
                <Gamepad2 className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">100 Mystery Box</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Uji keberuntunganmu! Pilih kotak dan temukan kejutan random di dalamnya.</p>
              <span className="text-[10px] font-bold text-white bg-indigo-600 px-4 py-2 rounded-full uppercase tracking-widest border border-indigo-100">Main Sekarang</span>
            </motion.div>
          </Link>

          <Link href="/games/adab-mission" className="block">
            <motion.div 
              whileHover={{ y: -10 }} 
              className="group bg-white/80 p-10 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:bg-emerald-50/50 h-full"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-[1.5rem] flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Misi Generasi Beradab</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Latih etikamu! Hadapi berbagai skenario sosial dan jadilah Peserta teladan.</p>
              <span className="text-[10px] font-bold text-white bg-emerald-600 px-4 py-2 rounded-full uppercase tracking-widest border border-emerald-100">Mulai Misi</span>
            </motion.div>
          </Link>

          <Link href="/games/shield-kindness" className="block">
            <motion.div 
              whileHover={{ y: -10 }} 
              className="group bg-white/80 p-10 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:bg-sky-50/50 h-full"
            >
              <div className="w-20 h-20 bg-sky-100 rounded-[1.5rem] flex items-center justify-center text-sky-600 mb-6 group-hover:rotate-12 transition-transform">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Perisai Kebaikan</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Ketangkasan refleks! Tangkap sikap terpuji dan tepis kata-kata bullying.</p>
              <span className="text-[10px] font-bold text-white bg-sky-600 px-4 py-2 rounded-full uppercase tracking-widest border border-sky-100">Uji Refleks</span>
            </motion.div>
          </Link>

          <Link href="/games/adab-blitz" className="block">
            <motion.div 
              whileHover={{ y: -10 }} 
              className="group bg-white/80 p-10 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:bg-amber-50/50 h-full"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-[1.5rem] flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Adab Blitz</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Kecepatan berpikir! Tentukan adab atau zolim sebelum bom meledak!</p>
              <span className="text-[10px] font-bold text-white bg-amber-600 px-4 py-2 rounded-full uppercase tracking-widest border border-amber-100">Main Cepat</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </main>
  );
}
