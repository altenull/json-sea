# PreviewVideoUri._PreviewVideoUri

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\PreviewVideoUri.tsx` (lines 10-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ videoUri }: Props) => {
  return (
    <>
      <VideoViewer videoSrc={videoUri} />
      <UriTable httpUri={videoUri} />
    </>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _PreviewVideoUri = ({ videoUri }: Props) => {
  return (
    <>
      <VideoViewer videoSrc={videoUri} />
      <UriTable httpUri={videoUri} />
    </>
  );
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
