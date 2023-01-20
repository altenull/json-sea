'use client';

import { useEffect, useRef, useState } from 'react';
import { sizes } from '../constants/sizes.constant';

export const useJsonSeaRecommendedWidth = () => {
  const isClient: boolean = typeof window === 'object';
  const lastWidth = useRef<number | null>(null);

  const [isJsonSeaRecommendedWidth, setIsJsonSeaRecommendedWidth] = useState<boolean>(
    isClient ? window.innerWidth >= sizes.jsonSeaRecommendedWidth : false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth !== lastWidth.current) {
        lastWidth.current = window.innerWidth;

        setIsJsonSeaRecommendedWidth(window.innerWidth >= sizes.jsonSeaRecommendedWidth);
      }
    };

    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return { isJsonSeaRecommendedWidth } as const;
};
