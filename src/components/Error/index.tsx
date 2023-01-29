import React from 'react';
import Image from 'next/image';

import errorGifsource from '@assets/error.gif';

import { Container } from './styles';

export function ErrorComponent() {
  return (
    <Container>
      <Image
        src={errorGifsource}
        alt="Triangulo com um sinal de exclamação centralizado incentivando que algo de errado aconteceu"
      />
    </Container>
  );
}
