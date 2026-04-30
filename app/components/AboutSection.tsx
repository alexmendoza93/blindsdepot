export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-surface py-32 px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center"
    >
      <div className="order-2 md:order-1 text-justify max-w-xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-10 leading-tight">
          Diseño Atemporal.
        </h2>
        <p className="font-sans text-on-surface-variant text-lg leading-relaxed mb-4 mx-auto">
          En Blinds Depot, transformamos espacios con estilo, funcionalidad y
          elegancia. Somos una empresa especializada en la venta, asesoría e
          instalación de persianas y cortinas de alta calidad, diseñada para
          quienes buscan confort, diseño y soluciones duraderas para su hogar,
          oficina o negocio.
        </p>
        <p className="font-sans text-on-surface-variant text-lg leading-relaxed mb-4 mx-auto">
          Nos encontramos en Guadalajara, Jalisco, y trabajamos con el
          compromiso de ofrecer atención personalizada, productos premium y
          acabados impecables que elevan cada ambiente.
        </p>
        <p className="font-sans text-on-surface-variant text-lg leading-relaxed mb-4 mx-auto">
          Ofrecemos una amplia variedad de opciones, ideales para crear espacios
          modernos, sofisticados y funcionales. Cada proyecto es único, por eso
          brindamos asesoría profesional para ayudarte a elegir la mejor opción
          según tus necesidades, estilo y presupuesto.
        </p>
        <p className="font-sans text-on-surface-variant text-lg leading-relaxed mb-4 mx-auto">
          Creemos que cada ventana es una oportunidad para dar personalidad y
          valor a tu espacio. Nuestro objetivo es crear experiencias que
          reflejen elegancia, confort y exclusividad.
        </p>
        <p className="font-sans text-on-surface-variant text-lg leading-relaxed mb-4 mx-auto">
          Nos distingue la calidad de nuestros materiales, la precisión en cada
          instalación y la confianza que construimos con cada cliente.
          Trabajamos para que cada detalle hable de buen gusto, diseño y
          excelencia.
        </p>
        <p className="font-sans text-on-surface-variant text-lg leading-relaxed mb-8 mx-auto">
          Creamos ambientes que inspiran.
        </p>
        <a
          href="https://wa.me/c/5213312694219"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-sans text-on-surface-variant hover:text-white transition-colors duration-300 group"
        >
          <svg
            className="w-5 h-5 text-white group-hover:text-[#1EBE5D] transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          Visita nuestro catálogo.
        </a>
      </div>
      <div className="order-1 md:order-2 h-[800px]">
        <img
          alt="sheer blinds stairs"
          className="w-full h-full object-cover"
          src="/images/sheer-elegance-escaleras.jpeg"
        />
      </div>
    </section>
  );
}
