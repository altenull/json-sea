# ArrayInspector._ArrayInspector

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\array\components\ArrayInspector.tsx` (lines 11-33)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ array }: Props) => {
  const { isDarkMode } = useCustomTheme();

  return (
    <Card className="h-[160px]" shadow="sm">
      <Editor
        theme={isDarkMode ? 'vs-dark' : 'light'}
        defaultLanguage="json"
        options={{
          minimap: {
            enabled: false,
          },
          scrollbar: {
            horizontal: 'hidden',
          },
          overviewRulerLanes: 0,
          readOnly: true,
        }}
        defaultValue={formatJsonLikeData(array)}
      />
    </Card>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _ArrayInspector = ({ array }: Props) => {
  const { isDarkMode } = useCustomTheme();

  return (
    <Card className="h-[160px]" shadow="sm">
      <Editor
        theme={isDarkMode ? 'vs-dark' : 'light'}
        defaultLanguage="json"
        options={{
          minimap: {
            enabled: false,
          },
          scrollbar: {
            horizontal: 'hidden',
          },
          overviewRulerLanes: 0,
          readOnly: true,
        }}
        defaultValue={formatJsonLikeData(array)}
      />
    </Card>
  );
};
```

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 2

## Callers

None

## Callees

None
