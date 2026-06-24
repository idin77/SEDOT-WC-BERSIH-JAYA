import React from 'react';
import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  const areas = [
    'Karawang Barat', 'Karawang Timur', 'Telukjambe', 'Klari', 'Cikampek', 
    'Purwasari', 'Majalaya', 'Lemahabang', 'Tempuran', 'Kotabaru'
  ];
  const handleCheckAvailability = () => {
    const contactSection = document.getElementById('kontak');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="area-layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Area Layanan Kami di Karawang</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
                <div key={area} className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2">
                        <MapPin className="text-blue-950" size={20} />
                        <span className="font-bold text-lg text-gray-950">{area}</span>
                    </div>
                    <button 
                        onClick={handleCheckAvailability}
                        className="text-sm bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-200 transition-colors"
                    >
                        Cek Ketersediaan
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
