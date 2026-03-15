export interface Student {
  id: string;
  name: string;
  gender: 'L' | 'P';
  stats: {
    shalat: number; // 0-100
    tadarus: number;
    hafalan: number;
    akhlak: number;
  };
  achievements: string[];
}

export const studentsData: Student[] = [
  {
    id: '1',
    name: 'Ahmad Al-Fatih',
    gender: 'L',
    stats: {
      shalat: 95,
      tadarus: 88,
      hafalan: 90,
      akhlak: 98
    },
    achievements: ['Terajin Shalat Jamaah', 'Hafalan Juz 30']
  },
  {
    id: '2',
    name: 'Siti Aminah',
    gender: 'P',
    stats: {
      shalat: 98,
      tadarus: 95,
      hafalan: 85,
      akhlak: 100
    },
    achievements: ['Akhlak Terbaik', 'Tadarus Terlancar']
  },
  {
    id: '3',
    name: 'Muhammad Rizky',
    gender: 'L',
    stats: {
      shalat: 90,
      tadarus: 80,
      hafalan: 88,
      akhlak: 92
    },
    achievements: ['Semangat Ramadhan']
  },
  {
    id: '4',
    name: 'Fatimah Az-Zahra',
    gender: 'P',
    stats: {
      shalat: 100,
      tadarus: 92,
      hafalan: 95,
      akhlak: 98
    },
    achievements: ['Hafalan Terbaik']
  },
  {
    id: '5',
    name: 'Zaidan Al-Khair',
    gender: 'L',
    stats: {
      shalat: 88,
      tadarus: 90,
      hafalan: 82,
      akhlak: 95
    },
    achievements: ['Kreativitas Tinggi']
  },
  {
    id: '6',
    name: 'Aisyah Humaira',
    gender: 'P',
    stats: {
      shalat: 96,
      tadarus: 100,
      hafalan: 88,
      akhlak: 97
    },
    achievements: ['Suara Terdundu', 'Tadarus Istiqomah']
  }
];
