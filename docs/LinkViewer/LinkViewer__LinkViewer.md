# LinkViewer._LinkViewer

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\LinkViewer.tsx` (lines 11-19)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ httpUri }: Props) => {
  const { data } = useJsonLinkApi({ httpUri });

  if (isNull(data) || data === undefined) {
    return null;
  }

  return <PreviewOgMeta jsonLink={data} />;
}
```

## Docstring

_No docstring provided._

## Source

```
const _LinkViewer = ({ httpUri }: Props) => {
  const { data } = useJsonLinkApi({ httpUri });

  if (isNull(data) || data === undefined) {
    return null;
  }

  return <PreviewOgMeta jsonLink={data} />;
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Callers

None

## Callees

None
