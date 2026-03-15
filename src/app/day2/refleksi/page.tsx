'use client';

import ContentPage from '@/components/ContentPage';
import { day2Data } from '@/data/day2';

export default function RefleksiPage() {
  const activity = day2Data.activities.find(a => a.id === 'd2-refleksi')!;

  return (
    <ContentPage activity={activity} day={day2Data}>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <section className="text-center">
          <div className="inline-block p-4 bg-amber-50 rounded-3xl mb-6 shadow-inner">
            <span className="text-5xl animate-bounce-slow inline-block">🎮</span>
          </div>
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-500">
            Refleksi Diri Melalui Games
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto italic font-medium">
            "Belajar itu seru, memahami diri itu asyik! Mari temukan mutiara kebaikan dalam setiap permainan."
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-8 rounded-3xl text-white shadow-xl transform transition hover:scale-105 hover:rotate-1 duration-300">
            <h4 className="font-bold text-2xl mb-4 flex items-center gap-3">
              <span>🎯</span> Media Games Tutor
            </h4>
            <p className="text-amber-50 text-sm leading-relaxed">
              Tutor merancang media games khusus untuk menyederhanakan materi yang biasanya sulit dicerna oleh anak seusia kalian. Bahasa yang digunakan sangat sederhana agar kalian mudah paham sambil tertawa bahagia!
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-3xl text-white shadow-xl transform transition hover:scale-105 hover:-rotate-1 duration-300">
            <h4 className="font-bold text-2xl mb-4 flex items-center gap-3">
              <span>🤩</span> Antusiasme Tinggi
            </h4>
            <p className="text-emerald-50 text-sm leading-relaxed">
              Melihat wajah-wajah ceria dan semangat kalian saat bermain adalah kebahagiaan bagi kami. Melalui tawa dan kerja sama tim, kita sedang merajut pemahaman yang mendalam tentang diri sendiri.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border-2 border-dashed border-amber-300 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
          
          <h4 className="font-bold text-gray-800 mb-6 text-center text-xl relative z-10">Mengapa Kita Menggunakan Games?</h4>
          <ul className="space-y-6 relative z-10">
            <li className="flex items-start gap-5 group/item">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-colors duration-300">1</div>
              <div>
                <p className="font-bold text-gray-800 text-lg">Penyederhanaan Konsep</p>
                <p className="text-gray-600">Hal-hal yang mungkin sulit dipahami lewat buku, jadi terasa ringan dan jelas lewat permainan.</p>
              </div>
            </li>
            <li className="flex items-start gap-5 group/item">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-colors duration-300">2</div>
              <div>
                <p className="font-bold text-gray-800 text-lg">Interaksi Menyenangkan</p>
                <p className="text-gray-600">Belajar bukan hanya mendengarkan, tapi bergerak, mencoba, dan merasakan secara langsung.</p>
              </div>
            </li>
            <li className="flex items-start gap-5 group/item">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-colors duration-300">3</div>
              <div>
                <p className="font-bold text-gray-800 text-lg">Bahasa Kasih & Sederhana</p>
                <p className="text-gray-600">Tutor menyapa kalian dengan bahasa yang akrab, sehingga pesan kebaikan bisa meresap ke dalam hati.</p>
              </div>
            </li>
          </ul>
        </div>

        <p className="text-center text-gray-500 text-sm italic py-4">
          "Karena di balik setiap permainan, ada hikmah yang sedang kita tanam."
        </p>
      </div>
    </ContentPage>
  );
}
