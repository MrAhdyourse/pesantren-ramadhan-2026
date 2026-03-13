import { ContentPage } from '@/components';
import { day1Data } from '@/data';

export default function DzuhurPage() {
  const activity = day1Data.activities.find(a => a.id === 'd1-dzuhur')!;
  
  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-green-700">Kultum Singkat</h3>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-gray-700 italic">
            &ldquo;Puasa adalah perisai. Apabila salah seorang di antara kalian berpuasa, 
            janganlah ia berkata kotor dan janganlah ia berteriak-teriak. 
            Jika ada orang yang mencelanya atau mengajak berkelahi, hendaklah ia berkata: 
            Sesungguhnya aku sedang berpuasa.&rdquo;
          </p>
          <p className="text-sm text-green-600 mt-2">— HR. Bukhari dan Muslim</p>
        </div>
        <h4 className="font-semibold text-gray-700 mt-4">Jadwal</h4>
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
