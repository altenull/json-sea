# json.util.isString

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\json.util.ts` (lines 23-25)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(v: unknown): v is string => {
  return typeof v === 'string';
}
```

## Docstring

_No docstring provided._

## Source

```
export const isString = (v: unknown): v is string => {
  return typeof v === 'string';
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
