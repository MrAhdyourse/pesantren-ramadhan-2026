'use client';

import ContentPage from '@/components/ContentPage';
import { day1Data } from '@/data/day1';

export default function TemaPage() {
  const activity = day1Data.activities.find(a => a.id === 'd1-tema')!;

  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Intro Quote */}
        <div className="text-center">
          <div className="inline-block p-4 bg-amber-50 rounded-full mb-6">
            <span className="text-5xl">💎</span>
          </div>
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Membangun Peradaban dari Hati
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed italic px-4">
            "Adab mendahului Ilmu. Karena ilmu tanpa adab adalah kesombongan, dan adab tanpa ilmu adalah kekosongan."
          </p>
        </div>

        {/* Visual Cards */}
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-gradient-to-r from-amber-400/10 to-orange-400/10 p-8 rounded-[2rem] border-2 border-amber-200/50 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform duration-500">
               <span className="text-6xl">🌟</span>
             </div>
             <h4 className="text-2xl font-bold text-amber-700 mb-4">Etika Sosial & Karakter</h4>
             <p className="text-gray-700 leading-relaxed text-lg">
               Di sini, putra-putri Ayah dan Bunda belajar bahwa kepintaran saja tidak cukup. Mereka belajar bagaimana menghormati sesama, berbicara dengan santun, dan menanamkan empati yang mendalam dalam setiap interaksi sosial mereka.
             </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-400/10 to-teal-400/10 p-8 rounded-[2rem] border-2 border-emerald-200/50 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform duration-500">
               <span className="text-6xl">✨</span>
             </div>
             <h4 className="text-2xl font-bold text-emerald-700 mb-4">Adab & Attitude</h4>
             <p className="text-gray-700 leading-relaxed text-lg">
               Kami mengajarkan bahwa *attitude* adalah cerminan dari kemuliaan jiwa. Mulai dari cara duduk, cara makan, hingga cara menghadapi perbedaan pendapat—semuanya dirangkum dalam satu misi: mencetak generasi yang tak hanya cerdas otaknya, tapi juga indah akhlaknya.
             </p>
          </div>
        </div>

        {/* Message to Parents */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-amber-100 relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 -z-10" />
          <h4 className="text-xl font-bold text-gray-800 mb-6 text-center border-b pb-4">Sebuah Renungan untuk Orang Tua</h4>
          <p className="text-gray-700 leading-relaxed text-center italic mb-6">
            "Ayah dan Bunda, anak-anak kita adalah kertas putih yang sedang kita tuliskan sejarah masa depannya. Mari kita pastikan setiap goresan pena kita adalah tentang kebaikan, kesabaran, dan keteladanan yang akan mereka bawa hingga ke surga."
          </p>
          <div className="bg-amber-600 text-white p-6 rounded-2xl text-center shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer">
            <p className="font-bold text-lg">"Investasi terbaik bukanlah harta, melainkan anak yang sholeh dan sholehah."</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-sm font-medium text-amber-600">
          <span className="px-4 py-2 bg-amber-50 rounded-full">#GenerasiBeradab</span>
          <span className="px-4 py-2 bg-amber-50 rounded-full">#RamadhanMulia</span>
          <span className="px-4 py-2 bg-amber-50 rounded-full">#AnakSholeh</span>
        </div>
      </div>
    </ContentPage>
  );
}
