'use client';

import { styled } from '@nextui-org/react';
import { sizes } from '../../ui/constants/sizes.constant';

type Props = {
  children: React.ReactNode;
};

const _Main = ({ children }: Props) => {
  return <S_Main>{children}</S_Main>;
};

const S_Main = styled('main', {
  display: 'flex',
  justifyContent: 'space-between',
  height: `calc(100vh - ${sizes.globalNavHeight}px)`,
});

export const Main = _Main;
