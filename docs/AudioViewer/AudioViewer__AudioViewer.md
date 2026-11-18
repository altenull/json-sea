# AudioViewer._AudioViewer

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\AudioViewer.tsx` (lines 10-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ audioSrc }: Props) => {
  return (
    <MediaViewerBox>
      <audio className="block w-full" controls preload="metadata" src={audioSrc} />
      <MIMETypeAndSize mediaSrc={audioSrc} />
    </MediaViewerBox>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _AudioViewer = ({ audioSrc }: Props) => {
  return (
    <MediaViewerBox>
      <audio className="block w-full" controls preload="metadata" src={audioSrc} />
      <MIMETypeAndSize mediaSrc={audioSrc} />
    </MediaViewerBox>
  );
};
```

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 1
- Features: 3

## Callers

None

## Callees

None
