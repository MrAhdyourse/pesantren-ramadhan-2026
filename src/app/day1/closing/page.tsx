'use client';

import ContentPage from '@/components/ContentPage';
import { day1Data } from '@/data/day1';

export default function ClosingPage() {
  const activity = day1Data.activities.find(a => a.id === 'd1-closing')!;

  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <section className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-20 rounded-full animate-pulse" />
            <div className="relative p-6 bg-cyan-50 rounded-full mb-6">
              <span className="text-6xl">🕌</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Menuju Kedamaian Dzuhur</h3>
          <p className="text-gray-500 italic">"Puncak ketenangan adalah saat kita bersujud menghadap Sang Pencipta."</p>
        </section>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>✨</span> Sesi Pagi Telah Usai
          </h4>
          <p className="text-cyan-50 leading-relaxed text-lg mb-6">
            Alhamdulillah, seluruh rangkaian kegiatan pagi di Day 1 telah kita lalui dengan penuh semangat. Mulai dari perkenalan hingga menanamkan nilai-nilai adab yang mulia.
          </p>
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30">
            <p className="text-sm font-medium italic">
              "Setiap kebaikan yang kita lakukan hari ini, adalah investasi untuk hari esok yang lebih cerah."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-cyan-100 flex flex-col items-center text-center group hover:bg-cyan-50 transition duration-300">
             <span className="text-4xl mb-3 group-hover:scale-110 transition duration-300">💧</span>
             <h5 className="font-bold text-gray-800 mb-2">Wudhu Sempurna</h5>
             <p className="text-gray-500 text-sm italic">Mensucikan diri, menenangkan jiwa.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-cyan-100 flex flex-col items-center text-center group hover:bg-cyan-50 transition duration-300">
             <span className="text-4xl mb-3 group-hover:scale-110 transition duration-300">🤫</span>
             <h5 className="font-bold text-gray-800 mb-2">Zikir & Adab Masjid</h5>
             <p className="text-gray-500 text-sm italic">Menenangkan hati di rumah Allah.</p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-700 font-medium">Sampai jumpa di sesi berikutnya!</p>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-600 rounded-full font-bold border border-emerald-100">
            <span>🌙</span> Ramadhan Kariim
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
