# json.util.isNumber

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\json.util.ts` (lines 31-33)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(v: unknown): v is number => {
  return typeof v === 'number';
}
```

## Docstring

_No docstring provided._

## Source

```
export const isNumber = (v: unknown): v is number => {
  return typeof v === 'number';
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
