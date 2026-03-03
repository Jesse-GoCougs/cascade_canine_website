"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900 px-6 py-4">
      <div className="w-full flex items-center justify-between">

        {/* Left: Logo + Store Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/storelogo.png"
            alt="Cascade Canine logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-amber-100 text-xl font-bold tracking-wide">
            Cascade Canine
          </span>
        </Link>

        {/* Desktop Nav Links — hidden on small screens, visible on md+ */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-stone-300 hover:text-amber-300 transition-colors">
            About
          </Link>
          <Link href="/products" className="text-stone-300 hover:text-amber-300 transition-colors">
            Products
          </Link>
          <Link href="/contact" className="text-stone-300 hover:text-amber-300 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Hamburger Button — visible on small screens, hidden on md+ */}
        <button
          className="md:hidden text-stone-300 hover:text-amber-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // X icon (close)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon (open)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Dropdown Menu — only renders when menuOpen is true */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4">
          <Link
            href="/about"
            className="text-stone-300 hover:text-amber-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-stone-300 hover:text-amber-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-stone-300 hover:text-amber-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}

    </nav>
  );
}
