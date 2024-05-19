import Layout, { GradientBackground } from '../components/Layout';
import React, { useEffect, useState } from 'react';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image'; 
import ButtonArrowReverse from '../components/ButtonArrowReverse';
import BrandStripTitle from '../components/BrandStripTitle';
import Newsletter from '../components/Newsletter';



export default function Index({ globalData }) {

  return (
    <Layout backgroundColor="bg-pinklight">
      <SEO title={globalData.name + " | Coaching"} description="Te invito a unirte a mis sesiones de coaching virtual, donde compartiré contigo más de 20 años de experiencia en el campo del Capital Humano." />
      <GradientBackground
        variant="large"
        className="fixed top-20"
      />
      <main className="flex flex-col py-28 lg:pt-64 lg:pb-48 max-w-7xl mx-auto items-start px-[30px] z-1 gap-6 md:gap-0 relative w-full items-center justify-center lg:min-h-[80vh]">
        <div className='w-full'>
          <div className='flex flex-col gap-0 md:gap-4 items-center justify-center z-2'>
            <h2 className="text-4xl lg:text-5xl text-primary relative uppercase">
                <span className='z-10 relative'>UPS!</span>
                
            </h2>
            <div className='flex flex-col gap-10 items-center justify-center'>
                <h3 className='uppercase text-xl text-white z-2 relative'>La página que estás buscando no existe</h3>
                <ButtonArrowReverse href="/" className="text-white bg-white bg-opacity-20 hover:bg-opacity-30 !text-[10px] lg:text-[11px]">Volver al Inicio</ButtonArrowReverse>
      
            </div>
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
