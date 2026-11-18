# PropertyKeyChip._PropertyKeyChip

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\object\components\PropertyKeyChip.tsx` (lines 9-15)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ value, inferred = false }: Props) => {
  return (
    <Chip variant={inferred ? 'bordered' : 'flat'} color="secondary" size="md">
      {value}
    </Chip>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _PropertyKeyChip = ({ value, inferred = false }: Props) => {
  return (
    <Chip variant={inferred ? 'bordered' : 'flat'} color="secondary" size="md">
      {value}
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
