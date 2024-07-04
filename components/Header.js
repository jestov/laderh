import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import InstagramIcon from '../components/icons/InstagramIcon';
import TiktokIcon from '../components/icons/TiktokIcon';
import SpotifyIcon from '../components/icons/SpotifyIcon';
import YoutubeIcon from '../components/icons/YoutubeIcon';
import ButtonBook from './ButtonBook';
import CloseIcon from '../components/icons/CloseIcon';

export default function Menu() {
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);
  const { pathname } = useRouter();

  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfMobileView = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', checkIfMobileView);
    checkIfMobileView();

    const handleScroll = () => {
      const main = document.querySelector('main');
      if (main) {
        const mainOffset = main.offsetTop + main.offsetHeight - (main.offsetHeight - 50);
        setIsScrolledPastMain(window.pageYOffset > mainOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkIfMobileView);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleToggleMenu = () => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'; // Bloquea el scroll
      } else {
        document.body.style.overflow = ''; // Habilita el scroll
      }
    };
  
    handleToggleMenu();
  
    return () => {
      document.body.style.overflow = ''; // Asegura que el scroll se habilite cuando se desmonte el componente
    };
  }, [isMobileMenuOpen]);

  const menuOptions = [
    { name: 'Acerca De', path: '/acerca-de' },
    { name: 'Academia', path: 'https://academia.laderh.com' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Libro', path: '/libro' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Talks', path: '/talks' },
    { name: 'Blog', path: '/blog' },
  ];

  const iconColor = "#ffffff";

  const socialOptions = [
    { name: 'Instagram', icon: <InstagramIcon color={iconColor} />, link: 'https://www.instagram.com/lade.rh/' },
    { name: 'Facebook', icon: <FacebookIcon color={iconColor} />, link: 'https://www.facebook.com/LadeRH1/' },
    { name: 'Tiktok', icon: <TiktokIcon color={iconColor} />, link: 'https://www.tiktok.com/@doravaldez.rh' },
    { name: 'LinkedIn', icon: <LinkedinIcon color={iconColor} />, link: 'https://www.linkedin.com/in/doravaldez/' },
    { name: 'Youtube', icon: <YoutubeIcon color={iconColor} />, link: 'https://www.youtube.com/@DoraValdezRH' },
    { name: 'Spotify', icon: <SpotifyIcon color={iconColor} />, link: 'https://open.spotify.com/show/2B2OXSopNuJCdldZHV2FH9?si=3eba120d0bb747e6' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const headerClasses = `flex gap-12 md:gap-6 items-center justify-center py-8 w-full mx-auto inline-block transition transition-all delay-50 duration-300 z-20 ${isScrolledPastMain ? "bg-gradient-to-b from-pink to-transparent bg-opacity-90 backdrop-blur-xl !py-4 px-4 text-white" : "p-3 md:bg-transparent md:text-white"} fixed ${isMobileMenuOpen ? "bg-pink bg-opacity-100" : ""}`;

  return (
    <>
      <nav className={headerClasses}>
        <div className='desktop-menu flex flex-col gap-5'>
          <ul className={`flex items-center justify-end gap-8 ml-auto max-w-8xl ${isScrolledPastMain ? 'hidden' : ''}`}>
            {socialOptions.map((social, index) => (
              <li key={index}>
                <Link href={social.link} target='_blank' className='text-inherit'>
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex justify-between w-full md:w-auto items-center gap-8 lg:gap-12 2xl:gap-20 max-w-8xl'>
            <ul className='flex gap-6 lg:gap-12 2xl:gap-20 items-center'>
              {menuOptions.slice(0, 4).map((option, index) => (
                <li key={index}>
                  <Link href={option.path} passHref>
                    <span className={`text-inherit hover:opacity-85 text-[11px] font-belgro uppercase py-2.5 ${pathname === option.path ? 'text-primary border-b-[3px] border-primary' : ''}`}>
                      {option.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Logo color={iconColor} width="100" />
            <ul className='flex gap-6 lg:gap-12 2xl:gap-20 items-center'>
              {menuOptions.slice(4, 8).map((option, index) => (
                <li key={index}>
                  <Link href={option.path} passHref>
                    <span className={`text-inherit hover:opacity-85 text-[11px] font-belgro uppercase py-2.5 ${pathname === option.path ? 'text-primary border-b-[3px] border-primary' : ''}`}>
                      {option.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonBook href="/contacto">
              Cotizar
            </ButtonBook>
          </div>
        </div>

        {isMobileView && (
          <div className='flex justify-between w-full p-2.5 py-0'>
            <Logo color={iconColor} width="100" />
            <button className="hamburger-icon" onClick={toggleMobileMenu}>
              <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </button>
            {isMobileMenuOpen && (
              <div className="mobile-menu bg-pink text-white transition duration-300">
                <ul className='flex flex-col gap-6 p-6 items-start'>
                  {menuOptions.map((option, index) => (
                    <li key={index}>
                      <Link href={option.path}>
                        <span className={`text-inherit cursor-pointer text-xs font-belgro uppercase ${pathname === option.path ? 'text-primary' : ''}`} onClick={closeMobileMenu}>
                          {option.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <ButtonBook href="/contacto">
                    Cotizar
                  </ButtonBook>
                </ul>
                <ul className='flex gap-6 items-center p-6'>
                  {socialOptions.map((social, index) => (
                    <li key={index}>
                      <Link href={social.link} target='_blank' className='text-inherit'>
                        {social.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>

      <style jsx>{`
        .hamburger-icon {
          display: none;
        }
        .desktop-menu {
          display: flex;
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 1024px) {
          .hamburger-icon {
            display: block;
            cursor: pointer;
          }
          .line {
            width: 30px;
            height: 3px;
            background-color: #fff;
            margin: 5px;
            transition: transform 0.4s;
          }
          .open:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          .open:nth-child(2) {
            opacity: 0;
          }
          .open:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
          .desktop-menu {
            display: none;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: ${isScrolledPastMain ? '80px' : '112px'};
            left: 0;
            width: 100%;
            height: ${isScrolledPastMain ? 'calc(100vh - 80px)' : 'calc(100vh - 112px)'};
            background-color: #D4527D;
            padding: 20px;
            z-index: 999;
            transform: translateX(${isMobileMenuOpen ? '0' : '-100%'});
            transition: transform 0.3s ease-in-out;
          }
          .mobile-menu.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
