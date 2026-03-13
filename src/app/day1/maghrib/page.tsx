import { ContentPage } from '@/components';
import { day1Data } from '@/data';

export default function MaghribPage() {
  const activity = day1Data.activities.find(a => a.id === 'd1-maghrib')!;
  
  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-orange-700">Menu Buka Puasa</h3>
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
        </div>
        <h4 className="font-semibold text-gray-700 mt-4">Jadwal</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Adzan Maghrib</span>
            <span className="text-orange-600">18:00</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Buka Puasa</span>
            <span className="text-orange-600">18:02</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Shalat Maghrib</span>
            <span className="text-orange-600">18:15</span>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
}
