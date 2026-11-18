# useJsonLinkApi.getJsonLink

- **Type:** function
- **Language:** typescript
- **File:** `\src\api\json-link-api\useJsonLinkApi.ts` (lines 19-27)
- **Role:** internal
- **Stability:** unknown

## Signature

```
async function getJsonLink(): Promise<JsonLink | null> {
    const url = `${endPoint.jsonLinkIO}?url=${request.httpUri}`;

    const jsonLink: JsonLink | null = await fetch(url)
      .then((response) => response.json())
      .catch(() => null);

    return jsonLink;
  }
```

## Docstring

_No docstring provided._

## Source

```
  async function getJsonLink(): Promise<JsonLink | null> {
    const url = `${endPoint.jsonLinkIO}?url=${request.httpUri}`;

    const jsonLink: JsonLink | null = await fetch(url)
      .then((response) => response.json())
      .catch(() => null);

    return jsonLink;
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
