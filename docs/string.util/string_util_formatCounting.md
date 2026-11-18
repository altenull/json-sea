# string.util.formatCounting

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\string.util.ts` (lines 21-27)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(total: number, singular: string, plural: string): string => {
  if (total === 0) {
    return '(empty)';
  }

  return total === 1 ? `(1 ${singular})` : `(${total} ${plural})`;
}
```

## Docstring

_No docstring provided._

## Source

```
export const formatCounting = (total: number, singular: string, plural: string): string => {
  if (total === 0) {
    return '(empty)';
  }

  return total === 1 ? `(1 ${singular})` : `(${total} ${plural})`;
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
