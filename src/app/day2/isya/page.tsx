import { ContentPage } from '@/components';
import { day2Data } from '@/data';

export default function IsyaPage() {
  const activity = day2Data.activities.find(a => a.id === 'd2-isya')!;

  return (
    <ContentPage activity={activity} day={day2Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-purple-700">Shalat Tarawih</h3>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">Tarawih Malam Ke-2</h4>
          <p className="text-gray-700">8 rakaat tarawih + 3 rakaat witir</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Adzan Isya</span>
            <span className="text-purple-600">19:00</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Shalat Isya</span>
            <span className="text-purple-600">19:10</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Tarawih 8 Rakaat</span>
            <span className="text-purple-600">19:30</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Shalat Witir</span>
            <span className="text-purple-600">20:00</span>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
}
