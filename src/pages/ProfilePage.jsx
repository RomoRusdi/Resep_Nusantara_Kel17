// src/pages/ProfilePage.jsx
import { Users, BookOpen, GraduationCap } from 'lucide-react';

export default function ProfilePage() {
  const anggotaKelompok = [
    { nama: 'Janottama Ale Prasetyo', nim: '21120123140046' },
    { nama: 'Muhammad Romeo Raffael', nim: '21120123140151' },
    { nama: 'Rafi Ardian Putra', nim: '21120123140122' },
    { nama: 'Putri Bilqis Nasywa Arifin', nim: '21120123140144' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 pb-20 md:pb-10">
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Profil Kelompok Praktikum PPB
          </h1>
          <p className="text-slate-600 text-sm md:text-base">
           Kelompok 17
          </p>
        </div>

        {/* Informasi Kelompok */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-indigo-100">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            <h2 className="text-xl font-semibold text-slate-800">
              Daftar Anggota Kelompok
            </h2>
          </div>

          <ul className="space-y-4">
            {anggotaKelompok.map((anggota, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-indigo-50/60 border border-indigo-100 rounded-xl px-4 py-3 hover:bg-indigo-100 transition"
              >
                <div>
                  <p className="font-semibold text-slate-800">{anggota.nama}</p>
                  <p className="text-slate-600 text-sm">{anggota.nim}</p>
                </div>
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>Dibuat untuk mata kuliah Praktikum Pemrograman Berbasis Komponen</p>
          <p className="mt-1">Universitas Diponegoro © 2025</p>
        </div>
      </main>
    </div>
  );
}
