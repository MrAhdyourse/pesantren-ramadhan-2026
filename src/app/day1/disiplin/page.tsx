'use client';

import ContentPage from '@/components/ContentPage';
import { day1Data } from '@/data/day1';

export default function DisiplinPage() {
  const activity = day1Data.activities.find(a => a.id === 'd1-disiplin')!;

  const checkItems = [
    { title: 'Pemeriksaan Kuku', desc: 'Memastikan kuku bersih dan terpotong rapi sesuai sunnah.', icon: '💅' },
    { title: 'Kelengkapan Alat Tulis', desc: 'Buku catatan, pensil, pulpen, dan penghapus siap digunakan.', icon: '✏️' },
    { title: 'Sepatu & Kaos Kaki', desc: 'Sepatu bersih dan kaos kaki yang nyaman untuk beraktivitas.', icon: '👟' },
    { title: 'Kelengkapan Alat Sholat', desc: 'Sajadah, mukena (putri), atau sarung/peci (putra) dalam kondisi suci.', icon: '🕌' },
  ];

  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <section className="text-center">
          <div className="inline-block p-4 bg-rose-50 rounded-3xl mb-4">
            <span className="text-5xl">📏</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Checklist Kedisiplinan</h3>
          <p className="text-gray-500 mt-2 italic text-sm">"Kedisiplinan adalah jembatan antara cita-cita dan pencapaian."</p>
        </section>

        <div className="grid grid-cols-1 gap-4">
          {checkItems.map((item, idx) => (
            <div 
              key={idx}
              className="group flex items-center gap-6 p-6 bg-white rounded-[2rem] border-2 border-rose-50 hover:border-rose-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition duration-300 shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                   {item.title}
                   <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition duration-300">✓</span>
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-rose-500 text-white p-6 rounded-[2rem] text-center shadow-lg">
          <p className="font-medium text-sm mb-2 opacity-90 uppercase tracking-widest">Target Hari Ini</p>
          <p className="text-2xl font-bold italic">"Rapi itu Keren, Disiplin itu Hebat!"</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 text-center">
          <p className="text-gray-600 text-sm italic">
            Mari biasakan disiplin dari hal-hal kecil, karena langkah besar selalu dimulai dari detail yang tertata.
          </p>
        </div>
      </div>
    </ContentPage>
  );
}
