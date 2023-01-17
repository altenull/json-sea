'use client';

import { styled } from '@nextui-org/react';
import { useCallback, useEffect, useMemo } from 'react';
import ReactFlow, {
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Controls,
  GetMiniMapNodeAttribute,
  MiniMap,
  NodeChange,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { featureFlag } from '../../environment';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { JsonTree, jsonTreeSelector } from '../../store/json-engine/json-engine.selector';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData } from '../../store/json-engine/types/sea-node.type';
import { sizes } from '../../ui/constants/sizes.constant';
import { useIsMounted } from '../../utils/react-hooks/useIsMounted';
import { ArrayNode } from './ArrayNode';
import { FitViewInvoker } from './FitViewInvoker';
import { ObjectNode } from './ObjectNode';
import { PrimitiveNode } from './PrimitiveNode';

const nodeClassNames = {
  object: 'object-node',
  array: 'array-node',
  primitive: 'primitive-node',
};

const _JsonDiagram = () => {
  const [seaNodes, setSeaNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  const setSelectedNodeId = useSetRecoilState(selectedNodeIdAtom);
  const jsonTree: JsonTree = useRecoilValue(jsonTreeSelector);

  const isMounted = useIsMounted();

  const nodeTypes: NodeTypes = useMemo(
    () => ({
      [NodeType.Object]: ObjectNode,
      [NodeType.Array]: ArrayNode,
      [NodeType.Primitive]: PrimitiveNode,
    }),
    []
  );

  useEffect(() => {
    const { seaNodes, edges } = jsonTree;

    setSeaNodes(seaNodes);
    setEdges(edges);

    if (seaNodes.length > 0) {
      setSelectedNodeId(seaNodes[0].id);
    }
  }, [jsonTree, setSelectedNodeId, setSeaNodes, setEdges]);

  const nodeClassName: GetMiniMapNodeAttribute<ObjectNodeData | ArrayNodeData | PrimitiveNodeData> = useCallback(
    (node) => {
      const nodeTypeToClassNameMap: Record<NodeType, string> = {
        [NodeType.Object]: nodeClassNames.object,
        [NodeType.Array]: nodeClassNames.array,
        [NodeType.Primitive]: nodeClassNames.primitive,
      };

      return nodeTypeToClassNameMap[node.type as NodeType];
    },
    []
  );

  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => setSeaNodes((nds) => applyNodeChanges(changes, nds)),
    [setSeaNodes]
  );

  return (
    <StyledHost>
      {isMounted && (
        <ReactFlow
          style={{
            height: '100%',
            minHeight: '100%',
          }}
          nodesConnectable={false}
          edgesFocusable={false}
          nodeTypes={nodeTypes}
          nodes={seaNodes}
          edges={edges}
          onNodesChange={featureFlag.nodesChange ? handleNodesChange : undefined}
        >
          <MiniMap position="bottom-left" pannable zoomable nodeClassName={nodeClassName} />
          <Controls position="bottom-right" showInteractive={false} />
          <Background variant={BackgroundVariant.Dots} />
          <FitViewInvoker seaNodes={seaNodes} />
        </ReactFlow>
      )}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  width: '100%',
  height: '100%',

  '.react-flow': {
    backgroundColor: '$backgroundContrast',
  },

  '.react-flow__controls button': {
    backgroundColor: '$background',
    border: '1px solid $border',
    borderBottom: 'none',
  },
  '.react-flow__controls button:hover': {
    backgroundColor: '$gray100',
  },
  '.react-flow__controls button:first-child': {
    borderRadius: '5px 5px 0 0',
  },
  '.react-flow__controls button:last-child': {
    borderBottom: '1px solid $border',
    borderRadius: '0 0 5px 5px',
  },
  '.react-flow__controls button svg': {
    fill: '$text',
    stroke: '$text',
  },

  // `border-radius` is not supported in <rect> tag.
  [`.${nodeClassNames.object}`]: {
    rx: 8,
    ry: 8,
  },
  [`.${nodeClassNames.array}`]: {
    rx: sizes.arrayNodeSize / 2,
    ry: sizes.arrayNodeSize / 2,
  },
  [`.${nodeClassNames.primitive}`]: {
    rx: 8,
    ry: 8,
  },

  /**
   * To remove attribution, need some money.
   * @see https://reactflow.dev/docs/guides/remove-attribution/
   */
  '.react-flow__attribution': {
    backgroundColor: 'transparent',
  },
});

export const JsonDiagram = _JsonDiagram;
