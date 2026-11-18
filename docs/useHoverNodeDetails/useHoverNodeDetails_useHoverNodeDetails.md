# useHoverNodeDetails.useHoverNodeDetails

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\node-detail-view\hooks\useHoverNodeDetails.ts` (lines 5-18)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(hoveredNodeDetails: HoveredNodeDetail[]) => {
  const [setHoveredNodeDetails, resetHoveredNodeDetails] = useNodeDetailViewStore((state) => [
    state.setHoveredNodeDetails,
    state.resetHoveredNodeDetails,
  ]);

  const [cardRef, isCardHovered] = useHover<HTMLDivElement>();

  useEffect(() => {
    isCardHovered ? setHoveredNodeDetails(hoveredNodeDetails) : resetHoveredNodeDetails();
  }, [isCardHovered]);

  return { cardRef };
}
```

## Docstring

_No docstring provided._

## Source

```
export const useHoverNodeDetails = (hoveredNodeDetails: HoveredNodeDetail[]) => {
  const [setHoveredNodeDetails, resetHoveredNodeDetails] = useNodeDetailViewStore((state) => [
    state.setHoveredNodeDetails,
    state.resetHoveredNodeDetails,
  ]);

  const [cardRef, isCardHovered] = useHover<HTMLDivElement>();

  useEffect(() => {
    isCardHovered ? setHoveredNodeDetails(hoveredNodeDetails) : resetHoveredNodeDetails();
  }, [isCardHovered]);

  return { cardRef };
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
