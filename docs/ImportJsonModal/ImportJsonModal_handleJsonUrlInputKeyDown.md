# ImportJsonModal.handleJsonUrlInputKeyDown

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-editor\components\ImportJsonModal.tsx` (lines 51-55)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(e) => {
    if (e.key === 'Enter' && !isJsonUrlValueEmpty) {
      fetchJsonUrl(jsonUrlValue);
    }
  }
```

## Docstring

_No docstring provided._

## Source

```
  const handleJsonUrlInputKeyDown: ComponentProps<typeof Input>['onKeyDown'] = (e) => {
    if (e.key === 'Enter' && !isJsonUrlValueEmpty) {
      fetchJsonUrl(jsonUrlValue);
    }
  };
```

## Git History

- Commits: 8
- Authors: 1
- Bug fixes: 1
- Features: 3

## Callers

None

## Callees

None
