'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Trophy, 
  Star, 
  XCircle, 
  CheckCircle2, 
  RefreshCcw, 
  HelpCircle, 
  Gift, 
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

// ============================================================================
// DATABASE 100 SOAL KUIS (KELAS 6 MI)
// ============================================================================
const quizDatabase = [
  // --- ADAB & SOPAN SANTUN (1-20) ---
  { id: 1, category: "Adab & Sopan Santun", q: "Saat masuk ke dalam masjid, kita disunnahkan mendahulukan kaki sebelah mana?", a: "Kaki Kanan" },
  { id: 2, category: "Adab & Sopan Santun", q: "Apa yang harus kita ucapkan ketika bersin?", a: "Alhamdulillah" },
  { id: 3, category: "Adab & Sopan Santun", q: "Ketika ada teman yang bersin dan mengucapkan Alhamdulillah, apa balasan kita?", a: "Yarhamukallah" },
  { id: 4, category: "Adab & Sopan Santun", q: "Sebelum makan dan minum, kita wajib membaca apa?", a: "Bismillah / Doa sebelum makan" },
  { id: 5, category: "Adab & Sopan Santun", q: "Makan dan minum tidak boleh sambil berdiri. Mengapa? (Secara adab)", a: "Karena tidak sopan dan dilarang oleh Nabi Muhammad SAW" },
  { id: 6, category: "Adab & Sopan Santun", q: "Jika lewat di depan guru atau orang yang lebih tua, sikap kita harus bagaimana?", a: "Membungkukkan badan dan permisi (bilang punten/maaf)" },
  { id: 7, category: "Adab & Sopan Santun", q: "Keluar dari kamar mandi atau toilet disunnahkan mendahulukan kaki mana?", a: "Kaki Kanan" },
  { id: 8, category: "Adab & Sopan Santun", q: "Bolehkah kita berbicara kasar atau berteriak kepada kedua orang tua?", a: "Tidak boleh (Haram / Dosa besar)" },
  { id: 9, category: "Adab & Sopan Santun", q: "Apa yang harus dilakukan saat guru sedang menjelaskan pelajaran di depan kelas?", a: "Memperhatikan, mendengarkan, dan tidak mengobrol" },
  { id: 10, category: "Adab & Sopan Santun", q: "Bila kita melakukan kesalahan kepada teman, kata apa yang harus segera diucapkan?", a: "Minta Maaf" },
  { id: 11, category: "Adab & Sopan Santun", q: "Jika diberi sesuatu oleh orang lain, kita harus mengucapkan apa?", a: "Terima kasih / Jazakallah Khairan" },
  { id: 12, category: "Adab & Sopan Santun", q: "Masuk ke rumah orang lain atau rumah sendiri harus mengucapkan?", a: "Salam (Assalamu'alaikum)" },
  { id: 13, category: "Adab & Sopan Santun", q: "Menahan amarah adalah ciri anak yang?", a: "Penyabar / Anak sholeh" },
  { id: 14, category: "Adab & Sopan Santun", q: "Bolehkah kita memotong pembicaraan orang lain yang sedang berbicara?", a: "Tidak boleh, tunggu sampai selesai" },
  { id: 15, category: "Adab & Sopan Santun", q: "Ketika meminjam barang teman, setelah selesai harus diapakan?", a: "Dikembalikan dengan baik dan berterima kasih" },
  { id: 16, category: "Adab & Sopan Santun", q: "Menghormati yang lebih tua dan menyayangi yang lebih ... ?", a: "Muda" },
  { id: 17, category: "Adab & Sopan Santun", q: "Apa hukumnya berbohong atau berdusta walau hanya bercanda?", a: "Dilarang / Berdosa" },
  { id: 18, category: "Adab & Sopan Santun", q: "Bila melihat sampah di kelas, adab yang baik adalah?", a: "Memungutnya dan membuang ke tempat sampah" },
  { id: 19, category: "Adab & Sopan Santun", q: "Menjenguk teman yang sedang sakit termasuk adab dan hak seorang?", a: "Muslim terhadap muslim lainnya" },
  { id: 20, category: "Adab & Sopan Santun", q: "Sebelum tidur, adab yang diajarkan Nabi adalah membersihkan tempat tidur dan membaca?", a: "Doa sebelum tidur / Ayat Kursi / 3 Qul" },

  // --- HAFALAN SURAT PENDEK (21-40) ---
  { id: 21, category: "Hafalan Surat Pendek", q: "Lanjutkan ayat ini: 'Wadh-dhuhaa. Wal-laili idzaa...'", a: "Sajaa" },
  { id: 22, category: "Hafalan Surat Pendek", q: "Surat Alam Nasyrah sering juga disebut dengan surat apa?", a: "Surat Al-Insyirah" },
  { id: 23, category: "Hafalan Surat Pendek", q: "Lanjutkan ayat ini: 'Fa inna ma'al 'usri yusraa, inna...'", a: "Ma'al 'usri yusraa" },
  { id: 24, category: "Hafalan Surat Pendek", q: "Apa arti dari At-Tiin?", a: "Buah Tin" },
  { id: 25, category: "Hafalan Surat Pendek", q: "Lanjutkan ayat ini: 'Laqad khalaqnal insaana fii...'", a: "Ahsani taqwiim (Surat At-Tin)" },
  { id: 26, category: "Hafalan Surat Pendek", q: "Ayat pertama yang turun kepada Nabi Muhammad terdapat dalam surat?", a: "Al-'Alaq (Iqra')" },
  { id: 27, category: "Hafalan Surat Pendek", q: "Lanjutkan ayat: 'Iqra' bismi rabbikalladzii...'", a: "Khalaq" },
  { id: 28, category: "Hafalan Surat Pendek", q: "Apa arti dari Al-Qadr?", a: "Kemuliaan" },
  { id: 29, category: "Hafalan Surat Pendek", q: "Lanjutkan ayat: 'Lailatul qadri khairum min...'", a: "Alfii syahr (Seribu bulan)" },
  { id: 30, category: "Hafalan Surat Pendek", q: "Surat Al-Zalzalah menceritakan tentang peristiwa apa?", a: "Hari Kiamat (Guncangan dahsyat)" },
  { id: 31, category: "Hafalan Surat Pendek", q: "Lanjutkan: 'Idzaa zulzilatil ardhu...'", a: "Zilzaalahaa" },
  { id: 32, category: "Hafalan Surat Pendek", q: "Surat Al-'Aadiyaat menceritakan tentang kuda perang yang?", a: "Berlari kencang terengah-engah" },
  { id: 33, category: "Hafalan Surat Pendek", q: "Apa arti dari Al-Qari'ah?", a: "Hari Kiamat" },
  { id: 34, category: "Hafalan Surat Pendek", q: "Lanjutkan: 'Alhaakumut takaatsur. Hattaa zurtumul...'", a: "Maqaabir" },
  { id: 35, category: "Hafalan Surat Pendek", q: "Surat Al-'Asr mengingatkan manusia agar tidak merugi tentang apa?", a: "Waktu" },
  { id: 36, category: "Hafalan Surat Pendek", q: "Lanjutkan: 'Wal 'asr. Innal insaana lafii...'", a: "Khusr" },
  { id: 37, category: "Hafalan Surat Pendek", q: "Surat Al-Fiil menceritakan tentang pasukan apa?", a: "Pasukan Gajah (Abrahah)" },
  { id: 38, category: "Hafalan Surat Pendek", q: "Burung yang menghancurkan pasukan gajah bernama burung apa?", a: "Burung Ababil" },
  { id: 39, category: "Hafalan Surat Pendek", q: "Lanjutkan ayat: 'Qul Huwallahu Ahad. Allahus...'", a: "Shamad" },
  { id: 40, category: "Hafalan Surat Pendek", q: "Surat An-Nas, Al-Falaq, dan Al-Ikhlas sering disebut sebagai apa?", a: "Tiga Qul / Mu'awwidzatain" },

  // --- BAHASA INGGRIS DASAR (41-60) ---
  { id: 41, category: "Bahasa Inggris Dasar", q: "Apa bahasa Inggrisnya 'Buku'?", a: "Book" },
  { id: 42, category: "Bahasa Inggris Dasar", q: "Apa arti dari kata 'Window'?", a: "Jendela" },
  { id: 43, category: "Bahasa Inggris Dasar", q: "Bagaimana mengucapkan 'Selamat Pagi' dalam bahasa Inggris?", a: "Good Morning" },
  { id: 44, category: "Bahasa Inggris Dasar", q: "Apa bahasa Inggrisnya angka sebelas (11)?", a: "Eleven" },
  { id: 45, category: "Bahasa Inggris Dasar", q: "Apa arti dari 'How are you?'", a: "Apa kabarmu?" },
  { id: 46, category: "Bahasa Inggris Dasar", q: "Jika ada yang bertanya 'What is your name?', kita menjawab?", a: "My name is... (Nama saya...)" },
  { id: 47, category: "Bahasa Inggris Dasar", q: "Apa bahasa Inggrisnya 'Kucing'?", a: "Cat" },
  { id: 48, category: "Bahasa Inggris Dasar", q: "Apa bahasa Inggrisnya warna 'Merah'?", a: "Red" },
  { id: 49, category: "Bahasa Inggris Dasar", q: "Apa arti dari kata 'Teacher'?", a: "Guru" },
  { id: 50, category: "Bahasa Inggris Dasar", q: "Terjemahkan ke bahasa Indonesia: 'I love my mother'", a: "Saya menyayangi ibu saya" },
  { id: 51, category: "Bahasa Inggris Dasar", q: "Apa bahasa Inggrisnya 'Sekolah'?", a: "School" },
  { id: 52, category: "Bahasa Inggris Dasar", q: "Apa bahasa Inggrisnya 'Sepatu'?", a: "Shoes" },
  { id: 53, category: "Bahasa Inggris Dasar", q: "Terjemahkan: 'Stand up, please'", a: "Tolong berdiri" },
  { id: 54, category: "Bahasa Inggris Dasar", q: "Apa bahasa Inggrisnya 'Tangan'?", a: "Hand" },
  { id: 55, category: "Bahasa Inggris Dasar", q: "Apa arti dari kata 'Eat'?", a: "Makan" },
  { id: 56, category: "Bahasa Inggris Dasar", q: "Apa bahasa Inggrisnya 'Minum'?", a: "Drink" },
  { id: 57, category: "Bahasa Inggris Dasar", q: "Terjemahkan: 'Thank you very much'", a: "Terima kasih banyak" },
  { id: 58, category: "Bahasa Inggris Dasar", q: "Apa bahasa Inggrisnya 'Ayah'?", a: "Father / Dad" },
  { id: 59, category: "Bahasa Inggris Dasar", q: "Apa arti dari 'Apple'?", a: "Apel" },
  { id: 60, category: "Bahasa Inggris Dasar", q: "Bagaimana cara meminta maaf dalam bahasa Inggris?", a: "I am sorry" },

  // --- SEPUTAR RAMADHAN (61-80) ---
  { id: 61, category: "Seputar Ramadhan", q: "Puasa di bulan Ramadhan hukumnya apa bagi umat Islam?", a: "Wajib / Fardhu" },
  { id: 62, category: "Seputar Ramadhan", q: "Sholat sunnah yang hanya ada di malam bulan Ramadhan disebut sholat?", a: "Sholat Tarawih" },
  { id: 63, category: "Seputar Ramadhan", q: "Makan di waktu dini hari sebelum adzan subuh untuk persiapan puasa disebut?", a: "Sahur" },
  { id: 64, category: "Seputar Ramadhan", q: "Waktu berbuka puasa ditandai dengan berkumandangnya adzan apa?", a: "Adzan Maghrib" },
  { id: 65, category: "Seputar Ramadhan", q: "Malam kemuliaan yang lebih baik dari 1000 bulan di bulan Ramadhan disebut?", a: "Lailatul Qadar" },
  { id: 66, category: "Seputar Ramadhan", q: "Zakat yang wajib dikeluarkan di akhir bulan Ramadhan disebut?", a: "Zakat Fitrah" },
  { id: 67, category: "Seputar Ramadhan", q: "Kitab suci Al-Qur'an pertama kali diturunkan di bulan Ramadhan. Peristiwa ini disebut?", a: "Nuzulul Qur'an" },
  { id: 68, category: "Seputar Ramadhan", q: "Sebutkan awal bacaan niat puasa Ramadhan!", a: "Nawaitu shauma ghadin..." },
  { id: 69, category: "Seputar Ramadhan", q: "Sebutkan awal bacaan doa berbuka puasa!", a: "Allahumma laka shumtu..." },
  { id: 70, category: "Seputar Ramadhan", q: "Berdiam diri di dalam masjid untuk beribadah di 10 hari terakhir Ramadhan disebut?", a: "I'tikaf" },
  { id: 71, category: "Seputar Ramadhan", q: "Puasa menahan kita dari rasa lapar, haus, dan juga menahan dari?", a: "Hawa nafsu / Amarah / Perbuatan buruk" },
  { id: 72, category: "Seputar Ramadhan", q: "Hari raya setelah umat Islam selesai berpuasa Ramadhan sebulan penuh disebut?", a: "Idul Fitri" },
  { id: 73, category: "Seputar Ramadhan", q: "Apakah muntah dengan sengaja dapat membatalkan puasa?", a: "Ya, membatalkan puasa" },
  { id: 74, category: "Seputar Ramadhan", q: "Buah apa yang sangat disunnahkan untuk dimakan saat berbuka puasa?", a: "Kurma" },
  { id: 75, category: "Seputar Ramadhan", q: "Membaca dan mempelajari Al-Qur'an bersama-sama di bulan Ramadhan sering disebut?", a: "Tadarus" },
  { id: 76, category: "Seputar Ramadhan", q: "Siapakah yang wajib membayar Zakat Fitrah?", a: "Setiap Muslim yang mampu" },
  { id: 77, category: "Seputar Ramadhan", q: "Sholat sunnah penutup di malam hari (jumlah rakaatnya ganjil) disebut?", a: "Sholat Witir" },
  { id: 78, category: "Seputar Ramadhan", q: "Apakah sikat gigi saat puasa diperbolehkan?", a: "Boleh (Makruh jika dilakukan siang/sore karena khawatir tertelan)" },
  { id: 79, category: "Seputar Ramadhan", q: "Orang yang musafir (dalam perjalanan jauh) bolehkah tidak berpuasa?", a: "Boleh, namun wajib menggantinya (Qadha) di hari lain" },
  { id: 80, category: "Seputar Ramadhan", q: "Puasa Ramadhan adalah Rukun Islam yang ke berapa?", a: "Ke-4" },

  // --- BACAAN SHOLAT & DOA (81-100) ---
  { id: 81, category: "Bacaan Sholat & Doa", q: "Doa yang dibaca pertama kali setelah Takbiratul Ihram disebut?", a: "Doa Iftitah" },
  { id: 82, category: "Bacaan Sholat & Doa", q: "Apa bacaan tasbih ketika Ruku'?", a: "Subhaana rabbiyal 'azhiimi wa bihamdih" },
  { id: 83, category: "Bacaan Sholat & Doa", q: "Apa bacaan tasbih ketika Sujud?", a: "Subhaana rabbiyal a'laa wa bihamdih" },
  { id: 84, category: "Bacaan Sholat & Doa", q: "Bangkit dari ruku' disebut I'tidal, bacaannya adalah 'Sami'allahu liman...'", a: "Hamidah" },
  { id: 85, category: "Bacaan Sholat & Doa", q: "Apa bacaan tahiyat awal di bagian pertama? 'Attahiyyaatul mubaarakaatush...'", a: "Shalawaatuth thayyibaatu lillaah" },
  { id: 86, category: "Bacaan Sholat & Doa", q: "Shalawat kepada Nabi di tahiyat akhir bunyinya?", a: "Allahumma shalli 'alaa Sayyidinaa Muhammad" },
  { id: 87, category: "Bacaan Sholat & Doa", q: "Akhir dari gerakan sholat adalah menoleh ke kanan dan ke kiri sambil membaca?", a: "Assalamu'alaikum warahmatullah" },
  { id: 88, category: "Bacaan Sholat & Doa", q: "Doa memohon kebaikan dunia dan akhirat sering disebut doa?", a: "Sapu Jagat (Rabbanaa aatinaa...)" },
  { id: 89, category: "Bacaan Sholat & Doa", q: "Lanjutkan doa untuk kedua orang tua: 'Allahummaghfirlii dzunuubii...'", a: "Wa liwaalidayya warhamhumaa kamaa rabbayaanii shaghiiraa" },
  { id: 90, category: "Bacaan Sholat & Doa", q: "Sebelum belajar kita membaca doa: 'Rabbii zidnii 'ilman...'", a: "Warzuqnii fahman" },
  { id: 91, category: "Bacaan Sholat & Doa", q: "Doa keluar rumah: 'Bismillahi tawakkaltu 'alallahi, laa haula...'", a: "Walaa quwwata illaa billaah" },
  { id: 92, category: "Bacaan Sholat & Doa", q: "Doa masuk kamar mandi: 'Allahumma innii a'uudzu bika minal...'", a: "Khubutsi wal khabaa-is" },
  { id: 93, category: "Bacaan Sholat & Doa", q: "Doa keluar kamar mandi yang paling pendek?", a: "Ghufranaka" },
  { id: 94, category: "Bacaan Sholat & Doa", q: "Doa naik kendaraan: 'Subhaanal-ladzii sakh-khara lanaa haadzaa...'", a: "Wamaa kunna lahuu muqriniin" },
  { id: 95, category: "Bacaan Sholat & Doa", q: "Gerakan duduk di antara dua sujud membaca doa: 'Rabbighfirlii, warhamnii...'", a: "Wajburnii, warfa'nii, warzuqnii..." },
  { id: 96, category: "Bacaan Sholat & Doa", q: "Sholat fardu yang jumlah rakaatnya 3 adalah?", a: "Sholat Maghrib" },
  { id: 97, category: "Bacaan Sholat & Doa", q: "Sholat sunnah 2 rakaat sebelum sholat Subuh disebut?", a: "Sholat Qabliyah Subuh (Fajar)" },
  { id: 98, category: "Bacaan Sholat & Doa", q: "Jika kita lupa atau ragu jumlah rakaat dalam sholat, disunnahkan untuk?", a: "Sujud Sahwi" },
  { id: 99, category: "Bacaan Sholat & Doa", q: "Syarat sah sholat yang pertama kali harus dimiliki adalah suci dari hadas dengan cara?", a: "Wudhu / Tayammum" },
  { id: 100, category: "Bacaan Sholat & Doa", q: "Membaca surat Al-Fatihah di setiap rakaat sholat hukumnya?", a: "Wajib / Rukun Sholat" }
];

