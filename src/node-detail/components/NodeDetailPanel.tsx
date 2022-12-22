'use client';

import { styled } from '@nextui-org/react';
import { memo, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedSeaNodeSelector } from '../../store/json-diagram-view/json-diagram-view.selector';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData, SeaNode } from '../../store/json-engine/types/sea-node.type';
import { sizes } from '../../ui/constants/sizes.constant';
import { ArrayNodeDetail } from '../array/components/ArrayNodeDetail';
import { ObjectNodeDetail } from '../object/components/ObjectNodeDetail';
import { PrimitiveNodeDetail } from '../primitive/components/PrimitiveNodeDetail';

const _NodeDetailPanel = () => {
  const selectedNode: SeaNode | null = useRecoilValue(selectedSeaNodeSelector);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!!hostRef?.current) {
      hostRef.current.scrollTo({ top: 0 });
    }
  }, [selectedNode, hostRef]);

  return (
    <StyledHost ref={hostRef}>
      {selectedNode === null ? (
        <h3>No selected node.</h3>
      ) : (
        <>
          <h3>Node type ({selectedNode.type})</h3>
          <br />

          <>
            {selectedNode.type === NodeType.Object && (
              <ObjectNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data as ObjectNodeData} />
            )}
            {selectedNode.type === NodeType.Array && <ArrayNodeDetail nodeData={selectedNode.data as ArrayNodeData} />}
            {selectedNode.type === NodeType.Primitive && (
              <PrimitiveNodeDetail nodeData={selectedNode.data as PrimitiveNodeData} />
            )}
          </>
        </>
      )}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  width: sizes.nodeDetailPanelWidth,
  minWidth: sizes.nodeDetailPanelWidth,
  minHeight: '100%',
  borderLeft: '1px solid $border',
  padding: 24,
  overflow: 'auto',
  backgroundColor: '$cyan50',
});

export const NodeDetailPanel = memo(_NodeDetailPanel);
