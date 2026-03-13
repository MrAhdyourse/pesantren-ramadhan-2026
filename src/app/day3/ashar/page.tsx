import { ContentPage } from '@/components';
import { day3Data } from '@/data';

export default function AsharPage() {
  const activity = day3Data.activities.find(a => a.id === 'd3-ashar')!;

  return (
    <ContentPage activity={activity} day={day3Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-teal-700">Tadarus Al-Quran</h3>
        <div className="p-4 bg-teal-50 rounded-lg">
          <h4 className="font-semibold text-teal-800 mb-2">Tadarus Terakhir</h4>
          <p className="text-gray-700">Menutup tadarus dengan khataman Al-Quran.</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Adzan Ashar</span>
            <span className="text-teal-600">15:00</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Shalat Ashar Berjamaah</span>
            <span className="text-teal-600">15:10</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Tadarus Al-Quran</span>
            <span className="text-teal-600">15:30</span>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
}
