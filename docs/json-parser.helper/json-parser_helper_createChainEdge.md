# json-parser.helper.createChainEdge

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-parser.helper.ts` (lines 143-152)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ source, target }: SourceTarget): Edge => {
  return {
    id: nanoid(),
    type: EdgeType.Chain,
    source,
    target,
    sourceHandle: addPrefixChain(source),
    targetHandle: addPrefixChain(target),
  };
}
```

## Docstring

_No docstring provided._

## Source

```
const createChainEdge = ({ source, target }: SourceTarget): Edge => {
  return {
    id: nanoid(),
    type: EdgeType.Chain,
    source,
    target,
    sourceHandle: addPrefixChain(source),
    targetHandle: addPrefixChain(target),
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
