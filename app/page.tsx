import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import NewsletterForm from './NewsletterForm';

export const metadata: Metadata = {
  title: 'Home | The Black Sheep Bistro',
  description: 'Locally sourced ingredients with global culinary techniques. A vibrant Panaji bistro crafting global plates paired with clever cocktails.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTmwdmFzBgWnFJCXiKI6fFwN6EuiSqDu9x89lEQmrqwhVyl98wh0Fc-BLs07WTt5rMe5e1N-7WbGCOH3FZmjrQ13sNrxFUZag37LUNoqm-787WjurA0301585HaSlPY-2XQqH0YU8o2pGQqgD5WROvoafzIertsUd8qwqfDNmqjyhHVjoPWIvNl6ZPMl08PeTaFp0y_J-HRs_Y1UZR04Deh6IDlWcEv7p8jocXLYI_aDeiVDCX91DFcNnbykNhxmc9M3GNjEO9cT1l"
            alt="Close-up of Chicken Bao Fluffs with microgreens and vibrant sauce"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface mb-8 tracking-tighter leading-tight">
            Locally Sourced, <br />
            <span className="text-primary italic">Globally Inspired.</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Vibrant bistro for global plates with seasonal, locally sourced ingredients, plus clever cocktails.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/reservations"
              className="gold-gradient text-on-primary-fixed px-10 py-4 rounded-md font-bold text-lg w-full sm:w-auto shadow-xl transition-transform hover:scale-105 active:scale-95 duration-500"
            >
              Find a Table
            </Link>
            <Link
              href="/menu"
              className="bg-surface-container-highest/40 backdrop-blur-md text-on-surface border border-outline-variant/30 px-10 py-4 rounded-md font-bold text-lg w-full sm:w-auto hover:bg-surface-container-highest/60 transition-colors duration-500"
            >
              Explore Menu
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-primary text-3xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Local Soul, Global Flavor Section */}
      <section className="bg-surface py-32 px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative z-10 shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbh9Ncu2v3i4E3NaCuQjjjtxtpYs5ppylrUY9GYIokt32tMRftTheY-xBsPAHnIKkti6FxFkOtrPzkQNRJYM8tU_tfQX4pCd68GeVjOWS4r-jIQC_tWqVyLnXegYIepzJylIj7ZS1eTUzHKy3WFp9ETF_-72TyV6z_5BE6vRwZFnHGb9SlTZy13Yt3euUqhjKUEsun3JdgG1OZvFFVLhZtkxry7jZ9tqu9Rg232_6UBm8YLWFvzoiyaAKolk9u6bwV4XWODdCZhDdm"
                alt="Chef meticulously plating a dish in a modern professional kitchen"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square bg-surface-container-low rounded-xl z-0 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 px-6 py-4 bg-primary-container text-on-primary-container font-headline font-bold text-xl z-20">
              Since 2014
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="font-headline text-4xl md:text-6xl text-on-surface font-bold leading-none tracking-tighter">
              Local Soul,<br />
              <span className="text-primary-container">Global Flavor.</span>
            </h2>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light">
              At The Black Sheep Bistro, we bridge the gap between traditional Goan heritage and contemporary global techniques. Every ingredient is handpicked from local farmers, ensuring a sustainable cycle that honors the land while challenging the palate.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <span className="block text-primary text-3xl font-headline font-bold mb-2">100%</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant">Locally Sourced</span>
              </div>
              <div>
                <span className="block text-primary text-3xl font-headline font-bold mb-2">Chef-Led</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant">Innovation</span>
              </div>
            </div>
            <a href="#" className="inline-flex items-center text-primary group font-semibold text-lg">
              Our Philosophy
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Popular Highlights - Bento Grid Style */}
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-bold mb-6">Popular Highlights</h2>
              <p className="text-on-surface-variant text-lg">A curated selection of our most beloved creations, where Goan spices meet international favorites.</p>
            </div>
            <Link
              href="/menu"
              className="text-primary border-b border-primary/30 pb-2 hover:border-primary transition-all font-semibold uppercase tracking-widest text-sm"
            >
              View Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* Large Card: Signature Item */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRxURQXwI7oGqDbyxc1BFMpZgiAS_NNVCERR1d170dKVrhIF9wccwOkAulOkTIVq3qOQccxmZA9W4TZeRj8bOrwxq61ojIEziT4HxOB1vW2J1r3G38R_GJrw01BQhJJUBWVD_oZRs1ve84AkxMFejUVgdNQ51JkmALDadRXRaXDWtvrzIR5-mwutbbx4H-cyf-enyamw8roQdVpM-ZFInPrgHBDX32Xr-YEpLthiupYhJaFQMH0MxXEUmuzAONc66OYIlcBdoZO4GX"
                alt="Elegant presentation of Malwani Chicken Stroganoff with creamy sauce"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="inline-block px-3 py-1 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest mb-4 rounded-full">
                  Guest Favorite
                </div>
                <h3 className="font-headline text-3xl md:text-4xl text-white font-bold mb-4">Malwani Chicken Stroganoff</h3>
                <p className="text-zinc-300 max-w-lg mb-6">A clever fusion of creamy European classics with the bold, fiery kick of coastal Malwani spices.</p>
                <span className="text-primary font-bold text-xl">₹845</span>
              </div>
            </div>

            {/* Right Column: Two smaller items */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex-1 group relative overflow-hidden rounded-xl bg-surface-container-high">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCk5VsG2ZE8GIiJTdAga_qruInfzZJN4ezGckW8joPdGr3NBYsUq2lL2iPujCsF9nHW8m_VEIDoFIYgMOVhIkVW29h_MSlISolugW6VK-FwX4Ntic3Je0WUOI_3DQECGUHwU26N7NacN3QqPXUPM87BVm5DJvwjWsVSHPLbdM1hM70W50FoDsGJXQRWYM6KFh17GCNORPnMwk-yjWlG10YRQU2CscTkpCniVRnKeOYOu88TXLqDy6KQfZ_ieeKvF4kxIoc48B28Z4Q"
                  alt="Fluffy steamed bao buns with succulent chicken filling"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-headline text-2xl text-white font-bold mb-2">Chicken Bao Fluffs</h3>
                  <p className="text-zinc-300 text-sm mb-4">Cloud-like steamed buns with spiced chicken.</p>
                  <span className="text-primary font-bold">₹525</span>
                </div>
              </div>

              <div className="flex-1 group relative overflow-hidden rounded-xl bg-surface-container-high">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ByKbZcrFkB2Bc6I0Ub-WB9f2dQaLXTC-qY1iSLU5e4dPWJQqzvOtMBPX1eHxcQytCKz69IdCIaC0gAFXUW0FrybFyUgp228GvK_-DqvfYfsJ9j3pwAhlNAgUAK0uZSWeZEz6scvvy1-3I1v2EYGp5KgFhnkz7QLuJMnEAGAm9kvazvKtmFkBMSz1xU5ts7sWH76fFpLZ_FjxzIim63-A7Mick_IC_twj7rfqaGhTsGPrnSaskACE9Zd2ltCxP0SweC-lsriZKa70"
                  alt="Sophisticated colorful cocktail in a crystal coupe glass"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-headline text-2xl text-white font-bold mb-2">Clever Cocktails</h3>
                  <p className="text-zinc-300 text-sm mb-4">Seasonal botanical infusions & house-made bitters.</p>
                  <span className="text-primary font-bold">Discover More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Community Section */}
      <section className="bg-surface py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl text-on-surface font-bold mb-8">Join the Inner Circle</h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Be the first to know about seasonal menu launches, chef&apos;s tasting events, and exclusive bistro secrets.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
