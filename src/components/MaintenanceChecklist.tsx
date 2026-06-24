import React, { useState } from 'react';
import { Printer, CheckSquare } from 'lucide-react';

const checklistItems = [
  'Cek kondisi tutup septic tank (tidak retak).',
  'Pastikan tidak ada bau menyengat dari area septic tank.',
  'Periksa saluran air di sekitar septic tank untuk kebocoran.',
  'Catat jadwal sedot terakhir.',
  'Hindari membuang bahan kimia keras ke WC.',
];

export default function MaintenanceChecklist() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setCheckedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mt-12 border-2 border-blue-100 dark:border-blue-900">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold dark:text-white flex items-center gap-2">
            <CheckSquare className="text-blue-950 dark:text-blue-300" />
            Checklist Perawatan
        </h3>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <Printer size={18} />
          Cetak
        </button>
      </div>
      <ul className="space-y-3">
        {checklistItems.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-blue-950"
              checked={checkedItems.includes(index)}
              onChange={() => toggleItem(index)}
            />
            <span className={`dark:text-gray-300 ${checkedItems.includes(index) ? 'line-through text-gray-400' : ''}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
