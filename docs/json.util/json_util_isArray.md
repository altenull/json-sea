# json.util.isArray

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\json.util.ts` (lines 5-7)
- **Role:** internal
- **Stability:** unknown

## Signature

```
<T extends any[]>(v: unknown): v is T => {
  return Array.isArray(v);
}
```

## Docstring

_No docstring provided._

## Source

```
export const isArray = <T extends any[]>(v: unknown): v is T => {
  return Array.isArray(v);
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
