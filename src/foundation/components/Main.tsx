'use client';

import { styled } from '../../../stitches.config';

type Props = {
  children: React.ReactNode;
};

const _Main = ({ children }: Props) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled('main', {
  display: 'flex',
  justifyContent: 'space-between',
  height: 'calc(100vh - $globalNavHeight)',
});

export const Main = _Main;
