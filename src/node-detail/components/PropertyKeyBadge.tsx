import { Badge } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  propertyK: string;
};

const _PropertyKeyBadge = ({ propertyK }: Props) => {
  const doubleQuotedPropertyK = `"${propertyK}"`;

  return (
    <Badge variant="flat" color="secondary" size="md">
      {doubleQuotedPropertyK}
    </Badge>
  );
};

export const PropertyKeyBadge = memo(_PropertyKeyBadge);
