# PreviewAudioUri._PreviewAudioUri

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\PreviewAudioUri.tsx` (lines 10-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ audioUri }: Props) => {
  return (
    <>
      <AudioViewer audioSrc={audioUri} />
      <UriTable httpUri={audioUri} />
    </>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _PreviewAudioUri = ({ audioUri }: Props) => {
  return (
    <>
      <AudioViewer audioSrc={audioUri} />
      <UriTable httpUri={audioUri} />
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
