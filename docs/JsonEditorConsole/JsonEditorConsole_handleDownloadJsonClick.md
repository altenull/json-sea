# JsonEditorConsole.handleDownloadJsonClick

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-editor\components\JsonEditorConsole.tsx` (lines 22-24)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
    downloadAsFile(`data:text/json;charset=utf8,${encodeURIComponent(stringifiedJson)}`, 'json-sea.json');
  }
```

## Docstring

_No docstring provided._

## Source

```
  const handleDownloadJsonClick = () => {
    downloadAsFile(`data:text/json;charset=utf8,${encodeURIComponent(stringifiedJson)}`, 'json-sea.json');
  };
```

## Git History

- Commits: 9
- Authors: 1
- Bug fixes: 2
- Features: 2

## Callers

None

## Callees

None
