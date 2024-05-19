import Link from 'next/link';

import Image from 'next/image';
import Button from '../components/Button';
import AmazonIcon from '../components/icons/AmazonIcon';
import BeekIcon from '../components/icons/BeekIcon';
import Newsletter from '../components/Newsletter';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function AcercaDe({ globalData }) {

const reviews = [
  {
    name: 'Priscila Cardenas',
    company: 'Amazon',
    stars: '/img/stars.svg',
    reviewTitle: 'El libro que todos debemos leer!',
    reviewText: 'En 41 lecciones la autora comparte su experiencia personal sobre situaciones del día a día en el mundo laboral. Cualquier persona que trabaje en una institución se verá reflejada en muchas de las lecciones… de igual manera si eres emprendedor, te abre el panorama a qué cosas evitar. Es un libro que TODOS debemos leer, trasmite su aprendizaje, da consejos y de igual manera nos hace reflexionar.<br /><br />¡Super recomendable!',
  },
  {
    name: 'Alex Sandoval',
    company: 'Amazon',
    stars: '/img/stars.svg',
    reviewTitle: 'Increíble!',
    reviewText: 'Excelente libro! Muy interesante y práctico por todas las grandes lecciones que nos comparten, y por las preguntas dinámicas en cada lección.<br /><br />Super recomendado.',
  },
  {
    name: 'IrmaGrz',
    company: 'Amazon',
    stars: '/img/stars.svg',
    reviewTitle: '¡Wow!',
    reviewText: 'Apenas comienzo a leerlo y me encanta que es súper sencillo de leer, claro y directo.<br /><br />Nos enseña a poner en práctica y a hacerlo diferente, de en verdad hacer el cambio.<br /><br />Además es un libro especial para llevarlo contigo a todos lados.',
  },
];

const Review = ({ name, company, stars, reviewTitle, reviewText }) => (
  <div className='bg-white rounded-[36px] p-8 xl:p-12 flex flex-col gap-4 lg:gap-8'>
    <div className='flex justify-between items-center'>
      <p className='leading-4 text-pinkstrong'>
        <b>{name}</b><br />
        {company}
      </p>
      <Image src={stars} width={120} height={50} className='h-18 object-contain'/>
    </div>
    <h2 className='text-pinkstrong text-xl'>"{reviewTitle}"</h2>
    <p className='tracking-wide text-gray-600 text-base !leading-7' dangerouslySetInnerHTML={{ __html: reviewText }} />
  </div>
);

  return (
    <Layout backgroundColor="bg-pinklighter">
      <SEO title={globalData.name + " | Haz que Suceda - 41 Lecciones del Capital Humano"} description="Dora destila sus más de 20 años de experiencia profesional en perspectivas prácticas." />
      <GradientBackground variant="large" className="absolute top-0 -right-50 opacity-100 !-top-50" />
      
        <div className="w-full bg-[url('/img/gradient-bg-opacity.svg')] bg-no-repeat bg-contain bg-left bg-bottom relative z-2">
            <main className="flex flex-col gap-14 pt-32 lg:pt-48 mb-12 max-w-7xl mx-auto px-[30px] z-10">     
                <div className='flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-24 items-center'>
                    <Image src="/img/book.png" width="200" height="200" className='h-[400px] lg:h-[620px] xl:h-[700px] w-auto object-contain z-10'></Image>
                    <div className='text-white flex flex-col gap-6 lg:gap-8 font-clash tracking-tightest text-center md:text-left'>
                        <h2 className='!leading-10 text-5xl lg:text-6xl font-helvetica text-pinkstrong'>¡Haz que suceda!</h2>
                        <h3 className='!leading-6 text-xl lg:text-2xl uppercase font-helvetica text-gray-700 tracking-[3px] lg:tracking-[5px]'>41 lecciones del capital humano</h3>
                        <h4 className='text-yellow font-clashdisplay font-semibold text-lg lg:text-xl tracking-wide'>
                            Dora destila sus más de 20 años de experiencia profesional en  perspectivas prácticas.
                        </h4>
                        <p className='text-base lg:text-lg font-medium tracking-wide'>
                            Este libro es una mina de oro para cualquiera  que esté ansioso por comprender las relaciones humanas dentro del lugar de trabajo y aprender de los errores organizacionales comunes. Ya seas  estudiante, miembro de un equipo corporativo, líder, emprendedor o  propietario de un negocio, <b>'Haz Que Suceda' promete remodelar tu enfoque ante los desafíos laborales y de vida</b>, alejándote de las trampas  comunes y guiándote hacia soluciones innovadoras.
                        </p>
                    </div>
                </div>
            </main>
            <section className='w-full py-10 lg:py-24 lg:-mt-28 bg-white bg-opacity-10 flex justify-center relative'>
                <div className='max-w-7xl flex flex-col items-start gap-6 w-full px-[15px]'>
                    <div className="absolute bg-[url('/img/book-arrow.svg')] w-32 h-32 bg-contain top-10 bg-no-repeat ml-48 hidden lg:inline-flex"></div>
                    <h3 className='font-belgro uppercase text-pinkstrong text-2xl lg:text-3xl mx-auto text-center !leading-6'>Compra el libro</h3>
                    <div className='flex gap-2 lg:gap-6 mx-auto'>
                        <Button href="https://www.amazon.com.mx/Haz-que-Suceda-Lecciones-Capital/dp/6075940006" target="_blank" className="bg-white bg-opacity-40 border border-white text-pinkstrong hover:bg-opacity-90 !leading-none text-center"><AmazonIcon /> Comprar en Amazon</Button>
                        <Button href="https://www.beek.io/libros/haz-que-suceda" target="_blank" className="bg-white bg-opacity-40 border border-white text-pinkstrong hover:bg-opacity-90 !leading-none text-center"><BeekIcon /> Escuchar en Beek</Button>
                    </div>
                </div>
            </section>
            <section className='flex flex-col lg:flex-row gap-14 items-center max-w-7xl py-10 lg:py-20 mx-auto px-[20px] md:px-[60px]'>
                <Image src="/img/dora-book.png" width={750} height={900} className='xl:h-[800px] w-auto object-contain'></Image>
                <div className='text-white flex flex-col lg:items-start gap-7 font-clash tracking-wide'>
                        <div className="relative w-full">
                            <div className="bg-[url('/img/line-letter.svg')] bg-no-repeat bg-bottom bg-left absolute -bottom-7 w-2/3 h-12 bg-contain z-0"></div> 
                            <Image src="/img/letter.svg" width={100} height={100} className='h-12 w-18 absolute -top-8 -left-6 Z-1'/>
                            <h2 className="font-belgro text-3xl text-pinkstrong z-2 relative !leading-7">Carta de la autora</h2>      
                        </div>
                        <p className='tex-xl lg:text-2xl font-semibold'>
                            Después de 20 años de carrera profesional quise hacer una pausa. ⏱
                        </p>
                        <p className='text-base lg:text-lg font-medium'>
                            No sé si te ha pasado que cuando te enfrentas a un problema se te hace gigante y cuando pasa el tiempo lo volteas a ver y se convierte en un gran aprendizaje. Creo que esto aplica para muchas cosas en la vida, no solo en el ámbito profesional y hoy tengo bien claro que <b className='text-yellow'>si no aprendemos la lección, la vida nos pondrá en la misma situación con la oportunidad de aprender.</b> 
                        </p>
                        <p className='text-base lg:text-lg font-medium'>
                            Hoy a más de un año y medio que empecé a escribir mi primer libro, quiero compartir con ustedes todos estos momentos que la vida me ha puesto para aprender: altas, bajas, risas, llantos. 
                        </p>
                        <p className='text-base lg:text-lg font-medium'>
                            Este libro, es un libro donde puedes cuestionar, tomar referencias, pero sobre todo, <b>aprender de alguien que en su momento no sabía que hacer</b> con las situaciones que la vida le ponía enfrente.
                        </p>
                        <p className='text-base lg:text-lg font-medium'>
                            Espero que lo disfrutes tanto como lo hice yo al escribirlo, ya que fue hecho con todo el amor, con todo el cariño y toda la buena vibra, especialmente para ti. 
                        </p>
                        <p className='text-base lg:text-lg font-semibold text-pinkstrong'>
                            Es el momento de tomarlo y hacerlo tuyo. 
                        </p>
                        <div className='flex justify-between gap-4 items-center w-full'>
                            <h5 className='font-belgro uppercase text-yellow text-2xl !leading-5 tracking-[-1px]'>
                                -Dora<br />
                                Valdez
                            </h5>
                            <p className='font-clash uppercase font-semibold text-lg lg:text-xl tracking-normal'>NOVIEMBRE, 2021.</p>
                        </div>
                </div>
            </section>    
            <section className='w-full py-10 lg:py-24 bg-white bg-opacity-10 flex justify-center relative'>
                <div className='max-w-8xl flex flex-col items-center gap-12 md:gap-16 w-full md:px-[60px] px-[20px] 2xl:px-[10vw]'>
                    <div className='flex flex-col text-center items-center text-pinkstrong'>
                        <h3 className="font-clashdisplay text-base tracking-[8px] uppercase font-medium">
                            Reseñas
                        </h3>
                        <h2 className="text-2xl lg:text-3xl relative md:w-2/3">
                            <div className='z-10 relative'>¿Qué opina la gente que ha leído “Haz que Suceda”? <Image src="/img/happyface.svg" width={200} height={200} className='h-12 absolute bottom-0 right-0 z-0 hidden lg:inline-flex'/></div>
                            <Image src="/img/line-letter.svg" width={100} height={10} alt="" className="absolute -bottom-4 lg:-bottom-14 z-0 left-auto right-0 w-full" />
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto'>
                        {reviews.map((review, index) => (
                            <Review key={index} {...review} />
                        ))}
                    </div>
                    <Button href="https://www.amazon.com.mx/Haz-que-Suceda-Lecciones-Capital/product-reviews/6075940006" className="bg-white bg-opacity-40 border border-white text-pinkstrong">Ver más reseñas</Button>
                </div>
            </section>
        </div>
        <Newsletter />
    </Layout>
  );
}

export function getStaticProps() {
    const globalData = getGlobalData();
  
    return { props: { globalData } };
  }
  
