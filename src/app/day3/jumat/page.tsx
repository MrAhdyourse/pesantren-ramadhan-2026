import { ContentPage } from '@/components';
import { day3Data } from '@/data';

export default function JumatPage() {
  const activity = day3Data.activities.find(a => a.id === 'd3-jumat')!;

  return (
    <ContentPage activity={activity} day={day3Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-green-700">Shalat Jumat</h3>
        <div className="p-4 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">Keutamaan Hari Jumat</h4>
          <p className="text-gray-700 italic">
            &ldquo;Hari Jumat adalah hari terbaik di mana matahari terbit. Pada hari ini Adam diciptakan, dimasukkan ke surga, dan dikeluarkan dari surga.&rdquo;
          </p>
          <p className="text-sm text-green-600 mt-2">— HR. Muslim</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Adzan Pertama</span>
            <span className="text-green-600">11:30</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Adzan Kedua</span>
            <span className="text-green-600">12:00</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Khutbah</span>
            <span className="text-green-600">12:05</span>
          </li>
          <li className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Shalat Jumat</span>
            <span className="text-green-600">12:30</span>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
}
