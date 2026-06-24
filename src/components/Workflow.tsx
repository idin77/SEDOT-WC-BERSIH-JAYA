import React from 'react';
import { Phone, MessageSquare, Calendar, Wrench } from 'lucide-react';

const steps = [
  { icon: Phone, title: 'Hubungi Kami', desc: 'Hubungi kami via telepon atau WhatsApp kapan saja.' },
  { icon: MessageSquare, title: 'Konsultasi', desc: 'Ceritakan masalah Anda, kami berikan solusi terbaik.' },
  { icon: Calendar, title: 'Penjadwalan', desc: 'Atur jadwal kedatangan yang sesuai dengan waktu Anda.' },
  { icon: Wrench, title: 'Eksekusi', desc: 'Tim profesional kami segera menangani masalah Anda.' },
];

export default function Workflow() {
  return (
    <section id="alur-kerja" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Alur Kerja Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-950 rounded-full flex items-center justify-center mb-6">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
