import Link from 'next/link';
import ArrowIcon from './icons/ArrowIcon';

export default function ButtonArrowReverse({ children, href, className }) {
    return (
      <Link href={href} >
        <div className={`flex text-xs justify-center uppercase font-belgro items-center gap-4 py-4 px-6 rounded-full hover:bg-opacity-30 cursor-pointer transition duration-300 ${className}`}>
        <span className="inline-block transform rotate-180"><ArrowIcon /></span>
        {children}
        </div>
      </Link>
    );
  }
  