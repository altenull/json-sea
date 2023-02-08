import { styled } from '@nextui-org/react';
import { memo } from 'react';
import { isFunction } from '../../utils/function.util';

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const _CircleTransparentButton = ({ children, className, style, onClick }: Props) => {
  return (
    <StyledHost
      css={{
        ...style,
        cursor: isFunction(onClick) ? 'pointer' : 'initial',
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledHost>
  );
};

const StyledHost = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  backgroundColor: 'transparent',

  '&:hover': {
    backgroundColor: '$gray100',
  },
});

export const CircleTransparentButton = memo(_CircleTransparentButton);
