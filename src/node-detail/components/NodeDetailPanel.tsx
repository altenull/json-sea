'use client';

import { styled, Text } from '@nextui-org/react';
import { memo, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedSeaNodeSelector } from '../../store/json-diagram-view/json-diagram-view.selector';
import { isArraySeaNode, isObjectSeaNode, isPrimitiveSeaNode } from '../../store/json-engine/helpers/sea-node.helper';
import { SeaNode } from '../../store/json-engine/types/sea-node.type';
import { sizes } from '../../ui/constants/sizes.constant';
import { isNull } from '../../utils/json.util';
import { useEnv } from '../../utils/react-hooks/useEnv';
import { encloseDoubleQuote } from '../../utils/string.util';
import { ArrayNodeDetail } from '../array/components/ArrayNodeDetail';
import { ObjectNodeDetail } from '../object/components/ObjectNodeDetail';
import { PrimitiveNodeDetail } from '../primitive/components/PrimitiveNodeDetail';
import { NodeTypeText } from './NodeTypeText';

const _NodeDetailPanel = () => {
  const selectedNode: SeaNode | null = useRecoilValue(selectedSeaNodeSelector);
  const hostRef = useRef<HTMLDivElement | null>(null);

  const { isLocalhost } = useEnv();

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
          <NodeTypeText
            nodeType={selectedNode.type}
            isRootNode={isObjectSeaNode(selectedNode) && selectedNode.data.isRootNode}
          />
          {isLocalhost && (
            <Text h5 color="warning">
              nodeId: {encloseDoubleQuote(selectedNode.id)}
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
