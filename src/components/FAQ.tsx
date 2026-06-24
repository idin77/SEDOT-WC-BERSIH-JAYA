import React, { useState, useEffect } from 'react';

export default function FAQ() {
  const faqs = [
    { q: 'Berapa harga sedot WC?', a: 'Harga kami sangat bersahabat, silakan hubungi kami untuk mendapatkan penawaran terbaik sesuai kondisi.' },
    { q: 'Apakah melayani 24 jam?', a: 'Ya, kami siap melayani kebutuhan Anda 24 jam setiap hari.' },
    { q: 'Wilayah mana saja yang dicakup?', a: 'Kami melayani seluruh wilayah Karawang dan sekitarnya.' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Tanya Jawab (FAQ)</h2>
        <div className="max-w-2xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Cari pertanyaan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent"
          />
        </div>
        <div className="space-y-6 max-w-2xl mx-auto">
          {filteredFaqs.map((faq, i) => (
            <div key={i} className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500">Tidak ada pertanyaan yang ditemukan.</p>
          )}
        </div>
      </div>
    </section>
  );
}
