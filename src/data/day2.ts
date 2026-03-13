// Data Day 2 - Kamis, 12 Maret 2026
import { DayData } from '../types';

export const day2Data: DayData = {
  dayNumber: 2,
  date: '12 Maret 2026',
  hijriDate: '22 Sya\'ban 1447',
  dayName: 'Kamis',
  activities: [
    {
      id: 'd2-subuh',
      time: '04:30',
      title: 'Subuh & Tahajud',
      description: 'Shalat tahajud dan subuh berjamaah',
      icon: '🌙',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'd2-pagi',
      time: '06:00',
      title: 'Sarapan & Persiapan',
      description: 'Sarapan sahur dan persiapan aktivitas',
      icon: '🍽️',
      color: 'from-orange-400 to-amber-500'
    },
    {
      id: 'd2-pagi2',
      time: '07:30',
      title: 'Kajian Fiqih',
      description: 'Kajian fiqih puasa ramadhan',
      icon: '📚',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'd2-dzuhur',
      time: '12:00',
      title: 'Dzuhur',
      description: 'Shalat dzuhur berjamaah dan kultum',
      icon: '🕌',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'd2-ashar',
      time: '15:00',
      title: 'Ashar',
      description: 'Shalat ashar berjamaah dan tadarus',
      icon: '📖',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'd2-maghrib',
      time: '18:00',
      title: 'Maghrib & Buka Puasa',
      description: 'Buka puasa bersama dan shalat maghrib',
      icon: '🌅',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'd2-isya',
      time: '19:00',
      title: 'Isya & Tarawih',
      description: 'Shalat isya dan tarawih berjamaah',
      icon: '⭐',
      color: 'from-purple-500 to-indigo-600'
    }
  ]
};
