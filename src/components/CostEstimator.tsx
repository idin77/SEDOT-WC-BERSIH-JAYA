import React, { useState } from 'react';

const serviceOptions = [
  { id: 'standard', name: 'Sedot WC Standar', price: 500000 },
  { id: 'urgent', name: 'Sedot WC Darurat/Penuh', price: 750000 },
  { id: 'capacity', name: 'Sedot Septic Tank Besar', price: 1000000 },
];

export default function CostEstimator() {
  const [selected, setSelected] = useState(serviceOptions[0].id);
  const price = serviceOptions.find(o => o.id === selected)?.price || 0;

  return (
    <section id="cost-estimator" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-10">Estimasi Biaya</h2>
        <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
          <label className="block mb-4 font-semibold">Pilih Jenis Layanan:</label>
          <select 
            className="w-full p-3 rounded-lg border-2 border-blue-200 mb-6"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {serviceOptions.map(opt => (
              <option key={opt.id} value={opt.id}>{opt.name}</option>
            ))}
          </select>
          <div className="text-center">
            <p className="text-lg">Estimasi Biaya:</p>
            <p className="text-4xl font-bold text-blue-950 mt-2">Rp {price.toLocaleString('id-ID')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
