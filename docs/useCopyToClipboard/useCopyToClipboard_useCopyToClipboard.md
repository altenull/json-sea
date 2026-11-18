# useCopyToClipboard.useCopyToClipboard

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useCopyToClipboard.ts` (lines 8-32)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const [copiedText, setCopiedText] = useState<CopiedText>(null);

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

  const reset = () => setCopiedText(null);

  return { copiedText, copyToClipboard, reset };
}
```

## Docstring

_No docstring provided._

## Source

```
export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<CopiedText>(null);

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

  const reset = () => setCopiedText(null);

  return { copiedText, copyToClipboard, reset };
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
