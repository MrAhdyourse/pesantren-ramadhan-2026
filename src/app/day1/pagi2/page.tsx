import { ContentPage } from '@/components';
import { day1Data } from '@/data';

export default function Pagi2Page() {
  const activity = day1Data.activities.find(a => a.id === 'd1-pagi2')!;
  
  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-emerald-700">Susunan Acara Pembukaan</h3>
        <ol className="space-y-2">
          <li className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
            <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <span>Pembukaan oleh MC</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
            <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <span>Pembacaan Ayat Suci Al-Quran</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
            <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <span>Sambutan Kepala Sekolah</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
            <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <span>Penyampaian Jadwal Kegiatan</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
            <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <span>Doa Penutup</span>
          </li>
        </ol>
      </div>
    </ContentPage>
  );
}
