# Main._Main

- **Type:** function
- **Language:** typescript
- **File:** `\src\foundation\components\Main.tsx` (lines 5-8)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ children }: Props) => {
  // 3.375rem is height of `<GlobalNav>`
  return <main className="flex h-[calc(100vh-3.375rem)] justify-between">{children}</main>;
}
```

## Docstring

_No docstring provided._

## Source

```
const _Main = ({ children }: Props) => {
  // 3.375rem is height of `<GlobalNav>`
  return <main className="flex h-[calc(100vh-3.375rem)] justify-between">{children}</main>;
};
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
