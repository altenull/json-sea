'use client';

import { Chip } from "@heroui/chip";
import { memo } from 'react';
import { useEnv } from '../../utils/react-hooks/useEnv';

const _LocalhostChip = () => {
  const { isLocalhost } = useEnv();

  if (!isLocalhost) {
    return null;
  }

  return (
    <Chip className="fixed left-0 top-1/2 -translate-x-1/3 rotate-90" color="warning">
      Localhost
    </Chip>
  );
};

export const LocalhostChip = memo(_LocalhostChip);
