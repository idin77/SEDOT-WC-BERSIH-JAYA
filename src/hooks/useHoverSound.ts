import { useState, useCallback, useEffect } from 'react';

export function useHoverSound() {
  const [isMuted, setIsMuted] = useState(() => localStorage.getItem('hoverSoundMuted') === 'true');

  useEffect(() => {
    localStorage.setItem('hoverSoundMuted', String(isMuted));
  }, [isMuted]);

  const playSound = useCallback(() => {
    if (isMuted) return;
    const AudioContext = (window.AudioContext || (window as any).webkitAudioContext);
    if (!AudioContext) return;
    
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime); // Slightly higher pitch
    
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime); // Quieter
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.05);
  }, [isMuted]);

  const toggleMute = useCallback(() => setIsMuted(prev => !prev), []);

  return { playSound, isMuted, toggleMute };
}
