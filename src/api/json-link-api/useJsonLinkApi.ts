import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { endPoint } from '../../environment';
import { HttpUri } from '../../node-detail/primitive/types/http-uri.type';
import { JsonLink } from './json-link.types';

const queryKeys = {
  all: ['jsonLinks'],
  jsonLinkByUri: (httpUri: UseJsonLinkApiRequest['httpUri']) => [...queryKeys.all, httpUri],
} as const;

type UseJsonLinkApiRequest = {
  httpUri: HttpUri;
};

/**
 * jsonLinkIO help us to extract metadata from URL
 */
export const useJsonLinkApi = (request: UseJsonLinkApiRequest): UseQueryResult<JsonLink | null, Error> => {
  async function getJsonLink(): Promise<JsonLink | null> {
    const url = `${endPoint.jsonLinkIO}?url=${request.httpUri}`;

    const jsonLink: JsonLink | null = await fetch(url)
      .then((response) => response.json())
      .catch(() => null);

    return jsonLink;
  }

  return useQuery<JsonLink | null, Error>(queryKeys.jsonLinkByUri(request.httpUri), getJsonLink);
};
