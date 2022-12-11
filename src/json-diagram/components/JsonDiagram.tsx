'use client';

import { useMemo } from 'react';
import ReactFlow, { Background, BackgroundVariant, Controls, Edge, MiniMap, Node, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';
import { useRecoilValue } from 'recoil';
import { jsonDiagramLayoutAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { latestValidJsonSelector } from '../../store/json-engine/json-engine.selector';
import { useIsMounted } from '../../utils/react-hooks/useIsMounted';
import { generateEdges, generateNodes } from '../helpers/json-diagram.helper';
import { ArrayNode } from './ArrayNode';
import { ObjectNode } from './ObjectNode';
import { PrimitiveNode } from './PrimitiveNode';

const JsonDiagram = () => {
  const jsonDiagramLayout = useRecoilValue(jsonDiagramLayoutAtom);
  const latestValidJson = useRecoilValue(latestValidJsonSelector);

  const isMounted = useIsMounted();

  const nodeTypes: NodeTypes = useMemo(
    () => ({
      [NodeType.Object]: ObjectNode,
      [NodeType.Array]: ArrayNode,
      [NodeType.Primitive]: PrimitiveNode,
    }),
    []
  );

  const nodes: Node[] = useMemo(
    () => generateNodes({ json: latestValidJson, jsonDiagramLayout }),
    [jsonDiagramLayout, latestValidJson]
  );
  const edges: Edge[] = useMemo(() => generateEdges(latestValidJson), [latestValidJson]);

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
