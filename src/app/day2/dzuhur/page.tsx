import { ContentPage } from '@/components';
import { day2Data } from '@/data';

export default function DzuhurPage() {
  const activity = day2Data.activities.find(a => a.id === 'd2-dzuhur')!;

  return (
    <ContentPage activity={activity} day={day2Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-green-700">Shalat Dzuhur & Kultum</h3>
        <div className="p-4 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">Kultum Hari ke-2</h4>
          <p className="text-gray-700">Tema: Keutamaan Puasa</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Adzan Dzuhur</span>
            <span className="text-green-600">12:00</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Shalat Sunnah Rawatib</span>
            <span className="text-green-600">12:05</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Shalat Dzuhur Berjamaah</span>
            <span className="text-green-600">12:15</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Kultum</span>
            <span className="text-green-600">12:30</span>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
}
