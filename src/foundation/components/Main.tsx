'use client';

import { styled } from '@nextui-org/react';
import { sizes } from '../../ui/constants/sizes.constant';

type Props = {
  children: React.ReactNode;
};

const _Main = ({ children }: Props) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled('main', {
  display: 'flex',
  justifyContent: 'space-between',
  height: `calc(100vh - ${sizes.globalNavHeight})`,
});

export const Main = _Main;
