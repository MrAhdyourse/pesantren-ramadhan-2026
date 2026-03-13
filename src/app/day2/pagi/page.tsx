import { ContentPage } from '@/components';
import { day2Data } from '@/data';

export default function PagiPage() {
  const activity = day2Data.activities.find(a => a.id === 'd2-pagi')!;
  
  return (
    <ContentPage activity={activity} day={day2Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-amber-700">Sahur Bersama</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🍚</div>
            <p className="text-sm">Nasi Uduk</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🥘</div>
            <p className="text-sm">Ayam Goreng</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🥒</div>
            <p className="text-sm">Acar</p>
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
