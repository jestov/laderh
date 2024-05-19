import classNames from 'classnames';
import styles from './Layout.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappIcon from './icons/WhatsappIcon';
import Link from 'next/link';


export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children, backgroundColor }) {
  return (
    <div className={`relative overflow-hidden box-border ${backgroundColor}`}>
      <Header />
      <div className="flex flex-col items-center w-full mx-auto">
        {children}
      </div>
      <Footer />
      <Link href="https://web.whatsapp.com/send?phone=528112776495" target="_blank" className='z-5'>
        <WhatsappIcon className='fixed z-10 bottom-10 left-10 w-14 h-14 cursor-pointer'/>
      </Link>
    </div>
  );
}