// Acak posisi kotak agar nomor 1-100 muncul acak isinya (Fisher-Yates Shuffle)
const shuffleArray = (array: any[]) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function MysteryBoxPage() {
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'END'>('START');
  const [boxes, setBoxes] = useState<any[]>([]);
  const [teamA, setTeamA] = useState({ name: 'TIM A', score: 0 });
  const [teamB, setTeamB] = useState({ name: 'TIM B', score: 0 });
  const [targetScore, setTargetScore] = useState(300);
  const [currentTurn, setCurrentTurn] = useState<'A' | 'B'>('A');
  const [activeQuestion, setActiveQuestion] = useState<any | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  // Initialize Game
  const startGame = () => {
    const shuffledQuestions = shuffleArray(quizDatabase);
    const initialBoxes = shuffledQuestions.map((q, index) => ({
      ...q,
      boxNumber: index + 1,
      isOpened: false,
    }));
    setBoxes(initialBoxes);
    setTeamA({ ...teamA, score: 0 });
    setTeamB({ ...teamB, score: 0 });
    setCurrentTurn('A');
    setWinner(null);
    setGameState('PLAYING');
  };

  // Open a box
  const handleBoxClick = (box: any) => {
    if (box.isOpened) return;
    setActiveQuestion(box);
    setShowAnswer(false);
  };

  // Award Points
  const awardPoints = (teamId: 'A' | 'B') => {
    let newA = teamA.score;
    let newB = teamB.score;

    if (teamId === 'A') {
      newA += 10;
      setTeamA({ ...teamA, score: newA });
    } else if (teamId === 'B') {
      newB += 10;
      setTeamB({ ...teamB, score: newB });
    }
    
    setBoxes(boxes.map(b => b.id === activeQuestion.id ? { ...b, isOpened: true } : b));
    setActiveQuestion(null);

    if (newA >= targetScore) {
      setWinner(teamA.name);
      setGameState('END');
    } else if (newB >= targetScore) {
      setWinner(teamB.name);
      setGameState('END');
    } else {
      setCurrentTurn(currentTurn === 'A' ? 'B' : 'A');
    }
  };

  const skipQuestion = () => {
    setBoxes(boxes.map(b => b.id === activeQuestion.id ? { ...b, isOpened: true } : b));
    setActiveQuestion(null);
    setCurrentTurn(currentTurn === 'A' ? 'B' : 'A');
  };

  return (
    <main className="relative min-h-screen bg-[#FDFCF8] overflow-hidden flex flex-col">
      <AnimatedBackground />
      
      {/* =========================================
          SCREEN 1: START SETUP
      ========================================= */}
      <AnimatePresence>
        {gameState === 'START' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex-1 flex flex-col items-center justify-center p-6"
          >
            <Link 
              href="/games"
              className="absolute top-8 left-8 flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors bg-white/80 px-4 py-2 rounded-full shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Link>

            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white/90 backdrop-blur-xl p-10 rounded-[3rem] border-4 border-white text-center max-w-2xl w-full shadow-2xl"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-600 text-white rounded-[2rem] mb-6 shadow-xl rotate-3">
                <Gift size={48} />
              </div>
              <h1 className="text-5xl font-black text-gray-900 mb-2">100 <span className="text-indigo-600">Mystery Box</span></h1>
              <p className="text-indigo-400 text-lg font-bold mb-10 tracking-widest uppercase">Edisi Peserta Juara</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="space-y-2">
                  <label className="text-xs font-black text-indigo-400 ml-4 uppercase tracking-tighter">Nama Tim A</label>
                  <input 
                    type="text" 
                    value={teamA.name} 
                    onChange={e => setTeamA({...teamA, name: e.target.value.toUpperCase()})}
                    className="w-full bg-indigo-50 border-2 border-indigo-100 rounded-2xl px-6 py-4 text-indigo-900 font-bold text-xl focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-rose-400 ml-4 uppercase tracking-tighter">Nama Tim B</label>
                  <input 
                    type="text" 
                    value={teamB.name} 
                    onChange={e => setTeamB({...teamB, name: e.target.value.toUpperCase()})}
                    className="w-full bg-rose-50 border-2 border-rose-100 rounded-2xl px-6 py-4 text-rose-900 font-bold text-xl focus:outline-none focus:border-rose-500 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="mb-10 p-6 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200">
                <label className="block text-xs font-black text-gray-400 mb-4 uppercase">Target Menang (Poin)</label>
                <div className="flex items-center justify-center gap-6">
                  <input 
                    type="range" 
                    min="50" max="1000" step="50"
                    value={targetScore}
                    onChange={e => setTargetScore(parseInt(e.target.value))}
                    className="flex-1 accent-indigo-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <span className="text-4xl font-black text-indigo-600 min-w-[100px]">{targetScore}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 font-medium italic">*{targetScore / 10} jawaban benar untuk menang</p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={startGame}
                className="w-full bg-indigo-600 text-white font-black text-2xl py-6 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
              >
                <Play className="fill-current group-hover:scale-110 transition-transform" /> 
                MULAI PETUALANGAN
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          SCREEN 2: MAIN GAME BOARD
      ========================================= */}
      <AnimatePresence>
        {gameState === 'PLAYING' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 flex-1 flex flex-col"
          >
            {/* HEADER SCOREBOARD */}
            <div className="bg-white/80 backdrop-blur-md border-b-4 border-indigo-100 flex items-center justify-between px-4 md:px-8 py-4 shadow-sm">
              
              <div className={`flex items-center gap-3 md:gap-4 bg-white px-4 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-3xl border-4 transition-all ${currentTurn === 'A' ? 'border-indigo-500 shadow-lg scale-105' : 'border-indigo-50 opacity-60'}`}>
                <div className="text-right hidden sm:block">
                  <h2 className="text-[10px] font-black text-indigo-400 uppercase tracking-tighter">{currentTurn === 'A' ? '🔥 GILIRAN' : 'MENUNGGU'}</h2>
                  <h3 className="text-lg md:text-xl font-black text-gray-900 truncate max-w-[100px]">{teamA.name}</h3>
                </div>
                <div className="bg-indigo-600 text-white font-black text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-xl md:rounded-2xl shadow-inner">
                  {teamA.score}
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-lg md:text-2xl font-black text-gray-900">Mystery <span className="text-indigo-600">Box</span></h1>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <Trophy size={14} className="text-amber-500" />
                  <span className="text-xs font-bold text-gray-500">{targetScore}</span>
                </div>
              </div>

              <div className={`flex items-center gap-3 md:gap-4 bg-white px-4 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-3xl border-4 transition-all ${currentTurn === 'B' ? 'border-rose-500 shadow-lg scale-105' : 'border-rose-50 opacity-60'}`}>
                <div className="bg-rose-600 text-white font-black text-2xl md:text-4xl px-3 md:px-5 py-1 md:py-2 rounded-xl md:rounded-2xl shadow-inner">
                  {teamB.score}
                </div>
                <div className="text-left hidden sm:block">
                  <h2 className="text-[10px] font-black text-rose-400 uppercase tracking-tighter">{currentTurn === 'B' ? '🔥 GILIRAN' : 'MENUNGGU'}</h2>
                  <h3 className="text-lg md:text-xl font-black text-gray-900 truncate max-w-[100px]">{teamB.name}</h3>
                </div>
              </div>

            </div>

            {/* GRID 100 KOTAK */}
            <div className="flex-1 overflow-auto p-4 md:p-8 flex items-start justify-center">
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-3 w-full max-w-5xl">
                {boxes.map((box) => {
                  const colors = [
                    'bg-indigo-500', 
                    'bg-rose-500', 
                    'bg-emerald-500', 
                    'bg-amber-500', 
                    'bg-violet-500',
                    'bg-sky-500',
                    'bg-orange-500'
                  ];
                  const boxColor = colors[box.boxNumber % colors.length];

                  return (
                    <motion.button
                      key={box.id}
                      whileHover={!box.isOpened ? { scale: 1.1, rotate: box.boxNumber % 2 === 0 ? 5 : -5, zIndex: 10 } : {}}
                      whileTap={!box.isOpened ? { scale: 0.9 } : {}}
                      onClick={() => handleBoxClick(box)}
                      disabled={box.isOpened}
                      className={`
                        relative aspect-square rounded-xl md:rounded-2xl font-black text-lg md:text-2xl transition-all duration-300 border-b-4 
                        ${box.isOpened 
                          ? 'bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed opacity-40 shadow-inner' 
                          : `${boxColor} border-black/20 text-white shadow-lg`}
                      `}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        {box.isOpened ? <CheckCircle2 size={24} className="opacity-20" /> : box.boxNumber}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          MODAL SOAL
      ========================================= */}
      <AnimatePresence>
        {activeQuestion && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-900/40 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-[3rem] max-w-2xl w-full p-8 md:p-12 text-center shadow-2xl relative border-8 border-white"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-amber-400 text-amber-900 font-black px-8 py-3 rounded-full shadow-lg border-4 border-white flex items-center gap-2 whitespace-nowrap">
                <HelpCircle size={20} />
                {activeQuestion.category.toUpperCase()}
              </div>

              <div className="mt-4 mb-10">
                <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
                  "{activeQuestion.q}"
                </h2>
              </div>

              {showAnswer ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-10 bg-emerald-50 border-4 border-emerald-200 p-8 rounded-[2rem]"
                >
                  <p className="text-xs font-black text-emerald-500 mb-2 uppercase tracking-widest">Jawaban Benar:</p>
                  <h3 className="text-2xl md:text-3xl font-black text-emerald-700">{activeQuestion.a}</h3>
                </motion.div>
              ) : (
                <div className="mb-10">
                  <button 
                    onClick={() => setShowAnswer(true)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-black text-xl py-5 px-12 rounded-[2rem] transition-all hover:scale-105"
                  >
                    Buka Jawaban
                  </button>
                </div>
              )}

              {showAnswer && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest">Siapa yang menjawab benar?</p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <button 
                      onClick={() => awardPoints('A')}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xl py-5 rounded-2xl shadow-lg hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 size={20} /> {teamA.name}
                    </button>
                    <button 
                      onClick={() => awardPoints('B')}
                      className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-black text-xl py-5 rounded-2xl shadow-lg hover:shadow-rose-200 transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 size={20} /> {teamB.name}
                    </button>
                  </div>
                  <button 
                    onClick={skipQuestion}
                    className="text-gray-400 hover:text-gray-600 font-bold text-sm underline underline-offset-4 decoration-2"
                  >
                    Tidak ada yang benar
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          SCREEN 3: WINNER CELEBRATION
      ========================================= */}
      <AnimatePresence>
        {gameState === 'END' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-indigo-600/95 backdrop-blur-xl p-6"
          >
            <motion.div 
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-white p-10 md:p-16 rounded-[4rem] text-center max-w-2xl w-full shadow-[0_0_100px_rgba(255,255,255,0.3)] relative"
            >
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex justify-center mb-8"
              >
                <div className="relative">
                  <Trophy size={120} className="text-amber-400 drop-shadow-2xl" />
                  <Star className="absolute -top-4 -right-4 text-amber-300 w-12 h-12 fill-current animate-pulse" />
                </div>
              </motion.div>

              <h2 className="text-xl font-black text-indigo-400 mb-2 uppercase tracking-[0.2em]">Sang Juara Adalah</h2>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 leading-tight">
                {winner}!
              </h1>
              
              <div className="flex justify-center gap-12 mb-12 p-8 bg-gray-50 rounded-[3rem] border-4 border-white shadow-inner">
                <div className="text-center">
                  <p className="text-[10px] font-black text-indigo-400 uppercase mb-1">{teamA.name}</p>
                  <p className="text-4xl font-black text-indigo-600">{teamA.score}</p>
                </div>
                <div className="w-1 bg-gray-200 rounded-full"></div>
                <div className="text-center">
                  <p className="text-[10px] font-black text-rose-400 uppercase mb-1">{teamB.name}</p>
                  <p className="text-4xl font-black text-rose-600">{teamB.score}</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setGameState('START')}
                className="bg-gray-900 text-white font-black text-2xl py-6 px-12 rounded-[2.5rem] shadow-2xl transition-all flex items-center justify-center gap-3 mx-auto"
              >
                <RefreshCcw size={28} /> MAIN LAGI
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
