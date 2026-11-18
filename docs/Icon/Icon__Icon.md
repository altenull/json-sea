# Icon._Icon

- **Type:** function
- **Language:** typescript
- **File:** `\src\ui\icon\Icon.tsx` (lines 19-24)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ icon, size, color = '#000000', style, onClick }: Props) => {
  return (
    <span
      className={`inline-block w-[${size}px] h-[${size}px] ${
        isFunction(onClick) ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none cursor-auto'
      }`}
```

## Docstring

_No docstring provided._

## Source

```
const _Icon = ({ icon, size, color = '#000000', style, onClick }: Props) => {
  return (
    <span
      className={`inline-block w-[${size}px] h-[${size}px] ${
        isFunction(onClick) ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none cursor-auto'
      }`}
```

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 1
- Features: 2

## Callers

None

## Callees

None
