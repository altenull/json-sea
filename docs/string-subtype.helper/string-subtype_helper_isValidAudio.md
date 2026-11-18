# string-subtype.helper.isValidAudio

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts` (lines 78-93)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(dirtyAudio: string, isHttpUri: boolean): Promise<boolean> => {
  if (dirtyAudio.startsWith('data:audio/') || isHttpUri) {
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.src = dirtyAudio;

    return new Promise((resolve) => {
      audio.onerror = () => resolve(false);
      audio.ondurationchange = () => resolve(true);
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
const isValidAudio = (dirtyAudio: string, isHttpUri: boolean): Promise<boolean> => {
  if (dirtyAudio.startsWith('data:audio/') || isHttpUri) {
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.src = dirtyAudio;

    return new Promise((resolve) => {
      audio.onerror = () => resolve(false);
      audio.ondurationchange = () => resolve(true);
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
