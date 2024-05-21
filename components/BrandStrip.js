import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const brands = [
  { id: 1, name: 'Rayados de Monterrey FC', image: '/img/clients/rayados.svg', aspectRatio: 'verticalRectangular' },
  { id: 2, name: 'Tecnologico de Monterrey', image: '/img/clients/tecdm.svg', aspectRatio: 'rectangular' },
  { id: 3, name: 'Skingroup', image: '/img/clients/skingroup.png', aspectRatio: 'rectangular' },
  { id: 4, name: 'Teleperformance', image: '/img/clients/teleperformance.svg', aspectRatio: 'rectangular' },
  { id: 5, name: 'Seleccion de Futbol de Costa Rica', image: '/img/clients/costarica.svg', aspectRatio: 'square' },
  { id: 6, name: 'Orange Investments', image: '/img/clients/orangei.png', aspectRatio: 'rectangular' },
  { id: 7, name: 'La Divinata', image: '/img/clients/ladivinata.svg', aspectRatio: 'square' },
  { id: 8, name: 'London Consulting Group', image: '/img/clients/london.webp', aspectRatio: 'rectangular' },
  { id: 9, name: 'Brands and People', image: '/img/clients/brandsandpeople.svg', aspectRatio: 'rectangular' },
  { id: 10, name: 'Alfa fundacion', image: '/img/clients/alfafundacion.png', aspectRatio: 'rectangular' },
  { id: 11, name: 'Brillamont', image: '/img/clients/brillamont.png', aspectRatio: 'rectangular' },
  { id: 12, name: 'Udem, Universidad de Monterrey', image: '/img/clients/udem.png', aspectRatio: 'square' },
  { id: 13, name: 'Universidad Tecmilenio', image: '/img/clients/tecmilenio.png', aspectRatio: 'rectangular' },
  // Agrega más marcas según sea necesario
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Verifica el tamaño de la ventana al inicio
    window.addEventListener('resize', handleResize); // Agrega un event listener para verificar el tamaño de la ventana al cambiar

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el event listener al desmontar el componente
    };
  }, []);

  return isMobile;
};

const BrandStrip = () => {
  const isMobile = useIsMobile();

  return (
    <Marquee gradient={false} speed={isMobile ? 50 : 80}> {/* Establece la velocidad según el dispositivo */}
      {brands.map((brand) => (
        <div key={brand.id} className="item" style={{ marginRight: isMobile ? '50px' : '120px' }}>
          <div style={{
            height: isMobile ? '70px' : brand.aspectRatio === 'rectangular' ? '70px' : brand.aspectRatio === 'verticalRectangular' ? '85px' : '80px',
            width: isMobile ? '100px' : brand.aspectRatio === 'rectangular' ? '170px' : brand.aspectRatio === 'verticalRectangular' ? '75px' : '80px',
            maxWidth: isMobile ? (brand.aspectRatio === 'square' ? '70px' : brand.aspectRatio === 'verticalRectangular' ? '60px' : '135px') : undefined,
            maxHeight: isMobile ? '55px' : brand.aspectRatio === 'rectangular' ? '50px' : brand.aspectRatio === 'verticalRectangular' ? '90px' : '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <Image
              src={brand.image}
              alt={brand.name}
              layout="fill"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default BrandStrip;
