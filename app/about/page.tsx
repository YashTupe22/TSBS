import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | The Black Sheep Bistro',
  description: 'Learn about The Black Sheep Bistro - our philosophy, our chef, and our commitment to locally sourced, globally inspired cuisine in Panaji, Goa.',
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-primary tracking-[0.3em] uppercase text-xs font-bold mb-6 block">Our Story</span>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-on-surface leading-tight tracking-tighter mb-8">
              Where <span className="text-primary italic">Passion</span> Meets <span className="text-primary-container italic">Plate</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light mb-8">
              Founded in 2014 in the heart of Panaji, The Black Sheep Bistro was born from a simple belief: that the finest dining experiences come from honoring local ingredients while embracing global culinary innovation.
            </p>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
              We are the black sheep of conventional dining — unapologetically different, boldly creative, and deeply rooted in the rich culinary heritage of Goa.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden editorial-shadow">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbh9Ncu2v3i4E3NaCuQjjjtxtpYs5ppylrUY9GYIokt32tMRftTheY-xBsPAHnIKkti6FxFkOtrPzkQNRJYM8tU_tfQX4pCd68GeVjOWS4r-jIQC_tWqVyLnXegYIepzJylIj7ZS1eTUzHKy3WFp9ETF_-72TyV6z_5BE6vRwZFnHGb9SlTZy13Yt3euUqhjKUEsun3JdgG1OZvFFVLhZtkxry7jZ9tqu9Rg232_6UBm8YLWFvzoiyaAKolk9u6bwV4XWODdCZhDdm"
                alt="Chef at work in our kitchen"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-primary text-on-primary-fixed p-4 md:p-6 font-headline font-bold text-xl md:text-2xl shadow-xl">
              Est. 2014
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-surface-container-highest py-16 md:py-20 px-6 md:px-8 mb-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <StatItem value="10+" label="Years of Excellence" />
            <StatItem value="50+" label="Local Farmers" />
            <StatItem value="4.6" label="Star Rating" icon="star" />
            <StatItem value="1200+" label="Happy Reviews" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-surface-container-low py-20 md:py-24 px-6 md:px-8 mb-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-bold mb-6">Our Philosophy</h2>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl mx-auto">
              Three pillars guide everything we do — from sourcing to serving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <PhilosophyCard
              icon="eco"
              title="Locally Sourced"
              description="Every ingredient tells a story. We partner with local farmers, fishermen, and artisans to bring you the freshest Goan produce while supporting our community."
            />
            <PhilosophyCard
              icon="public"
              title="Globally Inspired"
              description="Our kitchen is a canvas where Goan traditions meet global techniques. From Japanese precision to French finesse, we blend the world's best culinary practices."
            />
            <PhilosophyCard
              icon="favorite"
              title="Soulfully Crafted"
              description="Cooking is an act of love. Every dish that leaves our kitchen carries the passion and dedication of our team, designed to create lasting memories."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-bold mb-6">Meet Our Team</h2>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto">
            The creative minds and passionate hearts behind every dish and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Chef */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-high relative group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbh9Ncu2v3i4E3NaCuQjjjtxtpYs5ppylrUY9GYIokt32tMRftTheY-xBsPAHnIKkti6FxFkOtrPzkQNRJYM8tU_tfQX4pCd68GeVjOWS4r-jIQC_tWqVyLnXegYIepzJylIj7ZS1eTUzHKy3WFp9ETF_-72TyV6z_5BE6vRwZFnHGb9SlTZy13Yt3euUqhjKUEsun3JdgG1OZvFFVLhZtkxry7jZ9tqu9Rg232_6UBm8YLWFvzoiyaAKolk9u6bwV4XWODdCZhDdm"
                alt="Chef Prahlad in the kitchen"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                Executive Chef
              </span>
              <h3 className="font-headline text-2xl md:text-3xl text-on-surface">Chef Prahlad Sukhtankar</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                With over two decades of culinary experience spanning three continents, Chef Prahlad brings a unique perspective to Goan cuisine. Trained in the classical traditions of French cooking and inspired by his Goan roots.
              </p>
            </div>
          </div>

          {/* Mixologist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-high relative group md:order-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ByKbZcrFkB2Bc6I0Ub-WB9f2dQaLXTC-qY1iSLU5e4dPWJQqzvOtMBPX1eHxcQytCKz69IdCIaC0gAFXUW0FrybFyUgp228GvK_-DqvfYfsJ9j3pwAhlNAgUAK0uZSWeZEz6scvvy1-3I1v2EYGp5KgFhnkz7QLuJMnEAGAm9kvazvKtmFkBMSz1xU5ts7sWH76fFpLZ_FjxzIim63-A7Mick_IC_twj7rfqaGhTsGPrnSaskACE9Zd2ltCxP0SweC-lsriZKa70"
                alt="Head Mixologist"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="space-y-4 md:order-1">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                Head Mixologist
              </span>
              <h3 className="font-headline text-2xl md:text-3xl text-on-surface">Maria Fernandes</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                Maria crafts liquid poetry behind our bar. With a background in botany and a passion for local spirits, she creates cocktails that are both innovative and deeply rooted in Goan terroir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="bg-surface-container-highest py-20 md:py-24 px-6 md:px-8 mb-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-headline text-4xl text-on-surface font-bold mb-16">Awards & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <AwardItem year="2024" title="Times Food Awards" subtitle="Best Fine Dining" />
            <AwardItem year="2023" title="Condé Nast Traveller" subtitle="Top 50 Restaurants" />
            <AwardItem year="2023" title="Zomato Gold" subtitle="Best in Goa" />
            <AwardItem year="2022" title="Trip Advisor" subtitle="Travellers' Choice" />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                Find Us
              </span>
              <h2 className="font-headline text-4xl text-on-surface font-bold mb-4">Visit Our Bistro</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Located in the heart of Panaji, we&apos;re easy to find and always ready to welcome you.
              </p>
            </div>
            
            <div className="space-y-4">
              <ContactItem icon="location_on" label="Address" value="Panaji, Goa, India 403001" />
              <ContactItem icon="schedule" label="Hours" value="Open Daily: 12 PM - 12 AM" />
              <ContactItem icon="call" label="Phone" value="+91 98819 72233" href="tel:+919881972233" />
              <ContactItem icon="mail" label="Email" value="hello@blacksheepbistro.in" href="mailto:hello@blacksheepbistro.in" />
            </div>
          </div>

          {/* Google Map */}
          <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden border border-outline-variant/20">
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
            <div className="absolute top-4 left-4 bg-primary text-on-primary-fixed px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1 pointer-events-none">
              <span className="material-symbols-outlined text-sm">pin_drop</span>
              Easy to Find
            </div>
            <div className="absolute bottom-4 right-4">
              <a 
                href="https://maps.google.com/?q=The+Black+Sheep+Bistro+Panaji+Goa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-surface-container-highest/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-primary hover:bg-surface-container-highest transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">directions</span>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="bg-surface-container p-10 md:p-20 rounded-2xl text-center">
          <h2 className="font-headline text-3xl md:text-4xl text-on-surface font-bold mb-6">Come Experience the Difference</h2>
          <p className="text-on-surface-variant text-base md:text-lg mb-10 max-w-2xl mx-auto">
            We&apos;d love to welcome you to our table. Book your reservation today and discover why The Black Sheep Bistro is Goa&apos;s most talked-about culinary destination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservations"
              className="w-full sm:w-auto gold-gradient text-on-primary-fixed px-8 md:px-10 py-4 rounded-md font-bold text-base md:text-lg transition-transform hover:scale-105 active:scale-95 duration-500"
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto border border-outline-variant px-8 md:px-10 py-4 rounded-md font-bold text-base md:text-lg text-on-surface hover:bg-surface-container-high transition-colors"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatItem({ value, label, icon }: { value: string; label: string; icon?: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-center gap-2">
        <span className="text-4xl md:text-5xl font-headline font-bold text-primary">{value}</span>
        {icon && (
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        )}
      </div>
      <p className="text-sm text-on-surface-variant uppercase tracking-widest">{label}</p>
    </div>
  );
}

function PhilosophyCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 md:p-8 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-colors bg-surface-container">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-surface flex items-center justify-center border border-outline-variant/30">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
      </div>
      <h3 className="font-headline text-xl md:text-2xl text-on-surface mb-4">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  );
}

function AwardItem({ year, title, subtitle }: { year: string; title: string; subtitle: string }) {
  return (
    <div className="p-4 md:p-6 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-colors">
      <span className="text-primary font-bold text-lg md:text-xl block mb-2">{year}</span>
      <h4 className="font-headline text-on-surface text-sm md:text-base mb-1">{title}</h4>
      <p className="text-xs md:text-sm text-on-surface-variant">{subtitle}</p>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">{label}</p>
        <p className={`text-on-surface font-medium ${href ? 'hover:text-primary transition-colors' : ''}`}>{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }
  return content;
}
