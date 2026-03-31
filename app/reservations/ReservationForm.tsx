'use client';

import { useState, useRef } from 'react';
import { submitReservation } from '../actions';

export default function ReservationForm() {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const result = await submitReservation(formData);
    setMessage(result.message);
    setIsSubmitting(false);
    if (result.success) {
      setTimeout(() => setMessage(''), 8000);
    }
  }

  function handleWhatsAppBooking() {
    const form = formRef.current;
    if (!form) return;

    // Validate required fields
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value;
    const mobile = (form.querySelector('[name="mobile"]') as HTMLInputElement)?.value;
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value;
    const guests = (form.querySelector('[name="guests"]') as HTMLSelectElement)?.value;
    const date = (form.querySelector('[name="date"]') as HTMLInputElement)?.value;
    const time = (form.querySelector('[name="time"]') as HTMLSelectElement)?.value;
    const occasion = (form.querySelector('[name="occasion"]') as HTMLSelectElement)?.value;
    const seating = (form.querySelector('[name="seating"]') as HTMLSelectElement)?.value;
    const dietary = (form.querySelector('[name="dietary"]') as HTMLTextAreaElement)?.value;
    const requests = (form.querySelector('[name="requests"]') as HTMLTextAreaElement)?.value;

    if (!name || !mobile || !email || !guests || !date || !time) {
      setMessage('Please fill in all required fields before sending via WhatsApp.');
      return;
    }

    // Format date for display
    const formattedDate = new Date(date).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Build WhatsApp message
    let whatsappMessage = `🍽️ *THE BLACK SHEEP BISTRO*\n`;
    whatsappMessage += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    whatsappMessage += `📋 *RESERVATION REQUEST*\n\n`;
    whatsappMessage += `👤 *Guest Details*\n`;
    whatsappMessage += `• Name: ${name}\n`;
    whatsappMessage += `• Mobile: ${mobile}\n`;
    whatsappMessage += `• Email: ${email}\n\n`;
    whatsappMessage += `📅 *Booking Details*\n`;
    whatsappMessage += `• Date: ${formattedDate}\n`;
    whatsappMessage += `• Time: ${time}\n`;
    whatsappMessage += `• Guests: ${guests}\n`;
    if (occasion && occasion !== 'Just Dining') {
      whatsappMessage += `• Occasion: ${occasion}\n`;
    }
    if (seating && seating !== 'No Preference') {
      whatsappMessage += `• Seating: ${seating}\n`;
    }
    if (dietary) {
      whatsappMessage += `\n🥗 *Dietary Requirements*\n${dietary}\n`;
    }
    if (requests) {
      whatsappMessage += `\n✨ *Special Requests*\n${requests}\n`;
    }
    whatsappMessage += `\n━━━━━━━━━━━━━━━━━━━━`;

    // Open WhatsApp with pre-filled message
    const whatsappNumber = '918668918164';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-8 relative z-10">
      {/* Row 1: Name and Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormField
          icon="person"
          label="Full Name"
          required
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Enter your full name"
            className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body"
          />
        </FormField>

        <FormField
          icon="call"
          label="Mobile Number"
          required
        >
          <div className="flex items-center w-full">
            <span className="text-on-surface-variant mr-2">+91</span>
            <input
              name="mobile"
              type="tel"
              required
              pattern="[0-9]{10}"
              placeholder="10-digit number"
              className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body"
            />
          </div>
        </FormField>
      </div>

      {/* Row 2: Email and Guests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormField
          icon="mail"
          label="Email Address"
          required
        >
          <input
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body"
          />
        </FormField>

        <FormField
          icon="groups"
          label="Number of Guests"
          required
        >
          <select
            name="guests"
            required
            className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body appearance-none cursor-pointer"
          >
            <option value="" className="form-option">Select guests</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
              <option key={n} value={`${n} ${n === 1 ? 'Guest' : 'Guests'}`} className="form-option">
                {n} {n === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
            <option value="More than 10" className="form-option">More than 10 (Call Us)</option>
          </select>
        </FormField>
      </div>

      {/* Row 3: Date and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormField
          icon="calendar_today"
          label="Reservation Date"
          required
        >
          <input
            name="date"
            type="date"
            required
            min={today}
            className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body"
          />
        </FormField>

        <FormField
          icon="schedule"
          label="Time Slot"
          required
        >
          <select
            name="time"
            required
            className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body appearance-none cursor-pointer"
          >
            <option value="" className="form-option">Select time</option>
            <optgroup label="Lunch">
              <option className="form-option">12:00 PM</option>
              <option className="form-option">12:30 PM</option>
              <option className="form-option">1:00 PM</option>
              <option className="form-option">1:30 PM</option>
              <option className="form-option">2:00 PM</option>
              <option className="form-option">2:30 PM</option>
              <option className="form-option">3:00 PM</option>
            </optgroup>
            <optgroup label="Dinner">
              <option className="form-option">6:30 PM</option>
              <option className="form-option">7:00 PM</option>
              <option className="form-option">7:30 PM</option>
              <option className="form-option">8:00 PM</option>
              <option className="form-option">8:30 PM</option>
              <option className="form-option">9:00 PM</option>
              <option className="form-option">9:30 PM</option>
              <option className="form-option">10:00 PM</option>
              <option className="form-option">10:30 PM</option>
              <option className="form-option">11:00 PM</option>
            </optgroup>
          </select>
        </FormField>
      </div>

      {/* Row 4: Occasion and Seating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormField
          icon="celebration"
          label="Special Occasion"
        >
          <select
            name="occasion"
            className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body appearance-none cursor-pointer"
          >
            <option className="form-option">Just Dining</option>
            <option className="form-option">Birthday</option>
            <option className="form-option">Anniversary</option>
            <option className="form-option">Engagement</option>
            <option className="form-option">Business Meeting</option>
            <option className="form-option">Family Gathering</option>
            <option className="form-option">Date Night</option>
            <option className="form-option">Other</option>
          </select>
        </FormField>

        <FormField
          icon="chair"
          label="Seating Preference"
        >
          <select
            name="seating"
            className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body appearance-none cursor-pointer"
          >
            <option className="form-option">No Preference</option>
            <option className="form-option">Indoor</option>
            <option className="form-option">Outdoor</option>
            <option className="form-option">Window Seat</option>
            <option className="form-option">Quiet Corner</option>
          </select>
        </FormField>
      </div>

      {/* Row 5: Dietary Requirements */}
      <FormField
        icon="restaurant"
        label="Dietary Requirements"
      >
        <textarea
          name="dietary"
          rows={2}
          placeholder="Any allergies or dietary restrictions? (e.g., vegetarian, gluten-free, nut allergy)"
          className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body resize-none placeholder:text-on-surface-variant/40"
        />
      </FormField>

      {/* Row 6: Special Requests */}
      <FormField
        icon="edit_note"
        label="Special Requests"
      >
        <textarea
          name="requests"
          rows={2}
          placeholder="Any special arrangements? (e.g., cake, flowers, decorations, high chair)"
          className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-body resize-none placeholder:text-on-surface-variant/40"
        />
      </FormField>

      {/* Action Buttons */}
      <div className="pt-4 space-y-4">
        <button
          type="button"
          onClick={handleWhatsAppBooking}
          disabled={isSubmitting}
          className="w-full gold-gradient text-on-primary-fixed py-4 rounded-md font-bold text-base uppercase tracking-[0.15em] shadow-xl shadow-primary/10 hover:brightness-110 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
              Processing...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">restaurant</span>
              Book Table via WhatsApp
            </>
          )}
        </button>

        <p className="text-center text-xs text-on-surface-variant/60">
          By continuing, you agree to our booking terms and seasonal cancellation policy.
        </p>

        {message && (
          <p className={`text-center mt-4 font-semibold ${message.includes('required') || message.includes('Please fill') ? 'text-error' : 'text-primary'}`}>
            {message}
          </p>
        )}
      </div>
    </form>
  );
}

function FormField({ 
  icon, 
  label, 
  required, 
  children 
}: { 
  icon: string; 
  label: string; 
  required?: boolean; 
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3 group">
      <label className="block text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <div className="flex items-start border-b border-outline-variant/30 group-focus-within:border-primary transition-colors py-2">
        <span className="material-symbols-outlined mr-3 text-on-surface-variant group-focus-within:text-primary transition-colors mt-0.5">
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}
