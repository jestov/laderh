import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import React, { useState } from "react";
import DownloadIcon from '../components/icons/DownloadIcon';
import Image from 'next/image'; 
import BrandStripTitle from '../components/BrandStripTitle';
import Button from '../components/Button';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';


export default function Index({ globalData }) {

  return (
    <Layout backgroundColor="bg-purpledark">
      <SEO title={globalData.name + " | Contacto"} description="Háblale a la de RH" />
      <GradientBackground
        variant="large"
        className="fixed top-20"
      />
      <main className="flex flex-col gap-8 lg:gap-16 pt-28 lg:pt-56 max-w-7xl mx-auto items-start px-[20px] z-1 relative w-full">
        <div className='w-full'>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center z-2'>
            <h2 className="text-4xl lg:text-5xl text-primary relative uppercase">
                <span className='z-10 relative'>Contacto</span>
                <Image src="/img/title-line.svg" width={120} height={50} alt="" className="absolute -bottom-2 lg:-bottom-5 z-0 left-0 right-0 w-full object-contain" />
            </h2>
            <div className='flex'>
              <h3 className='uppercase text-lg lg:text-xl text-white z-2 relative'>Háblale a La de RH</h3>
              <Image className='-ml-7 -mb-4' src="/img/contact.svg" width={40} height={40} alt="" />
            </div>
          </div>  
        </div>
        <div className='flex flex-col md:flex-row gap-4 lg:gap-14 lg:py-8'>
          <div className='flex flex-col gap-4 lg:gap-8 items-start w-full py-4'>
            <h2 className="text-lg lg:text-2xl text-white uppercase !leading-6">
              ¿Te interesa colaborar conmigo?
            </h2>
            <p className="text-lg lg:text-xl opacity-90 text-white max-w-xl !leading-6">
              Si quieres compartir alguna idea, colaborar conmigo en redes, participar en alguno de mis podcasts, o contar con la participación de  La de RH en tu empresa o escuela, ¡contáctame!
              <br /><br />
              <b>Será muy grato leerte.</b>
            </p>
            <div className='mt-auto border-t border-white border-opacity-20 py-8 flex flex-col gap-4 items-start hidden lg:inline-flex'>
              <h4 className='text-white uppercase text-lg lg:text-xl z-1'>Colaboraciones</h4>
              <p className="text-xl opacity-90 text-white max-w-xl">
                Descarga mi media kit para conocer costos de colaboración.
              </p>
              <Button href="#" className="bg-pink text-white flex gap-10 bg-purple hover:bg-pinklight"><span>Descargar media kit</span> <DownloadIcon className="ml-4" /></Button>
            </div>
          </div>
        <Contact />
        <div className='flex flex-col gap-4 lg:gap-8 items-start w-full py-4 inline-flex lg:hidden'>
            <div className='mt-auto border-t border-white border-opacity-20 py-8 flex flex-col gap-4 items-start'>
              <h4 className='text-white uppercase text-lg lg:text-xl z-1'>Colaboraciones</h4>
              <p className="text-xl opacity-90 text-white max-w-xl">
                Descarga mi media kit para conocer costos de colaboración.
              </p>
              <Button href="#" className="bg-pink text-white flex gap-10 bg-purple hover:bg-pinklight"><span>Descargar media kit</span> <DownloadIcon className="ml-4" /></Button>
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
