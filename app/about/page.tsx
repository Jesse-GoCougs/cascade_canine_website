import Image from "next/image";

export const metadata = {
  title: "About — Cascade Canine",
  description: "Learn about Cascade Canine Co. and our handmade fleece rompers for dogs.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* Background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/backgrounds/IMG_9631.jpg"
          alt="About page background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-12">

        {/* Page header */}
        <div className="text-center">
          <p className="text-amber-300 text-lg font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-5xl font-bold text-white mb-4">About Cascade Canine Co.</h1>
        </div>

        {/* Brand story — photo on left, text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Photo */}
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/aboutImages/IMG_1150.JPG"
              alt="Cascade Canine Co."
              fill
              className="object-cover"
            />
          </div>

          {/* Brand story text */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-7">
            <h2 className="text-2xl font-bold text-white mb-4">Welcome to Cascade Canine Co.</h2>
            <p className="text-stone-300 leading-relaxed">
              We handcraft fleece rompers designed to keep your pup warm, comfortable,
              and ready for any adventure — from mountain trails to rainy beach days.
            </p>
            <p className="text-stone-300 leading-relaxed mt-3">
              Every romper starts with your dog in mind. We offer premade sizes for
              a quick fit, custom orders built to your pup's exact measurements, and
              alterations so no dog gets left out in the cold.
            </p>
            <p className="text-stone-300 leading-relaxed mt-3">
              We highly recommend checking your pup's size with our measuring guide
              before ordering to ensure the best fit possible.
            </p>
          </div>

        </div>

        {/* Why Premades + Features — two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Why Purchase a Premade */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-7">
            <h2 className="text-2xl font-bold text-white mb-4">Why Purchase a Premade?</h2>
            <p className="text-stone-300 leading-relaxed">
              We try to be as resourceful as we can with our material. To help prevent
              waste, we use mostly scrap material left over from custom orders in the
              making of premade rompers.
            </p>
            <p className="text-stone-300 leading-relaxed mt-3">
              In addition to decreasing waste, we discount the cost of premades by
              about <span className="text-amber-300 font-semibold">$15–$20 USD</span> compared
              to a fully custom order — so you get a quality romper at a better price.
            </p>
          </div>

          {/* Features of Fleece Rompers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-7">
            <h2 className="text-2xl font-bold text-white mb-4">Features of Fleece Rompers</h2>
            <ul className="space-y-3">
              {[
                "Great for outdoor environments and activities",
                "Fits easily with dog gear such as vests, harnesses, and mobility gear",
                "Easy to clean and washer safe — air dry or light tumble cycle recommended",
                "Keeps your furry friend nice and warm",
                "Not waterproof, but will keep your pup warm even when wet",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-stone-300">
                  <span className="text-amber-300 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Customizing a Premade */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-7">
          <h2 className="text-2xl font-bold text-white mb-4">Customizing a Premade</h2>
          <p className="text-stone-300 leading-relaxed mb-6">
            Recently purchased a premade or looking at one but worried it might not fit?
            We can subtract length from the back, girth, and legs to get the right fit
            for your pup. The cost of alteration may vary based on complexity, but you
            can expect about <span className="text-amber-300 font-semibold">$2.00 per inch per section</span>.
          </p>

          <div className="border-t border-white/10 pt-5 space-y-3">
            <p className="text-stone-400 text-sm font-semibold uppercase tracking-wide mb-3">
              Important Notes
            </p>
            {[
              "All alteration requests must be made prior to shipping",
              "Premades with dino spines attached are not eligible for back adjustments",
              "If your pup doesn't fit a base size at all, we can also make a fully custom fitted romper — just send us your dog's measurements",
            ].map((note) => (
              <div key={note} className="flex items-start gap-3 text-stone-300">
                <span className="text-amber-400 mt-1 text-lg leading-none">·</span>
                <span className="text-sm">{note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-stone-300 mb-6">Ready to find the perfect fit for your pup?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Shop Premades
            </a>
            <a
              href="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Get a Custom Order
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}