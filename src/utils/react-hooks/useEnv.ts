import { useEffect, useState } from 'react';
import { env } from '../../environment';

export const useEnv = () => {
  const [isLocalhost, setIsLocalhost] = useState<boolean>(false);

  useEffect(() => {
    setIsLocalhost(window.location.hostname === env.localhost);
  }, []);

  return { isLocalhost } as const;
};
