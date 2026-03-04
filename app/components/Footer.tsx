export default function Footer() {
  return (
    <footer className="w-full bg-stone-900 text-stone-300 px-16 py-4">
      <div className="w-full flex items-center justify-between">

        {/* Left: Brand */}
        <div>
          <p className="text-amber-300 font-bold text-base tracking-wide">Cascade Canine Co.</p>
          <p className="text-xs text-stone-400 mt-1">
            Handmade fleece rompers for dogs who love the outdoors.
          </p>
        </div>

        {/* Center: Copyright */}
        <p className="text-xs text-stone-500 text-center">
          © {new Date().getFullYear()} Cascade Canine Co.
        </p>

        {/* Right: Find Us */}
        <div className="flex items-center gap-6 text-sm">
          <span className="text-white font-semibold">Find Us:</span>
          <a href="mailto:cascadecanineco@gmail.com" className="hover:text-amber-300 transition-colors">
            Email
          </a>
          <a href="https://www.instagram.com/cascade_canine_co" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
            Instagram
          </a>
          <a href="https://www.facebook.com/Cascadecanineco" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
            Facebook
          </a>
        </div>

      </div>
    </footer>
  );
}
