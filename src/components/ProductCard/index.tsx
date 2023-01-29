import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { addToCart } from '@slices/cart';
import { formatToCurrency } from '@helpers/formatToCurrency';

import * as Styles from './styles';
import { IParamsComponent } from './types';

export function ProductCardComponent({ data }: IParamsComponent) {
  const dispatch = useDispatch();

  return (
    <Styles.ProductCard>
      <Styles.Thumbnail>
        <Image
          fill
          src={data.photo}
          alt={`Imagem do produto ${data.name}`}
        />
      </Styles.Thumbnail>

      <Styles.Header>
        <Styles.Title>{data.name}</Styles.Title>
        <Styles.ContentPrice>
          <Styles.Price>{formatToCurrency(data.price)}</Styles.Price>
        </Styles.ContentPrice>
      </Styles.Header>

      <p>{data.description}</p>

      <Styles.Button
        onClick={() => {
          dispatch(addToCart(data));
        }}
      >
        <Styles.Icon />
        <span>Comprar</span>
      </Styles.Button>
    </Styles.ProductCard>
  );
}
