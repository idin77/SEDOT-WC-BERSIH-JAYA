import React, { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';

const data = [
  { month: 'Jan', penuh: 45, mampet: 30 },
  { month: 'Feb', penuh: 52, mampet: 28 },
  { month: 'Mar', penuh: 48, mampet: 35 },
  { month: 'Apr', penuh: 60, mampet: 40 },
  { month: 'May', penuh: 55, mampet: 32 },
  { month: 'Jun', penuh: 70, mampet: 45 },
];

export default function Dashboard() {
  const chartRef = useRef<HTMLDivElement>(null);

  const exportPDF = async () => {
    if (!chartRef.current) return;
    const canvas = await html2canvas(chartRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.text('Laporan Tren Sanitasi', 10, 10);
    pdf.addImage(imgData, 'PNG', 10, 20, 180, 100);
    pdf.save('Laporan_Tren_Sanitasi.pdf');
  };

  return (
    <section id="dashboard" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 dark:text-white">Tren Masalah Sanitasi di Karawang</h2>
        <div className="flex justify-center mb-6">
          <button 
            onClick={exportPDF}
            className="flex items-center gap-2 bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Download size={18} />
            Export PDF
          </button>
        </div>
        <div ref={chartRef} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="penuh" name="Septic Tank Penuh" fill="#1e3a8a" />
              <Bar dataKey="mampet" name="Pipa Mampet" fill="#fbbf24" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
