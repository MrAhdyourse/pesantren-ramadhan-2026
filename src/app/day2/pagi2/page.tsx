import { ContentPage } from '@/components';
import { day2Data } from '@/data';

export default function Pagi2Page() {
  const activity = day2Data.activities.find(a => a.id === 'd2-pagi2')!;

  return (
    <ContentPage activity={activity} day={day2Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-700">Materi Kajian Fiqih</h3>
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Topik: Rukun Puasa</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Niat puasa di malam hari</li>
            <li>Meninggalkan makan dan minum dari terbit fajar hingga terbenam matahari</li>
            <li>Meninggalkan hal-hal yang membatalkan puasa</li>
          </ol>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Yang Membatalkan Puasa</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li>Makan dan minum dengan sengaja</li>
            <li>Berhubungan suami istri</li>
            <li>Muntah dengan sengaja</li>
            <li>Keluar darah haid atau nifas</li>
            <li>Gila</li>
          </ul>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Yang Tidak Membatalkan Puasa</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li>Makan dan minum karena lupa</li>
            <li>Berkumur-kumur</li>
            <li>Menggunakan obat tetes mata</li>
            <li>Menggunakan obat tetes telinga</li>
            <li>Mencium istri tanpa syahwat</li>
          </ul>
        </div>
      </div>
    </ContentPage>
  );
}
