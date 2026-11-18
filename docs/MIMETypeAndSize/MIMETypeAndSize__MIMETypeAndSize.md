# MIMETypeAndSize._MIMETypeAndSize

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\MIMETypeAndSize.tsx` (lines 12-25)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ mediaSrc }: Props) => {
  const { isSuccess, data } = useMediaHeadApi({ mediaSrc });

  if (!isSuccess || (isNull(data.mimeType) && isNull(data.mimeBytes))) {
    return null;
  }

  return (
    <div className="flex items-center justify-between">
      <Text className="text-xs text-zinc-400">{data.mimeType}</Text>
      <Text className="text-xs text-zinc-400">{isNumber(data.mimeBytes) ? prettyBytes(data.mimeBytes) : ''}</Text>
    </div>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _MIMETypeAndSize = ({ mediaSrc }: Props) => {
  const { isSuccess, data } = useMediaHeadApi({ mediaSrc });

  if (!isSuccess || (isNull(data.mimeType) && isNull(data.mimeBytes))) {
    return null;
  }

  return (
    <div className="flex items-center justify-between">
      <Text className="text-xs text-zinc-400">{data.mimeType}</Text>
      <Text className="text-xs text-zinc-400">{isNumber(data.mimeBytes) ? prettyBytes(data.mimeBytes) : ''}</Text>
    </div>
  );
};
```

## Git History

- Commits: 8
- Authors: 1
- Bug fixes: 1
- Features: 4

## Callers

None

## Callees

None
