# providers.Providers

- **Type:** function
- **Language:** typescript
- **File:** `\app\providers.tsx` (lines 22-33)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ children }: Props) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const Providers = ({ children }: Props) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
};
```

## Git History

- Commits: 9
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
