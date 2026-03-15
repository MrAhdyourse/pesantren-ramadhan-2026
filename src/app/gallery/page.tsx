'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Image as ImageIcon, Sparkles } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-[#FDFCF8] pb-24">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12">
        <Link href="/">
          <motion.div whileHover={{ x: -5 }} className="flex items-center gap-2 text-emerald-700 font-bold mb-12">
            <ArrowLeft className="w-5 h-5" />
            <span>Portal Utama</span>
          </motion.div>
        </Link>

        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex p-4 bg-amber-100 rounded-[2rem] text-amber-600 mb-6 shadow-xl"
          >
            <Camera className="w-12 h-12" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Momen <span className="text-amber-500">Berharga</span></h1>
          <p className="text-gray-600 max-w-xl mx-auto">Halaman ini akan segera dipenuhi dengan foto dan video keceriaan ananda selama kegiatan Pesantren Ramadhan 2026.</p>
        </div>

        {/* Prototype Grid with Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Pembukaan Pesantren', category: 'Hari 1', color: 'bg-emerald-100', icon: '🎉' },
            { title: 'Tadarus Bersama', category: 'Ibadah', color: 'bg-blue-100', icon: '📖' },
            { title: 'Lomba Adzan', category: 'Kegiatan', color: 'bg-amber-100', icon: '📢' },
            { title: 'Buka Puasa Ceria', category: 'Momen', color: 'bg-orange-100', icon: '🍱' },
            { title: 'Shalat Tarawih', category: 'Ibadah', color: 'bg-indigo-100', icon: '🌙' },
            { title: 'Game Edukasi', category: 'Seru-seruan', color: 'bg-purple-100', icon: '🎮' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/3] ${item.color} rounded-[2.5rem] mb-4 overflow-hidden relative border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-[1.02]`}>
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-125 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="px-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
