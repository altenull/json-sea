# string-subtype.helper.isValidHttpUri

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts` (lines 26-36)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(dirtyHttpUri: string): dirtyHttpUri is HttpUri => {
  let url: URL | undefined;

  try {
    url = new URL(dirtyHttpUri);
  } catch (e) {
    return false;
  }

  return ['http:', 'https:'].includes(url.protocol);
}
```

## Docstring

_No docstring provided._

## Source

```
const isValidHttpUri = (dirtyHttpUri: string): dirtyHttpUri is HttpUri => {
  let url: URL | undefined;

  try {
    url = new URL(dirtyHttpUri);
  } catch (e) {
    return false;
  }

  return ['http:', 'https:'].includes(url.protocol);
};
```

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
