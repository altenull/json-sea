# useBoolean.useBoolean

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useBoolean.ts` (lines 5-25)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(initialBool?: boolean) => {
  const [bool, setBool] = useState<boolean>(!!initialBool);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);
  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggleBoolean = useCallback(() => {
    setBool((prevBool) => !prevBool);
  }, []);

  return {
    bool,
    setTrue,
    setFalse,
    toggleBoolean,
  } as const;
}
```

## Docstring

_No docstring provided._

## Source

```
export const useBoolean = (initialBool?: boolean) => {
  const [bool, setBool] = useState<boolean>(!!initialBool);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);
  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggleBoolean = useCallback(() => {
    setBool((prevBool) => !prevBool);
  }, []);

  return {
    bool,
    setTrue,
    setFalse,
    toggleBoolean,
  } as const;
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
