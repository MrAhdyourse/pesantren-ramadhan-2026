'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CalendarDays, 
  Camera, 
  Gamepad2, 
  Users, 
  ChevronRight, 
  Sparkles,
  Star,
  Quote
} from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingElements from '@/components/FloatingElements';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
};

export default function Portal() {
  const menuItems = [
    {
      title: 'Timeline Kegiatan',
      description: 'Jadwal harian & aktivitas ibadah selama Ramadhan',
      icon: <CalendarDays className="w-8 h-8" />,
      href: '/timeline',
      color: 'from-emerald-500 to-teal-600',
      size: 'large'
    },
    {
      title: 'Dokumentasi',
      description: 'Momen berharga & kenangan tak terlupakan',
      icon: <Camera className="w-8 h-8" />,
      href: '/gallery',
      color: 'from-amber-400 to-orange-500',
      size: 'small'
    },
    {
      title: 'Edu Games',
      description: 'Belajar agama dengan cara yang seru',
      icon: <Gamepad2 className="w-8 h-8" />,
      href: '/games',
      color: 'from-indigo-500 to-purple-600',
      size: 'small'
    },
    {
      title: 'Profil Al-Qowiy',
      description: 'Daftar siswa & statistik pencapaian individu',
      icon: <Users className="w-8 h-8" />,
      href: '/students',
      color: 'from-blue-500 to-cyan-600',
      size: 'large'
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#FDFCF8] overflow-hidden">
      <AnimatedBackground />
      <FloatingElements />

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-emerald-100/50 backdrop-blur-sm px-4 py-2 rounded-full text-emerald-700 text-sm font-semibold mb-6 border border-emerald-200/50"
        >
          <Sparkles className="w-4 h-4" />
          <span>Portal Digital Ramadhan 1447H</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Pesantren <span className="text-emerald-600">Ramadhan</span> 2026
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Selamat datang di ruang digital Kelas VI Al-Qowiy. Mari bersama-sama meraih 
          keberkahan di bulan yang suci dengan penuh semangat dan keceriaan.
        </motion.p>
      </div>

      {/* Bento Grid Menu */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {menuItems.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative h-full overflow-hidden rounded-[2rem] p-8 border border-gray-200/50 bg-white/40 backdrop-blur-md shadow-sm transition-all duration-500 hover:shadow-2xl hover:bg-white/60`}
            >
              {/* Decorative Background Gradient */}
              <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 group-hover:scale-150 transition-transform duration-700`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                  {item.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h2>
                
                <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-4 transition-all duration-300">
                  <span>Eksplorasi</span>
                  <ChevronRight className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Quote Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto px-6 pb-20 text-center"
      >
        <div className="flex justify-center mb-6">
          <Quote className="w-10 h-10 text-emerald-200" />
        </div>
        <p className="text-xl italic text-gray-600 mb-4 leading-relaxed font-serif">
          "Puasa bukanlah sekadar menahan lapar dan dahaga, melainkan juga menahan diri 
          dari kata-kata yang sia-sia dan perilaku yang buruk."
        </p>
        <p className="text-sm font-bold text-emerald-700 uppercase tracking-widest">— MI Islamic Centre Indramayu</p>
      </motion.div>

      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    </main>
  );
}
