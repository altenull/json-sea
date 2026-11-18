# useCopyToClipboard.copyToClipboard

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useCopyToClipboard.ts` (lines 11-27)
- **Role:** internal
- **Stability:** unknown

## Signature

```
async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  }
```

## Docstring

_No docstring provided._

## Source

```
  const copyToClipboard: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 2
- Features: 0

## Callers

None

## Callees

None
