import { Badge } from '@nextui-org/react';
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
        <Badge css={{ marginLeft: 'auto' }} isSquared variant="flat">
          {JSON.stringify(value)}
        </Badge>
      )}
    </>
  );
};

export const PrimitiveInspector = memo(_PrimitiveInspector);
