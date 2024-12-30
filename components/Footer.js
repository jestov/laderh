import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import InstagramIcon from '../components/icons/InstagramIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import TiktokIcon from '../components/icons/TiktokIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import YoutubeIcon from '../components/icons/YoutubeIcon';
import SpotifyIcon from '../components/icons/SpotifyIcon';
import ButtonBook from './ButtonBook';

const socialOptions = [
  {
    name: 'Instagram',
    icon: <InstagramIcon color="#ffffff" />,
    link: 'https://www.instagram.com/lade.rh/',
  },
  {
    name: 'Facebook',
    icon: <FacebookIcon color="#ffffff" />,
    link: 'https://www.facebook.com/LadeRH1/',
  },
  {
    name: 'Tiktok',
    icon: <TiktokIcon color="#ffffff" />,
    link: 'https://www.tiktok.com/@doravaldez.rh',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinIcon color="#ffffff" />,
    link: 'https://www.linkedin.com/in/doravaldez/',
  },
  {
    name: 'Youtube',
    icon: <YoutubeIcon color="#ffffff" />,
    link: 'https://www.youtube.com/@DoraValdezRH',
  },
  {
    name: 'Spotify',
    icon: <SpotifyIcon color="#ffffff" />,
    link: 'https://open.spotify.com/show/2B2OXSopNuJCdldZHV2FH9?si=3eba120d0bb747e6',
  },
];

