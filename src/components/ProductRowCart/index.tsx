import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { removeItem } from '@slices/cart';
import { formatToCurrency } from '@helpers/formatToCurrency';

import { QuantityComponent } from '@components/index';

import * as Styles from './styles';
import { IParamsComponent } from './types';

export function ProductRowCartComponent({ data }: IParamsComponent) {
  const dispatch = useDispatch();

  return (
    <Styles.ProductCard>
      <Image
        width={57}
        height={57}
        src={data.photo}
        alt={`Imagem do produto ${data.name}`}
      />

      <Styles.Title>{data.name}</Styles.Title>

      <QuantityComponent id={data.id} />

      <Styles.Price>{formatToCurrency(data.price)}</Styles.Price>

      <Styles.Circle
        type="button"
        aria-label="remover-item"
        onClick={() => {
          dispatch(removeItem(data.id));
        }}
      >
        <Styles.CloseIcon />
      </Styles.Circle>
    </Styles.ProductCard>
  );
}
