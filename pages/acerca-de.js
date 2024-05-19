import Link from 'next/link';

import Image from 'next/image';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Newsletter from '../components/Newsletter';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Mission from '../components/Mission';

export default function AcercaDe({ globalData }) {
  return (
    <Layout backgroundColor="bg-purpledark">
      <SEO title={globalData.name + " | Acerca de"} description='Dora Valdez es Especialista en Capital Humano y transformación de Negocios. Licenciada en Relaciones Internacionales con especialidad en Emprendedurismo por la Universidad de Jonkoping en Suecia, Certificada en "HR Management and Analytics" por la Universidad de Pensilvania Wharton School, y graduada del programa de Formación de Consejeros de Administración por el EGADE.'  />
        <div className="absolute invisible lg:visible md:bg-[url('/img/about-bg.png')] lg:-right-80 xl:-right-12 top-[60vh] right-0 w-[800px] z-1 h-[1200px] bg-contain bg-no-repeat mix-blend-soft-light" >

        </div>
        <main className="flex flex-col gap-8 pt-12 lg:pt-32 mb-12 max-w-7xl mx-auto px-[30px] z-2 w-full">
            <div className='flex flex-col lg:flex-row lg:gap-2 items-center xl:items-end'>
                <Image src="/img/dora_about.png" width={800} height={800} className='md:h-[650px] lg:h-[680px] xl:h-[800px] w-auto object-contain' alt='Dora Valdez'/>
                <div className='text-white flex flex-col items-center lg:items-start gap-6 font-clash tracking-wide -mt-14 lg:mt-0'>
                    <Logo width="170"/>
                    <h2 className='font-clashdisplay font-semibold !leading-6 text-lg xl:text-2xl'>Dora Valdez es Especialista en Capital Humano y transformación de Negocios.</h2>
                    <p className='text-base'>
                        <b>Licenciada en Relaciones Internacionales</b> con especialidad en Emprendedurismo por la Universidad de Jonkoping en Suecia, Certificada en "HR Management and Analytics" por la Universidad de Pensilvania Wharton School, y graduada del programa de Formación de Consejeros de Administración por el EGADE.
                    </p>
                    <p className='text-base'>
                        En sus más de 20 años de carrera profesional, ha fundado y dirigido varias compañías en los sectores de Capital Humano y Real Estate. Entre ellas, <b><span className='text-greenlighter'>Hubble y Yingo,</span> sus principales emprendimientos.</b>
                    </p>
                    <p className='text-base'>
                        El haber dirigido la práctica de Capital Humano en industrias como TI, petroquímicos, alimentos y bebidas, telecomunicaciones y bienes raíces, sumado a sus estudios en México, Estados Unidos y Suecia, le han permitido desarrollar un entendimiento profundo (y muy particular) del valor del Capital Humano y la importancia de su correcta operación para el futuro de cualquier empresa u organización.
                    </p>
                    <p className='text-base'>
                        Desde hace más de 7 años imparte conferencias sobre manejo del talento, innovación de Capital Humano, desarrollo de cultura laboral y dirección de empresas. Recientemente <b>publicó su primer libro titulado <span className='text-primary'>¡Haz Que Suceda! 41 Lecciones de Capital Humano,</span></b> del cual platicaremos mas adelante, el cual nos ayuda a entender desde una perspectiva teórico-practico lo que sucede verdaderamente en las empresas y como poder sobresalir en el mundo laboral.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-8 items-end text-white'>
                <p className='text-base'>
                    En <span className='text-primary'>2020</span>, decidió crear su <b>canal de Instagram <span className='text-primary'>@Lade.RH</span></b>, hoy con mas de 90,000 seguidores, donde regularmente comparte aprendizajes, genera conocimiento y diálogo con figuras relevantes del mundo de los Recursos Humanos y los negocios.
                </p>
                <p className='text-base'>
                    En <span className='text-primary'>2021</span> tuvo la oportunidad de dar una conferencia en <b className='text-primary'>TEDx Garza Garcia</b>, y en <span className='text-primary'>2023</span> participo en la plataforma de <b className='text-primary'>DisruptHR.</b> En ese mismo año <b>Dora fue Galardonada como Líder Nacional por el Senado de la República.</b>
                </p>
                <p className='text-base'>
                    Actualmente <b>Dora es Chapter Chair de la Women’s President Organization,</b> Organización de mujeres empresarias con sede en Nueva York, y su tiempo libre lo dedica a la lectura y el deporte: a la fecha ha completado los maratones de Berlín, Chicago y Nueva York.
                </p>
            </div>
        </main>
        <section className='w-full p-[15px] lg:p-10 border-t border-white border-opacity-20 flex justify-center relative z-2'>
            <div className='max-w-7xl flex flex-col lg:flex-row text-center lg:text-center justify-between w-full px-[20px] gap-4'>
                <h3 className='font-belgro uppercase text-white text-lg lg:text-2xl'>Mis emprendimientos</h3>
                <div className='flex justify-center lg:justify-end gap-12'>
                    <Link href="https://wehubble.com">
                        <Image src="/img/hubble_logo.svg" width="200" height="200" className='h-[25px] lg:h-[35px] w-auto object-contain cursor-pointer' alt='Hubble'/>
                    </Link>
                    <Link href="https://yingo.work/">
                        <Image src="/img/yingo_logo.png" width="200" height="200" className='h-[25px] lg:h-[35px] w-auto object-contain cursor-pointer' alt='Yingo'/>
                    </Link>
                </div>
            </div>
        </section>
        <Mission />
        <section className='flex flex-wrap w-full'>
            {[1, 2, 3, 4, 5, 6].map((number) => (
                <Image key={number.toString()} src={`/img/dora_${number}.jpg`} width={700} height={600} alt="Dora Valdez, La de RH" lassName="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 object-cover opacity-60 transition duration-200 hover:opacity-100 grayscale hover:grayscale-0"/>
            ))}
        </section>
        <Newsletter />
    </Layout>
  );
}

export function getStaticProps() {
    const globalData = getGlobalData();
  
    return { props: { globalData } };
  }
  
