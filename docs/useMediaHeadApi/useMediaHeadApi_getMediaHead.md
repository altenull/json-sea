# useMediaHeadApi.getMediaHead

- **Type:** function
- **Language:** typescript
- **File:** `\src\api\media-head-api\useMediaHeadApi.ts` (lines 34-60)
- **Role:** internal
- **Stability:** unknown

## Signature

```
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
```

## Docstring

_No docstring provided._

## Source

```
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
