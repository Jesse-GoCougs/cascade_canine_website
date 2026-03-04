"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const images = [
  "/images/productModels/Q20A4528.jpg",
  "/images/productModels/Q20A4441.jpg",
  "/images/productModels/Q20A4604.jpg",
  "/images/productModels/Q20A4731.jpg",
  "/images/productModels/IMG_7134.JPG",
  "/images/productModels/Q20A4427.jpg",
  "/images/productModels/Q20A4475.jpg",
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Starts a fresh 5 second timer — clears any existing one first
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  // Start the timer when the component first mounts
  useEffect(() => {
    resetTimer();
    // Cleanup: stop the timer when the component is removed from the page
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Each of these resets the timer so the user always gets a full 5s on the new image
  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetTimer();
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    resetTimer();
  };

  const goTo = (index: number) => {
    setCurrent(index);
    resetTimer();
  };

  // Record where the user's finger started
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Compare where finger ended vs where it started to detect swipe direction
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();   // swiped left → next image
    if (diff < -50) prev();  // swiped right → previous image
  };

  return (
    <section
      className="relative w-full h-[600px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* All images stacked — only the current one is visible */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Product model ${index + 1}`}
            fill
            className="object-contain"
            loading="eager"
          />
        </div>
      ))}

      {/* Previous button */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition-colors"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition-colors"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators — click any dot to jump to that image */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
