# string-subtype.helper.isValidVideo

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\helpers\string-subtype.helper.ts` (lines 61-76)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(dirtyVideo: string, isHttpUri: boolean): Promise<boolean> => {
  if (dirtyVideo.startsWith('data:video/') || isHttpUri) {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = dirtyVideo;

    return new Promise((resolve) => {
      video.onerror = () => resolve(false);
      video.onloadedmetadata = () => resolve(hasVideoDimensions(video));
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
const isValidVideo = (dirtyVideo: string, isHttpUri: boolean): Promise<boolean> => {
  if (dirtyVideo.startsWith('data:video/') || isHttpUri) {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = dirtyVideo;

    return new Promise((resolve) => {
      video.onerror = () => resolve(false);
      video.onloadedmetadata = () => resolve(hasVideoDimensions(video));
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
