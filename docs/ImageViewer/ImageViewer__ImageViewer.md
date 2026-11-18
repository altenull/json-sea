# ImageViewer._ImageViewer

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\ImageViewer.tsx` (lines 12-27)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ imageSrc }: Props) => {
  return (
    <MediaViewerBox>
      <Image
        className="mx-auto block h-[120px] w-auto cursor-pointer"
        removeWrapper
        radius="none"
        shadow="sm"
        src={imageSrc}
        alt="image preview"
        onClick={() => openLinkAsNewTab(imageSrc)}
      />
      <MIMETypeAndSize mediaSrc={imageSrc} />
    </MediaViewerBox>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _ImageViewer = ({ imageSrc }: Props) => {
  return (
    <MediaViewerBox>
      <Image
        className="mx-auto block h-[120px] w-auto cursor-pointer"
        removeWrapper
        radius="none"
        shadow="sm"
        src={imageSrc}
        alt="image preview"
        onClick={() => openLinkAsNewTab(imageSrc)}
      />
      <MIMETypeAndSize mediaSrc={imageSrc} />
    </MediaViewerBox>
  );
};
```

## Git History

- Commits: 8
- Authors: 1
- Bug fixes: 1
- Features: 3

## Callers

None

## Callees

None
