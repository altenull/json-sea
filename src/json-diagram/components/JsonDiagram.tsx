'use client';

import { styled } from '@nextui-org/react';
import { useCallback, useEffect, useMemo } from 'react';
import ReactFlow, {
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Controls,
  NodeChange,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useRecoilValue } from 'recoil';
import { featureFlag } from '../../environment';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { seaNodesAndEdgesSelector } from '../../store/json-engine/json-engine.selector';
import { useIsMounted } from '../../utils/react-hooks/useIsMounted';
import { ArrayNode } from './ArrayNode';
import { FitViewInvoker } from './FitViewInvoker';
import { ObjectNode } from './ObjectNode';
import { PrimitiveNode } from './PrimitiveNode';

const _JsonDiagram = () => {
  const [seaNodes, setSeaNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  const seaNodesAndEdges = useRecoilValue(seaNodesAndEdgesSelector);
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
    const { seaNodes, edges } = seaNodesAndEdges;

    setSeaNodes(seaNodes);
    setEdges(edges);
  }, [seaNodesAndEdges, setSeaNodes, setEdges]);

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
          fitView
          nodesConnectable={false}
          nodeTypes={nodeTypes}
          nodes={seaNodes}
          edges={edges}
          onNodesChange={featureFlag.debugMode ? handleNodesChange : undefined}
        >
          {/* <MiniMap position="top-right" /> */}
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
  /**
   * To remove attribution, need some money.
   * @see https://reactflow.dev/docs/guides/remove-attribution/
   */
  '.react-flow__attribution': {
    backgroundColor: 'transparent',
  },
});

export const JsonDiagram = _JsonDiagram;
