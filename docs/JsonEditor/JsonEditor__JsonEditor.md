# JsonEditor._JsonEditor

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-editor\components\JsonEditor.tsx` (lines 12-71)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const [stringifiedJson, setStringifiedJson] = useJsonEngineStore((state) => [
    state.stringifiedJson,
    state.setStringifiedJson,
  ]);
  const resetSelectedNode = useJsonDiagramViewStore((state) => state.resetSelectedNode);

  const { isDarkMode } = useCustomTheme();

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      if (value === undefined) return;

      setStringifiedJson(value);

      if (isValidJson(value)) {
        resetSelectedNode();
      }
    },
    [setStringifiedJson, resetSelectedNode],
  );

  return (
    <div className="size-full relative border-r-1 border-solid border-r-border">
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
        }}
        defaultValue={DEFAULT_STRINGIFIED_JSON}
        value={stringifiedJson}
        onChange={handleEditorChange}
      />

      <JsonValidityStatus
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />

      <JsonEditorConsole
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _JsonEditor = () => {
  const [stringifiedJson, setStringifiedJson] = useJsonEngineStore((state) => [
    state.stringifiedJson,
    state.setStringifiedJson,
  ]);
  const resetSelectedNode = useJsonDiagramViewStore((state) => state.resetSelectedNode);

  const { isDarkMode } = useCustomTheme();

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      if (value === undefined) return;

      setStringifiedJson(value);

      if (isValidJson(value)) {
        resetSelectedNode();
      }
    },
    [setStringifiedJson, resetSelectedNode],
  );

  return (
    <div className="size-full relative border-r-1 border-solid border-r-border">
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
        }}
        defaultValue={DEFAULT_STRINGIFIED_JSON}
        value={stringifiedJson}
        onChange={handleEditorChange}
      />

      <JsonValidityStatus
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />

      <JsonEditorConsole
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
};
```

## Git History

- Commits: 7
- Authors: 1
- Bug fixes: 1
- Features: 3

## Callers

None

## Callees

None
