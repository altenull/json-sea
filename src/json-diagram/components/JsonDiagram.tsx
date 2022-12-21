'use client';

import { useCallback, useEffect, useMemo } from 'react';
import ReactFlow, {
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  NodeChange,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useRecoilValue } from 'recoil';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { seaNodesAndEdgesSelector } from '../../store/json-engine/json-engine.selector';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { useIsMounted } from '../../utils/react-hooks/useIsMounted';
import { ArrayNode } from './ArrayNode';
import { ObjectNode } from './ObjectNode';
import { PrimitiveNode } from './PrimitiveNode';

const _JsonDiagram = () => {
  const [seaNodes, setSeaNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  const seaNodesAndEdges: [SeaNode[], Edge[]] = useRecoilValue(seaNodesAndEdgesSelector);

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
    const [seaNodes, edges] = seaNodesAndEdges;
    setSeaNodes(seaNodes);
    setEdges(edges);
  }, [seaNodesAndEdges, setSeaNodes, setEdges]);

  // TODO: Remove onNodesChange function (keeping for debugging)
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setSeaNodes((nds) => applyNodeChanges(changes, nds)),
    [setSeaNodes]
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
            minHeight: '100%',
          }}
          className="json-diagram-react-flow"
          fitView
          nodeTypes={nodeTypes}
          nodes={seaNodes}
          edges={edges}
          onNodesChange={onNodesChange}
        >
          {/* <MiniMap position="top-right" /> */}
          <Controls position="bottom-right" />
          <Background variant={BackgroundVariant.Dots} />
        </ReactFlow>
      )}
    </div>
  );
};

export const JsonDiagram = _JsonDiagram;
