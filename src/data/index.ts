// Export semua data hari
export { day1Data } from './day1';
export { day2Data } from './day2';
export { day3Data } from './day3';

import { day1Data } from './day1';
import { day2Data } from './day2';
import { day3Data } from './day3';
import { TimelineData } from '../types';

export const timelineData: TimelineData = {
  title: 'Timeline Pesantren Ramadhan',
  subtitle: 'MI Islamic Centre Indramayu',
  school: 'MI Islamic Centre Indramayu',
  className: 'Kelas VI Al-Qowiy',
  year: '2026',
  hijriYear: '1447 H',
  days: [day1Data, day2Data, day3Data]
};
