import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </RecoilRoot>
  );
}

export default MyApp;
