'use client';

import Link from 'next/link';
import { Activity, DayData } from '@/types';

interface ContentPageProps {
  activity: Activity;
  day: DayData;
  children?: React.ReactNode;
}

export default function ContentPage({ activity, day, children }: ContentPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${activity.color} text-white py-8 px-4 shadow-lg`}>
        <div className="max-w-2xl mx-auto">
          <Link 
            href={`/day${day.dayNumber}`} 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Kembali ke Day {day.dayNumber}</span>
          </Link>
          
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-lg">
              {activity.icon}
            </div>
            <div>
              <div className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-2">
                {activity.time}
              </div>
              <h1 className="text-2xl font-bold">{activity.title}</h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 mb-6 border border-emerald-100/50">
          <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-3">Deskripsi</h2>
          <p className="text-gray-700 leading-relaxed">{activity.description}</p>
        </div>
        
        {/* Dynamic Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 border border-emerald-100/50">
          {children || (
            <div className="text-center py-16 text-gray-400">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl">
                📝
              </div>
              <p className="font-medium">Konten akan segera diisi</p>
              <p className="text-sm mt-2">Halaman ini siap untuk konten aktivitas</p>
            </div>
          )}
        </div>
        
        {/* Day Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
            <span className="text-emerald-600 font-semibold">Day {day.dayNumber}</span>
            <span className="w-1 h-1 rounded-full bg-emerald-300"></span>
            <span className="text-gray-600">{day.dayName}, {day.date}</span>
          </div>
          <p className="text-emerald-500 text-sm mt-2">{day.hijriDate}</p>
        </div>
      </div>
    </div>
  );
}
