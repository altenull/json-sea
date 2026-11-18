# useMediaHeadApi.startsWithHttpOrHttps

- **Type:** function
- **Language:** typescript
- **File:** `\src\api\media-head-api\useMediaHeadApi.ts` (lines 23-23)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(v: string): v is HttpUri => v.startsWith('http:') || v.startsWith('https:')
```

## Docstring

_No docstring provided._

## Source

```
const startsWithHttpOrHttps = (v: string): v is HttpUri => v.startsWith('http:') || v.startsWith('https:');
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
