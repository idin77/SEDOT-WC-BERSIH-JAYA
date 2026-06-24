import React from 'react';

export default function Map() {
  return (
    <section id="lokasi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Lokasi Kami</h2>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          {/* 
            Ganti URL 'src' di bawah ini dengan embed link dari Google Maps Anda:
            1. Buka Google Maps, cari lokasi Anda.
            2. Klik tombol 'Bagikan' (Share).
            3. Pilih tab 'Sematkan peta' (Embed a map).
            4. Salin URL di dalam atribut 'src' iframe tersebut.
          */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347892358!2d107.24647306249998!3d-6.326521500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977759b8f36c5%3A0x301e8f1fc28b880!2sKarawang%2C%20Kabupaten%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1719179000000!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Sedot WC Bersih Jaya Karawang"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
