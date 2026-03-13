import { ContentPage } from '@/components';
import { day1Data } from '@/data';

export default function AsharPage() {
  const activity = day1Data.activities.find(a => a.id === 'd1-ashar')!;
  
  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-teal-700">Tadarus Al-Quran</h3>
        <div className="p-4 bg-teal-50 rounded-lg">
          <p className="text-gray-700">
            Tadarus bersama dengan metode tartil dan tahsin. 
            Setiap santri membaca 1-2 halaman Al-Quran dengan tajwid yang benar.
          </p>
        </div>
        <h4 className="font-semibold text-gray-700 mt-4">Target Tadarus</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-teal-50 rounded-lg text-center">
            <div className="text-2xl mb-1">📖</div>
            <p className="text-sm font-medium">Juz 30</p>
            <p className="text-xs text-gray-500">Surah Pendek</p>
          </div>
          <div className="p-3 bg-teal-50 rounded-lg text-center">
            <div className="text-2xl mb-1">🎯</div>
            <p className="text-sm font-medium">Tartil</p>
            <p className="text-xs text-gray-500">Metode Bacaan</p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
