"use client";

import Image from "next/image";

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#131313]/60 backdrop-blur-xl docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-12 py-6">
      <div className="flex items-center gap-4">
        <Image 
          src="/logo.png" 
          alt="Logo Blinds Depot" 
          width={44} 
          height={44} 
          className="object-contain"
          priority
        />
        <div className="text-xl font-serif tracking-widest text-white">BLINDS DEPOT</div>
      </div>
      <nav className="hidden md:flex items-center space-x-12">
        <a 
          className="text-white border-b border-[#eabf8e] pb-1 font-sans tracking-[0.1em] uppercase text-xs transition-colors duration-500 cursor-pointer" 
          href="#collections"
          onClick={(e) => handleScroll(e, "collections")}
        >
          Colecciones
        </a>
        <a 
          className="text-gray-400 font-sans tracking-[0.1em] uppercase text-xs hover:text-[#eabf8e] transition-colors duration-500 cursor-pointer" 
          href="#about"
          onClick={(e) => handleScroll(e, "about")}
        >
          Nosotros
        </a>
      </nav>
    </header>
  );
}



