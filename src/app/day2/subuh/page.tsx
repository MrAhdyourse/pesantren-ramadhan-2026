import { ContentPage } from '@/components';
import { day2Data } from '@/data';

export default function SubuhPage() {
  const activity = day2Data.activities.find(a => a.id === 'd2-subuh')!;
  
  return (
    <ContentPage activity={activity} day={day2Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-indigo-700">Tahajud & Subuh</h3>
        <div className="p-4 bg-indigo-50 rounded-lg">
          <p className="text-gray-700">
            Shalat malam yang penuh keberkatan. Bangunlah sepertiga malam untuk mendekatkan diri kepada Allah.
          </p>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
            <span className="text-indigo-600 font-mono">04:30</span>
            <span>Bangun dan wudhu</span>
          </li>
          <li className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
            <span className="text-indigo-600 font-mono">04:45</span>
            <span>Shalat tahajud 2-4 rakaat</span>
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
