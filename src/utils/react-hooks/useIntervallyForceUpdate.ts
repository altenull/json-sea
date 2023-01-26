'use client';

import { useEffect, useState } from 'react';

export const useIntervallyForceUpdate = (ms: number) => {
  const [, setBoolean] = useState<boolean>(false);

  useEffect(() => {
    const intervalId: NodeJS.Timer = setInterval(() => {
      setBoolean((prev: boolean) => !prev);
    }, ms);

    return () => clearInterval(intervalId);
  }, [ms]);
};
