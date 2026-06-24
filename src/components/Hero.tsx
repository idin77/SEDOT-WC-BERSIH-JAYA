import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="bg-blue-950 pt-32 pb-20 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">SEDOT WC BERSIH JAYA KARAWANG</h1>
          <p className="text-xl text-gray-300">Layanan sedot WC profesional, cepat, bersih, dan harga bersahabat.</p>
          <a href="tel:085882448632" className="inline-flex items-center gap-3 bg-yellow-400 text-blue-950 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-500 transition-transform duration-200 hover:scale-105 shadow-xl">
            <Phone size={24} /> Hubungi Kami: 085882448632
          </a>
          <div className="grid grid-cols-2 gap-4 pt-6">
            {['Layanan 24 Jam', 'Cepat & Tuntas', 'Aman & Terpercaya', 'Harga Bersahabat'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/src/assets/hero_truck.jpeg" alt="Mobil Sedot WC Bersih Jaya Karawang" className="rounded-xl shadow-2xl transition-opacity duration-500 opacity-100" loading="eager" width="800" height="600" />
        </div>
      </div>
    </section>
  );
}
