# CircleTransparentButton._CircleTransparentButton

- **Type:** function
- **Language:** typescript
- **File:** `\src\ui\components\CircleTransparentButton.tsx` (lines 11-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ children, className, style, onClick }: Props) => {
  return (
    <button
      style={style}
      className={`inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border-none bg-transparent p-0 hover:bg-default-100 ${
        isFunction(onClick) && 'cursor-pointer'
      } ${className}`}
```

## Docstring

_No docstring provided._

## Source

```
const _CircleTransparentButton = ({ children, className, style, onClick }: Props) => {
  return (
    <button
      style={style}
      className={`inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border-none bg-transparent p-0 hover:bg-default-100 ${
        isFunction(onClick) && 'cursor-pointer'
      } ${className}`}
```

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 1
- Features: 4

## Callers

None

## Callees

None
