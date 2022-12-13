'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
  NodeChange,
  NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useRecoilValue } from 'recoil';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { jsonNodesSelector, latestValidJsonSelector } from '../../store/json-engine/json-engine.selector';
import { JsonNode } from '../../store/json-engine/types/json-node.type';
import { useIsMounted } from '../../utils/react-hooks/useIsMounted';
import { generateEdges, generateNodes } from '../helpers/json-diagram.helper';
import { ArrayNode } from './ArrayNode';
import { ObjectNode } from './ObjectNode';
import { PrimitiveNode } from './PrimitiveNode';

const JsonDiagram = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const latestValidJson = useRecoilValue(latestValidJsonSelector);
  const jsonNodes: JsonNode[] = useRecoilValue(jsonNodesSelector);

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
    setNodes(generateNodes(jsonNodes));
  }, [jsonNodes]);

  // const nodes: Node[] = useMemo(() => generateNodes(jsonNodes), [jsonNodes]);
  const edges: Edge[] = useMemo(() => generateEdges(latestValidJson), [latestValidJson]);

  // TODO: Remove onNodesChange function (keeping for debugging)
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {isMounted && (
        <ReactFlow
          style={{
            height: '100%',
            minHeight: '100vh',
          }}
          className="json-diagram-react-flow"
          fitView
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
        >
          <MiniMap position="top-right" />
          <Controls position="bottom-right" />
          <Background variant={BackgroundVariant.Dots} />
        </ReactFlow>
      )}
    </div>
  );
};

export default JsonDiagram;
