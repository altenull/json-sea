# useIntlNumberFormat.useIntlNumberFormat

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\hooks\useIntlNumberFormat.ts` (lines 5-15)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const [intlNumberFormat] = useState(
    Intl.NumberFormat(navigator.language, {
      maximumFractionDigits: 5,
    })
  );

  return {
    intlNumberFormat,
  };
}
```

## Docstring

_No docstring provided._

## Source

```
export const useIntlNumberFormat = () => {
  const [intlNumberFormat] = useState(
    Intl.NumberFormat(navigator.language, {
      maximumFractionDigits: 5,
    })
  );

  return {
    intlNumberFormat,
  };
};
```

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
