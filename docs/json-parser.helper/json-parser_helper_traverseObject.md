# json-parser.helper.traverseObject

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\json-parser.helper.ts` (lines 233-254)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ _obj, _nextDepth, _parentNodePathIds, _source, _sourceHandle }: TraverseObjectParams) => {
      nodeSequence++;
      const nextNodeId: string = formatNodeId(nodeSequence);
      const target: string = nextNodeId;

      traverse({
        traverseTarget: _obj,
        depth: _nextDepth,
        arrayIndexForObject: null,
        sourceSet: {
          source: _source,
          sourceHandle: _sourceHandle,
        },
        parentNodePathIds: _parentNodePathIds,
      });

      addDefaultEdge({
        source: _source,
        target,
        sourceHandle: _sourceHandle,
      });
    }
```

## Docstring

_No docstring provided._

## Source

```
    const traverseObject = ({ _obj, _nextDepth, _parentNodePathIds, _source, _sourceHandle }: TraverseObjectParams) => {
      nodeSequence++;
      const nextNodeId: string = formatNodeId(nodeSequence);
      const target: string = nextNodeId;

      traverse({
        traverseTarget: _obj,
        depth: _nextDepth,
        arrayIndexForObject: null,
        sourceSet: {
          source: _source,
          sourceHandle: _sourceHandle,
        },
        parentNodePathIds: _parentNodePathIds,
      });

      addDefaultEdge({
        source: _source,
        target,
        sourceHandle: _sourceHandle,
      });
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
