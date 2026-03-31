import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews | The Black Sheep Bistro',
  description: 'Read what our guests say about The Black Sheep Bistro. Over 1,200 verified reviews from our community in Panaji and beyond.',
};

export default function ReviewsPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            Loved by the <span className="text-primary italic">Locals,</span> Celebrated by the <span className="text-primary-container italic">World.</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-on-surface">4.6</span>
              <div className="flex text-primary">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0.5" }}>star_half</span>
              </div>
            </div>
            <div className="h-16 w-px bg-outline-variant opacity-20 hidden sm:block"></div>
            <div>
              <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">
                Over 1,200 verified reviews from our community in Panaji and beyond. Experience the fusion of Goan heart and global flair.
              </p>
            </div>
          </div>
          <button className="group flex items-center gap-3 text-primary font-bold text-lg hover:gap-4 transition-all duration-300">
            <span className="border-b-2 border-primary pb-1">Write a Review</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEVdleoj8PavhBPB4QZ2VtZcDfERc6ZO4ONcp3R3WGzijVXqUZ_ljb66sl8TKh3x0QZOJykVWm4b-Op8p7UsfcJazrk33RdV5uQsd5ZzfMw1tQ7-66xof_bv5FMDABBNmcLvsKHfHfUnKpDhXPtFB0Tom_mQH8AJPqVVm9ZpSkQKRFp_2JcTPCChQu7jHKnipGCSg45asALnbX23RZ_LqxYRRVO_85Ut60_gXQK7N--vPHt5n3U8EbW9UPjbkxT71ecPpZXdoW2BF-"
              alt="Group of friends laughing and dining at the bistro"
              fill
              className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-surface-container-high p-5 md:p-6 rounded-lg editorial-shadow border border-outline-variant/10 max-w-[260px] md:max-w-[280px]">
            <span className="material-symbols-outlined text-primary/20 text-4xl absolute top-2 right-2">format_quote</span>
            <p className="font-headline italic text-base md:text-lg text-on-surface mb-2">&quot;The Choriz Hummus is a revelation. Best dining experience in Goa!&quot;</p>
            <p className="text-xs uppercase tracking-widest text-primary font-bold">— Rahul M., Local Guide</p>
          </div>
        </div>
      </section>

      {/* Review Grid */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-headline text-on-surface mb-4">What Our Guests Say</h2>
            <p className="text-on-surface-variant">Authentic experiences, in their own words.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Featured Review - Chef's Choice */}
            <ReviewCard
              quote="The ambiance is incredible — dark, moody, yet somehow warm. Every dish tells a story. The Malwani Chicken Stroganoff is unforgettable."
              author="Priya S."
              location="Mumbai"
              rating={5}
              featured
              badge="Chef's Choice"
            />
            <ReviewCard
              quote="We celebrated our anniversary here and it was magical. The staff made us feel like royalty. Already planning our next visit!"
              author="Mark & Lisa"
              location="London, UK"
              rating={5}
              verified
            />
            <ReviewCard
              quote="As a chef myself, I'm incredibly impressed by the creativity and execution. The fusion of Goan and global flavors is seamless."
              author="Chef Antonio R."
              location="Barcelona"
              rating={5}
              verified
            />
            {/* Review with Image */}
            <ReviewCardWithImage
              quote="The cocktails alone are worth the visit. The Sheep's Mule with local feni is a masterpiece!"
              author="Anjali K."
              location="Panaji"
              rating={5}
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ByKbZcrFkB2Bc6I0Ub-WB9f2dQaLXTC-qY1iSLU5e4dPWJQqzvOtMBPX1eHxcQytCKz69IdCIaC0gAFXUW0FrybFyUgp228GvK_-DqvfYfsJ9j3pwAhlNAgUAK0uZSWeZEz6scvvy1-3I1v2EYGp5KgFhnkz7QLuJMnEAGAm9kvazvKtmFkBMSz1xU5ts7sWH76fFpLZ_FjxzIim63-A7Mick_IC_twj7rfqaGhTsGPrnSaskACE9Zd2ltCxP0SweC-lsriZKa70"
            />
            <ReviewCard
              quote="Been here five times now and it never disappoints. The seasonal menu keeps things fresh and exciting. A true gem in Goa."
              author="David T."
              location="Delhi"
              rating={5}
            />
            <ReviewCard
              quote="Impeccable service, stunning presentation, and flavors that linger in your memory. This is what fine dining should be."
              author="Sophie M."
              location="Paris, France"
              rating={5}
              verified
            />
            <ReviewCard
              quote="Great vegetarian options too! The Roasted Pumpkin Risotto was divine. Will definitely return."
              author="Meera P."
              location="Bengaluru"
              rating={4}
            />
            <ReviewCard
              quote="Perfect for a romantic dinner. The lighting, the music, the food — everything was on point!"
              author="Arjun & Nisha"
              location="Pune"
              rating={5}
            />
            <ReviewCard
              quote="The Grilled Octopus starter is a must-try. Cooked to perfection with that smoky coconut husk flavor."
              author="James W."
              location="Sydney, Australia"
              rating={5}
              verified
            />
          </div>
        </div>
      </section>

      {/* Featured Press Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline text-on-surface mb-4">As Seen In</h2>
            <p className="text-on-surface-variant">Recognized by food critics and publications worldwide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <PressCard
              publication="Condé Nast Traveller"
              quote="One of India's most exciting restaurants, pushing boundaries while honoring local traditions."
              year="2023"
            />
            <PressCard
              publication="Times Food Awards"
              quote="Best Fine Dining Experience in Goa — a testament to culinary innovation."
              year="2024"
            />
            <PressCard
              publication="Vogue India"
              quote="Where global gastronomy meets Goan soul. A must-visit destination."
              year="2023"
            />
          </div>
        </div>
      </section>

      {/* Social Proof / Community Section */}
      <section className="bg-surface-container-low py-24 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline text-on-surface mb-4">Through Your Lens</h2>
            <p className="text-on-surface-variant mb-6">
              Tag us <span className="text-primary font-bold">@blacksheepbistro</span> and use <span className="text-primary font-bold">#BlackSheepGoa</span>
            </p>
            {/* Community Avatars */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-surface-container-low flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">person</span>
                  </div>
                ))}
              </div>
              <span className="ml-4 text-primary font-bold">+4K</span>
            </div>
          </div>

          {/* Bento Grid of Community Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {/* Large featured image */}
            <div className="col-span-2 row-span-2 relative aspect-square overflow-hidden rounded-xl group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRxURQXwI7oGqDbyxc1BFMpZgiAS_NNVCERR1d170dKVrhIF9wccwOkAulOkTIVq3qOQccxmZA9W4TZeRj8bOrwxq61ojIEziT4HxOB1vW2J1r3G38R_GJrw01BQhJJUBWVD_oZRs1ve84AkxMFejUVgdNQ51JkmALDadRXRaXDWtvrzIR5-mwutbbx4H-cyf-enyamw8roQdVpM-ZFInPrgHBDX32Xr-YEpLthiupYhJaFQMH0MxXEUmuzAONc66OYIlcBdoZO4GX"
                alt="Community photo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold">@foodie_goa</span>
              </div>
            </div>
            {/* Smaller images */}
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCCk5VsG2ZE8GIiJTdAga_qruInfzZJN4ezGckW8joPdGr3NBYsUq2lL2iPujCsF9nHW8m_VEIDoFIYgMOVhIkVW29h_MSlISolugW6VK-FwX4Ntic3Je0WUOI_3DQECGUHwU26N7NacN3QqPXUPM87BVm5DJvwjWsVSHPLbdM1hM70W50FoDsGJXQRWYM6KFh17GCNORPnMwk-yjWlG10YRQU2CscTkpCniVRnKeOYOu88TXLqDy6KQfZ_ieeKvF4kxIoc48B28Z4Q",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA8ByKbZcrFkB2Bc6I0Ub-WB9f2dQaLXTC-qY1iSLU5e4dPWJQqzvOtMBPX1eHxcQytCKz69IdCIaC0gAFXUW0FrybFyUgp228GvK_-DqvfYfsJ9j3pwAhlNAgUAK0uZSWeZEz6scvvy1-3I1v2EYGp5KgFhnkz7QLuJMnEAGAm9kvazvKtmFkBMSz1xU5ts7sWH76fFpLZ_FjxzIim63-A7Mick_IC_twj7rfqaGhTsGPrnSaskACE9Zd2ltCxP0SweC-lsriZKa70",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAXQCEGfwBPa_lAbzhYz7M0V37qD9l-6yrrC-PDCpoFG6yezngLzo0YmjIF-IXzDJ1Rn53eTyWZD19km-LdE_6RbRYiw7YgPR-V_wRQYv0L4i8_3XsgBnuC5pqJnKoSaNG-MN0Ltq2jclmcndSD54DJQ5oefKfSCISFHLIVUlv--WGJQNKN5TvH84uEjLpi-dNDAvH9REX_9hf10eIolXQskHSgT4V8eGzQgNK3gfXlocl4PAImq8UlTv3OSxBD4khrsMYHj-OHYYOI",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBJuwXj1_MbgXmeYoRv6MYRFAnm143iiPSWFyOVC3bKwbMJofec9ZWTZhUIc0OTfTN7-jEvYtAoS3XwggkkhrhPoV0jq7DLkaq0pwV7CanKIOE_EjPZUlTmZLaLlpQyDawGO-AwkdvCbQ6FOGiuQcOX8AKUbpo_ulknA1cy1c2zxL8lpZq4k3qQXVEwFFOXAEdN5OINjVIJJKoK-QTwapW-cVh9fTsI3lXwC0WibxuqwWlZb6G_3zVGvmAbRxD1TSZQ3phRvMLXgC2y",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src={src}
                  alt={`Community photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-white">photo_camera</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Community Spirit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline text-on-surface mb-6">Share Your Black Sheep Story</h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Your review helps fellow food lovers discover their next favorite dining experience. We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="gold-gradient text-on-primary-fixed px-8 py-4 rounded-md font-bold text-base uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
              Write a Review
            </button>
            <button className="border border-outline-variant px-8 py-4 rounded-md font-bold text-base text-on-surface uppercase tracking-widest hover:bg-surface-container-high transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ReviewCard({ 
  quote, 
  author, 
  location, 
  rating,
  featured,
  verified,
  badge
}: { 
  quote: string; 
  author: string; 
  location: string; 
  rating: number;
  featured?: boolean;
  verified?: boolean;
  badge?: string;
}) {
  return (
    <div className={`p-6 md:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg relative ${
      featured 
        ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30' 
        : 'bg-surface-container border-outline-variant/10 hover:border-primary/20'
    }`}>
      {badge && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest rounded-full">
          {badge}
        </div>
      )}
      <span className="material-symbols-outlined text-primary/10 text-5xl absolute top-4 right-4">format_quote</span>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-lg">person</span>
        </div>
        <div>
          <p className="font-bold text-on-surface flex items-center gap-2">
            {author}
            {verified && (
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            )}
          </p>
          <p className="text-xs text-on-surface-variant">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        ))}
        {Array.from({ length: 5 - rating }).map((_, i) => (
          <span key={i} className="material-symbols-outlined text-outline-variant text-lg">star</span>
        ))}
      </div>
      
      <p className="text-on-surface leading-relaxed font-light relative z-10">&quot;{quote}&quot;</p>
    </div>
  );
}

function ReviewCardWithImage({ 
  quote, 
  author, 
  location, 
  rating,
  imageSrc
}: { 
  quote: string; 
  author: string; 
  location: string; 
  rating: number;
  imageSrc: string;
}) {
  return (
    <div className="rounded-xl border border-outline-variant/10 overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-lg bg-surface-container">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt="Review photo"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-sm">person</span>
          </div>
          <div>
            <p className="font-bold text-on-surface text-sm">{author}</p>
            <p className="text-xs text-on-surface-variant">{location}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          ))}
        </div>
        <p className="text-on-surface text-sm leading-relaxed">&quot;{quote}&quot;</p>
      </div>
    </div>
  );
}

function PressCard({ publication, quote, year }: { publication: string; quote: string; year: string }) {
  return (
    <div className="text-center p-8 border border-outline-variant/10 rounded-xl hover:border-primary/20 transition-colors">
      <span className="text-xs uppercase tracking-widest text-primary font-bold mb-4 block">{publication}</span>
      <p className="font-headline italic text-xl text-on-surface mb-4">&quot;{quote}&quot;</p>
      <span className="text-sm text-on-surface-variant">{year}</span>
    </div>
  );
}
