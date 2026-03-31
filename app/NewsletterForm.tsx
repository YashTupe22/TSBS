'use client';

import { useState } from 'react';
import { subscribeNewsletter } from './actions';

export default function NewsletterForm() {
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    const result = await subscribeNewsletter(formData);
    setMessage(result.message);
    setTimeout(() => setMessage(''), 5000);
  }

  return (
    <>
      <form action={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          name="email"
          type="email"
          required
          className="flex-1 bg-surface-container-high border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface px-6 py-4 transition-colors"
          placeholder="Your Email Address"
        />
        <button
          type="submit"
          className="gold-gradient text-on-primary-fixed px-10 py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <p className="mt-4 text-primary font-semibold">{message}</p>
      )}
    </>
  );
}
