// Data Day 1 - Rabu, 11 Maret 2026
import { DayData } from '../types';

export const day1Data: DayData = {
  dayNumber: 1,
  date: '11 Maret 2026',
  hijriDate: '21 Sya\'ban 1447',
  dayName: 'Rabu',
  activities: [
    {
      id: 'd1-subuh',
      time: '04:30',
      title: 'Subuh & Tahajud',
      description: 'Shalat tahajud dan subuh berjamaah',
      icon: '🌙',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'd1-pagi',
      time: '06:00',
      title: 'Sarapan & Persiapan',
      description: 'Sarapan sahur dan persiapan aktivitas',
      icon: '🍽️',
      color: 'from-orange-400 to-amber-500'
    },
    {
      id: 'd1-pagi2',
      time: '07:00',
      title: 'Upacara Pembukaan',
      description: 'Upacara pembukaan pesantren ramadhan',
      icon: '🎯',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'd1-dzuhur',
      time: '12:00',
      title: 'Dzuhur',
      description: 'Shalat dzuhur berjamaah dan kultum',
      icon: '🕌',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'd1-ashar',
      time: '15:00',
      title: 'Ashar',
      description: 'Shalat ashar berjamaah dan tadarus',
      icon: '📖',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'd1-maghrib',
      time: '18:00',
      title: 'Maghrib & Buka Puasa',
      description: 'Buka puasa bersama dan shalat maghrib',
      icon: '🌅',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'd1-isya',
      time: '19:00',
      title: 'Isya & Tarawih',
      description: 'Shalat isya dan tarawih berjamaah',
      icon: '⭐',
      color: 'from-purple-500 to-indigo-600'
    }
  ]
};
