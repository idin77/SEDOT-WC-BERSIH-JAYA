import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, FileText, HelpCircle, X, Volume2, VolumeX, Clock, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useHoverSound } from '../hooks/useHoverSound';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [karawangTime, setKarawangTime] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [message, setMessage] = useState('Saya butuh bantuan sedot WC...');
  const { playSound, isMuted, toggleMute } = useHoverSound();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          toggleBtnRef.current?.focus();
          return;
        }
        if (e.key === 'Tab') {
          if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else { // Tab
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      firstElement?.focus();
      menuRef.current.addEventListener('keydown', handleKeyDown);
      return () => menuRef.current?.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    const updateMessageWithCity = () => {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setMessage((prev) => `${prev} - Karawang`);
      }
    };
    updateMessageWithCity();
  }, []);

  useEffect(() => {
    const pulseTimer = setTimeout(() => {
      setIsPulsing(true);
    }, 10000);

    const expandTimer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true);
        setHasInteracted(true);
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 3000);
      }
    }, 15000);

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(expandTimer);
    };
  }, [hasInteracted]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      const formatted = formatter.format(now);
      setKarawangTime(formatted);
      const hours = parseInt(formatted.split(':')[0], 10);
      setIsOnline(hours >= 8 && hours < 17);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      drag
      dragConstraints={{ left: -300, right: 0, top: -500, bottom: 0 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end cursor-grab active:cursor-grabbing"
    >
      <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
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
          <a href="#faq" onClick={() => setIsOpen(false)} onMouseEnter={playSound} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium">
            <HelpCircle size={16} className="text-blue-950 dark:text-blue-300" />
            View FAQ
          </a>
          <button onClick={toggleMute} onMouseEnter={playSound} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium w-full text-left">
            {isMuted ? <VolumeX size={16} className="text-blue-950 dark:text-blue-300" /> : <Volume2 size={16} className="text-blue-950 dark:text-blue-300" />}
            {isMuted ? 'Unmute Sound' : 'Mute Sound'}
          </button>
          <div className="px-2 pt-2 border-t border-gray-100 dark:border-gray-700">
            {isTyping ? (
              <div className="flex gap-1 items-center px-3 py-2">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                ))}
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm bg-white/50 dark:bg-gray-700/50 dark:text-white"
                  placeholder="Tulis pesan..."
                />
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={handleCopy}
                    onMouseEnter={playSound}
                    className={`flex items-center justify-center gap-2 flex-1 px-4 py-2 ${isCopied ? 'bg-green-500' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'} text-gray-800 dark:text-white rounded-lg text-sm font-medium transition-colors`}
                  >
                    <motion.div
                      key={isCopied ? 'copied' : 'copy'}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Copy size={16} />
                    </motion.div>
                    {isCopied ? 'Copied!' : 'Copy'}
                  </button>
                  <a
                    href={`https://wa.me/6285882448632?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={playSound}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <MessageCircle size={16} />
                    Send
                  </a>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
      <motion.button 
        ref={toggleBtnRef}
        onClick={() => { setIsOpen(!isOpen); setIsPulsing(false); setHasInteracted(true); }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setIsOpen(!isOpen);
          if (e.key === 'Escape') setIsOpen(false);
        }}
        onMouseEnter={playSound}
        animate={isPulsing ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
      >
        <div className="relative">
          {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
          <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-green-600 ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`} />
        </div>
      </motion.button>
    </motion.div>
  );
}
