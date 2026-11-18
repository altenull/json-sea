# useMediaHeadApi.useMediaHeadApi

- **Type:** function
- **Language:** typescript
- **File:** `\src\api\media-head-api\useMediaHeadApi.ts` (lines 33-63)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(request: UseMediaHeadApiRequest): UseQueryResult<MediaHead, Error> => {
  async function getMediaHead(): Promise<MediaHead> {
    if (startsWithHttpOrHttps(request.mediaSrc)) {
      const url = request.mediaSrc;

      const mediaHead: MediaHead = await fetch(url, { method: 'HEAD' })
        .then((response) => {
          const contentType: string | null = response.headers.get('Content-Type');
          const contentLength: string | null = response.headers.get('Content-Length');

          return {
            mimeType: contentType,
            mimeBytes: isString(contentLength) ? Number(contentLength) : null,
          };
        })
        .catch(() => ({
          mimeType: null,
          mimeBytes: null,
        }));

      return mediaHead;
    } else {
      return {
        mimeType: extractBase64MediaType(request.mediaSrc),
        mimeBytes: null,
      };
    }
  }

  return useQuery<MediaHead, Error>({ queryKey: queryKeys.mediaHeadBySrc(request.mediaSrc), queryFn: getMediaHead });
}
```

## Docstring

_No docstring provided._

## Source

```
export const useMediaHeadApi = (request: UseMediaHeadApiRequest): UseQueryResult<MediaHead, Error> => {
  async function getMediaHead(): Promise<MediaHead> {
    if (startsWithHttpOrHttps(request.mediaSrc)) {
      const url = request.mediaSrc;

      const mediaHead: MediaHead = await fetch(url, { method: 'HEAD' })
        .then((response) => {
          const contentType: string | null = response.headers.get('Content-Type');
          const contentLength: string | null = response.headers.get('Content-Length');

          return {
            mimeType: contentType,
            mimeBytes: isString(contentLength) ? Number(contentLength) : null,
          };
        })
        .catch(() => ({
          mimeType: null,
          mimeBytes: null,
        }));

      return mediaHead;
    } else {
      return {
        mimeType: extractBase64MediaType(request.mediaSrc),
        mimeBytes: null,
      };
    }
  }

  return useQuery<MediaHead, Error>({ queryKey: queryKeys.mediaHeadBySrc(request.mediaSrc), queryFn: getMediaHead });
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
