# useHover.useHover

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\react-hooks\useHover.ts` (lines 5-28)
- **Role:** internal
- **Stability:** unknown

## Signature

```
<T extends HTMLElement>(): [MutableRefObject<T | null>, boolean] => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  const handleMouseOver = useCallback(() => setIsHovered(true), []);
  const handleMouseOut = useCallback(() => setIsHovered(false), []);

  useEffect(
    () => {
      const element = ref.current;

      element?.addEventListener('mouseover', handleMouseOver);
      element?.addEventListener('mouseout', handleMouseOut);

      return () => {
        element?.removeEventListener('mouseover', handleMouseOver);
        element?.removeEventListener('mouseout', handleMouseOut);
      };
    },
    [ref, handleMouseOver, handleMouseOut] // Recall only if ref changes
  );

  return [ref, isHovered];
}
```

## Docstring

_No docstring provided._

## Source

```
export const useHover = <T extends HTMLElement>(): [MutableRefObject<T | null>, boolean] => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  const handleMouseOver = useCallback(() => setIsHovered(true), []);
  const handleMouseOut = useCallback(() => setIsHovered(false), []);

  useEffect(
    () => {
      const element = ref.current;

      element?.addEventListener('mouseover', handleMouseOver);
      element?.addEventListener('mouseout', handleMouseOut);

      return () => {
        element?.removeEventListener('mouseover', handleMouseOver);
        element?.removeEventListener('mouseout', handleMouseOut);
      };
    },
    [ref, handleMouseOver, handleMouseOut] // Recall only if ref changes
  );

  return [ref, isHovered];
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
