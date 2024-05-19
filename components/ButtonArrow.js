import Link from 'next/link';
import ArrowIcon from './icons/ArrowIcon';

export default function ButtonArrow({ children, href, className }) {
    return (
      <Link href={href} >
        <div className={`flex text-[11px] !leading-3 md:text-xs justify-center uppercase font-belgro items-center gap-6 py-4 px-6 rounded-full hover:bg-opacity-30 cursor-pointer transition duration-300 ${className}`}>
        {children}
        <span className="inline-block ml-2"><ArrowIcon /></span>
        </div>
      </Link>
    );
  }
  