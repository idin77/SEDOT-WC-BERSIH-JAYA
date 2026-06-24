import React, { useState, useEffect } from 'react';

export default function OperatorStatus() {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const hour = now.getHours();
      // Business hours: 08:00 to 18:00
      setIsAvailable(hour >= 8 && hour < 18);
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs font-semibold bg-white/10 px-3 py-1 rounded-full">
      <span className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></span>
      {isAvailable ? 'Operator Tersedia' : 'Operator Offline'}
    </div>
  );
}
