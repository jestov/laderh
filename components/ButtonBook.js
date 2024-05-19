import Link from 'next/link';

export default function ButtonBook({ children, href, className }) {
    return (
      <Link href={href} >
        <div className={`flex text-[11px] items-center gap-2 bg-pinkcontrast font-belgro py-2.5 px-5 rounded-full hover:from-secondary hover:to-green cursor-pointer transition duration-300 uppercase hover:bg-fuchsia ${className}`}>
          {children}
        </div>
      </Link>
    );
  }
  