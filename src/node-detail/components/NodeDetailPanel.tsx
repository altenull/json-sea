'use client';

import { memo, useEffect, useRef } from 'react';
import { Copyright } from '../../foundation/components/Copyright';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { isArraySeaNode, isObjectSeaNode, isPrimitiveSeaNode } from '../../store/json-engine/helpers/sea-node.helper';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { Text } from '../../ui/components/Text';
import { isNull } from '../../utils/json.util';
import { useEnv } from '../../utils/react-hooks/useEnv';
import { encloseDoubleQuote } from '../../utils/string.util';
import { ArrayNodeDetail } from '../array/components/ArrayNodeDetail';
import { ObjectNodeDetail } from '../object/components/ObjectNodeDetail';
import { PrimitiveNodeDetail } from '../primitive/components/PrimitiveNodeDetail';
import { NodeDetailPanelHeader } from './NodeDetailPanelHeader';

const useSelectedNode = () => {
  const selectedNodeId = useJsonDiagramViewStore((state) => state.selectedNodeId);
  const { seaNodeEntities } = useJsonEngineStore((state) => state.jsonTree);

  return isNull(selectedNodeId) ? null : seaNodeEntities[selectedNodeId] ?? null;
};

const _NodeDetailPanel = () => {
  const selectedNode: SeaNode | null = useSelectedNode();
  const hostRef = useRef<HTMLDivElement | null>(null);

  const { isLocalhost } = useEnv();

  useEffect(() => {
    if (!!hostRef?.current) {
      hostRef.current.scrollTo({ top: 0 });
    }
  }, [selectedNode, hostRef]);

  return (
    <div
      ref={hostRef}
      className="dark:[&_.leaflet-tile]:leaflet-dark-tile [&_.leaflet-bar]:leaflet-zoom-button-group [&_.leaflet-bar_a]:leaflet-zoom-button node-detail-panel"
    >
      {isNull(selectedNode) ? (
        <Text h3>No selected node.</Text>
      ) : (
        <>
          <NodeDetailPanelHeader selectedNode={selectedNode} />

          {isLocalhost && (
            <Text h5 className="text-warning">
              nodeId is {encloseDoubleQuote(selectedNode.id)}
            </Text>
          )}

          <>
            {isObjectSeaNode(selectedNode) && (
              <ObjectNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data} />
            )}
            {isArraySeaNode(selectedNode) && <ArrayNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data} />}
            {isPrimitiveSeaNode(selectedNode) && (
              <PrimitiveNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data} />
            )}
          </>
        </>
      )}

      <Copyright />
    </div>
  );
};

export const NodeDetailPanel = memo(_NodeDetailPanel);
