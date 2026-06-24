import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import OperatorStatus from './OperatorStatus';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Beranda', 'Tentang Kami', 'Layanan', 'Keunggulan', 'Testimoni', 'Galeri', 'Kontak'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-blue-950 text-white shadow-lg py-3' : 'bg-transparent text-white py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center gap-2">
            <img src="/src/assets/logo.png" alt="Logo Sedot WC Bersih Jaya Karawang" className="w-12 h-12 object-contain" loading="eager" />
            Sedot WC Bersih Jaya Karawang
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-yellow-400">{item}</a>
          ))}
          <DarkModeToggle />
          <OperatorStatus />
          <a href="tel:085882448632" className="bg-yellow-400 text-blue-950 px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-500">
            <Phone size={18} />
            085882448632
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 p-6 absolute w-full shadow-lg">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsOpen(false)} className="hover:text-yellow-400">{item}</a>
              ))}
            </div>
        </div>
      )}
    </nav>
  );
}
