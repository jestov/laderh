import BrandStrip from "./BrandStrip";
import Image from "next/image";

const BrandStripTitle = () => {
  return (
    <section className='w-full flex flex-col gap-3 py-12 text-center items-center'>
      <div className='flex flex-col gap-4 md:gap-0 md:flex-row items-center'>
        <Image src="/img/heart_draw.svg" width={70} height={70} className='-mr-2 z-0 relative w-[60px] md:w-[90px]' />
        <h4 className='text-white uppercase text-xl lg:text-2xl z-1 relative !leading-6'>Empresas que han creído en mi</h4>
      </div>
      <BrandStrip />
    </section>
  );
};

export default BrandStripTitle;
