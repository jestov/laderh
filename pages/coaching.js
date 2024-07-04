import Layout, { GradientBackground } from '../components/Layout';
import React, { useEffect, useState } from 'react';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image'; 
import BrandStripTitle from '../components/BrandStripTitle';
import Newsletter from '../components/Newsletter';
import ChevronIcon from '../components/icons/ChevronIcon';
import Button from '../components/Button';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='w-full rounded-[36px] overflow-hidden'>
      <div className='calendly-inline-widget w-full min-h-[80vh] h-[50vh] rounded-[36px]' data-url="https://calendly.com/doravaldez/coaching-con-la-de-rh?primary_color=F5709A"></div>
    </div>
  );
};

export default function Index({ globalData }) {
  const paquetes = [
    {
      title: "Impulso Inicial",
      description: "Este paquete está diseñado para aquellos que están comenzando su viaje de crecimiento profesional y buscan un impulso inicial hacia el éxito.",
      contentTitle: "Contenido:",
      items: [
        "• Sesión inicial de Diagnóstico (1 hora)",
        "• Se recomiendan 2 horas de Coaching al mes por Zoom"
      ],
      modality: "Modalidad: Virtual",
      additionalInfo: "Ideal para quienes desean explorar el coaching y obtener una visión clara de sus objetivos profesionales."
    },
    {
      title: "Evolución Estratégica",
      description: "Perfecto para individuos que buscan profundizar en su desarrollo profesional y requieren una guía más intensiva y personalizada.",
      contentTitle: "Contenido:",
      items: [
        "• Sesión inicial de Diagnóstico (1 hora)",
        "• Se recomienda 4 horas de Coaching al mes por Zoom"
      ],
      modality: "Modalidad: Virtual",
      additionalInfo: "Este paquete es ideal para quienes están listos para dar pasos significativos en su carrera y necesitan un acompañamiento más cercano."
    },
    {
      title: "Transformación Integral",
      description: "Diseñado para líderes y profesionales que buscan una transformación completa y un acompañamiento exhaustivo en su camino hacia la excelencia.",
      contentTitle: "Contenido:",
      items: [
        "• Sesión inicial de Diagnóstico (1 hora)",
        "• Se recomiendan 6 horas de Coaching al mes por Zoom (se puede realizar una sesión de manera presencial)"
      ],
      modality: "Modalidad: Virtual",
      additionalInfo: "Este es el paquete más completo, ofreciendo un apoyo constante y una inmersión profunda en el desarrollo de habilidades y estrategias para un crecimiento profesional sostenido."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout backgroundColor="bg-pinklight">
      <SEO title={globalData.name + " | Coaching"} description="Te invito a unirte a mis sesiones de coaching virtual, donde compartiré contigo más de 20 años de experiencia en el campo del Capital Humano." />
      <GradientBackground
        variant="large"
        className="fixed top-20"
      />
      
      <main className="flex flex-col pt-28 lg:pt-48 max-w-7xl mx-auto items-start px-[30px] z-1 gap-6 md:gap-10 relative w-full">
        <div className='w-full flex flex-col gap-12'>
          <div className='flex flex-col md:flex-row gap-0 md:gap-4 items-center z-2 gap-12 justify-between'>
            <div className='flex flex-col md:flex-row gap-3 md:gap-4 items-center z-2'>
              <h2 className="text-4xl lg:text-5xl text-primary relative uppercase">
                  <span className='z-10 relative'>Coaching</span>
                  <Image src="/img/title-line.svg" width={120} height={50} alt="" className="absolute -bottom-2 md:-bottom-5 z-0 left-0 right-0 w-full object-contain" />
              </h2>
              <div className='flex gap-2 items-center justify-center'>
                  <h3 className='uppercase text-xl text-white z-2 relative'>Con La de RH</h3>
                  <Image className='-ml-8 -mb-6 w-[55px] md:w-[90px]' src="/img/star.svg" width={90} height={90} alt="" />
              </div>
              <Button href="#calendly" className="bg-pinkstrong px-8 text-white hover:bg-pinkcontrast mt-6 md:hidden">Agendar sesión</Button>
            </div>
          </div>  
          <div className='flex flex-col gap-4'>
            <p className='text-base text-white font-medium max-w-3xl'>
              El Coaching con La de RH es un proceso colaborativo y reflexivo, donde te guío para descubrir y desarrollar tus capacidades profesionales. A través de sesiones personalizadas, te proporciono herramientas y estrategias adaptadas a tus necesidades específicas, facilitando tu crecimiento y desarrollo en el entorno laboral.
            </p>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-10 text-white'>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl mb-6">Paquetes</h1>
            {paquetes.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => handleToggle(index)}
                  className={`w-full flex justify-between items-center text-left p-6 text-xl font-medium border border-white border-opacity-20 rounded-[24px] hover:bg-white hover:bg-opacity-5 transition duration-500 focus:outline-none ${activeIndex === index ? 'text-primary bg-white bg-opacity-10' : ''}`}
                >
                  <span>{item.title}</span>
                  <ChevronIcon className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {activeIndex === index && (
                  <div className="p-6 text-base font-medium">
                    <p className="description mb-2">{item.description}</p>
                    <p className="additional-info mb-2">{item.additionalInfo}</p>
                    <p className="section-title my-4 font-semibold text-lg">{item.contentTitle}</p>
                    {item.items.map((text, index) => (
                      <p key={index} className="item mb-1">{text}</p>
                    ))}
                    <p className="modality my-4 font-semibold text-lg">{item.modality}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='calendly w-full md:w-1/2 bg-black bg-opacity-10 rounded-[32px]' id='calendly'>
            <CalendlyWidget />
          </div>
        </div>
      </main>
      <BrandStripTitle />
      <Newsletter />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData }};
}
