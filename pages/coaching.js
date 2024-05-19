import Layout, { GradientBackground } from '../components/Layout';
import React, { useEffect, useState } from 'react';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image'; 
import BrandStripTitle from '../components/BrandStripTitle';
import Newsletter from '../components/Newsletter';
import ButtonArrowReverse from '../components/ButtonArrowReverse';

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

  return (
    <Layout backgroundColor="bg-pinklight">
      <SEO title={globalData.name + " | Coaching"} description="Te invito a unirte a mis sesiones de coaching virtual, donde compartiré contigo más de 20 años de experiencia en el campo del Capital Humano." />
      <GradientBackground
        variant="large"
        className="fixed top-20"
      />
      
      <main className="flex flex-col pt-28 lg:pt-48 max-w-7xl mx-auto items-start px-[30px] z-1 gap-6 md:gap-0 relative w-full">
        <div className='w-full'>
          <div className='flex flex-col md:flex-row gap-0 md:gap-4 items-center justify-center z-2'>
            <h2 className="text-4xl lg:text-5xl text-primary relative uppercase">
                <span className='z-10 relative'>Coaching</span>
                <Image src="/img/title-line.svg" width={120} height={50} alt="" className="absolute -bottom-2 md:-bottom-5 z-0 left-0 right-0 w-full object-contain" />
            </h2>
            <div className='flex gap-2 items-center justify-center'>
                <h3 className='uppercase text-xl text-white z-2 relative'>Con La de RH</h3>
                <Image className='-ml-8 -mb-6' src="/img/star.svg" width={90} height={90}  className="w-[55px] md:w-[90px]"/>
            </div>
          </div>  
        </div>
        <CalendlyWidget />
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
