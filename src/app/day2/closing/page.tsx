'use client';

import ContentPage from '@/components/ContentPage';
import { day2Data } from '@/data/day2';

export default function ClosingPage() {
  const activity = day2Data.activities.find(a => a.id === 'd2-closing')!;

  return (
    <ContentPage activity={activity} day={day2Data}>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <section className="text-center">
          <div className="inline-block p-4 bg-cyan-50 rounded-3xl mb-6">
            <span className="text-5xl">🌅</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Persiapan Penutup</h3>
          <p className="text-gray-600 leading-relaxed italic">
            "Hari yang penuh tawa dan ilmu, kita tutup dengan syukur dan doa."
          </p>
        </section>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-3xl text-white shadow-xl">
          <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
            <span>📝</span> Evaluasi Singkat
          </h4>
          <p className="text-cyan-50 text-sm leading-relaxed">
            Sebelum pulang, kita akan melakukan evaluasi singkat mengenai apa yang telah kita pelajari dari games tadi. Pastikan semua barang bawaan tidak ada yang tertinggal.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border-2 border-dashed border-cyan-200">
          <h4 className="font-bold text-gray-800 mb-4 text-center">Rangkaian Penutup:</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold shrink-0">1</div>
              <p className="text-gray-600">Merapikan kembali media games dan area belajar.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold shrink-0">2</div>
              <p className="text-gray-600">Persiapan shalat Dzuhur berjamaah di masjid.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold shrink-0">3</div>
              <p className="text-gray-600">Doa kafaratul majlis dan bersalaman.</p>
            </li>
          </ul>
        </div>
      </div>
    </ContentPage>
  );
}
