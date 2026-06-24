import React from 'react';
import { Tag } from 'lucide-react';

const promos = [
  { title: 'Diskon 10%', desc: 'Untuk pemesanan via WhatsApp di area Karawang Barat.' },
  { title: 'Paket Hemat', desc: 'Sedot WC + Pelancaran Saluran Mampet cuma Rp 900.000.' },
  { title: 'Promo Bulanan', desc: 'Gratis konsultasi dan survei untuk septic tank penuh.' },
];

export default function Promotions() {
  return (
    <section id="promosi" className="py-20 bg-blue-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Promo Bulan Ini</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promos.map((promo, i) => (
            <div key={i} className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              <Tag className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
              <p className="text-blue-100">{promo.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
