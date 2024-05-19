import Link from 'next/link';
import Logo from "./Logo";
import { useRouter } from 'next/router';
import InstagramIcon from '../components/icons/InstagramIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import TiktokIcon from '../components/icons/TiktokIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import YoutubeIcon from '../components/icons/YoutubeIcon';
import SpotifyIcon from '../components/icons/SpotifyIcon';
import ButtonBook from './ButtonBook';

const socialOptions = [
  { name: 'Instagram', icon: <InstagramIcon color="#ffffff"/>, link: 'https://www.instagram.com/lade.rh/' },
  { name: 'Facebook', icon: <FacebookIcon color="#ffffff"/>, link: 'https://www.facebook.com/LadeRH1/' },
  { name: 'Tiktok', icon: <TiktokIcon color="#ffffff"/>, link: 'https://www.tiktok.com/@doravaldez.rh' },
  { name: 'LinkedIn', icon: <LinkedInIcon color="#ffffff"/>, link: 'https://www.linkedin.com/in/doravaldez/' },
  { name: 'Youtube', icon: <YoutubeIcon color="#ffffff"/>, link: 'https://www.youtube.com/@DoraValdezRH' },
  { name: 'Spotify', icon: <SpotifyIcon color="#ffffff"/>, link: 'https://open.spotify.com/show/2B2OXSopNuJCdldZHV2FH9?si=3eba120d0bb747e6' },
];

const menuItems = [
  {
    links: [
      { name: "Acerca De", href: "/acerca-de" },
      { name: "Academia", href: "/solutions/hiring" },
      { name: "Coaching", href: "/coaching" },
      { name: "Libro", href: "/libro" },
      { name: "Podcast", href: "/podcast" },
      { name: "Talks", href: "/talks" },
      { name: "Blog", href: "/blog" },
    ],
  }
];

export default function Footer() {
  const { pathname } = useRouter();

  const isActive = (route) => {
    return pathname === route;
  };

  return (
    <footer className="flex flex-col py-12 md:py-24 px-[30px] xl:px-48 justify-center gap-12 lg:gap-32 text-white bg-[url('/img/footer-bg.svg')] bg-center bg-cover bg-no-repeat min-h-[35vh] border border-t border-white border-opacity-20 relative z-1">
      <div className="flex flex-col gap-12 lg:gap-20 lg:gap-0 lg:flex-row justify-center lg:justify-between">
        <div className="flex justify-center lg:justify-start min-w-[150px]">
          <Logo color="#fff" width="150" />
        </div>
        {menuItems.map((menu, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 items-center w-full justify-center lg:justify-end">
            <ul className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-10 text-[11px] tracking-wide font-belgro uppercase items-center justify-center">
              {menu.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href} className={`hover:opacity-85 py-2.5 ${isActive(link.href) ? 'text-primary border-b-[3px] border-primary' : ''}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonBook href="/contacto">
              Cotizar
            </ButtonBook>
          </div>
        ))}        
      </div>
      <div className="flex flex-col-reverse items-center md:flex-row justify-center md:justify-between gap-4">
        <div className="flex gap-4">
          <p className="text-[10px] uppercase font-belgro">
            © {new Date().getFullYear()} LADERH.
          </p>
        </div>
        <ul className='flex items-center gap-8'>
            {socialOptions.map((social, index) => (
              <li key={index}>
                <Link href={social.link} target='_blank' className='text-inherit'>
                    {social.icon}
                </Link>
              </li>
            ))}
          </ul>
      </div>
    </footer>
  );
}
