# Copyright.renderCopyright

- **Type:** function
- **Language:** typescript
- **File:** `\src\foundation\components\Copyright.tsx` (lines 16-20)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
    const currentYear: number = new Date().getFullYear();

    return <>© {currentYear} JSON SEA</>;
  };
```

## Docstring

_No docstring provided._

## Source

```
  const renderCopyright = () => {
    const currentYear: number = new Date().getFullYear();

    return <>© {currentYear} JSON SEA</>;
  };
```

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 1
- Features: 3

## Callers

None

## Callees

None
