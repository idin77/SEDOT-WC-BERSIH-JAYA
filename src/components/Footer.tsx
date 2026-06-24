import React from 'react';
import SubscriptionForm from './SubscriptionForm';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 text-center">
        <p>&copy; 2026 Sedot WC Bersih Jaya Karawang. Semua hak dilindungi.</p>
        <p>085882448632 | Alamat Usaha, Kota</p>
        
        <SubscriptionForm />

        <p className="mt-8 text-sm text-blue-300">
            <a href="https://bikin.sedotwckarawang.id/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            jasa pembuatan website sedot WC
            </a>
        </p>
    </footer>
  );
}
