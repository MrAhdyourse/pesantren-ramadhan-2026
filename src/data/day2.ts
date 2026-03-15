// Data Day 2 - Kamis, 12 Maret 2026
import { DayData } from '../types';

export const day2Data: DayData = {
  dayNumber: 2,
  date: '12 Maret 2026',
  hijriDate: '22 Sya\'ban 1447',
  dayName: 'Kamis',
  activities: [
    {
      id: 'd2-refleksi',
      time: '10:00',
      title: 'Refleksi Diri & Games',
      description: 'Menyederhanakan konsep sulit melalui media games yang seru dan interaktif',
      icon: '🎮',
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 'd2-closing',
      time: '11:45',
      title: 'Persiapan Dzuhur & Closing',
      description: 'Persiapan shalat berjamaah dan penutup sesi pagi',
      icon: '🌅',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 'd2-dzuhur',
      time: '12:00',
      title: 'Dzuhur',
      description: 'Shalat dzuhur berjamaah dan kepulangan anak-anak',
      icon: '🕌',
      color: 'from-green-500 to-emerald-600'
    }
  ]
};
