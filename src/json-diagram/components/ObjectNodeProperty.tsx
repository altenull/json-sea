import { styled, Text, useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { useNodeDetailViewStore } from '../../store/node-detail-view/node-detail-view.store';
import { sizes } from '../../ui/constants/sizes.constant';
import { Icon } from '../../ui/icon/Icon';
import { isEmptyArray } from '../../utils/array.util';
import { isEmptyObject } from '../../utils/object.util';
import { encloseDoubleQuote } from '../../utils/string.util';
import { DefaultHandle } from './DefaultHandle';
import { HoveringBlueDot } from './HoveringBlueDot';

type Props = {
  nodeId: string;
  propertyK: string;
  propertyV: any;
  hasChildNode: boolean;
};

const _ObjectNodeProperty = ({ nodeId, propertyK, propertyV, hasChildNode }: Props) => {
  const hoveredNodeDetails = useNodeDetailViewStore((state) => state.hoveredNodeDetails);
  const { theme } = useTheme();

  const { isObjectData, isArrayData, isPrimitiveData } = validateJsonDataType(propertyV);

  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(
    (item) => item.nodeId === nodeId && item.propertyK === propertyK
  );

  return (
    <S_Host>
      <Text color="primary" weight="semibold" css={{ marginRight: '$8' }}>
        {encloseDoubleQuote(propertyK)}
      </Text>

      {isObjectData && (
        <Icon
          icon={isEmptyObject(propertyV as object) ? 'object-empty' : 'object'}
          size={24}
          color={theme?.colors.accents7.value}
        />
      )}
      {isArrayData && (
        <Icon
          icon={isEmptyArray(propertyV as any[]) ? 'array-empty' : 'array'}
          size={24}
          color={theme?.colors.accents7.value}
        />
      )}

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
        <DefaultHandle style={{ backgroundColor: theme?.colors.gray400.value }} id={propertyK} type="source" />
      )}

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
    </S_Host>
  );
};

const S_Host = styled('div', {
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
