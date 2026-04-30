import {
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  PhoneIcon,
  TikTokIcon,
  ClockIcon,
  MailIcon,
} from "./Icons";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#1c1b1b] w-full pt-20 pb-12">
      <div className="max-w-6xl mx-auto w-full px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pb-20">
          {/* Branding Column */}
          <div className="col-span-1">
            <BrandLogo
              className="mb-6 inline-flex"
              textClassName="text-xl font-serif text-white tracking-wider hover:text-[#b8a27d] transition-colors"
              showIcon={false}
            />
            <p className="font-sans text-[14px] text-gray-400 leading-relaxed max-w-xs uppercase tracking-wider">
              SOLUCIONES EN MODULACIÓN DE LUZ DESDE 1998.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-700"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-700"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-700"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Menu & Schedule Column */}
          <div className="flex flex-col col-span-1 md:justify-self-center">
            <div className="mb-12">
              <h4 className="font-sans tracking-[0.2em] text-secondary text-sm uppercase font-bold mb-6">
                MENÚ
              </h4>
              <div className="flex flex-col space-y-3">
                <a
                  className="font-sans text-[14px] text-gray-400 hover:text-secondary transition-colors duration-300 uppercase tracking-wide"
                  href="#collections"
                >
                  Soluciones
                </a>
                <a
                  className="font-sans text-[14px] text-gray-400 hover:text-secondary transition-colors duration-300 uppercase tracking-wide"
                  href="#about"
                >
                  Nosotros
                </a>
                <a
                  className="font-sans text-[14px] text-gray-400 hover:text-secondary transition-colors duration-300 uppercase tracking-wide"
                  href="#contact"
                >
                  Contacto
                </a>
                <a
                  className="font-sans text-[14px] text-gray-400 hover:text-secondary transition-colors duration-300 uppercase tracking-wide"
                  href="#faq"
                >
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-sans tracking-[0.2em] text-secondary text-sm uppercase font-bold mb-6">
                HORARIOS
              </h4>
              <div className="space-y-4">
                <div className="font-sans">
                  <p className="text-md text-gray-400">Lunes a Viernes</p>
                  <p className="text-gray-300 text-[14px] tracking-wide">
                    9:30 AM — 6:30 PM
                  </p>
                </div>
                <div className="font-sans">
                  <p className="text-md text-gray-400">Sábados</p>
                  <p className="text-gray-300 text-[14px] tracking-wide">
                    9:30 AM — 2:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col col-span-1 items-start md:justify-self-end">
            <h4 className="font-sans tracking-[0.2em] text-secondary text-sm uppercase font-bold mb-6">
              CONTACTO
            </h4>

            <div className="space-y-4 mt-1">
              <p className="font-sans text-md text-gray-400">
                <a
                  href="mailto:blindsdepot.org@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-3 tracking-wide"
                >
                  <MailIcon className="w-5 h-5 text-secondary/80" />
                  blindsdepot.org@gmail.com
                </a>
              </p>
              <p className="font-sans text-md text-gray-400">
                <a
                  href="tel:3347119420"
                  className="hover:text-white transition-colors flex items-center gap-3 tracking-wide"
                >
                  <PhoneIcon className="w-5 h-5 text-secondary/80" />
                  33 4711 9420
                </a>
              </p>
              <p className="font-sans text-md text-gray-400">
                <a
                  href="https://wa.me/523325808191"
                  className="hover:text-white transition-colors flex items-center gap-3 tracking-wide"
                >
                  <WhatsAppIcon className="w-5 h-5 text-secondary/80" />
                  33 2580 8191
                </a>
              </p>
            </div>

            <div className="mt-10">
              <h4 className="font-sans tracking-[0.2em] text-secondary text-sm uppercase font-bold mb-4">
                MÉTODOS DE PAGO
              </h4>
              <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="https://icon2.cleanpng.com/20180330/tsq/avc2nqns7.webp"
                  alt="Visa"
                  className="h-12 w-auto object-contain bg-white/90 px-1.5 py-1 rounded-[5px]"
                />
                <img
                  src="https://e7.pngegg.com/pngimages/517/985/png-clipart-logo-debit-mastercard-graphics-debit-card-mastercard-text-orange.png"
                  alt="Mastercard"
                  className="h-12 w-auto object-contain bg-white/90 px-1.5 py-1 rounded-[5px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex justify-center items-center">
          <p className="font-sans tracking-[0.25em] uppercase text-[12px] text-gray-600 text-center leading-relaxed">
            © 2026 BLINDS DEPOT • TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
