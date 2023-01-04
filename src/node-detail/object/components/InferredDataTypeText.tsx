import { memo, useMemo } from 'react';
import { DataTypeText } from '../../components/DataTypeText';
import { InferredDataType } from '../enums/inferred-data-type.enum';

type Props = {
  dataType: InferredDataType;
};

const _InferredDataTypeText = ({ dataType }: Props) => {
  const inferredDataTypeToTextMap: Record<InferredDataType, string> = useMemo(
    () => ({
      [InferredDataType.LatLngMap]: 'latLng',
    }),
    []
  );

  return <DataTypeText>inferred/{inferredDataTypeToTextMap[dataType]}</DataTypeText>;
};

export const InferredDataTypeText = memo(_InferredDataTypeText);
