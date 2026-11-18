# useIsMounted.useIsMounted

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useIsMounted.ts` (lines 5-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(): boolean => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted;
}
```

## Docstring

_No docstring provided._

## Source

```
export const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted;
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
