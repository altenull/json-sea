# useJsonSeaRecommendedWidth.useJsonSeaRecommendedWidth

- **Type:** function
- **Language:** typescript
- **File:** `\src\ui\hooks\useJsonSeaRecommendedWidth.ts` (lines 6-28)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
  const isClient: boolean = typeof window === 'object';
  const lastWidth = useRef<number | null>(null);

  const [isJsonSeaRecommendedWidth, setIsJsonSeaRecommendedWidth] = useState<boolean>(
    isClient ? window.innerWidth >= sizes.jsonSeaRecommendedWidth : false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth !== lastWidth.current) {
        lastWidth.current = window.innerWidth;

        setIsJsonSeaRecommendedWidth(window.innerWidth >= sizes.jsonSeaRecommendedWidth);
      }
    };

    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return { isJsonSeaRecommendedWidth } as const;
}
```

## Docstring

_No docstring provided._

## Source

```
export const useJsonSeaRecommendedWidth = () => {
  const isClient: boolean = typeof window === 'object';
  const lastWidth = useRef<number | null>(null);

  const [isJsonSeaRecommendedWidth, setIsJsonSeaRecommendedWidth] = useState<boolean>(
    isClient ? window.innerWidth >= sizes.jsonSeaRecommendedWidth : false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth !== lastWidth.current) {
        lastWidth.current = window.innerWidth;

        setIsJsonSeaRecommendedWidth(window.innerWidth >= sizes.jsonSeaRecommendedWidth);
      }
    };

    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return { isJsonSeaRecommendedWidth } as const;
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
