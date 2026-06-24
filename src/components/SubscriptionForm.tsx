import React, { useState } from 'react';

export default function SubscriptionForm() {
  const [contact, setContact] = useState('');
  const [type, setType] = useState('email');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih! Kami akan mengirimkan pengingat ke ${contact} melalui ${type}.`);
    setContact('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center gap-3">
      <input
        type={type === 'email' ? 'email' : 'tel'}
        placeholder={type === 'email' ? 'Masukkan email Anda' : 'Masukkan nomor WhatsApp'}
        className="px-4 py-2 rounded-lg text-blue-950 w-full max-w-sm"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <div className="flex gap-4 text-sm text-blue-200">
        <label className="flex items-center gap-1">
          <input type="radio" name="type" value="email" checked={type === 'email'} onChange={() => setType('email')} />
          Email
        </label>
        <label className="flex items-center gap-1">
          <input type="radio" name="type" value="sms" checked={type === 'sms'} onChange={() => setType('sms')} />
          WhatsApp
        </label>
      </div>
      <button type="submit" className="bg-yellow-400 text-blue-950 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors mt-2">
        Daftar Pengingat
      </button>
    </form>
  );
}
