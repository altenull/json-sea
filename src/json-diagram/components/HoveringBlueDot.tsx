import { memo } from 'react';

const _HoveringBlueDot = () => {
  return <span className="blue-dot-for-node" />;
};

export const HoveringBlueDot = memo(_HoveringBlueDot);
