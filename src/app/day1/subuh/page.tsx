import { ContentPage } from '@/components';
import { day1Data } from '@/data';

export default function SubuhPage() {
  const activity = day1Data.activities.find(a => a.id === 'd1-subuh')!;
  
  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-emerald-700">Jadwal Kegiatan</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
            <span className="text-emerald-600">04:30</span>
            <span>Bangun dan persiapan tahajud</span>
          </li>
          <li className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
            <span className="text-emerald-600">04:45</span>
            <span>Shalat tahajud berjamaah</span>
          </li>
          <li className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
            <span className="text-emerald-600">05:00</span>
            <span>Shalat subuh berjamaah</span>
          </li>
          <li className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
            <span className="text-emerald-600">05:15</span>
            <span>Dzikir dan doa pagi</span>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
}
