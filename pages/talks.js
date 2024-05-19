import React, { useState } from 'react';
import Image from 'next/image';
import BrandStripTitle from '../components/BrandStripTitle';
import Contact from '../components/Contact';
import Modal from '../components/Modal';
import PlayIcon from '../components/icons/PlayIcon';
import Newsletter from '../components/Newsletter';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Talks({ globalData }) {

const videos = [
  {
    id: 1,
    title: '¿Podemos cambiar la manera en la que trabajamos?',
    src: 'https://www.youtube.com/embed/Tl5-qt8HioY',
    thumbnail: '/img/talk-1.jpg',
  },
  {
    id: 2,
    title: 'Cambiar la forma en que el mundo trabaja',
    src: 'https://player.vimeo.com/video/821407685',
    thumbnail: '/img/talk-2.jpg',
  },
  {
    id: 3,
    title: 'El secreto detrás del éxito',
    src: 'https://www.youtube.com/embed/k7YyYIaKENA',
    thumbnail: '/img/talk-3.jpg',
  },
  {
    id: 4,
    title: 'Cómo fomentar la inclusión en el Trabajo',
    src: 'https://www.youtube.com/embed/erz2vLn0smY',
    thumbnail: '/img/talk-4.jpg',
  }
];

const [selectedVideo, setSelectedVideo] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = (videoId) => {
    const video = videos.find((video) => video.id === videoId);
    setSelectedVideo(video.src);
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
};

  return (


    <Layout backgroundColor="bg-green">
      <SEO title={globalData.name + " | Talks"} description="¿Quieres inspirar a tu audiencia? Envíame un mensaje para solicitar una cotización." />
      <GradientBackground variant="small" className="absolute top-0 -right-50 opacity-100 !-top-50" />
        <main className="flex gap-14 pt-28 lg:pt-48 mb-12 max-w-7xl mx-auto px-[30px] z-10 w-full"> 
            <div className='flex lg:mb-4 mr-auto w-full'>
                <h2 className="text-3xl lg:text-5xl text-primary relative uppercase">
                    <span className='z-10 relative'>Talks</span>
                    <Image src="/img/title-line-short.svg" width={100} height={40} alt="" className="absolute -bottom-5 z-0 left-0 right-0 w-full object-contain" />
                </h2>
            </div>   
        </main>
        <section className="bg-[url('/img/gradient-bg.svg')] bg-no-repeat bg-contain bg-left bg-bottom w-full px-[20px]">
            <div className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                {videos.map((video) => (
                    <div key={video.id} onClick={() => openModal(video.id)} className='rounded-[24px] lg:rounded-[36px] overflow-hidden cursor-pointer relative group transition duration-300 w-full'>
                        <Image
                        src={video.thumbnail}
                        alt={`Thumbnail for video ${video.id}`}
                        width={650} // Ancho de la imagen en píxeles
                        height={180} // Altura de la imagen en píxeles
                        className='w-full h-auto object-cover group-hover:opacity-90 transition duration-300'
                        />
                        <div className='rounded-full w-14 h-14 lg:w-20 lg:h-20 absolute bottom-1/3 left-4 lg:left-8 transform bg-white bg-opacity-20 flex justify-center items-center group-hover:bg-opacity-80 group-hover:bg-yellow transition duration-300'>
                            <PlayIcon className="w-4 h-4 lg:w-8 lg:h-8 text-white -mr-1.5" />
                        </div>
                        <h2 className="pr-4 absolute bottom-4 lg:bottom-8 left-4 lg:left-8 text-white group-hover:text-yellow text-xs lg:text-lg uppercase !leading-4 lg:!leading-6">{video.title}</h2>
                    </div>
                ))}
                <Modal isOpen={isModalOpen} onClose={closeModal} src={selectedVideo} />
            </div>
            <div className='w-full flex flex-col gap-3 py-24 text-center items-center max-w-2xl mx-auto text-white'>
                <h4 className='uppercase text-xl lg:text-2xl z-1 relative !leading-5 lg:!leading-6'>¿Quieres <span className='text-yellow'>inspirar a tu audiencia?</span></h4>
                <p className="text-lg tracking-wide mb-6 !leading-5">Envíame un mensaje para solicitar una cotización.</p>
                <Contact />
            </div>
        </section>
        <BrandStripTitle />
        <Newsletter />
    </Layout>
  );
}

export function getStaticProps() {
    const globalData = getGlobalData();
  
    return { props: { globalData } };
  }
  
