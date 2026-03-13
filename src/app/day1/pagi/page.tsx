import { ContentPage } from '@/components';
import { day1Data } from '@/data';

export default function PagiPage() {
  const activity = day1Data.activities.find(a => a.id === 'd1-pagi')!;
  
  return (
    <ContentPage activity={activity} day={day1Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-amber-700">Menu Sahur</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🍚</div>
            <p className="text-sm">Nasi Putih</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🥚</div>
            <p className="text-sm">Telur Goreng</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">🥬</div>
            <p className="text-sm">Sayur Sop</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg text-center">
            <div className="text-2xl mb-2">☕</div>
            <p className="text-sm">Air Putih / Teh</p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
