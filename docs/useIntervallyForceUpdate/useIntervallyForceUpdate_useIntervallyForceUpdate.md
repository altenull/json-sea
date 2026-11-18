# useIntervallyForceUpdate.useIntervallyForceUpdate

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useIntervallyForceUpdate.ts` (lines 5-15)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(ms: number) => {
  const [, setBoolean] = useState<boolean>(false);

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setBoolean((prev: boolean) => !prev);
    }, ms);

    return () => clearInterval(intervalId);
  }, [ms]);
}
```

## Docstring

_No docstring provided._

## Source

```
export const useIntervallyForceUpdate = (ms: number) => {
  const [, setBoolean] = useState<boolean>(false);

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setBoolean((prev: boolean) => !prev);
    }, ms);

    return () => clearInterval(intervalId);
  }, [ms]);
};
```

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 1
- Features: 1

## Callers

None

## Callees

None
