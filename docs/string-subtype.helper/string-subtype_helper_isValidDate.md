# string-subtype.helper.isValidDate

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts` (lines 15-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(dirtyDate: string): boolean => {
  return new Date(dirtyDate).toString() !== 'Invalid Date';
}
```

## Docstring

_No docstring provided._

## Source

```
const isValidDate = (dirtyDate: string): boolean => {
  return new Date(dirtyDate).toString() !== 'Invalid Date';
};
```

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
