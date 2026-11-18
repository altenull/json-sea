# ArrayNode._ArrayNode

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-diagram\components\ArrayNode.tsx` (lines 23-44)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ id, data }: NodeProps<ArrayNodeData>) => {
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);
  const { isHighlightNode } = useHighlighter();

  const { arrayIndex, items, isRootNode } = data;

  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(({ nodeId }) => nodeId === id);

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Array} isHighlight={isHighlightNode(id)}>
      {!isRootNode && <DefaultHandle id={id} type="target" />}
      <ChainHandle id={addPrefixChain(id)} type="target" />

      <Text className="m-auto">{isRootNode ? ROOT_NODE_NAME : encloseSquareBrackets(arrayIndex)}</Text>

      {!isEmptyArray(items) && <DefaultHandle id={id} type="source" />}

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
      <ChainHandle id={addPrefixChain(id)} type="source" />
    </NodeShell>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _ArrayNode = ({ id, data }: NodeProps<ArrayNodeData>) => {
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);
  const { isHighlightNode } = useHighlighter();

  const { arrayIndex, items, isRootNode } = data;

  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(({ nodeId }) => nodeId === id);

  return (
    <NodeShell nodeId={id} nodeType={NodeType.Array} isHighlight={isHighlightNode(id)}>
      {!isRootNode && <DefaultHandle id={id} type="target" />}
      <ChainHandle id={addPrefixChain(id)} type="target" />

      <Text className="m-auto">{isRootNode ? ROOT_NODE_NAME : encloseSquareBrackets(arrayIndex)}</Text>

      {!isEmptyArray(items) && <DefaultHandle id={id} type="source" />}

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
      <ChainHandle id={addPrefixChain(id)} type="source" />
    </NodeShell>
  );
};
```

## Git History

- Commits: 9
- Authors: 1
- Bug fixes: 0
- Features: 7

## Callers

None

## Callees

None
