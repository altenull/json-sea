# layout.RootLayout

- **Type:** function
- **Language:** typescript
- **File:** `\app\layout.tsx` (lines 12-21)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <AnalyticsWrapper />
      </body>
    </html>
  );
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
