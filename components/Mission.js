import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';

const Mission = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <section className='w-full flex-col justify-center bg-purpledark relative'>
      <Image src="/img/shines.svg" width={100} height={100} className='absolute right-10 md:right-14 bottom-[350px] md:bottom-[220px] animate-pulse' alt=""/>
      <div className='w-full flex justify-end'>
        <div className='max-w-8xl flex flex-col md:flex-row md:gap-12 w-full'>
          <div className='flex flex-col gap-8 md:gap-10 lg:gap-12 justify-center items-start text-white p-[45px] 2xl:pl-[120px]'>
            <h4 className='font-clashdisplay uppercase text-primary tracking-[4px] md:tracking-[8px] text-base font-semibold'>Mi Misión</h4>
            <h3 className='font-belgro text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold'>
              “Cambiar <span className='text-primary'>la manera en la que trabajamos</span> en el mundo.”
            </h3>
            <h5>
              <span className='uppercase text-primary'>-Dora Valdez</span><br />
              <span className='flex gap-3 text-sm'>
                Fundadora de <Link href="https://wehubble.com"> <Image src="/img/hubble_logo.svg" width="200" height="200" className='h-[25px] w-auto object-contain cursor-pointer' alt='Hubble' /></Link>
              </span>
            </h5>
            {currentPath !== '/acerca-de' && (
              <Button href="/acerca-de" className="bg-pinklight hover:bg-pinkcontrast px-6">ver bio</Button>
            )}
          </div>
          <Image src="/img/dora_mision.jpg" width={1200} height={1200} className='h-full w-full object-cover mix-blend-screen' alt="Dora Valdez" />
        </div>
      </div>
      <div className='w-full flex justify-center bg-fuchsia py-10 md:py-14'>
        <div className='max-w-8xl flex flex-col md:flex-row justify-between items-center w-full px-[30px] md:px-[45px] 2xl:px-[120px] text-white gap-10'>
          <div className='text-base font-medium tracking-wide'>
            <p className='gap-2 items-center inline'>
              En <Link href="https://wehubble.com"> <Image src="/img/hubble-horizontal.svg" width="200" height="200" className='h-[11px] w-auto object-contain cursor-pointer inline mx-1.5 -mt-1.1' alt="Hubble" /></Link> transformamos retos de capital humano en soluciones reales.
            </p>
            <p className='font-semibold'>
              ¿Quieres que seamos tu <span className='text-greenlighter'>departamento de Capital Humano</span> o tienes retos a vencer con el talento de tu empresa? <span className='text-primary'>Agenda una llamada conmigo y hagamos que suceda.</span>
            </p>
          </div>
          <Button href="https://calendly.com/doravaldez" fullWidth={true} className="bg-purple max-w-[420px] mx-auto hover:bg-pinkcontrast text-center !leading-none lg:!leading-6">Agendar llamada con Dora</Button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
