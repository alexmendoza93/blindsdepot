import Image from "next/image";

const categories = [
  {
    title: "Cortinas",
    subtitle: "Fluidas, elegantes y de suave caída",
    products: [
      {
        name: "Cortinas Onda Perfecta",
        description:
          "Ondas simétricas y fluidas que aportan modernidad y sofisticación. Caída impecable para espacios contemporáneos y altos.",
        image: "/images/cortinas-onda-perfecta.jpg",
      },
      {
        name: "Cortina Pliegue Francés",
        description:
          "El diseño tradicional y elegante que nunca pasa de moda. Un clásico atemporal que enriquece cualquier decoración interior.",
        image: "/images/pliegue-frances-4.jpeg",
      },
      {
        name: "Cortina Ojal",
        description:
          "Caída suave y ondas marcadas para un estilo contemporáneo. Complemento perfecto de barras decorativas.",
        image:
          "https://amazonaws.ipos.mx/fotos/4135/producto/3557582cc48d402593c5ecdc3231b8bc_16102025033644.jpg",
      },
    ],
  },
  {
    title: "Persianas",
    subtitle: "Control preciso de luz y privacidad",
    products: [
      {
        name: "Persianas Enrollables",
        description:
          "Simplicidad y funcionalidad para cualquier tipo de ambiente. Colección extensa de telas y acabados.",
        image:
          "https://i0.wp.com/persianaspentagrama.com/wp-content/uploads/2024/12/destacado-cortinas-enrollables.webp",
      },
      {
        name: "Persianas Sheer Elegance",
        description:
          "Control preciso de la luz con bloques sólidos y traslúcidos. Una dualidad elegante para un ambiente sofisticado.",
        image:
          "https://http2.mlstatic.com/D_NQ_NP_802911-MLM100499430100_122025-O-oferta-persianas-sheer-elegance-enrollable-a-599-m2-43.webp",
      },
      {
        name: "Persianas Día y Noche",
        description:
          "Dualidad perfecta entre oscuridad total y difuminación de luz. Maximiza tu control de la iluminación de manera inteligente.",
        image:
          "https://azuldecor.com.mx/wp-content/uploads/2025/08/sala-de-estar-con-cortinas-enrollables-dia-noche.jpg",
      },
      {
        name: "Persianas Black Out",
        description:
          "Oscuridad máxima ideal para un descanso profundo y reparador. Aislamiento térmico y visual del exterior.",
        image:
          "https://www.disprodec.com.co/images/Productos/Nuevos_Productos/Cortinas_enrollables/cortina-enrollable1.jpg",
      },
      {
        name: "Persianas Malla Screen",
        description:
          "Control solar y privacidad sin perder la vista al exterior. Filtra los rayos UV manteniendo tus espacios frescos y luminosos.",
        image:
          "https://abaser.co/wp-content/uploads/elementor/thumbs/enrollable-galeria-home-pyc5w3k8pofq3778at1kttfqzc890t1tvcq8cfejd4.jpg",
      },
      {
        name: "Persianas Verticales",
        description:
          "Control de luz y privacidad, ideal para grandes ventanales residenciales y proyectos comerciales contemporáneos.",
        image:
          "https://sophiestore.pe/wp-content/uploads/2024/11/persianas-verticales-crema.jpg",
      },
      {
        name: "Persianas Shangri-la",
        description:
          "Suavidad visual de una cortina con la funcionalidad de una persiana. Láminas horizontales suspendidas entre velos.",
        image:
          "https://wcp2api.hdlao.com/storage/1927/conversions/cortina-shangri-la_2-optimized.webp",
      },
    ],
  },
  {
    title: "Toldos",
    subtitle: "Protección arquitectónica para exteriores",
    products: [
      {
        name: "Toldo Estilo Francés",
        description:
          "Elegancia clásica europea para terrazas y ventanas. Su diseño curvo tradicional añade un toque distintivo a cualquier fachada.",
        image:
          "https://www.toldospaulistano.com.br/images/articles/toldo-para-porta-de-entrada-em-sao-paulo.webp",
      },
      {
        name: "Toldos Retráctiles",
        description:
          "Manuales y motorizados. Flexibilidad y funcionalidad para tus espacios al aire libre, adaptándose a cualquier clima.",
        image:
          "https://static.wixstatic.com/media/7a0311_e062df196ba94d7b9dd6cb58202a13f3~mv2.jpg",
      },
      {
        name: "Toldos Caída Vertical",
        description:
          "Protección solar eficiente con un diseño minimalista y lineal. Ideales para cerrar perimetralmente terrazas y balcones.",
        image:
          "https://images.pexels.com/photos/34277692/pexels-photo-34277692.jpeg",
      },
      {
        name: "Toldo 90 Grados",
        description:
          "Protección integral que se adapta a las líneas rectas de tu arquitectura. Una solución geométrica innovadora.",
        image:
          "https://www.rappachiani.com.ar/img/toldos/brazo-fijo/toldo-brazo-fijo-05.jpg",
      },
      {
        name: "Toldo Zip",
        description:
          "Sistema guiado altamente resistente, la opción perfecta para cierres perimetrales donde se necesita protección al viento.",
        image:
          "https://www.arquimaster.com.ar/web/wp-content/uploads/2016/04/toldos_universal_zip.jpg",
      },
      {
        name: "Toldo Domo",
        description:
          "Estilo arquitectónico icónico que brinda protección duradera, estética y personalidad a tus accesos o ventanas.",
        image:
          "https://cdn1.vente-unique.com/thumbnails/product/3623/3623132/large/0/42014529.webp",
      },
    ],
  },
];

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="bg-surface-container-low py-40 px-6 xl:px-12"
    >
      <div className="mb-24 text-center">
        <span className="font-sans text-secondary tracking-[0.3em] uppercase text-[10px] mb-4 block">
          Catálogo Completo
        </span>
        <h2 className="font-serif text-5xl text-white">Nuestras Soluciones</h2>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col gap-32">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="flex flex-col">
            <div className="mb-14 text-center">
              <h3 className="font-serif text-4xl text-white mb-2">
                {category.title}
              </h3>
              <p className="font-sans text-on-surface-variant text-sm tracking-widest uppercase">
                {category.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-md aspect-square sm:aspect-[4/5] cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={product.image}
                  />

                  {/* Base Overlay Gradient (for text readability when not hovered) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 opacity-60 group-hover:opacity-0" />

                  {/* Hover Dark Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <h3 className="font-serif text-2xl md:text-[28px] leading-tight text-white transition-all duration-700 transform group-hover:-translate-y-2 drop-shadow-lg w-full">
                      {product.name}
                    </h3>

                    {/* Expandable Hover Details */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] w-full">
                      <div className="overflow-hidden">
                        <div className="flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 pt-4">
                          <p className="font-sans text-sm text-gray-200 mb-6 font-light leading-relaxed max-w-[90%]">
                            {product.description}
                          </p>
                          <button className="font-sans text-xs tracking-widest uppercase border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                            MÁS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
