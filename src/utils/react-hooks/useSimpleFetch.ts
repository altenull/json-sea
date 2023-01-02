'use client';

import { useCallback, useState } from 'react';

export const useSimpleFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState();

  const fetchUrl = useCallback((url: string) => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { loading, data, error, fetchUrl } as const;
};
