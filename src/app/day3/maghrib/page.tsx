import { ContentPage } from '@/components';
import { day3Data } from '@/data';

export default function MaghribPage() {
  const activity = day3Data.activities.find(a => a.id === 'd3-maghrib')!;

  return (
    <ContentPage activity={activity} day={day3Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-orange-700">Buka Puasa Terakhir</h3>
        <div className="p-4 bg-orange-50 rounded-lg">
          <h4 className="font-semibold text-orange-800 mb-2">Menu Buka Puasa Spesial</h4>
          <p className="text-gray-700">Menu spesial untuk hari terakhir pesantren.</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-orange-50 rounded-lg text-center">
            <div className="text-2xl mb-1">🌴</div>
            <p className="text-sm">Kurma</p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg text-center">
            <div className="text-2xl mb-1">🥤</div>
            <p className="text-sm">Air Putih</p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg text-center">
            <div className="text-2xl mb-1">🍵</div>
            <p className="text-sm">Kolak</p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg text-center">
            <div className="text-2xl mb-1">🍰</div>
            <p className="text-sm">Kue</p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg text-center">
            <div className="text-2xl mb-1">🍌</div>
            <p className="text-sm">Buah</p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg text-center">
            <div className="text-2xl mb-1">🥛</div>
            <p className="text-sm">Es Buah</p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
