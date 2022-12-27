'use client';

import { useState, useEffect } from 'react';
import { endPoint } from '../../../environment';
import { isString } from '../../../utils/json.util';

export type JsonLink = {
  title: string | undefined;
  description: string | undefined;
  images: string[];
  duration: number;
  domain: string;
  url: string;
};

export const useJsonLinkApi = (httpUri: string | null) => {
  const [jsonLink, setJsonLink] = useState<JsonLink | null>(null);

  useEffect(() => {
    if (isString(httpUri)) {
      const url = `${endPoint.jsonLinkIO}?url=${httpUri}`;

      fetch(url)
        .then((response) => response.json())
        .then(setJsonLink);
    }
  }, [httpUri]);

  return jsonLink;
};
