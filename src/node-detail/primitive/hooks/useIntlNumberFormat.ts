'use client';

import { useState } from 'react';

export const useIntlNumberFormat = () => {
  const [intlNumberFormat] = useState(
    Intl.NumberFormat(navigator.language, {
      maximumFractionDigits: 5,
    })
  );

  return {
    intlNumberFormat,
  };
};
