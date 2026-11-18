# useMediaHeadApi.extractBase64MediaType

- **Type:** function
- **Language:** typescript
- **File:** `\src\api\media-head-api\useMediaHeadApi.ts` (lines 25-31)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(
  base64MediaDataUri: Base64ImageDataUri | Base64AudioDataUri | Base64VideoDataUri
): string => {
  const sliceEnd: number = base64MediaDataUri.indexOf(';base64');

  return base64MediaDataUri.slice(0, sliceEnd).replace('data:', '');
}
```

## Docstring

_No docstring provided._

## Source

```
const extractBase64MediaType = (
  base64MediaDataUri: Base64ImageDataUri | Base64AudioDataUri | Base64VideoDataUri
): string => {
  const sliceEnd: number = base64MediaDataUri.indexOf(';base64');

  return base64MediaDataUri.slice(0, sliceEnd).replace('data:', '');
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
