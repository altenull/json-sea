'use client';

import { useEffect, useState } from 'react';
import { endPoint } from '../../../environment';
import { HttpUri } from '../types/http-uri.type';

export type JsonLink = {
  title: string | undefined;
  description: string | undefined;
  images: string[];
  duration: number;
  domain: string;
  url: string;
};

export const useJsonLinkApi = (httpUri: HttpUri) => {
  const [jsonLink, setJsonLink] = useState<JsonLink | null>(null);

  useEffect(() => {
    const url = `${endPoint.jsonLinkIO}?url=${httpUri}`;

    fetch(url)
      .then((response) => response.json())
      .then(setJsonLink);
  }, [httpUri]);

  return jsonLink;
};
