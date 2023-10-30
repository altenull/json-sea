import { Card } from '@nextui-org/card';
import { ForwardedRef, forwardRef, memo, ReactElement } from 'react';
import { isArray, isString } from '../../utils/json.util';
import { DetailArray } from './DetailArray';
import { DetailObject } from './DetailObject';
import { DetailPrimitive } from './DetailPrimitive';

type Props = {
  chip?: ReactElement;
  value: object | any[] | string | number | boolean | null;
  childObjectNodeId: string | null;
};

const _NodeDetailCard = ({ chip, value, childObjectNodeId }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Card ref={ref} fullWidth shadow="sm" className="group">
      <span className="blue-dot-for-card invisible group-hover:visible" />

      {isString(childObjectNodeId) ? (
        <DetailObject chip={chip} obj={value as object} childObjectNodeId={childObjectNodeId} />
      ) : isArray(value) ? (
        <DetailArray chip={chip} array={value as any[]} />
      ) : (
        <DetailPrimitive chip={chip} value={value as string | number | boolean | null} />
      )}
    </Card>
  );
};

export const NodeDetailCard = memo(forwardRef<HTMLDivElement, Props>(_NodeDetailCard));
