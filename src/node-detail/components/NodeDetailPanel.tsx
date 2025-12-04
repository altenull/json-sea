'use client';

import { memo, useEffect, useRef } from 'react';
import { Copyright } from '../../foundation/components/Copyright';
import { isArraySeaNode, isObjectSeaNode, isPrimitiveSeaNode } from '../../store/json-engine/helpers/sea-node.helper';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { Text } from '../../ui/components/Text';
import { isNull } from '../../utils/json.util';
import { useEnv } from '../../utils/react-hooks/useEnv';
import { encloseDoubleQuote } from '../../utils/string.util';
import { ArrayNodeDetail } from '../array/components/ArrayNodeDetail';
import { useParentNode } from '../hooks/useParentNode';
import { useSelectedNode } from '../hooks/useSelectedNode';
import { ObjectNodeDetail } from '../object/components/ObjectNodeDetail';
import { PrimitiveNodeDetail } from '../primitive/components/PrimitiveNodeDetail';
import { NodeDetailPanelHeader } from './NodeDetailPanelHeader';

const _NodeDetailPanel = () => {
  const selectedNode: SeaNode | null = useSelectedNode();
  const parentNode: SeaNode | null = useParentNode();

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
            <>
              <Text h4 className="text-warning">
                nodeId is {encloseDoubleQuote(selectedNode.id)}
              </Text>
              {parentNode && (
                <>
                  <Text h4 className="text-warning">
                    parentNodeId is {encloseDoubleQuote(parentNode.id)}
                  </Text>
                  <Text h4 className="text-warning">
                    parentNodePath is [{selectedNode.data.parentNodePathIds.join(' > ')}]
                  </Text>
                </>
              )}
            </>
          )}

          {isObjectSeaNode(selectedNode) && <ObjectNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data} />}
          {isArraySeaNode(selectedNode) && <ArrayNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data} />}
          {isPrimitiveSeaNode(selectedNode) && (
            <PrimitiveNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data} />
          )}
        </>
      )}

      <Copyright />
    </div>
  );
};

export const NodeDetailPanel = memo(_NodeDetailPanel);
