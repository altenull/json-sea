import { memo } from 'react';
import { Primitive } from '../../store/json-engine/types/node-data.type';

type Props = {
  value: Primitive;
};

const _PrimitiveDataPipe = ({ value }: Props) => {
  return <>{JSON.stringify(value)}</>;
};

export const PrimitiveDataPipe = memo(_PrimitiveDataPipe);
