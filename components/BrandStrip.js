import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const brands = [
  { id: 1, name: 'Rayados de Monterrey FC', image: '/img/clients/rayados.svg', aspectRatio: 'square' },
  { id: 2, name: 'Tecnologico de Monterrey', image: '/img/clients/tecdm.svg', aspectRatio: 'rectangular' },
  { id: 3, name: 'Skingroup', image: '/img/clients/skingroup.png', aspectRatio: 'rectangular' },
  { id: 4, name: 'Seleccion de Futbol de Costa Rica', image: '/img/clients/costarica.svg', aspectRatio: 'square' },
  { id: 5, name: 'Teleperformance', image: '/img/clients/teleperformance.svg', aspectRatio: 'rectangular' },
  { id: 6, name: 'Orange Investments', image: '/img/clients/orangeinvestments.png', aspectRatio: 'rectangular' },
  { id: 7, name: 'La Divinata', image: '/img/clients/ladivinata.svg', aspectRatio: 'square' },
  { id: 8, name: 'London Consulting Group', image: '/img/clients/london.webp', aspectRatio: 'rectangular' },
  { id: 9, name: 'Brands and People', image: '/img/clients/brandsandpeople.svg', aspectRatio: 'rectangular' },
  { id: 10, name: 'Alfa fundacion', image: '/img/clients/alfafundacion.png', aspectRatio: 'rectangular' },
  { id: 11, name: 'Brillamont', image: '/img/clients/brillamont.png', aspectRatio: 'rectangular' },
  { id: 12, name: 'Udem, Universidad de Monterrey', image: '/img/clients/udem.png', aspectRatio: 'square' },
  { id: 13, name: 'Universidad Tecmilenio', image: '/img/clients/tecmilenio.png', aspectRatio: 'rectangular' },
  // Agrega más marcas según sea necesario
];

const BrandStrip = () => {
  return (
    <Marquee gradient={false} speed={90}>
      {brands.map((brand) => (
        <div key={brand.id} className="item" style={{ marginRight: '140px' }}>
          <Image
            src={brand.image}
            alt={brand.name}
            width={200}
            height={200}
            style={{
              height: brand.aspectRatio === 'rectangular' ? '50px' : '80px',
              width: 'auto',
              maxWidth: '170px',
              objectFit: 'contain'
            }}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default BrandStrip;
