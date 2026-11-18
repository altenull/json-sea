# useString.useString

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useString.ts` (lines 5-18)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(initialString?: string) => {
  const [string, setString] = useState<string>(initialString ?? '');

  const clearString = useCallback(() => {
    setString('');
  }, []);

  return {
    string,
    isEmpty: string.length < 1,
    setString,
    clearString,
  } as const;
}
```

## Docstring

_No docstring provided._

## Source

```
export const useString = (initialString?: string) => {
  const [string, setString] = useState<string>(initialString ?? '');

  const clearString = useCallback(() => {
    setString('');
  }, []);

  return {
    string,
    isEmpty: string.length < 1,
    setString,
    clearString,
  } as const;
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
