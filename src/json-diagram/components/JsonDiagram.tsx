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
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { featureFlag } from '../../environment';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
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

  const setSelectedNodeId = useSetRecoilState(selectedNodeIdAtom);
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

    if (seaNodes.length > 0) {
      setSelectedNodeId(seaNodes[0].id);
    }
  }, [seaNodesAndEdges, setSelectedNodeId, setSeaNodes, setEdges]);

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
          onNodesChange={featureFlag.nodesChange ? handleNodesChange : undefined}
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
