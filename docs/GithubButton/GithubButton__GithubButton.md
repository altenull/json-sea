# GithubButton._GithubButton

- **Type:** function
- **Language:** typescript
- **File:** `\src\foundation\components\GithubButton.tsx` (lines 9-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const { theme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={() => openLinkAsNewTab(externalLink.jsonSeaGithubRepo)}>
      <Icon icon="github" size={24} color={semanticColors[theme].default[500]} />
    </CircleTransparentButton>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _GithubButton = () => {
  const { theme } = useCustomTheme();

  return (
    <CircleTransparentButton onClick={() => openLinkAsNewTab(externalLink.jsonSeaGithubRepo)}>
      <Icon icon="github" size={24} color={semanticColors[theme].default[500]} />
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
