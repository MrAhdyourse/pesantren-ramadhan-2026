import { ContentPage } from '@/components';
import { day3Data } from '@/data';

export default function PenutupPage() {
  const activity = day3Data.activities.find(a => a.id === 'd3-penutup')!;

  return (
    <ContentPage activity={activity} day={day3Data}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-yellow-700">Upacara Penutupan</h3>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">Susunan Acara</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Pembukaan</li>
            <li>Pembacaan Ayat Suci Al-Quran</li>
            <li>Sambutan Kepala Sekolah</li>
            <li>Pembagian Sertifikat</li>
            <li>Pengumuman Peserta Terbaik</li>
            <li>Doa Penutup</li>
            <li>Photo Bersama</li>
          </ol>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">Penghargaan</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li>Peserta Terbaik</li>
            <li>Hafalan Terbaik</li>
            <li>Tadarus Terbaik</li>
            <li>Disiplin Terbaik</li>
          </ul>
        </div>
      </div>
    </ContentPage>
  );
}
