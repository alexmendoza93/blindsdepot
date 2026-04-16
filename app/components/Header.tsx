export default function Header() {
  return (
    <header className="bg-[#131313]/60 backdrop-blur-xl docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-12 py-6">
      <div className="text-xl font-serif tracking-widest text-white">BLINDS DEPOT</div>
      <nav className="hidden md:flex items-center space-x-12">
        <a className="text-white border-b border-[#eabf8e] pb-1 font-sans tracking-[0.1em] uppercase text-xs transition-colors duration-500" href="#">Collections</a>
        <a className="text-gray-400 font-sans tracking-[0.1em] uppercase text-xs hover:text-[#eabf8e] transition-colors duration-500" href="#">About</a>
      </nav>
      <button className="bg-on-surface text-surface px-10 py-4 font-sans tracking-widest uppercase text-xs font-bold hover:bg-secondary transition-colors duration-500">
        Book a Consultation
      </button>
    </header>
  );
}
