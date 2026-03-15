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
  Quote,
  Github,
  Instagram,
  MessageCircle,
  GraduationCap
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
      description: 'Daftar Peserta & statistik pencapaian individu',
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
          <span>MI ISLAMIC CENTRE INDRAMAYU</span>
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

      {/* Dedicated Footer Section */}
      <motion.footer 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-6 pb-20 pt-10"
      >
        <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white/50 shadow-2xl relative overflow-hidden group">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-emerald-200/40 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-100/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:bg-amber-200/30 transition-colors duration-700" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xl mb-8 transform group-hover:rotate-6 transition-transform duration-500"
            >
              <Star className="w-10 h-10 fill-current" />
            </motion.div>

            <h3 className="text-sm font-black text-emerald-800 uppercase tracking-[0.3em] mb-4">Dedicated Recognition</h3>
            
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-tight">
              Dikembangkan & Didedikasikan oleh:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Ahdi Aghni</span>
            </h2>

            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 mb-8">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Tutor Kelas VI AL-QOWIY</span>
            </div>

            <div className="mb-6">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Follow Us</span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a 
                href="https://github.com/MrAhdyourse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white hover:bg-gray-900 hover:text-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 group/link"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span className="text-sm font-bold tracking-tight">Github</span>
              </a>
              
              <a 
                href="https://wa.me/6281395411676" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white hover:bg-[#25D366] hover:text-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 group/link"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-sm font-bold tracking-tight">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">MI Islamic Centre Indramayu © 2026</p>
        </div>
      </motion.footer>

      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    </main>
  );
}
