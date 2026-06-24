import React from 'react';
import MaintenanceChecklist from './MaintenanceChecklist';

const tips = [
  { title: 'Hindari Membuang Sampah', desc: 'Jangan membuang tisu, pembalut, atau plastik ke lubang WC karena bisa menyumbat saluran.' },
  { title: 'Sedot Septic Tank Rutin', desc: 'Lakukan sedot septic tank secara rutin setiap 1-2 tahun sekali agar tetap berfungsi maksimal.' },
  { title: 'Gunakan Pembersih Aman', desc: 'Gunakan cairan pembersih yang aman bagi bakteri pengurai di dalam septic tank Anda.' },
];

export default function Tips() {
  return (
    <section id="tips" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Tips Perawatan WC</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-4 border-blue-950 dark:border-blue-700">
              <h3 className="text-xl font-bold mb-4 text-blue-950 dark:text-blue-300">{tip.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{tip.desc}</p>
            </div>
          ))}
        </div>
        <MaintenanceChecklist />
      </div>
    </section>
  );
}
