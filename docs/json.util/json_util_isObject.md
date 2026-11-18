# json.util.isObject

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\json.util.ts` (lines 15-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(v: unknown): v is object => {
  return v !== null && !isArray(v) && typeof v === 'object';
}
```

## Docstring

_No docstring provided._

## Source

```
export const isObject = (v: unknown): v is object => {
  return v !== null && !isArray(v) && typeof v === 'object';
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
