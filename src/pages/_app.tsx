import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';

import { store } from '@/store';
import { queryClient } from '@/configs/queryClient';

import { FooterComponent, HeaderComponent } from '@components/index';

import { THEME_DEFAULT, ResetCSS } from '@styles/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={THEME_DEFAULT}>
          <HeaderComponent />
          <ResetCSS />
          <Component {...pageProps} />
          <FooterComponent />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
