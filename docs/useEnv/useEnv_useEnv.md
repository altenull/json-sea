# useEnv.useEnv

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useEnv.ts` (lines 6-14)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const [isLocalhost, setIsLocalhost] = useState<boolean>(false);

  useEffect(() => {
    setIsLocalhost(window.location.hostname === env.localhost && featureFlag.debugMode);
  }, []);

  return { isLocalhost } as const;
}
```

## Docstring

_No docstring provided._

## Source

```
export const useEnv = () => {
  const [isLocalhost, setIsLocalhost] = useState<boolean>(false);

  useEffect(() => {
    setIsLocalhost(window.location.hostname === env.localhost && featureFlag.debugMode);
  }, []);

  return { isLocalhost } as const;
};
```

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 0

## Callers

None

## Callees

None
