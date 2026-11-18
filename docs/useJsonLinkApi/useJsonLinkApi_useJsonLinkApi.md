# useJsonLinkApi.useJsonLinkApi

- **Type:** function
- **Language:** typescript
- **File:** `\src\api\json-link-api\useJsonLinkApi.ts` (lines 18-30)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(request: UseJsonLinkApiRequest): UseQueryResult<JsonLink | null, Error> => {
  async function getJsonLink(): Promise<JsonLink | null> {
    const url = `${endPoint.jsonLinkIO}?url=${request.httpUri}`;

    const jsonLink: JsonLink | null = await fetch(url)
      .then((response) => response.json())
      .catch(() => null);

    return jsonLink;
  }

  return useQuery<JsonLink | null, Error>({ queryKey: queryKeys.jsonLinkByUri(request.httpUri), queryFn: getJsonLink });
}
```

## Docstring

_No docstring provided._

## Source

```
export const useJsonLinkApi = (request: UseJsonLinkApiRequest): UseQueryResult<JsonLink | null, Error> => {
  async function getJsonLink(): Promise<JsonLink | null> {
    const url = `${endPoint.jsonLinkIO}?url=${request.httpUri}`;

    const jsonLink: JsonLink | null = await fetch(url)
      .then((response) => response.json())
      .catch(() => null);

    return jsonLink;
  }

  return useQuery<JsonLink | null, Error>({ queryKey: queryKeys.jsonLinkByUri(request.httpUri), queryFn: getJsonLink });
};
```

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
