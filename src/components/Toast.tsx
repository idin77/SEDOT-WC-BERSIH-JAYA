import React, { useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg text-white ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
      {type === 'success' ? <CheckCircle /> : <XCircle />}
      <p>{message}</p>
      <button onClick={onClose} className="ml-2">×</button>
    </div>
  );
}
