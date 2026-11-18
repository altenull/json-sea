# VideoViewer._VideoViewer

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\VideoViewer.tsx` (lines 10-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ videoSrc }: Props) => {
  return (
    <MediaViewerBox>
      <video className="block w-full" controls preload="metadata" src={videoSrc} />
      <MIMETypeAndSize mediaSrc={videoSrc} />
    </MediaViewerBox>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _VideoViewer = ({ videoSrc }: Props) => {
  return (
    <MediaViewerBox>
      <video className="block w-full" controls preload="metadata" src={videoSrc} />
      <MIMETypeAndSize mediaSrc={videoSrc} />
    </MediaViewerBox>
  );
};
```

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 1
- Features: 3

## Callers

None

## Callees

None
