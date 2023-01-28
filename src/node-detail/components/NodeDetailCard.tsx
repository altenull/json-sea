import { Card } from '@nextui-org/react';
import { ForwardedRef, forwardRef, memo, ReactElement } from 'react';
import { isArray, isString } from '../../utils/json.util';
import { DetailArray } from './DetailArray';
import { DetailObject } from './DetailObject';
import { DetailPrimitive } from './DetailPrimitive';

type Props = {
  badge?: ReactElement;
  value: object | any[] | string | number | boolean | null;
  childObjectNodeId: string | null;
};

const _NodeDetailCard = ({ badge, value, childObjectNodeId }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Card ref={ref} isHoverable>
      {isString(childObjectNodeId) ? (
        <DetailObject badge={badge} obj={value as object} childObjectNodeId={childObjectNodeId} />
      ) : isArray(value) ? (
        <DetailArray badge={badge} array={value as any[]} />
      ) : (
        <DetailPrimitive badge={badge} value={value as string | number | boolean | null} />
      )}
    </Card>
  );
};

export const NodeDetailCard = memo(forwardRef<HTMLDivElement, Props>(_NodeDetailCard));
