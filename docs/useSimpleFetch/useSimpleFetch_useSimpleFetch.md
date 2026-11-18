# useSimpleFetch.useSimpleFetch

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useSimpleFetch.ts` (lines 5-26)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<unknown>(null);

  const fetchUrl = useCallback((url: string) => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return { loading, data, error, fetchUrl, resetError } as const;
}
```

## Docstring

_No docstring provided._

## Source

```
export const useSimpleFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<unknown>(null);

  const fetchUrl = useCallback((url: string) => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return { loading, data, error, fetchUrl, resetError } as const;
};
```

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
