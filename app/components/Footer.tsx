export default function Footer() {
  return (
    <footer className="bg-[#1c1b1b] grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 w-full">
      <div>
        <div className="text-lg font-serif text-white mb-4">BLINDS DEPOT</div>
        <p className="font-sans tracking-widest uppercase text-[10px] text-gray-500 leading-relaxed max-w-xs">
          ARCHITECTURAL PRECISION IN LIGHT MODULATION. SINCE 1998.
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <a className="font-sans tracking-widest uppercase text-[10px] text-gray-500 hover:text-white transition-opacity duration-300" href="#">Collections</a>
        <a className="font-sans tracking-widest uppercase text-[10px] text-gray-500 hover:text-white transition-opacity duration-300" href="#">About</a>
        <a className="font-sans tracking-widest uppercase text-[10px] text-gray-500 hover:text-white transition-opacity duration-300" href="#">Privacy</a>
        <a className="font-sans tracking-widest uppercase text-[10px] text-gray-500 hover:text-white transition-opacity duration-300" href="#">Terms</a>
      </div>
      <div className="flex flex-col justify-end items-start md:items-end">
        <p className="font-sans tracking-widest uppercase text-[10px] text-gray-500">
          © 2024 BLINDS DEPOT. ARCHITECTURAL PRECISION.
        </p>
        <div className="mt-4 flex space-x-6">
          <span className="material-symbols-outlined text-gray-500 text-sm">social_distance</span>
          <span className="material-symbols-outlined text-gray-500 text-sm">public</span>
        </div>
      </div>
    </footer>
  );
}
