import React from 'react';

import * as Styles from './styles';

export function QuantityComponent() {
  const quantity = 0;

  return (
    <Styles.Quantity>
      <span>Qtd:</span>

      <Styles.Container>
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </Styles.Container>
    </Styles.Quantity>
  );
}
