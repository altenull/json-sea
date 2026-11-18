# json.util.formatJsonLikeData

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\json.util.ts` (lines 64-70)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(data: object | any[] | string): string => {
  const stringifyTarget = isString(data) ? JSON.parse(data) : data;
  const replacer: (number | string)[] | null = null;
  const space: string | number = 2;

  return JSON.stringify(stringifyTarget, replacer, space);
}
```

## Docstring

_No docstring provided._

## Source

```
export const formatJsonLikeData = (data: object | any[] | string): string => {
  const stringifyTarget = isString(data) ? JSON.parse(data) : data;
  const replacer: (number | string)[] | null = null;
  const space: string | number = 2;

  return JSON.stringify(stringifyTarget, replacer, space);
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
