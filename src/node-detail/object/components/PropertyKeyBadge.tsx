import { Badge } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  propertyK: string;
  inferred?: boolean;
};

const _PropertyKeyBadge = ({ propertyK, inferred = false }: Props) => {
  return (
    <Badge variant={inferred ? 'bordered' : 'flat'} color="secondary" size="md">
      {propertyK}
    </Badge>
  );
};

export const PropertyKeyBadge = memo(_PropertyKeyBadge);
