import React from 'react';
import { Home, Building2, Droplets, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'Sedot WC Rumah / Pribadi', icon: Home, desc: 'Layanan sedot WC untuk rumah, ruko, dan tempat tinggal lainnya.' },
    { title: 'Sedot WC Perusahaan / Instansi', icon: Building2, desc: 'Melayani kebutuhan sedot WC untuk kantor, pabrik, sekolah, dan instansi.' },
    { title: 'WC Mampet', icon: Droplets, desc: 'Mengatasi WC mampet dengan cepat dan peralatan modern.' },
    { title: 'Perawatan Septic Tank', icon: Wrench, desc: 'Perawatan rutin septic tank agar tetap bersih, aman, dan tidak bermasalah.' },
  ];
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((s) => (
                <div key={s.title} className="p-6 border rounded-xl hover:shadow-lg space-y-4">
                    <s.icon size={48} className="text-blue-950" />
                    <h3 className="font-bold text-xl">{s.title}</h3>
                    <p className="text-gray-600">{s.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
