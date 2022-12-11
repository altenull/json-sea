import { styled } from '../../../stitches.config';

type Props = {
  children: React.ReactNode;
};

const _NodeShell = ({ children }: Props) => {
  return <StyledHost>{children}</StyledHost>;
};

// TODO: Styling
const StyledHost = styled('div', {
  backgroundColor: '#ffffff',
  border: '1px solid #1a192b',
  borderRadius: '4px',
  padding: '8px',
});

export const NodeShell = _NodeShell;
