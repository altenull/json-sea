# PreviewImageUri._PreviewImageUri

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\PreviewImageUri.tsx` (lines 10-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ imageUri }: Props) => {
  return (
    <>
      <ImageViewer imageSrc={imageUri} />
      <UriTable httpUri={imageUri} />
    </>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _PreviewImageUri = ({ imageUri }: Props) => {
  return (
    <>
      <ImageViewer imageSrc={imageUri} />
      <UriTable httpUri={imageUri} />
    </>
  );
};
```

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
