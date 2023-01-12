import { styled, Text, useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { useRecoilValue } from 'recoil';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { hoveredNodeDetailsAtom } from '../../store/node-detail-view/node-detail-view.atom';
import { sizes } from '../../ui/constants/sizes.constant';
import { encloseDoubleQuote } from '../../utils/string.util';
import { HoveringBlueDot } from './HoveringBlueDot';

type Props = {
  nodeId: string;
  propertyK: string;
  propertyV: any;
  hasChildNode: boolean;
};

const _ObjectNodeProperty = ({ nodeId, propertyK, propertyV, hasChildNode }: Props) => {
  const hoveredNodeDetails = useRecoilValue(hoveredNodeDetailsAtom);
  const { theme } = useTheme();

  const { isPrimitiveData } = validateJsonDataType(propertyV);

  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(
    (item) => item.nodeId === nodeId && item.propertyK === propertyK
  );

  return (
    <StyledHost>
      <Text color="primary" weight="semibold" css={{ marginRight: '$8' }}>
        {encloseDoubleQuote(propertyK)}
      </Text>

      {isPrimitiveData && (
        <Text
          css={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {JSON.stringify(propertyV)}
        </Text>
      )}

      {hasChildNode && (
        <Handle
          style={{ backgroundColor: theme?.colors.gray400.value }}
          id={propertyK}
          type="source"
          position={Position.Right}
        />
      )}

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  position: 'relative',
  height: sizes.nodeContentHeight,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '$4',

  '& + &': {
    borderTop: '1px solid $gray400',
  },
});

export const ObjectNodeProperty = memo(_ObjectNodeProperty);
