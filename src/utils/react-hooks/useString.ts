'use client';

import { useCallback, useState } from 'react';

export const useString = (initialString?: string) => {
  const [string, setString] = useState<string>(typeof initialString === 'string' ? initialString : '');

  const clearString = useCallback(() => {
    setString('');
  }, []);

  return {
    string,
    isEmpty: string.length < 1,
    setString,
    clearString,
  } as const;
};
