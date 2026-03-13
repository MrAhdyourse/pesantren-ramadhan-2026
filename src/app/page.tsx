import { Header, Timeline, DayCard } from '@/components';
import { timelineData } from '@/data';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingElements from '@/components/FloatingElements';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="relative min-h-screen pb-8 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Floating Decorative Elements */}
      <FloatingElements />

      {/* Main Content */}
      <div className="relative z-20">
        <Header />
        <Timeline days={timelineData.days} />

        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-2xl mx-auto px-4 py-8">
            <DayCard day={timelineData.days[0]} />
          </div>
        </ScrollReveal>

        {/* Premium Footer */}
        <footer className="relative text-center py-12 px-4 mt-8">
          {/* Decorative top line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
          
          <ScrollReveal direction="up" delay={0.3}>
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-8 py-4 rounded-full shadow-xl border border-emerald-100/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <span className="text-emerald-600 font-semibold text-lg">Pesantren Ramadhan 2026 / 1447 H</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-emerald-500 text-sm mt-4 font-medium">
              MI Islamic Centre Indramayu - Kelas VI Al-Qowiy
            </p>
          </ScrollReveal>

          {/* Decorative elements */}
          <div className="flex justify-center mt-6 gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" style={{ animationDelay: '0s' }} />
            <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 opacity-30">
            <svg viewBox="0 0 1200 60" className="w-full h-12 fill-emerald-200">
              <path d="M0,30 Q300,60 600,30 T1200,30 L1200,60 L0,60 Z" />
            </svg>
          </div>
        </footer>
      </div>

      {/* Corner decorations */}
      <div className="fixed bottom-4 left-4 text-2xl opacity-20 animate-float-slow pointer-events-none z-30">🌙</div>
      <div className="fixed bottom-4 right-4 text-2xl opacity-20 animate-float-medium animation-delay-1000 pointer-events-none z-30">⭐</div>
    </main>
  );
}
