# NullChip._NullChip

- **Type:** function
- **Language:** typescript
- **File:** `\src\ui\components\NullChip.tsx` (lines 9-15)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ size = 'md', className }: Props) => {
  return (
    <Chip className={className} variant="flat" size={size} color="default" radius="sm">
      {JSON.stringify(null)}
    </Chip>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _NullChip = ({ size = 'md', className }: Props) => {
  return (
    <Chip className={className} variant="flat" size={size} color="default" radius="sm">
      {JSON.stringify(null)}
    </Chip>
  );
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
