import React from 'react';
import Image from 'next/image';

import { QuantityComponent } from '@components/index';

import * as Styles from './styles';

export function ProductRowCartComponent() {
  return (
    <Styles.ProductCard>
      <Image
        src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp"
        alt="teste"
        height={57}
        width={57}
      />

      <Styles.Title>Apple Watch Series 4 GPS</Styles.Title>

      <QuantityComponent />

      <Styles.Price>R$200</Styles.Price>

      <Styles.Circle type="button" aria-label="remover-item">
        <Styles.CloseIcon />
      </Styles.Circle>
    </Styles.ProductCard>
  );
}
