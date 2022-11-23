'use client';

import { useEffect, useMemo, useState } from 'react';
import ReactFlow, { Background, BackgroundVariant, Controls, Edge, MiniMap, Node } from 'reactflow';
import 'reactflow/dist/style.css';
import { useRecoilValue } from 'recoil';
import { jsonDiagramLayoutAtom } from '../../../store/json-diagram-view/json-diagram-view.atom';
import { latestValidJsonSelector } from '../../../store/json-engine/json-engine.selector';
import { generateEdges, generateNodes } from '../helpers/json-diagram.helper';

const JsonDiagram = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const jsonDiagramLayout = useRecoilValue(jsonDiagramLayoutAtom);
  const latestValidJson = useRecoilValue(latestValidJsonSelector);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
