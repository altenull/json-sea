# sea-node-position.helper.getLayoutedSeaNodes

- **Type:** function
- **Language:** typescript
- **File:** `\src\store\json-engine\helpers\sea-node-position.helper.ts` (lines 35-66)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(seaNodes: SeaNode[], edges: Edge[]): SeaNode[] => {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'LR' }); // 'LR' is Left to Right direction.

  seaNodes.forEach((node: SeaNode) => {
    dagreGraph.setNode(node.id, { width: sizes.nodeMaxWidth, height: calculateSeaNodeHeight(node) });
  });

  edges
    .filter(({ type }) => type === 'default') // Do not consider 'chain' edge.
    .forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

  dagre.layout(dagreGraph);

  return seaNodes.map((node: SeaNode) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const nodeHeight: number = calculateSeaNodeHeight(node);

    return {
      ...node,
      // 'x' is already set at this moment because of `getXYPosition` function.
      position: {
        ...node.position,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });
}
```

## Docstring

_No docstring provided._

## Source

```
export const getLayoutedSeaNodes = (seaNodes: SeaNode[], edges: Edge[]): SeaNode[] => {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'LR' }); // 'LR' is Left to Right direction.

  seaNodes.forEach((node: SeaNode) => {
    dagreGraph.setNode(node.id, { width: sizes.nodeMaxWidth, height: calculateSeaNodeHeight(node) });
  });

  edges
    .filter(({ type }) => type === 'default') // Do not consider 'chain' edge.
    .forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

  dagre.layout(dagreGraph);

  return seaNodes.map((node: SeaNode) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const nodeHeight: number = calculateSeaNodeHeight(node);

    return {
      ...node,
      // 'x' is already set at this moment because of `getXYPosition` function.
      position: {
        ...node.position,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Callers

None

## Callees

None
