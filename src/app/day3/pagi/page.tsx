import { ContentPage } from '@/components';
import { day3Data } from '@/data';

export default function PagiPage() {
  const activity = day3Data.activities.find(a => a.id === 'd3-pagi')!;

  return (
    <ContentPage activity={activity} day={day3Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-amber-700">Sahur Terakhir</h3>
        <div className="p-4 bg-amber-50 rounded-lg">
          <h4 className="font-semibold text-amber-800 mb-2">Menu Sahur Hari Jumat</h4>
          <p className="text-gray-700">Sahur dengan menu spesial di hari Jumat yang penuh berkah.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🍚</div>
            <p className="text-sm">Nasi Kuning</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🍗</div>
            <p className="text-sm">Ayam Goreng</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🥗</div>
            <p className="text-sm">Sambal</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🥛</div>
            <p className="text-sm">Susu</p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
