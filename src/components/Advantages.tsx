import React from 'react';
import { Clock, MapPin, UserCheck, Settings } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    { title: 'Layanan 24 Jam', icon: Clock, desc: 'Siap melayani kapan saja' },
    { title: 'Jangkauan Luas', icon: MapPin, desc: 'Melayani seluruh wilayah' },
    { title: 'Tenaga Profesional', icon: UserCheck, desc: 'Berpengalaman & terpercaya' },
    { title: 'Peralatan Modern', icon: Settings, desc: 'Aman, bersih & efisien' },
  ];
  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {advantages.map((adv) => (
          <div key={adv.title} className="p-6 border rounded-xl hover:shadow-lg text-center space-y-4">
            <adv.icon size={48} className="mx-auto text-blue-950" />
            <h3 className="font-bold text-xl">{adv.title}</h3>
            <p className="text-gray-600">{adv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
