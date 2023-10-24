import { memo } from 'react';

const _HoveringBlueDot = () => {
  return (
    <span className="absolute right-0 top-1/2 min-h-[10px] min-w-[10px] -translate-y-1/2 translate-x-[70%] rounded-full bg-blue-600" />
  );
};

export const HoveringBlueDot = memo(_HoveringBlueDot);
