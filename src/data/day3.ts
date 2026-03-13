// Data Day 3 - Jumat, 13 Maret 2026
import { DayData } from '../types';

export const day3Data: DayData = {
  dayNumber: 3,
  date: '13 Maret 2026',
  hijriDate: '23 Sya\'ban 1447',
  dayName: 'Jumat',
  activities: [
    {
      id: 'd3-subuh',
      time: '04:30',
      title: 'Subuh & Tahajud',
      description: 'Shalat tahajud dan subuh berjamaah',
      icon: '🌙',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'd3-pagi',
      time: '06:00',
      title: 'Sarapan & Persiapan',
      description: 'Sarapan sahur dan persiapan aktivitas',
      icon: '🍽️',
      color: 'from-orange-400 to-amber-500'
    },
    {
      id: 'd3-jumat',
      time: '12:00',
      title: 'Shalat Jumat',
      description: 'Shalat jumat berjamaah dan khutbah',
      icon: '🕌',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'd3-ashar',
      time: '15:00',
      title: 'Ashar',
      description: 'Shalat ashar berjamaah dan tadarus',
      icon: '📖',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'd3-penutup',
      time: '16:00',
      title: 'Upacara Penutupan',
      description: 'Upacara penutupan pesantren ramadhan',
      icon: '🏆',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      id: 'd3-maghrib',
      time: '18:00',
      title: 'Maghrib & Buka Puasa',
      description: 'Buka puasa bersama dan shalat maghrib',
      icon: '🌅',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'd3-isya',
      time: '19:00',
      title: 'Isya & Tarawih',
      description: 'Shalat isya dan tarawih berjamaah',
      icon: '⭐',
      color: 'from-purple-500 to-indigo-600'
    }
  ]
};
