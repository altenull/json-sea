'use client';

import { useEffect, useRef, useState } from 'react';
import { sizes } from '../constants/sizes.constant';

export const useJsonSeaRecommendedWidth = () => {
  const lastWidth = useRef<number | null>(null);

  const [isJsonSeaRecommendedWidth, setIsJsonSeaRecommendedWidth] = useState<boolean>(
    window?.innerWidth >= sizes.jsonSeaRecommendedWidth
  );

  useEffect(() => {
    if (typeof window !== 'object') {
      return undefined;
    }

    const handleResize = () => {
      if (window.innerWidth !== lastWidth.current) {
        lastWidth.current = window.innerWidth;

        setIsJsonSeaRecommendedWidth(window.innerWidth >= sizes.jsonSeaRecommendedWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isJsonSeaRecommendedWidth } as const;
};
