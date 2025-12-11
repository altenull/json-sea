'use client';

import { useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  EdgeTypes,
  NodeChange,
  NodeTypes,
  applyNodeChanges,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { featureFlag } from '../../environment';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { EdgeType } from '../../store/json-engine/enums/edge-type.enum';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { useLandingStore } from '../../store/landing/landing.store';
import { useSettingsStore } from '../../store/settings/settings.store';
import { useIsMounted } from '../../utils/react-hooks/useIsMounted';
import { ArrayNode } from './ArrayNode';
import { ChainEdge } from './ChainEdge';
import { CustomMiniMap } from './CustomMiniMap';
import { DefaultEdge } from './DefaultEdge';
import { DownloadImageButton } from './DownloadImageButton';
import { FitViewInvoker } from './FitViewInvoker';
import { NodePathBreadcrumbs } from './NodePathBreadcrumbs';
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

  const isMinimapOn = useSettingsStore((state) => state.isMinimapOn);
  const jsonTree = useJsonEngineStore((state) => state.jsonTree);
  const initApp = useLandingStore((state) => state.initApp);
  const selectNode = useJsonDiagramViewStore((state) => state.selectNode);

  const isMounted = useIsMounted();

  useEffect(() => {
    const { seaNodes, edges } = jsonTree;

    setSeaNodes(seaNodes);
    setEdges(edges);

    if (seaNodes.length > 0) {
      selectNode(seaNodes[0].id);
    }
  }, [jsonTree, selectNode, setSeaNodes, setEdges]);

  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => setSeaNodes((nds) => applyNodeChanges(changes, nds)),
    [setSeaNodes],
  );

  return (
    /**
     * Please refer `nodeClassName` prop of `<MiniMap>` in `<CustomMiniMap>`, If you wonder the class names(object-node, array-node, ...)
     */
    <div className="[&_.object-node]:minimap-node-object [&_.array-node]:minimap-node-array [&_.primitive-node]:minimap-node-primitive h-full w-full">
      {isMounted && (
        <ReactFlow
          className="h-full min-h-full bg-backgroundContrast"
          disableKeyboardA11y
          nodesFocusable={false}
          nodesDraggable={false}
          nodesConnectable={false}
          edgesFocusable={false}
          nodeTypes={nodeTypes}
          nodes={seaNodes}
          edgeTypes={edgeTypes}
          edges={edges}
          onInit={initApp}
          onNodesChange={featureFlag.nodesChange ? handleNodesChange : undefined}
        >
          <NodePathBreadcrumbs />
          {isMinimapOn && <CustomMiniMap />}
          <Controls
            className="[&_button]:react-flow-controls-button [&_button_svg]:react-flow-controls-button-icon !shadow-none"
            position="bottom-right"
            showInteractive={false}
          />
          <DownloadImageButton />
          <Background variant={BackgroundVariant.Dots} />
          <FitViewInvoker seaNodes={seaNodes} />
        </ReactFlow>
      )}
    </div>
  );
};

export const JsonDiagram = _JsonDiagram;
