import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, FileText, HelpCircle, X, Volume2, VolumeX, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useHoverSound } from '../hooks/useHoverSound';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [karawangTime, setKarawangTime] = useState('');
  const [message, setMessage] = useState('Saya butuh bantuan sedot WC...');
  const { playSound, isMuted, toggleMute } = useHoverSound();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulsing(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setKarawangTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      drag
      dragConstraints={{ left: -300, right: 0, top: -500, bottom: 0 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end cursor-grab active:cursor-grabbing"
    >
      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-2 rounded-xl shadow-xl border border-white/20 dark:border-gray-700/50 flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
            <Clock size={16} />
            WIB: {karawangTime}
          </div>
          <a href="tel:085882448632" onMouseEnter={playSound} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium">
            <Phone size={16} className="text-blue-950 dark:text-blue-300" />
            Call Now
          </a>
          <a href="#estimasi" onMouseEnter={playSound} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium">
            <FileText size={16} className="text-blue-950 dark:text-blue-300" />
            Get Quote
          </a>
          <a href="#faq" onMouseEnter={playSound} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium">
            <HelpCircle size={16} className="text-blue-950 dark:text-blue-300" />
            View FAQ
          </a>
          <button onClick={toggleMute} onMouseEnter={playSound} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium w-full text-left">
            {isMuted ? <VolumeX size={16} className="text-blue-950 dark:text-blue-300" /> : <Volume2 size={16} className="text-blue-950 dark:text-blue-300" />}
            {isMuted ? 'Unmute Sound' : 'Mute Sound'}
          </button>
          <div className="px-2 pt-2 border-t border-gray-100 dark:border-gray-700">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-sm bg-white/50 dark:bg-gray-700/50 dark:text-white"
              placeholder="Tulis pesan..."
            />
            <a
              href={`https://wa.me/6285882448632?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playSound}
              className="mt-2 flex items-center justify-center gap-2 w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <MessageCircle size={16} />
              Send
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
      <motion.button 
        onClick={() => { setIsOpen(!isOpen); setIsPulsing(false); }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setIsOpen(!isOpen);
          if (e.key === 'Escape') setIsOpen(false);
        }}
        onMouseEnter={playSound}
        animate={isPulsing ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </motion.button>
    </motion.div>
  );
}
