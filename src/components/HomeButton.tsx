'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface HomeButtonProps {
  className?: string;
}

export default function HomeButton({ className = "" }: HomeButtonProps) {
  const pathname = usePathname();
  
  // Don't show on the portal page itself
  if (pathname === '/') return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 md:top-6 left-4 md:left-6 z-50 ${className}`}
    >
      <Link href="/">
        <motion.div
          whileHover={{ 
            scale: 1.05,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-2xl shadow-xl border border-emerald-100/50 group transition-all duration-300 hover:shadow-emerald-200/50"
        >
          <div className="bg-emerald-500 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform duration-300">
            <Home className="w-4 h-4" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-bold text-emerald-600/70 uppercase tracking-widest mb-0.5">Kembali</span>
            <span className="text-emerald-800 font-extrabold text-xs md:text-sm tracking-tight">Portal Utama</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
