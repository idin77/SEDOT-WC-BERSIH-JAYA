import React from 'react';

const posts = [
  { 
    title: 'Pentingnya Perawatan Septic Tank di Karawang', 
    excerpt: 'Iklim dan kondisi tanah di Karawang memerlukan perhatian khusus pada sistem pembuangan limbah rumah tangga...',
    date: '24 Juni 2026'
  },
  { 
    title: 'Cara Mengatasi WC Mampet Tanpa Bahan Kimia', 
    excerpt: 'Penggunaan bahan kimia berlebih dapat merusak bakteri pengurai. Berikut tips alami yang lebih aman...',
    date: '10 Juni 2026'
  },
  { 
    title: 'Menjaga Kebersihan Lingkungan Sekitar Septic Tank', 
    excerpt: 'Septic tank yang terawat mencegah pencemaran air tanah di lingkungan tempat tinggal Anda...',
    date: '28 Mei 2026'
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Artikel & Edukasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <span className="text-sm text-blue-600 font-semibold">{post.date}</span>
              <h3 className="text-xl font-bold mt-2 mb-4 text-blue-950">{post.title}</h3>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>
              <button className="text-blue-900 font-bold hover:underline">Baca Selengkapnya &rarr;</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
