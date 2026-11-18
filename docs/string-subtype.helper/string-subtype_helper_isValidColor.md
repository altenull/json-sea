# string-subtype.helper.isValidColor

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts` (lines 8-13)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(dirtyColor: string): boolean => {
  const optionStyle = new Option().style;
  optionStyle.color = dirtyColor;

  return !!optionStyle.color;
}
```

## Docstring

_No docstring provided._

## Source

```
const isValidColor = (dirtyColor: string): boolean => {
  const optionStyle = new Option().style;
  optionStyle.color = dirtyColor;

  return !!optionStyle.color;
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
