import { Badge } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  value: string;
};

const _NodeDetailBadge = ({ value }: Props) => {
  return (
    <Badge isSquared variant="flat" color="default" size="md">
      {value}
    </Badge>
  );
};

export const NodeDetailBadge = memo(_NodeDetailBadge);
