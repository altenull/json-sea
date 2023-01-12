'use client';

import { styled, Text, useTheme } from '@nextui-org/react';
import { memo, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { Copyright } from '../../foundation/components/Copyright';
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

  const { isDark } = useTheme();
  const { isLocalhost } = useEnv();

  useEffect(() => {
    if (!!hostRef?.current) {
      hostRef.current.scrollTo({ top: 0 });
    }
  }, [selectedNode, hostRef]);

  return (
    <StyledHost ref={hostRef} isDark={isDark}>
      {isNull(selectedNode) ? (
        <Text h3>No selected node.</Text>
      ) : (
        <>
          <NodeTypeText
            nodeType={selectedNode.type}
            isRootNode={(isObjectSeaNode(selectedNode) || isArraySeaNode(selectedNode)) && selectedNode.data.isRootNode}
          />
          {isLocalhost && (
            <Text h5 color="warning">
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
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  variants: {
    isDark: {
      true: {
        // [Leaflet Darkmode] https://blog.jamie.holdings/2022/05/15/dark-mode-for/
        '.leaflet-tile': {
          filter: 'brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7)',
        },
      },
    },
  },
  display: 'flex',
  flexDirection: 'column',
  width: sizes.nodeDetailPanelWidth,
  minWidth: sizes.nodeDetailPanelWidth,
  minHeight: '100%',
  borderLeft: '1px solid $border',
  padding: '$8',
  overflow: 'auto',
  backgroundColor: '$cyan50',
});

export const NodeDetailPanel = memo(_NodeDetailPanel);
