'use client';

import { useCallback, useState } from 'react';

export const useBoolean = (initialBool?: boolean) => {
  const [bool, setBool] = useState<boolean>(!!initialBool);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);
  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggleBoolean = useCallback(() => {
    setBool((prevBool) => !prevBool);
  }, []);

  return {
    bool,
    setTrue,
    setFalse,
    toggleBoolean,
  } as const;
};
