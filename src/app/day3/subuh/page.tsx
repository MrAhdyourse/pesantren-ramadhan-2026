import { ContentPage } from '@/components';
import { day3Data } from '@/data';

export default function SubuhPage() {
  const activity = day3Data.activities.find(a => a.id === 'd3-subuh')!;

  return (
    <ContentPage activity={activity} day={day3Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-indigo-700">Tahajud & Subuh</h3>
        <div className="p-4 bg-indigo-50 rounded-lg">
          <h4 className="font-semibold text-indigo-800 mb-2">Hari Terakhir Pesantren</h4>
          <p className="text-gray-700">Awali hari terakhir dengan shalat malam yang penuh keberkatan.</p>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
            <span className="text-indigo-600 font-mono">04:30</span>
            <span>Bangun dan wudhu</span>
          </li>
          <li className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
            <span className="text-indigo-600 font-mono">04:45</span>
            <span>Shalat tahajud</span>
          </li>
          <li className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
            <span className="text-indigo-600 font-mono">05:00</span>
            <span>Shalat subuh berjamaah</span>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
}
