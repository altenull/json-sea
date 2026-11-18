# PreviewHttpUri._PreviewHttpUri

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\primitive\components\PreviewHttpUri.tsx` (lines 10-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ httpUri }: Props) => {
  return (
    <>
      <LinkViewer httpUri={httpUri} />
      <UriTable httpUri={httpUri} />
    </>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _PreviewHttpUri = ({ httpUri }: Props) => {
  return (
    <>
      <LinkViewer httpUri={httpUri} />
      <UriTable httpUri={httpUri} />
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
