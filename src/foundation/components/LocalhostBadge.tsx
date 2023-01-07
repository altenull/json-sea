'use client';

import { Badge } from '@nextui-org/react';
import { memo } from 'react';
import { useEnv } from '../../utils/react-hooks/useEnv';

const _LocalhostBadge = () => {
  const { isLocalhost } = useEnv();

  if (!isLocalhost) {
    return null;
  }

  return (
    <Badge
      style={{ position: 'fixed', right: 0, top: '50%', transform: 'rotate(90deg) translateY(-100%)' }}
      isSquared
      color="warning"
    >
      Localhost
    </Badge>
  );
};

export const LocalhostBadge = memo(_LocalhostBadge);
