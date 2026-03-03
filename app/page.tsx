import Image from "next/image";
import Slideshow from "./components/Slideshow";

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
      <section className="min-h-screen px-6 py-24 flex flex-col items-center justify-center">

        {/* Text — centered at the top */}
        <div className="text-center mb-10">
          <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Pacific Northwest Pet Gear
          </p>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Gear for dogs who love the outdoors
          </h1>
          <p className="text-stone-300 text-lg mb-8">
            Built for trails, beaches, and everything in between. Quality gear
            for your adventure companion.
          </p>
         
        </div>

        {/* Slideshow — centered, wide, and tall */}
        <div className="w-full max-w-5xl h-[100vh] rounded-xl overflow-hidden">
          <Slideshow />
        </div>
        <div>
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
