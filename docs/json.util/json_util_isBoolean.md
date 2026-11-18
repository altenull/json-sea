# json.util.isBoolean

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\json.util.ts` (lines 39-41)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(v: unknown): v is boolean => {
  return typeof v === 'boolean';
}
```

## Docstring

_No docstring provided._

## Source

```
export const isBoolean = (v: unknown): v is boolean => {
  return typeof v === 'boolean';
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
