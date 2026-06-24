import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Toast from './Toast';

export default function Contact() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast({ message: 'Pesan berhasil dikirim!', type: 'success' });
  };

  return (
    <section id="kontak" className="py-20 bg-blue-950 text-white text-center">
      <div className="container mx-auto px-6 space-y-8">
        <h2 className="text-4xl font-bold">Hubungi Kami Sekarang, Layanan 24 Jam Non Stop</h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Nama Anda" className="w-full p-3 rounded-lg text-blue-950" required />
          <input type="tel" placeholder="Nomor WhatsApp" className="w-full p-3 rounded-lg text-blue-950" required />
          <textarea placeholder="Pesan Anda" className="w-full p-3 rounded-lg text-blue-950 h-32" required></textarea>
          <button type="submit" className="w-full bg-yellow-400 text-blue-950 font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors">
            Kirim Pesan
          </button>
        </form>

        <div className="text-5xl font-bold text-yellow-400">085882448632</div>
        <div className="flex justify-center gap-6">
            <a href="https://wa.me/6285882448632" className="flex items-center gap-2 bg-green-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-transform duration-200 hover:scale-105 shadow-lg">
                <MessageCircle /> WhatsApp
            </a>
            <a href="tel:085882448632" className="flex items-center gap-2 bg-white text-blue-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform duration-200 hover:scale-105 shadow-lg">
                <Phone /> Telepon
            </a>
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
}
