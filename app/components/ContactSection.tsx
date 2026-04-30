import {
  WhatsAppIcon,
  PhoneIcon,
  LocationIcon,
  ClockIcon,
  ShareIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "./Icons";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-surface py-0 px-12 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-outline-variant/5"
    >
      <div className="p-12 md:p-24 border-r bg-black border-outline-variant/10 flex flex-col justify-center items-center text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
          Contáctanos
        </h2>
        <p className="font-sans text-lg leading-relaxed mb-16 max-w-md mx-auto">
          Para transformar tus espacios con elegancia, contacta a nuestro equipo
          hoy y descubre todo lo que podemos hacer por ti.
        </p>

        <div className="space-y-10">
          {/* WhatsApp */}
          <div>
            <h4 className="font-sans text-[20px] tracking-widest text-secondary uppercase font-bold mb-2 flex items-center justify-center gap-2">
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </h4>
            <p className="font-serif text-xl text-white flex flex-col sm:flex-row sm:gap-4 gap-2 justify-center">
              <a
                href="https://wa.me/5213325808191"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                +52 33 2580 8191
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a
                href="https://wa.me/5213318241919"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                +52 33 1824 1919
              </a>
            </p>
          </div>

          {/* Teléfono */}
          <div>
            <h4 className="font-sans text-[20px] tracking-widest text-secondary uppercase font-bold mb-2 flex items-center justify-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              Llamada
            </h4>
            <p className="font-serif text-xl text-white">
              <a
                href="tel:3347119420"
                className="hover:text-secondary transition-colors"
              >
                33 4711 9420
              </a>
            </p>
          </div>

          {/* Dirección */}
          <div>
            <h4 className="font-sans text-[20px] tracking-widest text-secondary uppercase font-bold mb-2 flex items-center justify-center gap-2">
              <LocationIcon className="w-5 h-5" />
              Ubicación
            </h4>
            <p className="font-serif text-xl text-white">
              Calle Garibaldi #1469 - A
            </p>
            <p className="font-sans text-white mt-1">Guadalajara, Jalisco</p>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-sans text-[20px] tracking-widest text-secondary uppercase font-bold mb-2 flex items-center justify-center gap-2">
              <ClockIcon className="w-5 h-5" />
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
            <h4 className="font-sans text-[20px] tracking-widest text-secondary uppercase font-bold mb-4 flex items-center justify-center gap-2">
              <ShareIcon className="w-5 h-5" />
              Social
            </h4>
            <div className="flex gap-6 justify-center">
              <a
                href="https://www.facebook.com/share/1JBdnkyEJk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-all duration-300 transform hover:scale-110 cursor-pointer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/blinds_depot?utm_source=qr&igsh=MTA4YWk4Ymlzb3ZiZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-all duration-300 transform hover:scale-110 cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-8 h-8" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-all duration-300 transform hover:scale-110 cursor-pointer"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Redes Sociales */}
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
        <div className="absolute bottom-[132px] left-1/2 -translate-x-1/2 z-10 bg-[#161512]/90 backdrop-blur-md px-8 py-4 border border-[#b8a27d]/20 text-center pointer-events-none shadow-2xl">
          <p className="font-sans text-[12px] tracking-[0.2em] text-secondary uppercase font-medium">
            Showroom Blinds Depot — Guadalajara
          </p>
        </div>
      </div>
    </section>
  );
}
