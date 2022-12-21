'use client';

import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from '../../../stitches.config';
import { selectedSeaNodeSelector } from '../../store/json-diagram-view/json-diagram-view.selector';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData, SeaNode } from '../../store/json-engine/types/sea-node.type';
import { ArrayNodeDetail } from './ArrayNodeDetail';
import { ObjectNodeDetail } from './ObjectNodeDetail';
import { PrimitiveNodeDetail } from './PrimitiveNodeDetail';

const _NodeDetailPanel = () => {
  const selectedNode: SeaNode | null = useRecoilValue(selectedSeaNodeSelector);

  return (
    <StyledHost>
      {selectedNode === null ? (
        <h3>No selected node.</h3>
      ) : (
        <>
          <h3>Node type ({selectedNode.type})</h3>
          <br />

          <p>
            {selectedNode.type === NodeType.Object && (
              <ObjectNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data as ObjectNodeData} />
            )}
            {selectedNode.type === NodeType.Array && <ArrayNodeDetail nodeData={selectedNode.data as ArrayNodeData} />}
            {selectedNode.type === NodeType.Primitive && (
              <PrimitiveNodeDetail nodeData={selectedNode.data as PrimitiveNodeData} />
            )}
          </p>
        </>
      )}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  width: '$nodeDetailPanelWidth',
  minWidth: '$nodeDetailPanelWidth',
  minHeight: '100%',
  padding: 24,
  overflow: 'auto',
  backgroundColor: 'aliceblue',
});

export const NodeDetailPanel = memo(_NodeDetailPanel);
