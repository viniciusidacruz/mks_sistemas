import React from 'react';
import Image from 'next/image';

import loadingGifsource from '@assets/loading.gif';

import { Container } from './styles';

export function LoadingComponent() {
  return (
    <Container>
      <Image
        src={loadingGifsource}
        alt="Carrinho de compra fazendo animação de andando"
      />
    </Container>
  );
}
