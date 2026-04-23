"use client";

import BrandLogo from "./BrandLogo";
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
        <BrandLogo />
      <nav className="hidden md:flex items-center space-x-12">
        <a
          className="text-gray-400 font-sans tracking-[0.1em] uppercase text-xs hover:text-[#eabf8e] transition-colors duration-500 cursor-pointer"
          href="#collections"
          onClick={(e) => handleScroll(e, "collections")}
        >
          Soluciones
        </a>
        <a
          className="text-gray-400 font-sans tracking-[0.1em] uppercase text-xs hover:text-[#eabf8e] transition-colors duration-500 cursor-pointer"
          href="#about"
          onClick={(e) => handleScroll(e, "about")}
        >
          Nosotros
        </a>
        <a
          className="text-gray-400 font-sans tracking-[0.1em] uppercase text-xs hover:text-[#eabf8e] transition-colors duration-500 cursor-pointer"
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
