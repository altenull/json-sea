# useCustomTheme.useCustomTheme

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useCustomTheme.ts` (lines 16-26)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(): UseCustomThemeReturn => {
  const useThemeReturn = useTheme();

  const isDarkMode = useThemeReturn.theme === 'dark';

  return {
    ...useThemeReturn,
    theme: isDarkMode ? 'dark' : 'light',
    isDarkMode,
  };
}
```

## Docstring

_No docstring provided._

## Source

```
export const useCustomTheme = (): UseCustomThemeReturn => {
  const useThemeReturn = useTheme();

  const isDarkMode = useThemeReturn.theme === 'dark';

  return {
    ...useThemeReturn,
    theme: isDarkMode ? 'dark' : 'light',
    isDarkMode,
  };
};
```

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
