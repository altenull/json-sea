import { useEffect, useState } from 'react';
import { env, featureFlag } from '../../environment';

export const useEnv = () => {
  const [isLocalhost, setIsLocalhost] = useState<boolean>(false);

  useEffect(() => {
    setIsLocalhost(window.location.hostname === env.localhost && featureFlag.debugMode);
  }, []);

  return { isLocalhost } as const;
};
