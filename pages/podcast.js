import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../components/Modal';
import PlayIcon from '../components/icons/PlayIcon';
import Button from '../components/Button';
import YoutubeIcon from '../components/icons/YoutubeIcon';
import AppleMusicIcon from '../components/icons/AppleMusicIcon';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import SpotifyIcon from '../components/icons/SpotifyIcon';
import Newsletter from '../components/Newsletter';

export default function Podcast({ globalData }) {

const videos = [
  {
    id: 1,
    title: 'Lo que un líder no puede delegar',
    subtitle: 'Con Salvador Alva',
    ep: 'EP #65',
    src: 'https://www.youtube.com/embed/zEFh3KczG-M',
    thumbnail: '/img/ep-65.jpg',
  },
  {
    id: 2,
    title: 'Cómo ver tus logros y fracasos',
    ep: 'EP #52',
    src: 'https://www.youtube.com/embed/sZtyPeiQG_s',
    thumbnail: '/img/ep-52.jpg',
  },
  {
    id: 3,
    title: 'Encontrando el balance',
    subtitle: 'Con Alexander Assad',
    ep: 'EP #47',
    src: 'https://www.youtube.com/embed/cVwXzSzdkOM',
    thumbnail: '/img/ep-47.jpg',
  },
  {
    id: 4,
    title: 'Cómo creer más en ti y tener más paz',
    subtitle: 'Con el Padre Marcelo',
    ep: 'EP #46',
    src: 'https://www.youtube.com/embed/nVggVXLKYTs',
    thumbnail: '/img/ep-46.jpg',
  },
  {
    id: 5,
    title: 'Cómo hacer mi curriculum',
    ep: 'EP #25',
    src: 'https://www.youtube.com/embed/aKvhEJWYM3I',
    thumbnail: '/img/ep-25.jpg',
  },
  {
    id: 6,
    title: 'Gente tóxica en el trabajo',
    ep: 'EP #15',
    src: 'https://www.youtube.com/embed/rU5BFUmevkI',
    thumbnail: '/img/ep-15.jpg',
  },
  {
    id: 7,
    title: 'Herida de la traición',
    ep: 'EP #3',
    src: 'https://www.youtube.com/embed/J5V1aQUr1T4',
    thumbnail: '/img/ep-3.jpg',
  },
  {
    id: 8,
    title: 'Atrévete a que suceda',
    ep: 'EP #1',
    src: 'https://www.youtube.com/embed/RYKqW1jHXmI',
    thumbnail: '/img/ep-1.jpg',
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


    <Layout backgroundColor="bg-blue">
      <SEO title={globalData.name + " | Haz que Suceda - El Podcast"} description="En 2022 lancé mi podcast titulado “Haz que suceda”. Más de 80 episodios grabados compartiendo sobre temas relevantes de RH." />
      <GradientBackground variant="small" className="absolute top-0 -right-50 opacity-100 !-top-50" />
        <main className="flex flex-col gap-14 px-[15px] z-10 bg-[url('/img/bg-podcast-mobile.jpg')] xl:bg-[url('/img/bg-podcast.jpg')] min-h-[110vh] bg-100 md:bg-cover lg:bg-cover lg:bg-100 md:min-h-[90vh] lg:min-h-[110vh] w-full md:bg-100 bg-no-repeat md:bg-center xl:bg-top items-center justify-end pb-[8vh] sm:pb-[15vh] md:pb-[10vh] lg:pb-[120px] 2xl:pb-[160px]"> 
          <div className='max-w-7xl flex flex-col items-center justify-end gap-6 w-full'>
              <h3 className='font-belgro uppercase text-white text-2xl lg:text-3xl mx-auto !leading-6 text-center w-2/3 lg:w-full'>Escucha el podcast</h3>
              <div className='flex gap-2 md:gap-4 lg:gap-6 text-white'>
                <Button href="https://open.spotify.com/show/2B2OXSopNuJCdldZHV2FH9?si=766454e725a8443f" target="_blank" className="bg-white bg-opacity-20 border border-white border-opacity-40 hover:bg-opacity-35 max-h-[50px] min-w-[150px] w-full">Escuchar en <SpotifyIcon color="white" /></Button>
                <Button href="https://podcasts.apple.com/mx/podcast/haz-que-suceda/id1667927295" target="_blank" className="bg-white bg-opacity-20 border border-white border-opacity-40 hover:bg-opacity-35 max-h-[50px] hidden md:inline-flex w-full">Escuchar en <AppleMusicIcon /></Button>
                <Button href="https://www.youtube.com/watch?v=RYKqW1jHXmI&list=PLVTEB-eezABaFACr3njw7mwQXkZgKO941&pp=iAQB" target="_blank" className="bg-white bg-opacity-20 border border-white border-opacity-40 hover:bg-opacity-35 max-h-[50px] min-w-[150px] lg:min-w-[180px] w-full">Mirar en <YoutubeIcon color="white"/></Button>
              </div>
          </div>
          
        </main>
        <section className='flex flex-col gap-10 pt-12 lg:py-20 px-[20px]'>
          <h2 className="text-2xl lg:text-4xl !leading-6 text-center text-pinkcontrast relative uppercase">
            Episodios destacados
          </h2>
     
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
              {videos.map((video) => (
                <div key={video.id} onClick={() => openModal(video.id)} className='rounded-[24px] lg:rounded-[36px] overflow-hidden cursor-pointer relative group transition duration-300 w-full'>
                    <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={650}
                        height={180}
                        className='w-full h-auto object-cover group-hover:opacity-90 transition duration-300'
                    />
                    <div className='rounded-full w-14 h-14 lg:w-20 lg:h-20 absolute bottom-1/3 left-4 lg:left-8 transform bg-white bg-opacity-20 flex justify-center items-center group-hover:bg-opacity-80 group-hover:bg-bluelight transition duration-300'>
                        <PlayIcon className="w-4 h-4 lg:w-8 lg:h-8 text-white -mr-1.5" />
                    </div>
                    <div className='flex flex-col gap-1 absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8 text-white group-hover:text-bluelight max-w-full overflow-hidden'>
                        {video.subtitle && <p className='uppercase font-belgro text-[9px] !leading-none lg:text-xs'>{video.subtitle}</p>}
                        <div className='flex gap-6 justify-between uppercase items-center'>
                            <h2 className="text-xs lg:text-lg uppercase !leading-4 lg:!leading-6">{video.title}</h2>
                            <div className='py-2.5 font-belgro bg-pink rounded-full px-3 text-[11px] !leading-4 lg:text-xs group-hover:text-white min-w-[90px] text-center'>{video.ep && <p>{video.ep}</p>}</div>
                        </div>
                    </div>
                </div>
              ))}
              <Modal isOpen={isModalOpen} onClose={closeModal} src={selectedVideo} />
            </div>
        </section>
        <Newsletter />
    </Layout>
  );
}

export function getStaticProps() {
    const globalData = getGlobalData();
  
    return { props: { globalData } };
  }
  
