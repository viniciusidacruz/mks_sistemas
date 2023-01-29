import React from 'react';
import { useDispatch } from 'react-redux';

import { incrementQuantity, decrementQuantity } from '@slices/cart';

import * as Styles from './styles';
import { IParamsComponent } from './types';

export function QuantityComponent({ id }: IParamsComponent) {
  const quantity = 0;
  const dispatch = useDispatch();

  return (
    <Styles.Quantity>
      <span>Qtd:</span>

      <Styles.Container>
        <button
          type="button"
          aria-label="remover-mais-produto-do-mesmo"
          onClick={() => {
            dispatch(decrementQuantity(id));
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          aria-label="adicionar-mais-produto-do-mesmo"
          onClick={() => {
            dispatch(incrementQuantity(id));
          }}
        >
          +
        </button>
      </Styles.Container>
    </Styles.Quantity>
  );
}
