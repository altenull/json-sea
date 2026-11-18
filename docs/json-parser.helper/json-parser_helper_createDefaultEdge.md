# json-parser.helper.createDefaultEdge

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-parser.helper.ts` (lines 124-141)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ source, target, sourceHandle }: DefaultEdgeParams): Edge => {
  return {
    /**
     * @bugfix If the same edge id remains in `JsonDiagram` after update, the following bug occurs.
     *         https://stackoverflow.com/questions/70114700/react-flow-renderer-edges-remain-in-ui-without-any-parents
     * @solution Use `nanoid()` for id.
     */
    id: nanoid(),
    type: 'default',
    source,
    target,
    sourceHandle,
    animated: true,
    style: {
      strokeWidth: 2,
    },
  };
}
```

## Docstring

_No docstring provided._

## Source

```
const createDefaultEdge = ({ source, target, sourceHandle }: DefaultEdgeParams): Edge => {
  return {
    /**
     * @bugfix If the same edge id remains in `JsonDiagram` after update, the following bug occurs.
     *         https://stackoverflow.com/questions/70114700/react-flow-renderer-edges-remain-in-ui-without-any-parents
     * @solution Use `nanoid()` for id.
     */
    id: nanoid(),
    type: 'default',
    source,
    target,
    sourceHandle,
    animated: true,
    style: {
      strokeWidth: 2,
    },
  };
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