const menuItems = [
  {
    links: [
      { name: 'Acerca De', href: '/acerca-de' },
      { name: 'Academia', href: '/solutions/hiring' },
      { name: 'Coaching', href: '/coaching' },
      { name: 'Libro', href: '/libro' },
      { name: 'Podcast', href: '/podcast' },
      { name: 'Talks', href: '/talks' },
      { name: 'Blog', href: '/blog' },
    ],
  },
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
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 items-center w-full justify-center lg:justify-end"
          >
            <ul className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-10 text-[11px] tracking-wide font-belgro uppercase items-center justify-center">
              {menu.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className={`hover:opacity-85 py-2.5 ${isActive(link.href) ? 'text-primary border-b-[3px] border-primary' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonBook href="/contacto">Cotizar</ButtonBook>
          </div>
        ))}
      </div>
      <div className="flex flex-col-reverse items-center md:flex-row justify-center md:justify-between gap-4">
        <div className="flex gap-4">
          <p className="text-[10px] uppercase font-belgro">
            © {new Date().getFullYear()} LADERH.
            <br />
            Desarrollado por{' '}
            <Link href="https://jestov.xyz" target="_blank">
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="20"
                viewBox="0 0 60 20"
                className="inline"
                fill="none"
              >
                <path
                  d="M0.165283 18.1545H0.808835C1.624 18.1545 2.2032 17.9256 2.54642 17.4678C2.88965 17.01 3.06127 16.3233 3.06127 15.4077L3.06127 5.27897H4.99192L4.99192 15.7511C4.99192 17.2389 4.66299 18.319 4.00514 18.9914C3.34729 19.6638 2.48922 20 1.43093 20H0.165283L0.165283 18.1545Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.9554 4.93562C13.7991 4.93562 14.5785 5.1073 15.2936 5.45064C16.023 5.79399 16.6022 6.32332 17.0312 7.03863C17.4745 7.73963 17.6962 8.598 17.6962 9.61373V10.794L9.26567 10.794V10.9013C9.26567 11.9313 9.51594 12.7182 10.0165 13.2618C10.5313 13.8054 11.3751 14.0773 12.5478 14.0773C14.2067 14.0773 15.2221 13.4692 15.5939 12.2532L17.6104 12.2532C17.4245 13.4549 16.9168 14.3705 16.0873 15C15.2722 15.6152 14.2997 15.9227 13.1699 15.9227H11.9257C10.5814 15.9227 9.48734 15.5293 8.64357 14.7425C7.81411 13.9557 7.39937 12.7897 7.39937 11.2446V9.61373C7.39937 8.598 7.61389 7.73963 8.04292 7.03863C8.48626 6.32332 9.06546 5.79399 9.78051 5.45064C10.5099 5.1073 11.2964 4.93562 12.1402 4.93562H12.9554ZM12.5478 6.78112C11.4609 6.78112 10.6672 6.98855 10.1666 7.40343C9.68041 7.80401 9.39438 8.40486 9.30858 9.20601H15.787C15.7012 8.40486 15.408 7.80401 14.9075 7.40343C14.4212 6.98855 13.6347 6.78112 12.5478 6.78112Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M29.0993 12.4678C29.0993 13.5408 28.6989 14.3848 27.898 15C27.0971 15.6152 25.8958 15.9227 24.2941 15.9227C22.8211 15.9227 21.677 15.6438 20.8618 15.0858C20.061 14.5136 19.539 13.691 19.2959 12.618H21.441C21.6699 13.5908 22.628 14.0773 24.3156 14.0773C26.2176 14.0773 27.1686 13.5336 27.1686 12.4464C27.1686 12.1316 27.0685 11.8884 26.8683 11.7167C26.6824 11.5451 26.3392 11.4092 25.8386 11.309C25.3524 11.1946 24.573 11.073 23.5004 10.9442C22.0989 10.7725 21.1193 10.465 20.5615 10.0215C20.0038 9.57797 19.7249 8.9485 19.7249 8.13305C19.7249 7.14592 20.1182 6.36624 20.9047 5.79399C21.6913 5.22174 22.7853 4.93562 24.1869 4.93562C25.3166 4.93562 26.282 5.19313 27.0828 5.70815C27.898 6.22318 28.42 6.9814 28.6488 7.98283H26.5036C26.3892 7.58226 26.1318 7.27468 25.7314 7.06009C25.3452 6.83119 24.7589 6.71674 23.9723 6.71674C23.2859 6.71674 22.7281 6.83834 22.2991 7.08154C21.8701 7.31044 21.6556 7.60372 21.6556 7.96137C21.6556 8.37625 21.8415 8.66953 22.2133 8.8412C22.5851 9.01288 23.2287 9.14163 24.1439 9.22747C25.4311 9.35622 26.4321 9.55651 27.1472 9.82833C27.8622 10.0858 28.3628 10.4292 28.6488 10.8584C28.9491 11.2732 29.0993 11.8097 29.0993 12.4678Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M33.9497 7.12446V10.9871C33.9497 11.9027 34.1213 12.5894 34.4646 13.0472C34.8078 13.505 35.387 13.7339 36.2022 13.7339H36.8457V15.5794H35.5801C34.5218 15.5794 33.6637 15.2432 33.0059 14.5708C32.348 13.8984 32.0191 12.8183 32.0191 11.3305V7.12446L30.496 7.12446V5.27897L32.0191 5.27897V0L33.9497 0V5.27897L36.8457 5.27897V7.12446L33.9497 7.12446Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M44.3419 4.93562C45.1714 4.93562 45.9293 5.1073 46.6158 5.45064C47.3023 5.79399 47.8457 6.31617 48.2461 7.01717C48.6609 7.71817 48.8682 8.58369 48.8682 9.61373V11.2446C48.8682 12.2747 48.6609 13.1402 48.2461 13.8412C47.8457 14.5422 47.3023 15.0644 46.6158 15.4077C45.9293 15.7511 45.1714 15.9227 44.3419 15.9227H43.0977C42.2682 15.9227 41.5103 15.7511 40.8238 15.4077C40.1374 15.0644 39.5868 14.5422 39.1721 13.8412C38.7716 13.1402 38.5714 12.2747 38.5714 11.2446V9.61373C38.5714 8.58369 38.7716 7.71817 39.1721 7.01717C39.5868 6.31617 40.1374 5.79399 40.8238 5.45064C41.5103 5.1073 42.2682 4.93562 43.0977 4.93562H44.3419ZM46.9376 9.95708C46.9376 8.92704 46.6873 8.1402 46.1868 7.59657C45.7005 7.05293 44.8782 6.78112 43.7198 6.78112C42.5614 6.78112 41.732 7.05293 41.2314 7.59657C40.7452 8.1402 40.5021 8.92704 40.5021 9.95708V10.9013C40.5021 11.9313 40.7452 12.7182 41.2314 13.2618C41.732 13.8054 42.5614 14.0773 43.7198 14.0773C44.8782 14.0773 45.7005 13.8054 46.1868 13.2618C46.6873 12.7182 46.9376 11.9313 46.9376 10.9013V9.95708Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M57.8548 5.27897L60 5.27897L56.3532 15.5794H53.2642L49.6174 5.27897H51.7625L54.444 13.6481H55.1734L57.8548 5.27897Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </p>
        </div>
        <ul className="flex items-center gap-8">
          {socialOptions.map((social, index) => (
            <li key={index}>
              <Link href={social.link} target="_blank" className="text-inherit">
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
