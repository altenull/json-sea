# string-subtype.helper.isValidImage

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts` (lines 38-52)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(dirtyImage: string, isHttpUri: boolean): Promise<boolean> => {
  if (dirtyImage.startsWith('data:image/') || isHttpUri) {
    const img = new Image();
    img.src = dirtyImage;

    return new Promise((resolve) => {
      img.onerror = () => resolve(false);
      img.onload = () => resolve(true);
    });
  } else {
    return new Promise((resolve) => {
      resolve(false);
    });
  }
}
```

## Docstring

_No docstring provided._

## Source

```
const isValidImage = (dirtyImage: string, isHttpUri: boolean): Promise<boolean> => {
  if (dirtyImage.startsWith('data:image/') || isHttpUri) {
    const img = new Image();
    img.src = dirtyImage;

    return new Promise((resolve) => {
      img.onerror = () => resolve(false);
      img.onload = () => resolve(true);
    });
  } else {
    return new Promise((resolve) => {
      resolve(false);
    });
  }
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
