import React from 'react';
import Image from 'next/image';

import * as Styles from './styles';

export function ProductCardComponent() {
  return (
    <Styles.ProductCard>
      <Styles.Thumbnail>
        <Image
          src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp"
          alt="teste"
          fill
        />
      </Styles.Thumbnail>

      <Styles.Header>
        <Styles.Title>Apple Watch Series 4 GPS</Styles.Title>
        <Styles.ContentPrice>
          <Styles.Price>R$200</Styles.Price>
        </Styles.ContentPrice>
      </Styles.Header>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      <Styles.Button>
        <Styles.Icon />
        <span>Comprar</span>
      </Styles.Button>
    </Styles.ProductCard>
  );
}
