import { Header, Timeline, DayCard } from '@/components';
import { timelineData, day1Data } from '@/data';

export default function Day1Page() {
  return (
    <main className="min-h-screen pb-8">
      <Header />
      <Timeline days={timelineData.days} />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <DayCard day={day1Data} />
      </div>
      
      <footer className="text-center py-8 px-4">
        <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
          <span className="text-emerald-600 font-medium">Pesantren Ramadhan 2026 / 1447 H</span>
        </div>
        <p className="text-emerald-500 text-sm mt-3">MI Islamic Centre Indramayu - Kelas VI Al-Qowiy</p>
      </footer>
    </main>
  );
}
