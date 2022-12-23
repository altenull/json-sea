import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { isBoolean, isNull, isNumber, isString } from '../../../utils/json.util';
import { NumberInspector } from './NumberInspector';
import { StringInspector } from './StringInspector';

type Props = {
  value: string | number | boolean | null;
};

const _PrimitiveInspector = ({ value }: Props) => {
  return (
    <>
      {isString(value) && <StringInspector value={value} />}

      {isNumber(value) && <NumberInspector value={value} />}

      {(isBoolean(value) || isNull(value)) && (
        <Text css={{ textAlign: 'right' }} weight="medium">
          {JSON.stringify(value)}
        </Text>
      )}
    </>
  );
};

export const PrimitiveInspector = memo(_PrimitiveInspector);
