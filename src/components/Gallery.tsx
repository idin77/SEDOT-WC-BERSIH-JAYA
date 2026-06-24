import React from 'react';

const images = [
    'assets/images/gallery_truck_work1_1782247570566.jpg',
    'assets/images/gallery_truck_work2_1782247587345.jpg',
    'assets/images/gallery_truck_work3_1782247603278.jpg',
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Galeri Pekerjaan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img, i) => (
                <div key={i} className="aspect-video overflow-hidden rounded-lg shadow-md">
                    <img src={img} alt={`Foto Dokumentasi Pekerjaan Sedot WC ${i + 1}`} className="w-full h-full object-cover transition-opacity duration-500 opacity-100" loading="lazy" width="640" height="360" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
