import React from 'react';
import Marquee from 'react-fast-marquee';

const brands = [
  { id: 1, name: 'Marca 1', image: '/img/clients/rayados.svg', aspectRatio: 'square' },
  { id: 2, name: 'Marca 7', image: '/img/clients/tecdm.svg', aspectRatio: 'rectangular' },
  { id: 3, name: 'Marca 3', image: '/img/clients/skingroup.png', aspectRatio: 'rectangular' },
  { id: 4, name: 'Marca 4', image: '/img/clients/costarica.svg', aspectRatio: 'square' },
  { id: 5, name: 'Marca 5', image: '/img/clients/teleperformance.svg', aspectRatio: 'rectangular' },
  { id: 6, name: 'Marca 6', image: '/img/clients/orangeinvestments.png', aspectRatio: 'rectangular' },
  { id: 7, name: 'Marca 7', image: '/img/clients/ladivinata.svg', aspectRatio: 'square' },
  { id: 8, name: 'Marca 7', image: '/img/clients/london.webp', aspectRatio: 'rectangular' },
  { id: 9, name: 'Marca 2', image: '/img/clients/brandsandpeople.svg', aspectRatio: 'rectangular' },
  { id: 10, name: 'Marca 2', image: '/img/clients/alfafundacion.png', aspectRatio: 'rectangular' },
  { id: 11, name: 'Marca 2', image: '/img/clients/brillamont.png', aspectRatio: 'rectangular' },
  { id: 12, name: 'Marca 2', image: '/img/clients/udem.png', aspectRatio: 'square' },
  { id: 13, name: 'Marca 2', image: '/img/clients/tecmilenio.png', aspectRatio: 'rectangular' },
  // Agrega más marcas según sea necesario
];

const BrandStrip = () => {
  return (
    <Marquee gradient={false} speed={90}>
      {brands.map((brand) => (
        <div key={brand.id} className="item" style={{ marginRight: '140px' }}>
          <img
            src={brand.image}
            alt={brand.name}
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
