import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', String(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full hover:bg-white/20 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
    </button>
  );
}
