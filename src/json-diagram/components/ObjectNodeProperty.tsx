import { semanticColors } from '@nextui-org/react';
import { memo } from 'react';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { useNodeDetailViewStore } from '../../store/node-detail-view/node-detail-view.store';
import { BooleanChip } from '../../ui/components/BooleanChip';
import { NullChip } from '../../ui/components/NullChip';
import { Text } from '../../ui/components/Text';
import { Icon } from '../../ui/icon/Icon';
import { isEmptyArray } from '../../utils/array.util';
import { isEmptyObject } from '../../utils/object.util';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';
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
  const { theme } = useCustomTheme();

  const { isObjectData, isArrayData, isPrimitiveData, isStringData, isNumberData, isBooleanData, isNullData } =
    validateJsonDataType(propertyV);

  const isHoveredFromNodeDetail: boolean = hoveredNodeDetails.some(
    (item) => item.nodeId === nodeId && item.propertyK === propertyK,
  );

  const iconColor = semanticColors[theme].default[500];

  return (
    <div className="h-nodeContentHeight relative flex items-center justify-between pr-2 [&+&]:border-t-1 [&+&]:border-solid [&+&]:border-t-default-200">
      <Text className="mr-4 font-medium text-primary">{propertyK}</Text>

      {isObjectData && (
        <Icon icon={isEmptyObject(propertyV as object) ? 'object-empty' : 'object'} size={24} color={iconColor} />
      )}
      {isArrayData && (
        <Icon icon={isEmptyArray(propertyV as any[]) ? 'array-empty' : 'array'} size={24} color={iconColor} />
      )}

      {isPrimitiveData && (
        <Text
          style={{
            color: isNumberData ? semanticColors[theme].success[600] : undefined,
          }}
          className="overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {isStringData && JSON.stringify(propertyV)}

          {isNumberData && propertyV}

          {isBooleanData && <BooleanChip value={propertyV as boolean} size="sm" />}

          {isNullData && <NullChip size="sm" />}
        </Text>
      )}

      {hasChildNode && (
        <DefaultHandle style={{ backgroundColor: semanticColors[theme].default[300] }} id={propertyK} type="source" />
      )}

      {isHoveredFromNodeDetail && <HoveringBlueDot />}
    </div>
  );
};

export const ObjectNodeProperty = memo(_ObjectNodeProperty);
