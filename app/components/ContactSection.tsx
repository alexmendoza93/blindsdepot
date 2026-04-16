export default function ContactSection() {
  return (
    <section className="bg-surface py-40 px-12 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-outline-variant/5">
      <div className="p-12 md:p-24 border-r border-outline-variant/10">
        <h2 className="font-serif text-5xl text-white mb-16">Consultar</h2>
        <div className="space-y-12">
          {/* Address Block */}
          <div className="bg-[#161512]/50 border border-white/5 p-8 backdrop-blur-sm">
            <h4 className="font-sans text-[10px] tracking-widest text-[#b8a27d] uppercase font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Dirección
            </h4>
            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              Calle Garibaldi #1469 -A<br />
              Guadalajara, Jalisco
            </p>
          </div>

          {/* Hours Block */}
          <div className="bg-[#161512]/50 border border-white/5 p-8 backdrop-blur-sm">
            <h4 className="font-sans text-[10px] tracking-widest text-[#b8a27d] uppercase font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-sm">schedule</span>
              Horarios
            </h4>
            <div className="space-y-2">
              <p className="font-sans text-sm text-gray-300 flex justify-between">
                <span>Lunes a Viernes</span>
                <span className="text-white">9:30 am - 6:30 pm</span>
              </p>
              <p className="font-sans text-sm text-gray-300 flex justify-between">
                <span>Sábados</span>
                <span className="text-white">9:30 am - 2:30 pm</span>
              </p>
              <p className="font-sans text-sm text-gray-300 flex justify-between">
                <span>Domingos</span>
                <span className="text-white/50">Cerrado</span>
              </p>
            </div>
          </div>

          {/* Contact Block */}
          <div className="bg-[#161512]/50 border border-white/5 p-8 backdrop-blur-sm">
            <h4 className="font-sans text-[10px] tracking-widest text-[#b8a27d] uppercase font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-sm">contact_support</span>
              Contacto
            </h4>
            <div className="space-y-4">
              <p className="font-sans text-sm text-gray-300 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Teléfono</span>
                <a href="tel:3347119420" className="text-white hover:text-[#b8a27d] transition-colors">3347119420</a>
              </p>
              <p className="font-sans text-sm text-gray-300 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">WhatsApp</span>
                <span className="text-white">
                  <a href="https://wa.me/523325808191" className="hover:text-[#b8a27d] transition-colors">3325808191</a> / <a href="https://wa.me/523318241919" className="hover:text-[#b8a27d] transition-colors">3318241919</a>
                </span>
              </p>
              <p className="font-sans text-sm text-gray-300 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Redes Sociales</span>
                <span className="text-white">
                  Búscanos en FB o IG como <span className="font-bold text-[#b8a27d] pb-0.5 border-b border-[#b8a27d]/30">blinds depot</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[600px] md:h-auto">
        <div className="w-full h-full bg-surface-container-highest relative flex flex-col items-center overflow-hidden">
          {/* Interactive Google Map - GH Pages & SEO Friendly (No API Key required) */}
          <div className="absolute inset-0 w-full h-full z-0">
            <iframe 
              title="Showroom Blinds Depot"
              src="https://maps.google.com/maps?q=Calle%20Garibaldi%201469%20A,%20Guadalajara,%20Jalisco&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Info Overlay */}
          <div className="relative z-10 bg-[#161512]/80 backdrop-blur-md p-10 border border-[#b8a27d]/20 text-center pointer-events-none mt-auto mb-12 mx-8 shadow-2xl">
            <h5 className="font-serif text-2xl text-[#b8a27d] mb-4 tracking-wide font-light">Showroom Blinds Depot</h5>
            <p className="font-sans text-[11px] tracking-[0.2em] text-[#d4c4a8] leading-loose uppercase font-medium">
              Calle Garibaldi #1469 -A<br />
              Lunes a Viernes: 9:30am - 6:30pm<br />
              Sábados: 9:30am - 2:30pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
