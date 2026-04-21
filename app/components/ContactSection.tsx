export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-surface py-40 px-12 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-outline-variant/5"
    >
      <div className="p-12 md:p-24 border-r border-outline-variant/10 flex flex-col justify-center">
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
          Contáctanos
        </h2>
        <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed mb-16 max-w-md">
          Para transformar tus espacios con elegancia, contacta a nuestro equipo
          hoy y descubre todo lo que podemos hacer por ti.
        </p>

        <div className="space-y-10">
          {/* WhatsApp */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest text-[#b8a27d] uppercase font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">chat</span>
              WhatsApp
            </h4>
            <p className="font-serif text-3xl text-white flex flex-col sm:flex-row sm:gap-4 gap-2">
              <a
                href="https://wa.me/5213325808191"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b8a27d] transition-colors"
              >
                +52 33 2580 8191
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a
                href="https://wa.me/5213318241919"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b8a27d] transition-colors"
              >
                +52 33 1824 1919
              </a>
            </p>
          </div>

          {/* Teléfono */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest text-[#b8a27d] uppercase font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">call</span>
              Llamada
            </h4>
            <p className="font-serif text-3xl text-white">
              <a
                href="tel:3347119420"
                className="hover:text-[#b8a27d] transition-colors"
              >
                33 4711 9420
              </a>
            </p>
          </div>

          {/* Dirección */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest text-[#b8a27d] uppercase font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              Ubicación
            </h4>
            <p className="font-serif text-2xl text-white">
              Calle Garibaldi #1469 - A
            </p>
            <p className="font-sans text-gray-400 mt-1">Guadalajara, Jalisco</p>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest text-[#b8a27d] uppercase font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                schedule
              </span>
              Horarios
            </h4>
            <div className="font-serif text-xl text-white space-y-1">
              <p>
                Lunes a Viernes:{" "}
                <span className="font-sans text-lg text-gray-300">
                  9:30 am - 6:30 pm
                </span>
              </p>
              <p>
                Sábados:{" "}
                <span className="font-sans text-lg text-gray-300">
                  9:30 am - 2:30 pm
                </span>
              </p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest text-[#b8a27d] uppercase font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">share</span>
              Social
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#b8a27d] hover:border-[#b8a27d] transition-all"
              >
                FB
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#b8a27d] hover:border-[#b8a27d] transition-all"
              >
                IG
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[700px] md:h-auto min-h-[700px] flex items-center justify-center p-8 bg-black relative">
        {/* Mapa centrado con tamaño específico */}
        <div className="w-[650px] h-[550px] relative shadow-2xl overflow-hidden border border-outline-variant/10 group">
          <iframe
            title="Showroom Blinds Depot"
            src="https://maps.google.com/maps?q=Calle%20Garibaldi%201469%20A,%20Guadalajara,%20Jalisco&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 transition-all duration-500"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#b8a27d] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#b8a27d] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#b8a27d] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#b8a27d] pointer-events-none"></div>
        </div>

        {/* Info Overlay Float */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-[#161512]/90 backdrop-blur-md px-8 py-4 border border-[#b8a27d]/20 text-center pointer-events-none shadow-2xl">
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#d4c4a8] uppercase font-medium">
            Showroom Blinds Depot — Guadalajara
          </p>
        </div>
      </div>
    </section>
  );
}
