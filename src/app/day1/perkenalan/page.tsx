'use client';

import ContentPage from '@/components/ContentPage';
import { day1Data } from '@/data/day1';

export default function PerkenalanPage() {
  const activity = day1Data.activities.find(a => a.id === 'd1-perkenalan')!;

  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <section className="text-center">
          <div className="inline-block p-4 bg-blue-50 rounded-3xl mb-6">
            <span className="text-5xl">🤝</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Saling Mengenal Lebih Dekat</h3>
          <p className="text-gray-600 leading-relaxed italic">
            "Persaudaraan sejati dimulai dari senyuman dan sapaan yang tulus."
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-3xl text-white shadow-xl transform transition hover:scale-105 duration-300">
            <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span>👨‍🏫</span> Tutor Al-Qowiy
            </h4>
            <p className="text-blue-50 text-sm leading-relaxed">
              Bukan sekadar pengajar, tutor di sini hadir sebagai kakak dan teman berbagi yang siap membimbing langkah kalian selama perjalanan berharga di bulan suci ini.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-3xl text-white shadow-xl transform transition hover:scale-105 duration-300">
            <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
              <span>💎</span> Generasi Al-Qowiy
            </h4>
            <p className="text-pink-50 text-sm leading-relaxed">
              Kalian adalah permata MI Islamic Centre yang penuh potensi. Hari ini kita berkumpul untuk membangun keakraban dan semangat belajar yang tinggi.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border-2 border-dashed border-blue-200">
          <h4 className="font-bold text-gray-800 mb-4 text-center">Agenda Sesi Perkenalan:</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
              <p className="text-gray-600"><span className="font-bold text-gray-800">Hangat & Ceria:</span> Saling menyapa dan mencairkan suasana agar semua merasa nyaman.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">2</div>
              <p className="text-gray-600"><span className="font-bold text-gray-800">Berbagi Cerita:</span> Mengenal kepribadian masing-masing tutor dan teman-teman satu kelas.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">3</div>
              <p className="text-gray-600"><span className="font-bold text-gray-800">Keluarga Baru:</span> Membentuk ikatan kekeluargaan yang solid untuk hari-hari kedepan.</p>
            </li>
          </ul>
        </div>

        <p className="text-center text-gray-500 text-sm italic">
          Mari jadikan momen perkenalan ini sebagai awal perjalanan yang berkesan.
        </p>
      </div>
    </ContentPage>
  );
}
