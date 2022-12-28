import { Badge } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  arrayItemName: string;
};

const _ArrayItemNameBadge = ({ arrayItemName }: Props) => {
  return (
    <Badge variant="flat" color="secondary" size="md">
      {arrayItemName}
    </Badge>
  );
};

export const ArrayItemNameBadge = memo(_ArrayItemNameBadge);
