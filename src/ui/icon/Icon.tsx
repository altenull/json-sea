import { styled } from '@nextui-org/react';
import { memo } from 'react';
import { iconNameToPathMap } from './icon.helper';
import { IconName } from './icon.type';

type Props = {
  icon: IconName;
  size: 24 | 32 | 40;

  /**
   * The icon color.
   * @default '#000000'
   */
  color?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

const _Icon = ({ icon, size, color = '#000000', style, onClick }: Props) => {
  return (
    <StyledHost
      style={{
        width: size,
        height: size,
        cursor: typeof onClick === 'function' ? 'pointer' : 'initial',
        pointerEvents: typeof onClick === 'function' ? 'initial' : 'none',
        ...style,
      }}
      onClick={onClick}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        role="img"
        data-icon={icon} // Set data-icon attribute for better distinction in browser 'Elements' tab
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconNameToPathMap[icon]} fill={color} fillRule="evenodd" clipRule="evenodd" />
      </svg>
    </StyledHost>
  );
};

const StyledHost = styled('span', {
  display: 'inline-block',
});

export const Icon = memo(_Icon);
