import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang-kami" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold dark:text-white">Tentang Kami</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Sedot WC Bersih Jaya adalah layanan profesional yang siap membantu masalah septic tank penuh, WC mampet, saluran mampet, dan limbah rumah tangga dengan cepat, bersih, dan tuntas.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <ShieldCheck className="text-blue-900 dark:text-blue-300" />
              <span className="font-semibold text-blue-950 dark:text-blue-100">Teknisi Tersertifikasi</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <ShieldCheck className="text-blue-900 dark:text-blue-300" />
              <span className="font-semibold text-blue-950 dark:text-blue-100">Bergaransi Resmi</span>
            </div>
          </div>
          <button className="bg-blue-950 text-white px-8 py-3 rounded-full hover:bg-blue-800 dark:bg-blue-700">Pelajari Lebih Lanjut</button>
        </div>
        <div className="md:w-1/2 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg text-center">
          <div className="text-blue-950 dark:text-blue-300 font-bold text-6xl">100%</div>
          <div className="text-xl font-bold text-gray-800 dark:text-gray-200">TERPERCAYA</div>
        </div>
      </div>
    </section>
  );
}
