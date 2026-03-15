// Types untuk Timeline Pesantren Ramadhan 2026/1447H

export interface Student {
  id: string;
  name: string;
  gender: 'L' | 'P';
  stats: {
    sholat: number; // Kualitas Sholat
    disiplin: number; // Disiplin
    diskusi: number; // Aktif Berdiskusi
    adab: number; // Adab & Akhlak
  };
  achievements: string[];
  nickname?: string;
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface DayData {
  dayNumber: number;
  date: string;
  hijriDate: string;
  dayName: string;
  activities: Activity[];
}

export interface TimelineData {
  title: string;
  subtitle: string;
  school: string;
  className: string;
  year: string;
  hijriYear: string;
  days: DayData[];
}
