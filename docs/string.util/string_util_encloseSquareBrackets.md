# string.util.encloseSquareBrackets

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\string.util.ts` (lines 11-13)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(v: string | number): string => {
  return `[${String(v)}]`;
}
```

## Docstring

_No docstring provided._

## Source

```
export const encloseSquareBrackets = (v: string | number): string => {
  return `[${String(v)}]`;
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
