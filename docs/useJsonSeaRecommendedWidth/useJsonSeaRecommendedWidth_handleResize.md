# useJsonSeaRecommendedWidth.handleResize

- **Type:** function
- **Language:** typescript
- **File:** `\src\ui\hooks\useJsonSeaRecommendedWidth.ts` (lines 15-21)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
      if (window?.innerWidth !== lastWidth.current) {
        lastWidth.current = window.innerWidth;

        setIsJsonSeaRecommendedWidth(window.innerWidth >= sizes.jsonSeaRecommendedWidth);
      }
    }
```

## Docstring

_No docstring provided._

## Source

```
    const handleResize = () => {
      if (window?.innerWidth !== lastWidth.current) {
        lastWidth.current = window.innerWidth;

        setIsJsonSeaRecommendedWidth(window.innerWidth >= sizes.jsonSeaRecommendedWidth);
      }
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
