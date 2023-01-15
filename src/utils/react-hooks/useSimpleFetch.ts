'use client';

import { useCallback, useState } from 'react';

export const useSimpleFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<unknown>(null);

  const fetchUrl = useCallback((url: string) => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return { loading, data, error, fetchUrl, resetError } as const;
};
