# window.util.openLinkAsNewTab

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\window.util.ts` (lines 1-3)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(url: string): void => {
  window?.open(url, '_blank', 'noopener,noreferrer');
}
```

## Docstring

_No docstring provided._

## Source

```
export const openLinkAsNewTab = (url: string): void => {
  window?.open(url, '_blank', 'noopener,noreferrer');
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
