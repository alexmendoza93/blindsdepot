export default function Footer() {
  return (
    <footer className="bg-[#1c1b1b] grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full border-t border-white/5">
      <div className="md:col-span-1">
        <div className="text-lg font-serif text-white mb-4">BLINDS DEPOT</div>
        <p className="font-sans tracking-widest uppercase text-[10px] text-gray-500 leading-relaxed max-w-xs">
          PRECISIÓN ARQUITECTÓNICA EN MODULACIÓN DE LUZ. DESDE 1998.
        </p>
      </div>

      <div className="flex flex-col space-y-4 md:col-span-1">
        <h4 className="font-sans tracking-widest text-[#b8a27d] text-[10px] uppercase font-bold mb-1">
          Navegación
        </h4>
        <a
          className="font-sans tracking-widest uppercase text-[10px] text-gray-500 hover:text-white transition-colors duration-300"
          href="#collections"
        >
          Soluciones
        </a>
        <a
          className="font-sans tracking-widest uppercase text-[10px] text-gray-500 hover:text-white transition-colors duration-300"
          href="#about"
        >
          Nosotros
        </a>
        <a
          className="font-sans tracking-widest uppercase text-[10px] text-gray-500 hover:text-white transition-colors duration-300"
          href="#contact"
        >
          Contacto
        </a>
        <a
          className="font-sans tracking-widest uppercase text-[10px] text-gray-500 hover:text-white transition-colors duration-300"
          href="#"
        >
          Términos
        </a>
      </div>

      <div className="flex flex-col space-y-4 md:col-span-1 items-start">
        <h4 className="font-sans tracking-widest text-[#b8a27d] text-[10px] uppercase font-bold mb-1">
          Contacto
        </h4>

        <p className="font-sans text-[10px] text-gray-400 leading-relaxed tracking-wider">
          <span className="block text-gray-500 mb-1">Dirección:</span>
          Calle Garibaldi #1469 -A
        </p>

        <div className="space-y-1">
          <p className="font-sans text-[10px] text-gray-400 tracking-wider">
            <span className="text-gray-500">Tel:</span>{" "}
            <a
              href="tel:3347119420"
              className="text-white hover:text-[#b8a27d] transition-colors"
            >
              3347119420
            </a>
          </p>
          <p className="font-sans text-[10px] text-gray-400 tracking-wider">
            <span className="text-gray-500">WA:</span>{" "}
            <a
              href="https://wa.me/523325808191"
              className="text-white hover:text-[#b8a27d] transition-colors"
            >
              3325808191
            </a>{" "}
            /{" "}
            <a
              href="https://wa.me/523318241919"
              className="text-white hover:text-[#b8a27d] transition-colors"
            >
              3318241919
            </a>
          </p>
          <p className="font-sans text-[10px] text-gray-400 tracking-wider pt-1">
            <span className="text-gray-500">Correo:</span>{" "}
            <a
              href="mailto:blindsdepot.org@gmail.com"
              className="text-white hover:text-[#b8a27d] transition-colors"
            >
              blindsdepot.org@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-end items-start md:items-end md:col-span-1 mt-8 md:mt-0">
        <p className="font-sans tracking-widest uppercase text-[10px] text-gray-500 text-left md:text-right leading-relaxed">
          © 2026 BLINDS DEPOT.
          <br />
          TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}
