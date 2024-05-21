import Link from 'next/link';
import Image from   'next/image';
import { getPosts } from '../utils/mdx-utils';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/icons/ArrowIcon';
import AcademyIcon from '../components/icons/AcademyIcon';
import CoachingIcon from '../components/icons/CoachingIcon';
import TalksIcon from '../components/icons/TalksIcon';
import PodcastIcon from '../components/icons/PodcastIcon';
import PlusIcon from '../components/icons/PlusIcon';
import Button from '../components/Button';
import ButtonArrow from '../components/ButtonArrow';
import BrandStrip from '../components/BrandStrip';
import Newsletter from '../components/Newsletter';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Mission from '../components/Mission';
import React from 'react';

export default function Index({ posts, globalData }) {

  const services = [
    { href: 'https://dora-valdez.mykajabi.com/', text: 'Academia', buttonHref: 'https://dora-valdez.mykajabi.com/store', buttonText: 'Unirse ahora', bgImage: '/img/services_academia.jpg', icon: <AcademyIcon /> },
    { href: '/coaching', text: 'Coaching', buttonHref: 'https://calendly.com/doravaldez/coaching-con-la-de-rh', buttonText: 'Agendar sesión', bgImage: '/img/services_coaching.jpg', icon: <CoachingIcon /> },
    { href: '/talks', text: 'Talks', buttonHref: 'https://www.youtube.com/watch?v=Tl5-qt8HioY', buttonText: 'Ver Ted Talk', bgImage: '/img/services_talks.jpg', icon: <TalksIcon /> },
    { href: '/podcast', text: 'Podcast', buttonHref: 'https://open.spotify.com/show/2B2OXSopNuJCdldZHV2FH9?si=6478093dff5b4637', buttonText: 'Escuchar ahora', bgImage: '/img/services_podcast.jpg', icon: <PodcastIcon /> }
  ];


  return (
    <Layout backgroundColor="bg-pink">
      <SEO title={globalData.name} description="Hola, Soy Dora Valdez, disruptora en temas de Recursos Humanos y Negocios" />
      <main className="w-full min-h-screen bg-pinklight bg-cover flex flex-col-reverse lg:flex-row justify-end items-center lg:items-end lg:gap-2 text-white font-clash xl:px-32 relative pt-32 lg:pt-0">
      <GradientBackground
        variant="small"
        className="absolute top-0 -right-50 opacity-100"
      />

        <Image src="/img/dora-hero.png" width={1488} height={1620} alt="Dora Valdez" className='relative z-index-2 md:h-[70vh] xl:h-[90vh] xl:-mr-[80px] 2xl:-mr-0 2xl:h-[93vh] object-contain' priority={true}/>
        <div className="flex flex-col items-center lg:items-start justify-start gap-4 md:gap-6 lg:gap-8 my-auto relative z-index-2 w-full px-[15px] sm:px-[20px]">
          <h1 className="text-lg md:text-2xl font-medium uppercase !leading-none text-center lg:text-left">
           Hola, 
           <br/> Soy <span className='text-primary'>Dora Valdez</span>
          </h1>
          <Image src="/img/laderh.svg" width={350} height={50} alt="La de RH" className='w-64 md:w-[350px]'/>
          <p className="text-lg md:text-2xl opacity-90 max-w-3xl font-medium font-clashdisplay !leading-none text-center lg:text-left">
           Disruptora en temas de
           <br />
           Recursos Humanos y Negocios
          </p>
          <div className="grid grid-cols-2 md:flex justify-center lg:justify-start gap-4 w-full">
            <Button href="https://calendly.com/doravaldez" target="_blank" className="bg-green hover:bg-opacity-75 md:min-w-[250px] max-w-[350px] px-0 md:px-4 tracking-tighter !leading-none h-[50px] text-center">Agendar llamada</Button>
            <Button href="#mi-mundo" className="bg-orange md:min-w-[250px] max-w-[350px] px-0 md:px-4 hover:bg-opacity-75 tracking-tighter !leading-none h-[50px] text-center">Conocer más</Button>
          </div>
        </div>
        <div className='absolute z-0 w-full left-0 bottom-0 py-4 lg:py-6'>
          <BrandStrip />
        </div>
      </main>

      <section className="bg-pinklight w-full" id="mi-mundo">
        <div className='flex flex-col gap-14 md:gap-20 py-12 lg:py-20 px-[15px] bg-pink w-full rounded-t-[36px]'>
         <div className='flex flex-col text-center gap-4 items-center'>
              <h3 className="text-white font-clashdisplay text-base tracking-[4px] md:tracking-[8px] uppercase font-medium">
               ¿Qué puedo hacer por ti?
              </h3>
              <h2 className="text-4xl lg:text-5xl text-primary relative uppercase !leading-8">
                <span className='z-10 relative'>Explora<br className='md:hidden'/> mi mundo</span>
                <Image src="/img/title-line.svg" width={100} height={10} alt="" className="absolute -bottom-4 md:-bottom-8 z-0 left-0 right-0 w-full" />
              </h2>
          </div>
          <ul className="grid md:grid-cols-2 xl:grid-cols-4 w-full gap-4 max-w-8xl">
            {services.map((service, index) => (
              <li key={index} className="relative overflow-hidden flex flex-col justify-center items-center transition p-4 md:p-8 h-[650px] md:h-[700px] lg:h-[750px] xl:h-[650px] 2xl:h-[70vh] bg-cover bg-bottom text-white transition delay-50 duration-250 w-full rounded-[36px] cursor-pointer group" style={{ backgroundImage: `url(${service.bgImage})` }}>
                <Link href={service.href} passHref legacyBehavior>
                  <a className="absolute inset-0 z-0 hover-trigger" />
                </Link>
                <div className='flex gap-4 mt-auto items-center font-belgro text-xl lg:text-2xl z-10'>
                  {service.icon}
                  <Link href={service.href} passHref legacyBehavior>
                    <a className="text-white hover-target">{service.text}</a>
                  </Link>
                </div>
                <div className='flex gap-4 mt-auto w-full z-10'>
                  {service.buttonHref && (
                    <a href={service.buttonHref} className="text-white bg-green hover:bg-pink !hover:bg-opacity-100 rounded-full h-[50px] text-center block flex-1 text-center !leading-6 p-3 font-belgro uppercase text-[12px] button-hover">
                      {service.buttonText}
                    </a>
                  )}
                  <Link href={service.href} passHref legacyBehavior>
                    <a className="text-white bg-green rounded-full w-[50px] h-[50px] !p-0 hover:bg-pink flex items-center justify-center"><PlusIcon /></a>
                  </Link>
                </div>
              </li>
            ))}

            <style jsx>{`
              .group:hover .hover-target {
                color: #E9A5BB; /* Reemplaza con tu color pinklighter */
              }
              .button-hover:hover ~ .hover-target {
                color: white !important; /* Asegúrate de que el texto sea blanco cuando se haga hover en el botón */
              }
              .button-hover:hover {
                color: white !important; /* Mantén el botón de service.buttonText blanco */
              }
            `}</style>
            </ul>
          </div>
        </section>


        <Mission />


      <section className="w-full bg-[url('/img/gradient-bg.svg')] bg-no-repeat bg-contain bg-left bg-bottom lg:pt-28">
        <div className='flex flex-col gap-8 px-[20px] max-w-7xl mx-auto pt-12 lg:pt-0'>
        <div className='flex flex-col gap-3 items-start'>
          <div className='flex justify-between w-full'>
            <h2 className="text-4xl lg:text-5xl text-primary relative uppercase">
              <span className='z-10 relative'>Blog</span>
              <Image src="/img/title-line-short.svg" width={100} height={40} alt="" className="absolute -bottom-1.5 md:-bottom-3.5 z-0 left-0 right-0 w-full object-contain" />
            </h2>
            <ButtonArrow href="/blog" className="text-white bg-white bg-opacity-20">
                Ir al blog
            </ButtonArrow>
          </div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10">
            {posts.slice(0,3).map((post) => (
              <li
                key={post.filePath}
                className="overflow-hidden flex flex-col justify-between transition py-5 px-1 block justify-start items-start text-white flex flex-col gap-5 md:gap-6 group transition delay-50 duration-250"
              >
                <Link
                  as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/blog/[slug]`} legacyBehavior
                >
                    <a className="block group-hover:text-primary  cursor-pointer flex flex-col gap-5 md:gap-8 relative">
                    {post.data.time && (
                      <span className='absolute z-10 top-3 left-3 lg:top-4 lg:left-4 px-4 py-2.5 bg-pink rounded-full font-belgro uppercase text-[11px] group-hover:text-white'>{post.data.time}</span>
                    )}
                    <Image src={post.data.img} alt={post.data.title} width={400} height={200} className='w-full rounded-[36px] h-56 object-cover cursor-pointer opacity-85 group-hover:opacity-100 transition delay-50 duration-250'/>
                    <h2 className="text-lg md:text-xl !leading-6 tracking-tight transition delay-150 duration-500">{post.data.title}</h2>
                    {post.data.description && (
                      <p className="text-base opacity-80 font-clash font-medium text-white">
                        {post.data.description}
                      </p>
                    )}
                    </a>
                 </Link>
                <Link
                  as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/blog/[slug]`} legacyBehavior
                >
                    <div className='inline-flex items-center gap-10 text-base bg-white bg-opacity-20 px-5 py-3 rounded-full font-belgro !text-[12px] uppercase cursor-pointer group-hover:bg-opacity-30 transition delay-50 duration-250'>Leer más <ArrowIcon /></div>
                </Link>
              </li>
            ))}
        </ul>
        </div>
      </section>
      <Newsletter />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
