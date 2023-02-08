'use client';

import { styled } from '@nextui-org/react';
import { useCallback, useEffect } from 'react';
import ReactFlow, {
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Controls,
  EdgeTypes,
  NodeChange,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { featureFlag } from '../../environment';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { EdgeType } from '../../store/json-engine/enums/edge-type.enum';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { JsonTree, jsonTreeSelector } from '../../store/json-engine/json-engine.selector';
import { useLanding } from '../../store/landing/hooks/useLanding';
import { useIsMounted } from '../../utils/react-hooks/useIsMounted';
import { ArrayNode } from './ArrayNode';
import { ChainEdge } from './ChainEdge';
import { CustomMiniMap } from './CustomMiniMap';
import { DefaultEdge } from './DefaultEdge';
import { DownloadImageButton } from './DownloadImageButton';
import { FitViewInvoker } from './FitViewInvoker';
import { ObjectNode } from './ObjectNode';
import { PrimitiveNode } from './PrimitiveNode';

const nodeTypes: NodeTypes = {
  [NodeType.Object]: ObjectNode,
  [NodeType.Array]: ArrayNode,
  [NodeType.Primitive]: PrimitiveNode,
};

const edgeTypes: EdgeTypes = {
  [EdgeType.Default]: DefaultEdge,
  [EdgeType.Chain]: ChainEdge,
};

const _JsonDiagram = () => {
  const [seaNodes, setSeaNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  const setSelectedNodeId = useSetRecoilState(selectedNodeIdAtom);
  const jsonTree: JsonTree = useRecoilValue(jsonTreeSelector);

  const { initApp } = useLanding();
  const isMounted = useIsMounted();

  useEffect(() => {
    const { seaNodes, edges } = jsonTree;

    setSeaNodes(seaNodes);
    setEdges(edges);

    if (seaNodes.length > 0) {
      setSelectedNodeId(seaNodes[0].id);
    }
  }, [jsonTree, setSelectedNodeId, setSeaNodes, setEdges]);

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
          edgeTypes={edgeTypes}
          edges={edges}
          onInit={initApp}
          onNodesChange={featureFlag.nodesChange ? handleNodesChange : undefined}
        >
          <CustomMiniMap />
          <Controls position="bottom-right" showInteractive={false} />
          <DownloadImageButton />
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

  /**
   * To remove attribution, need some money.
   * @see https://reactflow.dev/docs/guides/remove-attribution/
   */
  '.react-flow__attribution': {
    backgroundColor: 'transparent',
  },
});

export const JsonDiagram = _JsonDiagram;
