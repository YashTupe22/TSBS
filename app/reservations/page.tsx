import Image from 'next/image';
import { Metadata } from 'next';
import ReservationForm from './ReservationForm';

export const metadata: Metadata = {
  title: 'Reservations | The Black Sheep Bistro',
  description: 'Reserve your table at The Black Sheep Bistro. Join us in Panaji for a culinary journey where Goan heritage meets global innovation.',
};

export default function ReservationsPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold">Secure Your Seat</span>
              <h1 className="font-headline text-5xl md:text-7xl leading-tight -ml-1 text-on-surface">The Alchemist&apos;s Table</h1>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                Join us in Panaji for a culinary journey where Goan heritage meets global innovation. Every reservation is a curated experience.
              </p>
            </div>

            {/* Contact & Info Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-8 rounded-lg space-y-4 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <div className="space-y-1">
                  <h3 className="font-headline text-lg">Hours</h3>
                  <p className="text-sm text-on-surface-variant uppercase tracking-wider">Open Daily</p>
                  <p className="text-sm text-on-surface-variant">12 PM - 11 PM</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg space-y-4 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div className="space-y-1">
                  <h3 className="font-headline text-lg">Location</h3>
                  <p className="text-sm text-on-surface-variant">Panaji, Goa</p>
                  <p className="text-sm text-on-surface-variant">India 403001</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-64 rounded-xl overflow-hidden border border-outline-variant/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.919194704907!2d73.80915277485899!3d15.488778054715995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc08e89f554f7%3A0xd3b953aaf89bd71!2sThe%20Black%20Sheep%20Bistro!5e0!3m2!1sen!2sin!4v1774953513110!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="The Black Sheep Bistro Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Booking Widget Section */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="bg-surface-container-highest p-8 md:p-12 rounded-xl border border-outline-variant/20 relative overflow-hidden shadow-xl">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
              <ReservationForm />
            </div>

            {/* Editorial Content Column */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL39kjLL-f6tFL0t_hv2uYZzeci8Lduq8eQ8sV4upQss72LqWffi2WVPQVTJK1ZfWsk-yXhsKqzHOncxujhcG0nd41NLexi8WLZl41WrEM1iI73kbdvaS5qgjDEnxzIDS6JQD-GiVafSuSm-uhD12zr-WdiMdJxLp2YnWt8wJQOsBOqJIXvXON71APjq4vozdydqPEhcTM40N5Y2ZwJ5jyI3dIR9uIepxTb736xATugXE7wEQl9hxPLGvIF5ucgHANzXlkOolwE9I6"
                  alt="Moody interior shot of a sophisticated bistro"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute bottom-4 left-4 bg-surface-dim/80 backdrop-blur px-4 py-2">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">The Main Hall</span>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h4 className="font-headline text-2xl">A Private Culinary Affair</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  For parties larger than 8 or private dining events, please contact us directly. Our &apos;Chef&apos;s Table&apos; offers an exclusive glimpse into the heart of the kitchen.
                </p>
                <a href="tel:+919881972233" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  +91 98819 72233
                  <span className="material-symbols-outlined text-[16px]">call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
