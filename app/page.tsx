import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* Background image — fixed to viewport, stays in place while scrolling */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/backgrounds/IMG_5165.jpg"
          alt="Cascade Canine background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen px-6 py-24 flex items-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Pacific Northwest Pet Gear
          </p>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Gear for dogs who <br />
            love the outdoors
          </h1>
          <p className="text-stone-300 text-lg max-w-xl mb-8">
            Built for trails, beaches, and everything in between. Quality gear
            for your adventure companion.
          </p>
          <a
            href="/products"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-800 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>

    </main>
  );
}
