# ThemeToggle._ThemeToggle

- **Type:** function
- **Language:** typescript
- **File:** `\src\foundation\components\ThemeToggle.tsx` (lines 6-14)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const { theme, isDarkMode, setTheme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
      <Icon icon={isDarkMode ? 'sun' : 'moon'} size={24} color={semanticColors[theme].default[500]} />
    </CircleTransparentButton>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _ThemeToggle = () => {
  const { theme, isDarkMode, setTheme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
      <Icon icon={isDarkMode ? 'sun' : 'moon'} size={24} color={semanticColors[theme].default[500]} />
    </CircleTransparentButton>
  );
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
