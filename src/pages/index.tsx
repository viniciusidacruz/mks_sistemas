import Head from 'next/head';
import { Fragment } from 'react';

import { ProductCardComponent } from '@components/index';
import { Container } from '@/styles/pages/Home';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Container>
        <ul>
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
        </ul>
      </Container>
    </Fragment>
  );
}
