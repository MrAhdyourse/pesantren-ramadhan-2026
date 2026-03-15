'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  GraduationCap, 
  BarChart3, 
  Heart,
  BookOpen,
  Landmark,
  Star,
  X,
  Award,
  ChevronRight,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';
import { studentsData } from '@/data/students';
import { Student } from '@/types';
import AnimatedBackground from '@/components/AnimatedBackground';

const StatRing = ({ value, color }: { value: number, color: string }) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          className="text-gray-100"
        />
        <motion.circle
          cx="20"
          cy="20"
          r={radius}
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={color}
        />
      </svg>
      <span className="absolute text-[8px] md:text-[10px] font-bold text-gray-600">{value}%</span>
    </div>
  );
};

const StatBarDetailed = ({ label, value, icon, color, description }: { label: string, value: number, icon: any, color: string, description: string }) => (
  <div className="bg-gray-50/50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-gray-100 hover:border-emerald-100 transition-colors group">
    <div className="flex justify-between items-start mb-2 md:mb-3">
      <div className="flex items-center gap-2 md:gap-3">
        <div className={`p-1.5 md:p-2 rounded-lg md:rounded-xl bg-white shadow-sm text-gray-600 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <div>
          <h4 className="text-xs md:text-sm font-bold text-gray-900">{label}</h4>
          <p className="text-[9px] md:text-[10px] text-gray-500 font-medium hidden sm:block">{description}</p>
        </div>
      </div>
      <span className="text-sm md:text-lg font-black text-gray-900">{value}%</span>
    </div>
    <div className="h-1.5 md:h-2 w-full bg-white rounded-full overflow-hidden shadow-inner">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
      />
    </div>
  </div>
);

export default function StudentsPage() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  return (
    <main className="relative min-h-screen bg-[#FAFAFA] pb-12 md:pb-24 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-20">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 mb-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">Academic Roster 2026</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight leading-tight"
            >
              Profil Siswa <span className="text-emerald-600">Al-Qowiy</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-sm md:text-lg font-medium leading-relaxed"
            >
              Menampilkan dedikasi dan pencapaian spiritual santri Kelas VI selama program Pesantren Ramadhan di MI Islamic Centre Indramayu.
            </motion.p>
          </div>
          
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
             <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm text-center min-w-[100px] md:min-w-[120px] flex-shrink-0">
                <div className="text-xl md:text-2xl font-black text-emerald-600">{studentsData.length}</div>
                <div className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Siswa</div>
             </div>
             <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm text-center min-w-[100px] md:min-w-[120px] flex-shrink-0">
                <div className="text-xl md:text-2xl font-black text-amber-500">A+</div>
                <div className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Avg. Grade</div>
             </div>
          </div>
        </div>

        {/* Students Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {studentsData.map((student, idx) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => setSelectedStudent(student)}
              className="group cursor-pointer relative bg-white rounded-2xl md:rounded-[2.5rem] p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${student.gender === 'L' ? 'from-blue-50 to-indigo-50' : 'from-pink-50 to-rose-50'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl font-black shadow-lg border-2 border-white ${student.gender === 'L' ? 'bg-indigo-600 text-white' : 'bg-pink-500 text-white'}`}>
                    {student.name.charAt(0)}
                  </div>
                  <StatRing value={Math.round((student.stats.sholat + student.stats.disiplin + student.stats.diskusi + student.stats.adab) / 4)} color={student.gender === 'L' ? 'text-indigo-500' : 'text-pink-500'} />
                </div>

                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-black text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {student.name}
                  </h3>
                  {student.nickname && (
                    <div className="text-[10px] md:text-xs font-bold text-emerald-600 mb-2 italic">
                      "{student.nickname}"
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span>ID: 2026-00{student.id}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>Kelas VI</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 md:gap-2 pt-4 md:pt-6 border-t border-gray-50">
                  {student.achievements.slice(0, 2).map((ach, i) => (
                    <span key={i} className="bg-gray-50 text-gray-600 text-[8px] md:text-[9px] px-2 py-1 md:px-3 md:py-1.5 rounded-lg font-black border border-gray-100 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-100 transition-colors">
                      {ach}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Detail Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 bg-gray-900/80 backdrop-blur-md"
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white rounded-t-[2.5rem] sm:rounded-[3.5rem] shadow-2xl w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Left/Top: Bio Section */}
              <div className={`w-full md:w-1/3 p-6 md:p-10 flex flex-row md:flex-col items-center md:text-center shrink-0 ${selectedStudent.gender === 'L' ? 'bg-indigo-600' : 'bg-pink-500'} text-white`}>
                <button 
                  onClick={() => setSelectedStudent(null)}
                  className="absolute top-4 right-4 md:top-8 md:left-8 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-16 h-16 md:w-32 md:h-32 rounded-2xl md:rounded-[2.5rem] bg-white text-gray-900 flex items-center justify-center text-2xl md:text-4xl font-black mr-4 md:mr-0 md:mb-8 shadow-xl border-4 border-white/20">
                  {selectedStudent.name.charAt(0)}
                </div>
                
                <div className="flex flex-col md:items-center">
                  <h2 className="text-xl md:text-3xl font-black leading-tight mb-1 md:mb-2">{selectedStudent.name}</h2>
                  {selectedStudent.nickname && (
                    <div className="text-[10px] md:text-sm font-bold text-emerald-200 mb-4 italic">
                      "{selectedStudent.nickname}"
                    </div>
                  )}
                  <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:mb-8 w-fit">
                    Student Passport
                  </div>
                  
                  {/* Hidden on small mobile to save space, but shown on desktop sidebar */}
                  <div className="hidden md:flex flex-col gap-4 w-full mt-4">
                     <div className="bg-white/10 p-4 rounded-2xl text-left border border-white/10">
                        <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Status</div>
                        <div className="flex items-center gap-2 font-bold text-sm">
                          <ShieldCheck className="w-4 h-4 text-emerald-300" />
                          {Math.round((selectedStudent.stats.sholat + selectedStudent.stats.disiplin + selectedStudent.stats.diskusi + selectedStudent.stats.adab) / 4) >= 90 ? 'Sangat Baik (A+)' : 'Baik (B)'}
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Modal Right/Bottom: Stats Content */}
              <div className="flex-grow p-6 md:p-14 overflow-y-auto">
                <div className="flex justify-between items-center mb-6 md:mb-10">
                  <h3 className="text-lg md:text-2xl font-black text-gray-900">Analisis Performa <span className="text-emerald-600">Ramadhan</span></h3>
                </div>

                <div className="grid grid-cols-1 gap-3 md:gap-4 mb-8 md:mb-10">
                  <StatBarDetailed 
                    label="Kualitas Shalat" 
                    value={selectedStudent.stats.sholat} 
                    icon={<Landmark className="w-4 h-4 md:w-5 md:h-5" />} 
                    color="from-emerald-400 to-emerald-600"
                    description="Kekhusyuan & kedisiplinan shalat jamaah"
                  />
                  <StatBarDetailed 
                    label="Kedisiplinan" 
                    value={selectedStudent.stats.disiplin} 
                    icon={<Target className="w-4 h-4 md:w-5 md:h-5" />} 
                    color="from-amber-400 to-orange-600"
                    description="Ketepatan waktu hadir & ketaatan tata tertib"
                  />
                  <StatBarDetailed 
                    label="Aktif Berdiskusi" 
                    value={selectedStudent.stats.diskusi} 
                    icon={<Zap className="w-4 h-4 md:w-5 md:h-5" />} 
                    color="from-blue-400 to-indigo-600"
                    description="Keaktifan dalam forum & tanya jawab"
                  />
                  <StatBarDetailed 
                    label="Adab & Akhlak" 
                    value={selectedStudent.stats.adab} 
                    icon={<Heart className="w-4 h-4 md:w-5 md:h-5" />} 
                    color="from-rose-400 to-pink-600"
                    description="Sikap terhadap guru & sesama teman"
                  />
                </div>

                <div className="bg-emerald-50 p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-emerald-100 mb-4 md:mb-0">
                   <h4 className="text-emerald-900 font-black text-[10px] md:text-sm uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
                     <Award className="w-4 h-4 md:w-5 md:h-5" />
                     Badges & Achievements
                   </h4>
                   <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {selectedStudent.achievements.map((ach, i) => (
                        <div key={i} className="bg-white/80 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold text-emerald-800 border border-emerald-200 shadow-sm">
                          {ach}
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Branding */}
      <div className="mt-12 md:mt-24 text-center px-4">
        <div className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 bg-white rounded-full shadow-sm border border-gray-100">
           <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-400 fill-current" />
           <span className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em]">MI Islamic Centre Indramayu</span>
           <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-400 fill-current" />
        </div>
      </div>
    </main>
  );
}
