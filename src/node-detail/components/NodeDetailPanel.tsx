'use client';

import { styled, Text } from '@nextui-org/react';
import { memo, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedSeaNodeSelector } from '../../store/json-diagram-view/json-diagram-view.selector';
import { NodeType } from '../../store/json-engine/enums/node-type.enum';
import { ArrayNodeData, ObjectNodeData, PrimitiveNodeData, SeaNode } from '../../store/json-engine/types/sea-node.type';
import { sizes } from '../../ui/constants/sizes.constant';
import { isNull } from '../../utils/json.util';
import { ArrayNodeDetail } from '../array/components/ArrayNodeDetail';
import { ObjectNodeDetail } from '../object/components/ObjectNodeDetail';
import { PrimitiveNodeDetail } from '../primitive/components/PrimitiveNodeDetail';
import { NodeTypeText } from './NodeTypeText';

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
      {isNull(selectedNode) ? (
        <Text h3>No selected node.</Text>
      ) : (
        <>
          <NodeTypeText nodeType={selectedNode.type} />

          <>
            {selectedNode.type === NodeType.Object && (
              <ObjectNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data as ObjectNodeData} />
            )}
            {selectedNode.type === NodeType.Array && (
              <ArrayNodeDetail nodeId={selectedNode.id} nodeData={selectedNode.data as ArrayNodeData} />
            )}
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
  padding: '$8',
  overflow: 'auto',
  backgroundColor: '$cyan50',
});

export const NodeDetailPanel = memo(_NodeDetailPanel);
