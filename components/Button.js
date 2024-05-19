import Link from 'next/link';
import ArrowIcon from './icons/ArrowIcon';

export default function Button({ children, href, className, fullWidth, target }) {
    return (
      <Link href={href} className={fullWidth ? 'w-full' : ''} target={target}>
        <div className={`flex text-[10.5px] md:text-xs justify-center uppercase font-belgro items-center gap-2 py-3.5 px-3 md:px-6 rounded-full cursor-pointer transition duration-300 !leading-5 ${className}`}>
        {children}
        </div>
      </Link>
    );
  }
  