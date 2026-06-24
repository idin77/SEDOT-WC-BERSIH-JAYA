import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import About from './components/About';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Tips from './components/Tips';
import ServiceAreas from './components/ServiceAreas';
import Map from './components/Map';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CostEstimator from './components/CostEstimator';
import BlogSection from './components/BlogSection';
import Dashboard from './components/Dashboard';
import Promotions from './components/Promotions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Reveal from './components/Reveal';
import { useSectionSEO } from './hooks/useSectionSEO';

const SECTIONS = {
  'beranda': { title: 'Sedot WC Bersih Jaya Karawang | Jasa Terpercaya', description: 'Sedot WC Karawang profesional 24 jam. Tuntas, bersih, dan harga bersahabat.' },
  'tentang-kami': { title: 'Tentang Kami | Sedot WC Bersih Jaya Karawang', description: 'Pelajari mengapa kami adalah pilihan utama untuk layanan sedot WC dan septic tank di Karawang.' },
  'layanan': { title: 'Layanan Sedot WC | Bersih Jaya Karawang', description: 'Jasa sedot WC, septic tank penuh, saluran mampet, dan limbah rumah tangga di Karawang.' },
  'kontak': { title: 'Hubungi Sedot WC Bersih Jaya Karawang', description: 'Hubungi kami sekarang untuk layanan sedot WC cepat dan tuntas di Karawang.' },
  'tips': { title: 'Tips Perawatan WC & Septic Tank', description: 'Tips praktis menjaga kebersihan septic tank agar tidak mudah mampet.' },
};

export default function App() {
  useSectionSEO(SECTIONS);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Reveal><Advantages /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Workflow /></Reveal>
        <Reveal><Tips /></Reveal>
        <Reveal><ServiceAreas /></Reveal>
        <Reveal><Map /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><CostEstimator /></Reveal>
        <Reveal><BlogSection /></Reveal>
        <Reveal><Dashboard /></Reveal>
        <Reveal><Promotions /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
