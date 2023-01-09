'use client';

import { Text } from '@nextui-org/react';
import { memo } from 'react';

const _Copyright = () => {
  const year: number = new Date().getFullYear();

  return (
    <Text
      css={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        color: '$gray600',
      }}
      size="$sm"
    >
      © {year} JSON SEA
    </Text>
  );
};

export const Copyright = memo(_Copyright);
