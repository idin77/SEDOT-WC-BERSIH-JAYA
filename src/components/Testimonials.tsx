import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        { name: 'Budi', text: 'Sangat cepat dan rapi kerjanya!', rating: 5 },
        { name: 'Siti', text: 'Harga bersahabat, pelayanan ramah.', rating: 5 },
        { name: 'Andi', text: 'WC mampet langsung tuntas dalam sekejap.', rating: 4 },
    ];
  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Testimoni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
                <div key={t.name} className="p-6 bg-white rounded-xl shadow-md space-y-4">
                    <div className="flex text-yellow-400">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600">"{t.text}"</p>
                    <p className="font-bold">- {t.name}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
