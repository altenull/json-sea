'use client';

import { NextUIProvider } from '@nextui-org/react';
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <NextUIProvider>{children}</NextUIProvider>
    </RecoilRoot>
  );
};

export default Providers;
