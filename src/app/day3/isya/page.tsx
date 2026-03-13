import { ContentPage } from '@/components';
import { day3Data } from '@/data';

export default function IsyaPage() {
  const activity = day3Data.activities.find(a => a.id === 'd3-isya')!;

  return (
    <ContentPage activity={activity} day={day3Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-purple-700">Shalat Tarawih Terakhir</h3>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">Penutup Pesantren Ramadhan</h4>
          <p className="text-gray-700">Menutup kegiatan pesantren dengan shalat tarawih terakhir.</p>
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
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Doa Penutup</span>
            <span className="text-purple-600">20:15</span>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
}
