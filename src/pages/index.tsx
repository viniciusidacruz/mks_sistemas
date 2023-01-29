import Head from 'next/head';
import { Fragment } from 'react';
import { useQuery } from 'react-query';

import { IResponse } from '@models/response';
import { ProductService } from '@/services/http/ProductsService';

import {
  ErrorComponent,
  LoadingComponent,
  ProductCardComponent,
} from '@components/index';

import { Container } from '@/styles/pages/Home';

export default function Home() {
  const { data, isLoading, isError } = useQuery<IResponse>(
    'products',
    ProductService
  );

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Fragment>
      <Head>
        <title>Página inicial | MKS Sistemas</title>
      </Head>

      <Container>
        <ul>
          {data?.products.map((product) => (
            <ProductCardComponent key={product.id} data={product} />
          ))}
        </ul>
      </Container>
    </Fragment>
  );
}
