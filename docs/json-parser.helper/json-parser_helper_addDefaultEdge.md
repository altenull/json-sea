# json-parser.helper.addDefaultEdge

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-parser.helper.ts` (lines 189-197)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ source, target, sourceHandle }: DefaultEdgeParams): void => {
    edges.push(
      createDefaultEdge({
        source,
        target,
        sourceHandle,
      }),
    );
  }
```

## Docstring

_No docstring provided._

## Source

```
  const addDefaultEdge = ({ source, target, sourceHandle }: DefaultEdgeParams): void => {
    edges.push(
      createDefaultEdge({
        source,
        target,
        sourceHandle,
      }),
    );
  };
```

## Git History

- Commits: 13
- Authors: 1
- Bug fixes: 0
- Features: 7

## Callers

None

## Callees

None
