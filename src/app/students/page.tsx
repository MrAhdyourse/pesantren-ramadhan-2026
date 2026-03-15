'use client';

import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Trophy, 
  GraduationCap, 
  BarChart3, 
  UserCircle2,
  Heart,
  BookOpen,
  Landmark,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { studentsData, Student } from '@/data/students';
import AnimatedBackground from '@/components/AnimatedBackground';

const StatBar = ({ label, value, icon, color }: { label: string, value: number, icon: any, color: string }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
        {icon}
        <span>{label}</span>
      </div>
      <span className="text-sm font-bold text-gray-900">{value}%</span>
    </div>
    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
      />
    </div>
  </div>
);

export default function StudentsPage() {
  return (
    <main className="relative min-h-screen bg-[#FDFCF8] pb-24">
      <AnimatedBackground />

      {/* Navigation */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 flex justify-between items-center mb-12">
        <Link href="/">
          <motion.div 
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Portal Utama</span>
          </motion.div>
        </Link>
        <div className="bg-emerald-100/50 px-4 py-2 rounded-full border border-emerald-200/50 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-emerald-700" />
          <span className="text-sm font-bold text-emerald-800 uppercase tracking-wider">Kelas VI Al-Qowiy</span>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Profil & Statistik <span className="text-emerald-600">Al-Qowiy</span>
        </motion.h1>
        <p className="text-gray-600">Apresiasi atas semangat dan dedikasi ananda dalam menjalankan ibadah di bulan suci Ramadhan.</p>
      </div>

      {/* Students Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {studentsData.map((student, idx) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/50 p-8 shadow-sm hover:shadow-2xl hover:bg-white/80 transition-all duration-500 overflow-hidden"
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${student.gender === 'L' ? 'from-blue-50 to-indigo-50' : 'from-pink-50 to-rose-50'} -z-10 rounded-bl-full opacity-50`} />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar Area */}
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center text-3xl font-bold mb-4 shadow-xl border-4 border-white ${student.gender === 'L' ? 'bg-indigo-100 text-indigo-600' : 'bg-pink-100 text-pink-600'}`}>
                  {student.name.charAt(0)}
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {student.achievements.map((ach, i) => (
                    <span key={i} className="bg-amber-50 text-amber-700 text-[10px] px-2 py-1 rounded-full font-bold border border-amber-100">
                      {ach}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info & Stats Area */}
              <div className="flex-grow w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  {student.name}
                  {student.gender === 'P' ? <span className="text-pink-400">✿</span> : <span className="text-blue-400">✦</span>}
                </h3>

                <div className="grid grid-cols-1 gap-1">
                  <StatBar 
                    label="Kualitas Shalat" 
                    value={student.stats.shalat} 
                    icon={<Landmark className="w-4 h-4" />} 
                    color="from-emerald-400 to-teal-500" 
                  />
                  <StatBar 
                    label="Tadarus Al-Qur'an" 
                    value={student.stats.tadarus} 
                    icon={<BookOpen className="w-4 h-4" />} 
                    color="from-amber-400 to-orange-500" 
                  />
                  <StatBar 
                    label="Hafalan Surah" 
                    value={student.stats.hafalan} 
                    icon={<Trophy className="w-4 h-4" />} 
                    color="from-blue-400 to-indigo-500" 
                  />
                  <StatBar 
                    label="Adab & Akhlak" 
                    value={student.stats.akhlak} 
                    icon={<Heart className="w-4 h-4" />} 
                    color="from-rose-400 to-pink-500" 
                  />
                </div>
              </div>
            </div>

            {/* Micro Interaction Indicator */}
            <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <BarChart3 className="w-3 h-3" />
              <span>Realtime Analysis</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Decoration */}
      <div className="mt-24 flex justify-center opacity-30">
        <Star className="w-6 h-6 text-amber-400 animate-pulse" />
        <Star className="w-6 h-6 text-emerald-400 animate-pulse delay-75" />
        <Star className="w-6 h-6 text-teal-400 animate-pulse delay-150" />
      </div>
    </main>
  );
}
