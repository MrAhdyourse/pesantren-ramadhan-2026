import { Header, Timeline, DayCard } from '@/components';
import { timelineData } from '@/data';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingElements from '@/components/FloatingElements';
import ScrollReveal from '@/components/ScrollReveal';

export default function TimelinePage() {
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
        </footer>
      </div>
    </main>
  );
}
