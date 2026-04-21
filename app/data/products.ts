export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  heroAdjectives: string[];
  advantages: string[];
  advice: string;
  features: {
    title: string;
    description: string;
    icon: string; // Used to identify standard SVG/icon
  }[];
  techSpecs: {
    title: string;
    description: string;
  }[];
  gallery: string[];
};

export const products: Product[] = [
  {
    slug: "cortinas-onda-perfecta",
    name: "Cortinas Onda Perfecta",
    category: "Cortinas",
    description:
      "Las cortinas de onda perfecta se caracterizan por su diseño de ondas simétricas y fluidas que aportan modernidad y mucha sofisticación a cualquier espacio. Su mecanismo y la cinta especial aseguran que cada onda mantenga su forma exacta desde el riel hasta el suelo, creando una caída verdaderamente impecable ideal para espacios contemporáneos o ventanales altos.",
    image: "/images/cortinas-onda-perfecta.jpg",
    heroAdjectives: ["MODERNIDAD", "SIMETRÍA", "ELEGANCIA"],
    advantages: [
      "Caída impecable y uniforme que siempre mantiene su forma",
      "Ideal para cubrir ventanales grandes y techos altos",
      "Variedad de mecanismos de apertura (manual o motorizado)",
      "Aporta una estética contemporánea de alto nivel"
    ],
    advice:
      "La cortina de onda perfecta requiere un riel especial y mayor cantidad de tela para lograr su efecto característico. Recomendamos usar telas ligeras o semitraslúcidas para maximizar la fluidez, o bien combinarlas con un tejido opaco independiente para control total de luz.",
    features: [
      {
        title: "Fluidez Constante",
        description: "El sistema mantiene las ondas a la misma distancia, garantizando orden visual constante.",
        icon: "waves"
      },
      {
        title: "Instalación a Medida",
        description: "Adaptable a todo tipo de ventanales, ya sea a techo o a pared.",
        icon: "ruler"
      },
      {
        title: "Opción Motorizada",
        description: "Compatible con sistemas de automatización inteligentes para mayor comodidad.",
        icon: "zap"
      }
    ],
    techSpecs: [
      {
        title: "Sistemas de Riel",
        description: "Compatible con rieles decorativos o técnicos, instalados al ras del techo o a la pared, con sistema de gancho deslizante suave."
      },
      {
        title: "Materiales",
        description: "Telas premium en variedades traslúcidas, semi-opacas y blackout. Materiales 100% poliéster de fácil mantenimiento o mezclas naturales."
      },
      {
        title: "Certificaciones",
        description: "Tratamientos anti-polvo y opciones de ignifugación según el tejido seleccionado. Tejidos eco-friendly disponibles."
      }
    ],
    gallery: [
      "/images/cortinas-onda-perfecta.jpg",
      "https://amazonaws.ipos.mx/fotos/4135/producto/3557582cc48d402593c5ecdc3231b8bc_16102025033644.jpg",
      "https://azuldecor.com.mx/wp-content/uploads/2025/08/sala-de-estar-con-cortinas-enrollables-dia-noche.jpg" // Using placeholder images
    ]
  },
  {
    slug: "pliegue-frances",
    name: "Cortina Pliegue Francés",
    category: "Cortinas",
    description: "El diseño tradicional y elegante que nunca pasa de moda. Un clásico atemporal que enriquece cualquier decoración interior.",
    image: "/images/pliegue-frances-4.jpeg",
    heroAdjectives: ["CLÁSICA", "ATEMPORAL", "DISTINGUIDA"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "cortina-ojal",
    name: "Cortina Ojal",
    category: "Cortinas",
    description: "Caída suave y ondas marcadas para un estilo contemporáneo. Complemento perfecto de barras decorativas.",
    image: "https://amazonaws.ipos.mx/fotos/4135/producto/3557582cc48d402593c5ecdc3231b8bc_16102025033644.jpg",
    heroAdjectives: ["CONTEMPORÁNEA", "VERSÁTIL", "PRÁCTICA"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  // Persianas
  {
    slug: "enrollables",
    name: "Persianas Enrollables",
    category: "Persianas",
    description: "Simplicidad y funcionalidad para cualquier tipo de ambiente. Colección extensa de telas y acabados.",
    image: "https://i0.wp.com/persianaspentagrama.com/wp-content/uploads/2024/12/destacado-cortinas-enrollables.webp",
    heroAdjectives: ["MINIMALISTA", "FUNCIONAL", "PRÁCTICA"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "sheer-elegance",
    name: "Persianas Sheer Elegance",
    category: "Persianas",
    description: "Control preciso de la luz con bloques sólidos y traslúcidos. Una dualidad elegante para un ambiente sofisticado.",
    image: "https://http2.mlstatic.com/D_NQ_NP_802911-MLM100499430100_122025-O-oferta-persianas-sheer-elegance-enrollable-a-599-m2-43.webp",
    heroAdjectives: ["SOFISTICADA", "DUAL", "VERSÁTIL"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "dia-y-noche",
    name: "Persianas Día y Noche",
    category: "Persianas",
    description: "Dualidad perfecta entre oscuridad total y difuminación de luz. Maximiza tu control de la iluminación de manera inteligente.",
    image: "https://azuldecor.com.mx/wp-content/uploads/2025/08/sala-de-estar-con-cortinas-enrollables-dia-noche.jpg",
    heroAdjectives: ["DOBLE FUNCIÓN", "INTELIGENTE", "ÓPTIMA"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "black-out",
    name: "Persianas Black Out",
    category: "Persianas",
    description: "Oscuridad máxima ideal para un descanso profundo y reparador. Aislamiento térmico y visual del exterior.",
    image: "https://www.disprodec.com.co/images/Productos/Nuevos_Productos/Cortinas_enrollables/cortina-enrollable1.jpg",
    heroAdjectives: ["DESCANSO", "AISLANTE", "MÁXIMA PRIVACIDAD"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "malla-screen",
    name: "Persianas Malla Screen",
    category: "Persianas",
    description: "Control solar y privacidad sin perder la vista al exterior. Filtra los rayos UV manteniendo tus espacios frescos y luminosos.",
    image: "https://abaser.co/wp-content/uploads/elementor/thumbs/enrollable-galeria-home-pyc5w3k8pofq3778at1kttfqzc890t1tvcq8cfejd4.jpg",
    heroAdjectives: ["TÉRMICA", "TRANSLÚCIDA", "MODERNA"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "verticales",
    name: "Persianas Verticales",
    category: "Persianas",
    description: "Control de luz y privacidad, ideal para grandes ventanales residenciales y proyectos comerciales contemporáneos.",
    image: "https://sophiestore.pe/wp-content/uploads/2024/11/persianas-verticales-crema.jpg",
    heroAdjectives: ["TRADICIONAL", "PRACTICIDAD", "ECONÓMICA"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "shangri-la",
    name: "Persianas Shangri-la",
    category: "Persianas",
    description: "Suavidad visual de una cortina con la funcionalidad de una persiana. Láminas horizontales suspendidas entre velos.",
    image: "https://wcp2api.hdlao.com/storage/1927/conversions/cortina-shangri-la_2-optimized.webp",
    heroAdjectives: ["INNOVADORA", "SUAVE", "ELEGANTE"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  // Toldos
  {
    slug: "estilo-frances",
    name: "Toldo Estilo Francés",
    category: "Toldos",
    description: "Elegancia clásica europea para terrazas y ventanas. Su diseño curvo tradicional añade un toque distintivo a cualquier fachada.",
    image: "https://www.toldospaulistano.com.br/images/articles/toldo-para-porta-de-entrada-em-sao-paulo.webp",
    heroAdjectives: ["CLÁSICO", "EUROPEO", "DISTINTIVO"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "retractiles",
    name: "Toldos Retráctiles",
    category: "Toldos",
    description: "Manuales y motorizados. Flexibilidad y funcionalidad para tus espacios al aire libre, adaptándose a cualquier clima.",
    image: "https://static.wixstatic.com/media/7a0311_e062df196ba94d7b9dd6cb58202a13f3~mv2.jpg",
    heroAdjectives: ["FLEXIBLE", "FUNCIONAL", "MOTORIZADO"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "caida-vertical",
    name: "Toldos Caída Vertical",
    category: "Toldos",
    description: "Protección solar eficiente con un diseño minimalista y lineal. Ideales para cerrar perimetralmente terrazas y balcones.",
    image: "https://images.pexels.com/photos/34277692/pexels-photo-34277692.jpeg",
    heroAdjectives: ["MINIMALISTA", "PROTECCIÓN", "CUBIERTA"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "90-grados",
    name: "Toldo 90 Grados",
    category: "Toldos",
    description: "Protección integral que se adapta a las líneas rectas de tu arquitectura. Una solución geométrica innovadora.",
    image: "https://www.rappachiani.com.ar/img/toldos/brazo-fijo/toldo-brazo-fijo-05.jpg",
    heroAdjectives: ["GEOMÉTRICA", "RÍGIDO", "FUNCIONAL"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "zip",
    name: "Toldo Zip",
    category: "Toldos",
    description: "Sistema guiado altamente resistente, la opción perfecta para cierres perimetrales donde se necesita protección al viento.",
    image: "https://www.arquimaster.com.ar/web/wp-content/uploads/2016/04/toldos_universal_zip.jpg",
    heroAdjectives: ["RESISTENTE AL VIENTO", "GUIADO", "SEGURO"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  },
  {
    slug: "domo",
    name: "Toldo Domo",
    category: "Toldos",
    description: "Estilo arquitectónico icónico que brinda protección duradera, estética y personalidad a tus accesos o ventanas.",
    image: "https://cdn1.vente-unique.com/thumbnails/product/3623/3623132/large/0/42014529.webp",
    heroAdjectives: ["CLÁSICO", "ICÓNICO", "DURADERO"],
    advantages: [],
    advice: "",
    features: [],
    techSpecs: [],
    gallery: []
  }
];

export const categories = [
  {
    title: "Cortinas",
    subtitle: "Fluidas, elegantes y de suave caída",
    category: "Cortinas",
  },
  {
    title: "Persianas",
    subtitle: "Control preciso de luz y privacidad",
    category: "Persianas",
  },
  {
    title: "Toldos",
    subtitle: "Protección arquitectónica para exteriores",
    category: "Toldos",
  },
];
