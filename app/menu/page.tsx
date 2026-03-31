import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | The Black Sheep Bistro',
  description: 'Explore our curated menu of small plates, large plates, and clever cocktails featuring locally sourced ingredients with global techniques.',
};

export default function MenuPage() {
  return (
    <main className="pt-28 md:pt-32 pb-20">
      {/* Hero Header */}
      <header className="max-w-screen-xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="text-primary tracking-[0.3em] uppercase text-xs font-bold mb-4 block">A Culinary Dialogue</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-on-surface leading-[1.1] tracking-tighter mb-6 md:mb-8">
              The <span className="text-primary italic">Global-Goan</span> Menu
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Locally sourced ingredients met with global culinary techniques. A curated selection of small plates, hearty mains, and clever elixirs.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl editorial-shadow">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzy6RAKYUzEMh5HZW9p3Hz0v1A9CA_PWZywE4ALHPqixQYM1HiaufvOaoxqxt_quqkt0Gf8hD3otHicQz93wY33U5sNtaFjHb4AiPuA6hxVdCoXrzuNHfH0OyJucjq18_lh4-60e5mKhP5OtHUrZ877egvYAbysmTuiPgO-H0W3AumcMd7blQ286sn0pdI-hZtkkrBiZCMRGF8fNGcU56-kUU4lEq9CEgxnFoY0cp03-P8ootsscVIRiewT3C7sOF6lS1HAsylGrz0"
                alt="Close up of a gourmet small plate with colorful garnishes"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-surface-container-highest p-4 md:p-6 backdrop-blur-md rounded-lg max-w-[180px] md:max-w-[200px] border border-outline-variant/20 shadow-xl">
              <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">Signature</span>
              <p className="text-sm font-medium text-on-surface">Experience the alchemy of Panaji flavors.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Category: Small Plates */}
      <section className="mb-20 md:mb-32">
        <div className="bg-surface-container-low py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-10 md:mb-16 gap-2">
              <h2 className="text-4xl md:text-5xl font-headline text-on-surface">Small Plates</h2>
              <span className="text-on-surface-variant font-body tracking-widest text-sm italic">Designed for sharing</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 md:gap-y-14">
              <MenuItem
                name="Chicken Bao Fluffs"
                price="₹525"
                description="Pillowy soft steamed buns filled with slow-braised chicken, pickled radishes, and a hint of Goan chili-miso glaze."
                popular
              />
              <MenuItem
                name="Stuffed Mushrooms"
                price="₹475"
                description="Local button mushrooms filled with artisanal cheese blend, sun-dried tomatoes, and a crust of toasted cashew crumble."
              />
              <MenuItem
                name="Goan Chorizo Hummus"
                price="₹495"
                description="Silky chickpea purée topped with spicy, smokey Goan sausage crumble, served with warm, herb-dusted poi."
              />
              <MenuItem
                name="Grilled Octopus"
                price="₹625"
                description="Tender octopus char-grilled over coconut husks, served with a tangy Kokum emulsion and potato espuma."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category: Large Plates */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-8 mb-20 md:mb-32">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-6xl font-headline text-on-surface mb-4 md:mb-6 tracking-tight">Large Plates</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6 md:mb-8 font-light text-base md:text-lg">
              Substantial portions that highlight our kitchen&apos;s creative fusion of traditional Goan spices with global classics.
            </p>
            <div className="w-24 h-1 bg-primary/40"></div>
          </div>
          <div className="lg:w-2/3 space-y-16 md:space-y-24">
            {/* Featured Dish 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-primary font-bold mb-3">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  House Specialty
                </span>
                <h3 className="text-2xl md:text-3xl font-headline text-on-surface mb-3 md:mb-4">Malwani Chicken Stroganoff</h3>
                <p className="text-on-surface-variant mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                  A bold reimagining of the Russian classic. Chicken strips sautéed with caramelized onions and Malwani spices, finished with fresh coconut cream. Served over buttery herb rice.
                </p>
                <span className="text-xl font-medium text-primary">₹795</span>
              </div>
              <div className="order-1 md:order-2 aspect-square overflow-hidden rounded-xl relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXQCEGfwBPa_lAbzhYz7M0V37qD9l-6yrrC-PDCpoFG6yezngLzo0YmjIF-IXzDJ1Rn53eTyWZD19km-LdE_6RbRYiw7YgPR-V_wRQYv0L4i8_3XsgBnuC5pqJnKoSaNG-MN0Ltq2jclmcndSD54DJQ5oefKfSCISFHLIVUlv--WGJQNKN5TvH84uEjLpi-dNDAvH9REX_9hf10eIolXQskHSgT4V8eGzQgNK3gfXlocl4PAImq8UlTv3OSxBD4khrsMYHj-OHYYOI"
                  alt="Overhead shot of creamy chicken stroganoff dish with fresh herbs"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Featured Dish 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="aspect-square overflow-hidden rounded-xl relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJuwXj1_MbgXmeYoRv6MYRFAnm143iiPSWFyOVC3bKwbMJofec9ZWTZhUIc0OTfTN7-jEvYtAoS3XwggkkhrhPoV0jq7DLkaq0pwV7CanKIOE_EjPZUlTmZLaLlpQyDawGO-AwkdvCbQ6FOGiuQcOX8AKUbpo_ulknA1cy1c2zxL8lpZq4k3qQXVEwFFOXAEdN5OINjVIJJKoK-QTwapW-cVh9fTsI3lXwC0WibxuqwWlZb6G_3zVGvmAbRxD1TSZQ3phRvMLXgC2y"
                  alt="Exotic seafood curry with large prawns in a rich orange sauce"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-primary font-bold mb-3">
                  <span className="material-symbols-outlined text-sm">restaurant</span>
                  Chef&apos;s Pick
                </span>
                <h3 className="text-2xl md:text-3xl font-headline text-on-surface mb-3 md:mb-4">Prawns Stroganoff</h3>
                <p className="text-on-surface-variant mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                  Succulent river prawns tossed in a sophisticated blend of house spices, white wine reduction, and local sour cream. A seafood lover&apos;s ultimate comfort dish.
                </p>
                <span className="text-xl font-medium text-primary">₹845</span>
              </div>
            </div>

            {/* Regular Large Plates List */}
            <div className="space-y-8 md:space-y-10 pt-8 md:pt-12 border-t border-outline-variant/20">
              <LargePlateItem
                name="Pork Belly Vindaloo Confit"
                price="₹825"
                description="Slow-cooked pork belly with a sharp, spicy vinegar reduction, served with creamy polenta."
              />
              <LargePlateItem
                name="Roasted Pumpkin & Sage Risotto"
                price="₹695"
                description="Arborio rice infused with roasted local pumpkin, brown butter, and crispy sage leaves."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category: Clever Cocktails */}
      <section className="mb-20 md:mb-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="bg-surface-container-highest p-8 md:p-16 lg:p-24 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 text-center mb-12 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-headline text-on-surface mb-4">Clever Cocktails</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto italic text-base md:text-lg">Liquid poetry, mixed with precision and a touch of Goan soul.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
              <CocktailItem
                icon="local_bar"
                name="The Sheep's Mule"
                description="Feni-based twist on the Moscow Mule, house ginger beer, and kaffir lime."
                price="₹550"
              />
              <CocktailItem
                icon="liquor"
                name="Old Town Negroni"
                description="Aged gin, botanical vermouth, and a secret infusion of Goan spices."
                price="₹625"
              />
              <CocktailItem
                icon="wine_bar"
                name="Sunset over Mandovi"
                description="Passionfruit, vodka, elderflower liqueur, and a float of sparkling wine."
                price="₹575"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-8 mb-12">
        <div className="relative rounded-xl overflow-hidden h-[350px] md:h-[400px] flex items-center justify-center text-center">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDhtB7vz9nCoqg_ZIVIYHZPyk3zKiOoiNkREHZvC4FSn1tSg6TDaeLXc5NmlqwuBmQw3xELN6Lpt8eGrUP9UWcdK9j-tEllGbiqtq-6NQkOgjk7SAGRyuEUw0bYipa1ylVHqUjzijBx32O6G90q60L4nNmLf5z1VruoqjR_F3s2S4E19rYIhYh2EDmpdomuHdiwuhbyPOAVWGw9d_1FZCkFqWhLQeADUPsBgNUuQGP_WdxqUg0scRO6zrgwxYClpcWhZSWpkQf21AP"
            alt="Elegant interior of a modern bistro with warm dim lighting"
            fill
            className="object-cover transition-transform duration-[2000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-zinc-950/70"></div>
          <div className="relative z-10 px-6">
            <h2 className="text-4xl md:text-5xl font-headline text-white mb-6 md:mb-8">Ready to Join Us?</h2>
            <Link
              href="/reservations"
              className="inline-block gold-gradient text-on-primary-fixed px-10 md:px-12 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg uppercase tracking-widest transition-all duration-500 hover:scale-105 active:scale-95"
            >
              Book Your Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function MenuItem({ name, price, description, popular }: { name: string; price: string; description: string; popular?: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-start gap-4 mb-3">
        <h3 className="text-xl md:text-2xl font-headline text-on-surface group-hover:text-primary transition-colors duration-300">{name}</h3>
        <span className="text-on-surface font-medium whitespace-nowrap">{price}</span>
      </div>
      <p className="text-on-surface-variant leading-relaxed text-sm md:text-base mb-3">{description}</p>
      {popular && (
        <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest rounded-full border border-primary/20">
          Popular choice
        </span>
      )}
    </div>
  );
}

function LargePlateItem({ name, price, description }: { name: string; price: string; description: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
      <div className="sm:max-w-md">
        <h4 className="text-xl md:text-2xl font-headline text-on-surface mb-2">{name}</h4>
        <p className="text-on-surface-variant text-sm md:text-base">{description}</p>
      </div>
      <span className="text-on-surface font-medium whitespace-nowrap">{price}</span>
    </div>
  );
}

function CocktailItem({ icon, name, description, price }: { icon: string; name: string; description: string; price: string }) {
  return (
    <div className="text-center group p-4 rounded-xl hover:bg-surface-container transition-colors">
      <div className="mb-4 md:mb-6 mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface flex items-center justify-center border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
        <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">{icon}</span>
      </div>
      <h3 className="text-lg md:text-xl font-headline text-on-surface mb-2">{name}</h3>
      <p className="text-on-surface-variant text-sm mb-3 md:mb-4">{description}</p>
      <span className="text-primary font-medium tracking-widest text-xs">{price}</span>
    </div>
  );
}
