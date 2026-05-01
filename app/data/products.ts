export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  heroImage: string;
  aboutImage: string;
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
    image: "/images/onda-perfecta.jpeg",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1932&auto=format&fit=crop",
    heroAdjectives: ["MODERNIDAD", "SIMETRÍA", "ELEGANCIA"],
    advantages: [
      "Caída impecable y uniforme que siempre mantiene su forma",
      "Ideal para cubrir ventanales grandes y techos altos",
      "Variedad de mecanismos de apertura (manual o motorizado)",
      "Aporta una estética contemporánea de alto nivel",
    ],
    advice:
      "La cortina de onda perfecta requiere un riel especial y mayor cantidad de tela para lograr su efecto característico. Recomendamos usar telas ligeras o semitraslúcidas para maximizar la fluidez, o bien combinarlas con un tejido opaco independiente para control total de luz.",
    features: [
      {
        title: "Fluidez Constante",
        description:
          "El sistema mantiene las ondas a la misma distancia, garantizando orden visual constante.",
        icon: "waves",
      },
      {
        title: "Instalación a Medida",
        description:
          "Adaptable a todo tipo de ventanales, ya sea a techo o a pared.",
        icon: "ruler",
      },
      {
        title: "Opción Motorizada",
        description:
          "Compatible con sistemas de automatización inteligentes para mayor comodidad.",
        icon: "zap",
      },
    ],
    techSpecs: [
      {
        title: "Sistemas de Riel",
        description:
          "Compatible con rieles decorativos o técnicos, instalados al ras del techo o a la pared, con sistema de gancho deslizante suave.",
      },
      {
        title: "Materiales",
        description:
          "Telas premium en variedades traslúcidas, semi-opacas y blackout. Materiales 100% poliéster de fácil mantenimiento o mezclas naturales.",
      },
      {
        title: "Certificaciones",
        description:
          "Tratamientos anti-polvo y opciones de ignifugación según el tejido seleccionado. Tejidos eco-friendly disponibles.",
      },
    ],
    gallery: [
      "/images/cortinas-onda-perfecta.jpg",
      "/images/cortina-onda-perfecta-comedor.jpeg",
      "/images/onda-perfecta.jpeg",
    ],
  },
  {
    slug: "pliegue-frances",
    name: "Cortina Pliegue Francés",
    category: "Cortinas",
    description:
      "El diseño tradicional y elegante que nunca pasa de moda. Un clásico atemporal que enriquece cualquier decoración interior gracias a sus característicos pliegues agrupados.",
    image: "/images/pliegue-frances-4.jpeg",
    heroImage: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop",
    heroAdjectives: ["CLÁSICA", "ATEMPORAL", "DISTINGUIDA"],
    advantages: [
      "Aporta cuerpo, volumen y una caída estructurada muy elegante",
      "Ideal para salones principales y habitaciones formales",
      "Control de luz superior gracias a la estructura de la cabecilla",
      "Excelente comportamiento tanto en telas ligeras como pesadas",
    ],
    advice:
      "Debido a su confección, esta cortina utiliza un 'factor de plisado' alto, lo que significa que requiere más tela (generalmente el doble o más del ancho de la ventana). Al recogerse, los pliegues ocupan más espacio lateral; asegúrate de tener suficiente espacio en los extremos.",
    features: [
      {
        title: "Diseño Tradicional",
        description:
          "Agrupación de pliegues (generalmente 2 o 3) cosidos en la base, formando un abanico superior.",
        icon: "layers",
      },
      {
        title: "Caída Voluminosa",
        description:
          "Aporta presencia y formalidad, vistiendo el espacio con mayor contundencia.",
        icon: "align-left",
      },
      {
        title: "Control Preciso",
        description:
          "Fácil de deslizar mediante bastón o cordel, manteniendo siempre los pliegues armados.",
        icon: "move-horizontal",
      },
    ],
    techSpecs: [
      {
        title: "Instalación",
        description:
          "Se montan comúnmente en rieles técnicos o decorativos utilizando ganchos metálicos especiales que aseguran la forma del pliegue.",
      },
      {
        title: "Mantenimiento",
        description:
          "Requiere limpieza profesional o en seco para mantener la estructura de la cabecilla y el planchado de las caídas, dependiendo de la tela.",
      },
    ],
    gallery: ["/images/pliegue-frances-4.jpeg"],
  },
  {
    slug: "cortina-ojal",
    name: "Cortina Ojal",
    category: "Cortinas",
    description:
      "Caída suave y ondas marcadas para un estilo contemporáneo. Complemento perfecto de barras decorativas, ofreciendo una instalación visible y estética.",
    image: "https://amazonaws.ipos.mx/fotos/4135/producto/3557582cc48d402593c5ecdc3231b8bc_16102025033644.jpg",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1964&auto=format&fit=crop",
    heroAdjectives: ["CONTEMPORÁNEA", "VERSÁTIL", "PRÁCTICA"],
    advantages: [
      "Instalación sencilla y deslizamiento fluido sobre la barra",
      "Crea pliegues anchos y ordenados de forma natural",
      "Look moderno que destaca el tubo y los remates decorativos",
      "Fácil mantenimiento y desmontaje",
    ],
    advice:
      "Asegúrate de que la barra decorativa se instale lo suficientemente alta por encima de la ventana para evitar filtraciones de luz, ya que los ojales pueden dejar pasar pequeños haces luminosos en la parte superior.",
    features: [
      {
        title: "Aros Integrados",
        description:
          "Ojales metálicos o plásticos insertados directamente en la tela para un look limpio.",
        icon: "circle",
      },
      {
        title: "Deslizamiento Rápido",
        description:
          "El contacto directo del aro con la barra permite abrir y cerrar de forma muy suave.",
        icon: "move-right",
      },
      {
        title: "Ondas Profundas",
        description:
          "Genera caídas anchas y regulares, menos estructuradas que el pliegue francés pero muy estéticas.",
        icon: "activity",
      },
    ],
    techSpecs: [
      {
        title: "Compatibilidad",
        description:
          "Requiere obligatoriamente un cortinero de tubo (barra). Los ojales vienen en diferentes diámetros (generalmente 40mm) para adaptarse a varios grosores de tubo.",
      },
      {
        title: "Acabados de Ojal",
        description:
          "Disponibles en níquel, bronce, acero mate, negro y oro para combinar perfectamente con la barra seleccionada.",
      },
    ],
    gallery: [],
  },
  // Persianas
  {
    slug: "enrollables",
    name: "Persianas Enrollables",
    category: "Persianas",
    description:
      "Simplicidad y funcionalidad para cualquier tipo de ambiente. Su diseño plano y compacto se adapta discretamente a la ventana, ofreciendo una extensa colección de telas y acabados.",
    image: "https://i0.wp.com/persianaspentagrama.com/wp-content/uploads/2024/12/destacado-cortinas-enrollables.webp",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop",
    heroAdjectives: ["MINIMALISTA", "FUNCIONAL", "PRÁCTICA"],
    advantages: [
      "Ocupan muy poco espacio visual y físico al estar enrolladas",
      "Fáciles de limpiar y de bajo mantenimiento",
      "Permiten cubrir grandes dimensiones con un solo sistema",
      "Diseño versátil que encaja en oficinas, salas y dormitorios",
    ],
    advice:
      "Para áreas muy soleadas, elige telas tipo 'Screen' con bajo porcentaje de apertura para reducir el calor y el deslumbramiento sin perder la vista. Para dormitorios, una enrollable 'Black Out' es imprescindible.",
    features: [
      {
        title: "Tubo de Aluminio",
        description:
          "Sistema interno resistente que enrolla la tela de forma perfecta y equilibrada.",
        icon: "cylinder",
      },
      {
        title: "Cadena o Motor",
        description:
          "Opciones de accionamiento manual mediante cadena continua o motorización a control remoto.",
        icon: "settings",
      },
      {
        title: "Diseño Limpio",
        description:
          "Líneas rectas que no sobrecargan la decoración, ideal para arquitectura moderna.",
        icon: "square",
      },
    ],
    techSpecs: [
      {
        title: "Mecanismo",
        description:
          "Sistemas manuales con reductores de peso para persianas grandes, o motores de batería de litio / cableados.",
      },
      {
        title: "Fascia (Opcional)",
        description:
          "Puede incluir una fascia o cassette superior de aluminio que oculta el rollo, mejorando la estética y bloqueando más luz.",
      },
    ],
    gallery: [],
  },
  {
    slug: "sheer-elegance",
    name: "Persianas Sheer Elegance",
    category: "Persianas",
    description:
      "Control preciso de la luz con un diseño innovador de franjas sólidas y traslúcidas intercaladas. Una dualidad elegante que brinda un ambiente sofisticado y moderno.",
    image: "https://http2.mlstatic.com/D_NQ_NP_802911-MLM100499430100_122025-O-oferta-persianas-sheer-elegance-enrollable-a-599-m2-43.webp",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1932&auto=format&fit=crop",
    heroAdjectives: ["SOFISTICADA", "DUAL", "VERSÁTIL"],
    advantages: [
      "Regula la privacidad y entrada de luz sin necesidad de subir la persiana completa",
      "Efecto visual de vanguardia muy atractivo",
      "Protege muebles y pisos de los rayos UV al superponer las franjas",
      "Se adapta a cualquier estilo de decoración interior",
    ],
    advice:
      "Son ideales para áreas sociales como salas o comedores donde se busca diseño y control de luz parcial. No son recomendables para oscuridad total (para ello mejor usar Día y Noche o Black Out directo), ya que entre las franjas siempre filtra un poco de luz.",
    features: [
      {
        title: "Diseño Zebra",
        description:
          "Tejido doble que alterna bandas opacas y de malla transparente.",
        icon: "align-justify",
      },
      {
        title: "Alineación Precisa",
        description:
          "Permite traslapar las líneas para visión exterior o intercalarlas para privacidad.",
        icon: "sliders",
      },
      {
        title: "Cassette Integrado",
        description:
          "Incluyen de fábrica un cabezal estético de aluminio que cubre el mecanismo.",
        icon: "box",
      },
    ],
    techSpecs: [
      {
        title: "Ancho de Franjas",
        description:
          "Las franjas varían entre 5cm y 10cm dependiendo de la colección y el impacto visual deseado.",
      },
      {
        title: "Mantenimiento",
        description:
          "Limpieza en seco o sacudido suave. No se recomienda mojar la tela para evitar ondulaciones o pérdida de la alineación.",
      },
    ],
    gallery: [
      "/images/sheer-elegance.jpeg",
      "/images/sheer-elegance-cocina.jpeg",
      "/images/sheer-elegance-escaleras.jpeg",
    ],
  },
  {
    slug: "dia-y-noche",
    name: "Persianas Día y Noche",
    category: "Persianas",
    description:
      "La solución definitiva para control total: combina una persiana traslúcida y una black out en una sola ventana. Maximiza tu control de la iluminación de manera inteligente.",
    image: "https://azuldecor.com.mx/wp-content/uploads/2025/08/sala-de-estar-con-cortinas-enrollables-dia-noche.jpg",
    heroImage: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop",
    heroAdjectives: ["DOBLE FUNCIÓN", "INTELIGENTE", "ÓPTIMA"],
    advantages: [
      "Dos persianas independientes compartiendo el mismo soporte",
      "Luz difuminada durante el día y oscuridad total por la noche",
      "Máxima eficiencia térmica y acústica por la doble barrera",
      "Ahorro de espacio en comparación con tener dos cortineros separados",
    ],
    advice:
      "Al instalarse dentro del marco de la ventana, asegúrate de tener al menos 10 cm de profundidad, ya que el soporte doble es más ancho que uno sencillo. Excelente inversión para recámaras principales y cuartos de TV.",
    features: [
      {
        title: "Soporte Doble",
        description:
          "Herraje especial diseñado para colocar dos tubos de forma compacta y segura.",
        icon: "layers",
      },
      {
        title: "Malla Screen (Día)",
        description:
          "Permite la vista exterior, corta el reflejo del sol y protege el interior.",
        icon: "sun",
      },
      {
        title: "Black Out (Noche)",
        description:
          "Bloquea al 100% el paso de la luz para un descanso profundo y reparador.",
        icon: "moon",
      },
    ],
    techSpecs: [
      {
        title: "Instalación",
        description:
          "Soportes dobles verticales u horizontales según el espacio disponible en la ventana.",
      },
      {
        title: "Motorización",
        description:
          "Totalmente automatizable; se pueden integrar dos motores independientes controlados desde un mismo mando multicanal.",
      },
    ],
    gallery: [],
  },
  {
    slug: "black-out",
    name: "Persianas Black Out",
    category: "Persianas",
    description:
      "Oscuridad máxima ideal para un descanso profundo y reparador. Aislamiento térmico y visual del exterior mediante telas recubiertas de alta tecnología.",
    image: "https://www.disprodec.com.co/images/Productos/Nuevos_Productos/Cortinas_enrollables/cortina-enrollable1.jpg",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1964&auto=format&fit=crop",
    heroAdjectives: ["DESCANSO", "AISLANTE", "MÁXIMA PRIVACIDAD"],
    advantages: [
      "Bloqueo total del paso de luz a través de la tela",
      "Protege contra el frío en invierno y el calor en verano",
      "Garantiza privacidad absoluta en cualquier momento del día",
      "Mejora la acústica reduciendo ruidos exteriores",
    ],
    advice:
      "Aunque la tela sea 100% opaca, siempre hay una pequeña filtración de luz por los bordes laterales (halo de luz). Si deseas oscuridad total (100% real), recomendamos instalarla por fuera del marco (pasando 10cm por lado) y agregar una fascia superior.",
    features: [
      {
        title: "Recubrimiento Ahulado",
        description:
          "La parte trasera de la tela cuenta con capas poliméricas que bloquean los rayos UV.",
        icon: "shield",
      },
      {
        title: "Limpieza Sencilla",
        description:
          "Su superficie plastificada o tratada permite limpiarla con un paño húmedo fácilmente.",
        icon: "droplet",
      },
      {
        title: "Confort Térmico",
        description:
          "Reduce considerablemente el uso de aire acondicionado al bloquear el calor directo.",
        icon: "thermometer",
      },
    ],
    techSpecs: [
      {
        title: "Composición",
        description:
          "Típicamente 100% Poliéster o Fibra de Vidrio con recubrimiento de PVC / Acrílico.",
      },
      {
        title: "Opciones de Color",
        description:
          "El frente es decorativo (variedad de colores), mientras que la parte posterior suele ser blanca o a tono para uniformidad desde la calle.",
      },
    ],
    gallery: [],
  },
  {
    slug: "malla-screen",
    name: "Persianas Malla Screen",
    category: "Persianas",
    description:
      "Control solar y privacidad sin perder la vista al exterior. Tejidos perforados de alta tecnología que filtran los rayos UV manteniendo tus espacios frescos y luminosos.",
    image: "https://abaser.co/wp-content/uploads/elementor/thumbs/enrollable-galeria-home-pyc5w3k8pofq3778at1kttfqzc890t1tvcq8cfejd4.jpg",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop",
    heroAdjectives: ["TÉRMICA", "TRANSLÚCIDA", "MODERNA"],
    advantages: [
      "Permite ver hacia afuera mientras protege de miradas exteriores (de día)",
      "Reduce significativamente los reflejos en pantallas de TV y computadoras",
      "Filtra hasta el 95% de los rayos UV, protegiendo pisos y muebles",
      "Material extremadamente duradero y lavable",
    ],
    advice:
      "Cuidado con la privacidad nocturna: por la noche, cuando hay luz adentro y oscuridad afuera, el efecto se invierte y desde afuera se puede ver hacia el interior. En habitaciones, siempre acompáñala de un Black Out (sistema Día y Noche).",
    features: [
      {
        title: "Visibilidad Exterior",
        description:
          "Conexión con el exterior que evita la sensación de encierro.",
        icon: "eye",
      },
      {
        title: "Filtrado UV",
        description:
          "Múltiples opciones de apertura (1%, 3%, 5%, 10%) según la cantidad de sol directo.",
        icon: "sun",
      },
      {
        title: "Antibacteriano",
        description:
          "Tejidos técnicos ideales para cocinas o ambientes húmedos, no generan hongos.",
        icon: "shield-check",
      },
    ],
    techSpecs: [
      {
        title: "Porcentaje de Apertura",
        description:
          "El 1% ofrece máxima privacidad térmica; el 5% es el balance perfecto; el 10% maximiza la vista y la entrada de luz.",
      },
      {
        title: "Material",
        description:
          "Hilos de fibra de vidrio o poliéster recubiertos de PVC, lo que las hace ignífugas y muy resistentes al desgaste.",
      },
    ],
    gallery: ["/images/malla-sombra.jpeg"],
  },
  {
    slug: "verticales",
    name: "Persianas Verticales",
    category: "Persianas",
    description:
      "Control de luz y privacidad absoluto, ideal para grandes ventanales, canceles corredizos y proyectos comerciales contemporáneos.",
    image: "https://sophiestore.pe/wp-content/uploads/2024/11/persianas-verticales-crema.jpg",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1932&auto=format&fit=crop",
    heroAdjectives: ["TRADICIONAL", "PRACTICIDAD", "ECONÓMICA"],
    advantages: [
      "Rotación de 180 grados para un direccionamiento de luz perfecto",
      "Ideal para puertas corredizas, ya que se pueden recoger hacia un lado",
      "Efecto visual que hace ver los techos más altos",
      "Las tabletas individuales son fáciles de reemplazar si se dañan",
    ],
    advice:
      "Son la mejor opción cuando se tiene un cancel con mucho tránsito hacia un patio o balcón. Opta por tabletas de tela rígida para un aspecto más cálido residencial, o tabletas de PVC para alto tráfico y limpieza rápida.",
    features: [
      {
        title: "Tabletas Independientes",
        description:
          "Láminas verticales de 90mm que cuelgan del riel superior de manera uniforme.",
        icon: "menu",
      },
      {
        title: "Giros de 180°",
        description:
          "Permiten dirigir la entrada del sol o cerrarse completamente empalmándose.",
        icon: "rotate-cw",
      },
      {
        title: "Aperturas Flexibles",
        description:
          "Pueden abrir hacia la derecha, hacia la izquierda, o dividirse al centro.",
        icon: "expand",
      },
    ],
    techSpecs: [
      {
        title: "Riel",
        description:
          "Riel de aluminio anodizado con carros autolubricados y cordón de desplazamiento de alta resistencia.",
      },
      {
        title: "Material de Tabletas",
        description:
          "Disponibles en PVC (fácil lavado, lisas o texturizadas) o en tela (tratadas con apresto para mantener la rigidez).",
      },
    ],
    gallery: [],
  },
  {
    slug: "shangri-la",
    name: "Persianas Shangri-la",
    category: "Persianas",
    description:
      "Suavidad visual de una cortina tradicional con la funcionalidad precisa de una persiana. Compuesta por láminas horizontales de tela suspendidas entre dos velos transparentes.",
    image: "https://wcp2api.hdlao.com/storage/1927/conversions/cortina-shangri-la_2-optimized.webp",
    heroImage: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop",
    heroAdjectives: ["INNOVADORA", "SUAVE", "ELEGANTE"],
    advantages: [
      "Efecto flotante mágico que transforma la luz exterior en un brillo suave",
      "Diseño de ultra lujo, ideal para destacar la decoración de salas de estar",
      "Al cerrarse, las láminas se superponen ofreciendo excelente privacidad",
      "Al enrollarse totalmente, quedan ocultas dentro de un cabezal discreto",
    ],
    advice:
      "Es una de las persianas más delicadas debido a sus velos transparentes. No se recomienda en espacios con fuertes corrientes de aire con las ventanas abiertas, ni en lugares donde mascotas puedan rasgar la tela. Su limpieza debe ser siempre en seco o con plumero.",
    features: [
      {
        title: "Láminas Suspendidas",
        description:
          "Franjas de tela horizontales que giran como una persiana veneciana pero sin cordones visibles.",
        icon: "layers",
      },
      {
        title: "Difusión de Luz",
        description:
          "Los velos anterior y posterior suavizan los rayos solares, eliminando brillos molestos.",
        icon: "sun",
      },
      {
        title: "Alta Decoración",
        description:
          "Aporta un nivel de sofisticación inigualable por otros sistemas enrollables.",
        icon: "star",
      },
    ],
    techSpecs: [
      {
        title: "Mecanismo",
        description:
          "Mecanismo único que permite enrollar la persiana completa o detenerla y girar las láminas en posición baja.",
      },
      {
        title: "Protección UV",
        description:
          "Con las láminas abiertas, bloquea hasta el 88% de los rayos UV; cerrada, hasta el 99%.",
      },
    ],
    gallery: [],
  },
  // Toldos
  {
    slug: "estilo-frances",
    name: "Toldo Estilo Francés",
    category: "Toldos",
    description:
      "Elegancia clásica europea para terrazas, ventanas y comercios. Su diseño curvo o de ángulo fijo añade un toque arquitectónico distintivo y permanente a cualquier fachada.",
    image: "https://www.toldospaulistano.com.br/images/articles/toldo-para-porta-de-entrada-em-sao-paulo.webp",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1964&auto=format&fit=crop",
    heroAdjectives: ["CLÁSICO", "EUROPEO", "DISTINTIVO"],
    advantages: [
      "Agrega valor arquitectónico e identidad visual a la propiedad",
      "Estructura fija altamente resistente a vientos y lluvias",
      "Protege marcos de ventanas y puertas de la intemperie",
      "Excelente medio de señalización para negocios si se rotula",
    ],
    advice:
      "Al ser fijos, asegúrate de que la inclinación y la altura inferior no estorben el paso ni la apertura de puertas. Son ideales para vestir comercios boutique, cafeterías o residencias con estilo neoclásico.",
    features: [
      {
        title: "Estructura Fija",
        description:
          "Marcos de aluminio o acero soldados a medida, recubiertos de tela tensada.",
        icon: "anchor",
      },
      {
        title: "Diseño 3D",
        description:
          "Ofrece volumen (forma de cúpula, cuña o curvatura) rompiendo paredes planas.",
        icon: "box",
      },
      {
        title: "Rotulación",
        description:
          "Las faldillas o el cuerpo central son perfectos para imprimir logos o textos.",
        icon: "pen-tool",
      },
    ],
    techSpecs: [
      {
        title: "Material de Cubierta",
        description:
          "Generalmente lonas acrílicas teñidas en masa (resistentes a la decoloración solar) o vinílicas (100% impermeables).",
      },
      {
        title: "Estructura",
        description:
          "Estructura interna en perfiles tubulares ligeros pero sumamente rígidos, esmaltados para evitar corrosión.",
      },
    ],
    gallery: [
      "/images/toldo-estilo-frances.jpeg",
      "/images/toldo-estilo-frances-negro.jpeg",
    ],
  },
  {
    slug: "retractiles",
    name: "Toldos Retráctiles",
    category: "Toldos",
    description:
      "Flexibilidad total para tus espacios al aire libre. Sus brazos extensibles permiten tener sombra cuando la necesitas y cielo abierto cuando lo prefieres.",
    image: "https://static.wixstatic.com/media/7a0311_e062df196ba94d7b9dd6cb58202a13f3~mv2.jpg",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop",
    heroAdjectives: ["FLEXIBLE", "FUNCIONAL", "MOTORIZADO"],
    advantages: [
      "Extiende el área habitable hacia patios y terrazas",
      "Se guarda discretamente cuando no está en uso",
      "Reduce el calor al interior al bloquear el sol antes de tocar el cristal",
      "No requiere postes ni apoyos en el suelo, liberando el paso",
    ],
    advice:
      "El toldo retráctil es excelente para sol y lluvia ligera, pero debes cerrarlo ante vientos fuertes o tormentas severas. Recomendamos altamente invertir en un 'Sensor de Viento' para que el toldo se guarde solo y evites daños si olvidas hacerlo.",
    features: [
      {
        title: "Brazos Articulados",
        description:
          "Brazos de aluminio con resortes de tensión y cables internos que empujan el toldo hacia afuera.",
        icon: "maximize",
      },
      {
        title: "Cofre Opcional",
        description:
          "Puedes elegir un sistema con 'Cofre' que encapsula y protege la lona y brazos 100% al cerrarse.",
        icon: "box",
      },
      {
        title: "Automatización",
        description:
          "Motorizado con control remoto y compatibilidad con sensores climáticos (sol/viento).",
        icon: "zap",
      },
    ],
    techSpecs: [
      {
        title: "Área de Cobertura",
        description:
          "Se pueden fabricar en anchos de hasta 6-7 metros y proyecciones de hasta 3.5 metros por módulo.",
      },
      {
        title: "Telas",
        description:
          "Lonas acrílicas con tratamiento repelente al agua, moho y filtración de 99% UV, manteniendo los colores vivos.",
      },
    ],
    gallery: ["/images/toldo-plegable.jpeg"],
  },
  {
    slug: "caida-vertical",
    name: "Toldos Caída Vertical",
    category: "Toldos",
    description:
      "Protección solar eficiente con un diseño minimalista. Ideales para cerrar perimetralmente terrazas, balcones y pérgolas de manera elegante y funcional.",
    image: "https://images.pexels.com/photos/34277692/pexels-photo-34277692.jpeg",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1932&auto=format&fit=crop",
    heroAdjectives: ["MINIMALISTA", "PROTECCIÓN", "PERIMETRAL"],
    advantages: [
      "Convierte terrazas abiertas en áreas útiles sin importar el sol lateral",
      "Operación muy sencilla de bajar y subir como una gran persiana",
      "Anclaje inferior manual para evitar que la lona golpee con el viento",
      "Puede instalarse con Malla Screen para mantener ventilación y vista",
    ],
    advice:
      "Es la solución ideal para el sol del atardecer (sol poniente) que entra casi horizontal, donde un toldo de techo no serviría. Asegúrate de instalar los seguros de piso para mantener la tensión de la lona cuando hay brisa.",
    features: [
      {
        title: "Diseño Vertical",
        description:
          "Cae por gravedad desde el tubo superior hasta el piso o barandal.",
        icon: "arrow-down",
      },
      {
        title: "Fijación Inferior",
        description:
          "Incluye ganchos o argollas en el contrapeso para anclaje firme al nivel deseado.",
        icon: "anchor",
      },
      {
        title: "Diversidad de Tejidos",
        description:
          "Puede ser lona acrílica, malla screen o vinilo transparente (para lluvias sin perder vista).",
        icon: "layers",
      },
    ],
    techSpecs: [
      {
        title: "Estructura",
        description:
          "Tubo de aluminio robusto sin cajón guía. Opcionalmente puede tener cables de acero laterales como guías sencillas.",
      },
      {
        title: "Manejo",
        description:
          "Manual mediante manivela (redactor de peso) o motorizado tubular.",
      },
    ],
    gallery: [
      "/images/toldo-caida-libre.jpeg",
      "/images/toldo-caida-libre-negro.jpeg",
    ],
  },
  {
    slug: "90-grados",
    name: "Toldo 90 Grados",
    category: "Toldos",
    description:
      "Protección que se adapta a las ventanas. Una solución donde el brazo cae verticalmente y luego se proyecta formando un ángulo que permite sombra y ventilación a la vez.",
    image: "https://www.rappachiani.com.ar/img/toldos/brazo-fijo/toldo-brazo-fijo-05.jpg",
    heroImage: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop",
    heroAdjectives: ["GEOMÉTRICA", "RÍGIDO", "FUNCIONAL"],
    advantages: [
      "Permite abrir la ventana hacia afuera y mantener ventilación",
      "Cubre el vidrio del sol directo pero no tapa la vista hacia abajo",
      "Mayor estabilidad frente al viento gracias a la tensión del brazo recto",
      "Diseño muy característico en residencias y fachadas comerciales",
    ],
    advice:
      "Ideal para ventanas de recámaras o cocinas que reciben mucho sol pero donde necesitas seguir abriendo la hoja de cristal. Su ángulo crea una cámara de aire que enfría la ventana muy eficientemente.",
    features: [
      {
        title: "Brazo Pivote",
        description:
          "El brazo se fija a la pared lateral a media altura de la ventana y empuja la lona hacia afuera.",
        icon: "maximize",
      },
      {
        title: "Ángulo Variable",
        description:
          "Puede bajarse totalmente plano (180°) o quedar en proyección (90° a 135°).",
        icon: "activity",
      },
      {
        title: "Economía de Espacio",
        description:
          "No requiere gran estructura, es ligero y estéticamente discreto al cerrarse.",
        icon: "minimize",
      },
    ],
    techSpecs: [
      {
        title: "Resistencia",
        description:
          "Gracias al punto de apoyo triangular, soporta vientos moderados mejor que un brazo articulado grande.",
      },
      {
        title: "Tensión",
        description:
          "Mecanismo interno con resortes en los brazos que mantienen la lona permanentemente tensa.",
      },
    ],
    gallery: [],
  },
  {
    slug: "zip",
    name: "Toldo Zip",
    category: "Toldos",
    description:
      "El sistema vertical definitivo. La tela se desliza cautiva dentro de unas guías laterales mediante un sistema de cremallera, haciéndolo altamente resistente al viento y ofreciendo un cierre 100% hermético.",
    image: "https://www.arquimaster.com.ar/web/wp-content/uploads/2016/04/toldos_universal_zip.jpg",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1964&auto=format&fit=crop",
    heroAdjectives: ["RESISTENCIA", "HERMÉTICO", "PREMIUM"],
    advantages: [
      "Resistencia a vientos de hasta 100 km/h al no dejar que la lona 'flanee'",
      "Cierre lateral hermético que bloquea insectos, lluvia y polvo",
      "Ideal para climatizar pérgolas (retiene aire acondicionado o calefacción)",
      "La lona siempre lucirá perfectamente tensa sin arrugas",
    ],
    advice:
      "Si buscas cerrar una terraza para usarla todo el año como comedor o sala exterior, el Toldo ZIP es la mejor inversión del mercado. En tela transparente (PVC) te aísla del clima severo; en tela Malla Screen, frena los vientos y el sol molestos.",
    features: [
      {
        title: "Sistema de Cremallera",
        description:
          "Los bordes de la lona tienen un cierre soldado que va asegurado dentro de los perfiles laterales.",
        icon: "lock",
      },
      {
        title: "Cajón Oculto",
        description:
          "Rollo contenido en un cofre de aluminio extruido muy elegante y compacto.",
        icon: "box",
      },
      {
        title: "Alta Ingeniería",
        description:
          "Sistemas mayormente motorizados por la tensión que manejan, asegurando suavidad de uso.",
        icon: "settings",
      },
    ],
    techSpecs: [
      {
        title: "Resistencia al Viento",
        description:
          "Certificaciones clase 3 a 6 (dependiendo la dimensión), el más resistente en sistemas verticales.",
      },
      {
        title: "Dimensiones Máximas",
        description:
          "Permite cubrir grandes claros (hasta 6m de ancho) sin divisiones ni soportes intermedios.",
      },
    ],
    gallery: [],
  },
  {
    slug: "domo",
    name: "Toldo Domo",
    category: "Toldos",
    description:
      "Estilo arquitectónico curvo o en forma de cuarto de esfera que brinda protección duradera, estética y personalidad a accesos, ventanas o escaparates.",
    image: "https://cdn1.vente-unique.com/thumbnails/product/3623/3623132/large/0/42014529.webp",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop",
    heroAdjectives: ["CLÁSICO", "ICÓNICO", "DURADERO"],
    advantages: [
      "Protección por sus 3 lados contra lluvia lateral y sol oblicuo",
      "Da un aspecto de hotel boutique o restaurante de lujo clásico",
      "Ideal para entradas principales protegiendo a la gente mientras espera",
      "Muy resistente al agua ya que su forma escurre la lluvia inmediatamente",
    ],
    advice:
      "Muy recomendado para negocios de hostelería o puertas de arco medio. A diferencia de otros toldos curvos retráctiles, los domos en forma de esfera suelen ser fijos por su complejidad, lo cual garantiza una altísima durabilidad pero requiere permisos de fachada en algunos residenciales.",
    features: [
      {
        title: "Forma 3D",
        description:
          "Estructura semiesférica de varios aros que tensionan la tela de forma magistral.",
        icon: "globe",
      },
      {
        title: "Protección Envolvente",
        description:
          "Cubre por arriba y por los laterales, evitando filtraciones en los costados.",
        icon: "shield",
      },
      {
        title: "Estética Atractiva",
        description:
          "Su diseño voluminoso atrae miradas, ideal para resaltar negocios en la calle.",
        icon: "star",
      },
    ],
    techSpecs: [
      {
        title: "Fabricación",
        description:
          "Confección artesanal de la lona en gajos termosoldados para evitar filtraciones de agua en las costuras.",
      },
      {
        title: "Perfiles",
        description:
          "Típicamente fabricado con aros de aluminio rolados a medida para no oxidarse con la humedad constante.",
      },
    ],
    gallery: [],
  },
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
    subtitle: "Protección para exteriores",
    category: "Toldos",
  },
];
