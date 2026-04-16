"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cómo hago valida mi garantía?",
    answer: "Para hacer válida su garantía, por favor contáctenos con su recibo o comprobante a través de nuestro formulario o a nuestros números de atención. Nuestro equipo programará una visita de revisión."
  },
  {
    question: "¿Por qué los tejidos de la persiana Sheer Elegance se separan demasiado?",
    answer: "Es un comportamiento natural del diseño del tejido en ciertas longitudes para permitir la regulación de la luz, sin embargo, nosotros evaluamos la correcta alineación durante la instalación milimétrica."
  },
  {
    question: "¿Qué hago si mi persiana automatizada (Motor de baterías) no funciona?",
    answer: "Primero verifique si las baterías tienen carga adecuada o precisan de un reemplazo. Si el problema persiste, póngase en contacto con nosotros para proveerle soporte técnico directo."
  },
  {
    question: "Mi persiana o cortina está sucia. ¿Cuál es la mejor manera para limpiarla?",
    answer: "Evite utilizar productos químicos abrasivos. Recomendamos aspirar con un cepillo suave, o tratar manchas sutilmente con un paño húmedo y jabón neutro, dependiendo del material."
  },
  {
    question: "¿También manejan persianas verticales de PVC?",
    answer: "Manejamos alternativas de alta gama. Contamos con una diversidad de opciones premium en distintas texturas que superan la estética y durabilidad del PVC convencional."
  },
  {
    question: "¿Cuanto cuestan las persianas?",
    answer: "El valor depende completamente de las dimensiones arquitectónicas, el tipo de tejido Premium o Blackout seleccionado y el mecanismo (manual o inteligente). Le sugerimos agendar una cotización personalizada."
  },
  {
    question: "¿También hacen reparaciones de persianas, cortinas o toldos?",
    answer: "Ofrecemos mantenimiento de grado especializado y ciertas reparaciones previo estudio de la factibilidad, enfocado principalmente a los sistemas instalados por nuestra firma."
  },
  {
    question: "¿También hacen instalaciones de persianas, cortinas o toldos?",
    answer: "Esa es nuestra especialidad. Contamos con ingenieros de instalación que garantizan la precisión absoluta en cada espacio."
  },
  {
    question: "¿En dónde se ubican?",
    answer: "Nuestro servicio es primordialmente a domicilio para medir con exactitud los requerimientos de tus ventanales, ofreciendo asesorías en toda la región principal y sus alrededores."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-12 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <p className="font-sans text-secondary tracking-[0.2em] uppercase text-xs mb-4">
            Aclaraciones
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="border-t border-outline/30">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-outline/30">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 text-left flex justify-between items-center focus:outline-none cursor-pointer group"
              >
                <span className="font-serif text-sm md:text-lg text-white group-hover:text-secondary transition-colors duration-500 pr-8">
                  {faq.question}
                </span>
                <span className="text-white relative flex items-center justify-center w-4 h-4 ml-4 flex-shrink-0">
                  <span 
                    className={`absolute w-full h-[1px] bg-white transition-all duration-300 ${
                      openIndex === index ? "bg-secondary" : ""
                    }`} 
                  />
                  <span 
                    className={`absolute w-[1px] h-full bg-white transition-all duration-300 ${
                      openIndex === index ? "rotate-90 bg-secondary opacity-0" : "opacity-100"
                    }`} 
                  />
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-sans text-white/70 text-xs md:text-sm leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
