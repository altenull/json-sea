# JsonEditorToggle._JsonEditorToggle

- **Type:** function
- **Language:** typescript
- **File:** `\src\foundation\components\JsonEditorToggle.tsx` (lines 7-24)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const [isJsonEditorVisible, toggleJsonEditor] = useJsonEditorViewStore((state) => [
    state.isJsonEditorVisible,
    state.toggleJsonEditor,
  ]);

  const { theme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={toggleJsonEditor}>
      <Icon
        icon={isJsonEditorVisible ? 'left-arrow-with-bar' : 'right-arrow-with-bar'}
        size={24}
        color={semanticColors[theme].default[500]}
      />
    </CircleTransparentButton>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _JsonEditorToggle = () => {
  const [isJsonEditorVisible, toggleJsonEditor] = useJsonEditorViewStore((state) => [
    state.isJsonEditorVisible,
    state.toggleJsonEditor,
  ]);

  const { theme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={toggleJsonEditor}>
      <Icon
        icon={isJsonEditorVisible ? 'left-arrow-with-bar' : 'right-arrow-with-bar'}
        size={24}
        color={semanticColors[theme].default[500]}
      />
    </CircleTransparentButton>
  );
};
```

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
