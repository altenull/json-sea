# BooleanChip._BooleanChip

- **Type:** function
- **Language:** typescript
- **File:** `\src\ui\components\BooleanChip.tsx` (lines 10-16)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ value, size = 'md', className }: Props) => {
  return (
    <Chip className={className} variant="flat" size={size} color={value ? 'success' : 'danger'} radius="sm">
      {JSON.stringify(value)}
    </Chip>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _BooleanChip = ({ value, size = 'md', className }: Props) => {
  return (
    <Chip className={className} variant="flat" size={size} color={value ? 'success' : 'danger'} radius="sm">
      {JSON.stringify(value)}
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
