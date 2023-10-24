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
    <button
      style={style}
      className={`inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border-none bg-transparent p-0 hover:bg-gray-100 ${
        isFunction(onClick) && 'cursor-pointer'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const CircleTransparentButton = memo(_CircleTransparentButton);
