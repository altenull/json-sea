# LocalhostChip._LocalhostChip

- **Type:** function
- **Language:** typescript
- **File:** `\src\foundation\components\LocalhostChip.tsx` (lines 7-19)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const { isLocalhost } = useEnv();

  if (!isLocalhost) {
    return null;
  }

  return (
    <Chip className="fixed left-0 top-1/2 -translate-x-1/3 rotate-90" color="warning">
      Localhost
    </Chip>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _LocalhostChip = () => {
  const { isLocalhost } = useEnv();

  if (!isLocalhost) {
    return null;
  }

  return (
    <Chip className="fixed left-0 top-1/2 -translate-x-1/3 rotate-90" color="warning">
      Localhost
    </Chip>
  );
};
```

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
