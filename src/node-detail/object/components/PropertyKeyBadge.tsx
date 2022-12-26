import { Badge } from '@nextui-org/react';
import { memo } from 'react';
import { doubleQuote } from '../../../utils/string.util';

type Props = {
  propertyK: string;
};

const _PropertyKeyBadge = ({ propertyK }: Props) => {
  return (
    <Badge variant="flat" color="secondary" size="md">
      {doubleQuote(propertyK)}
    </Badge>
  );
};

export const PropertyKeyBadge = memo(_PropertyKeyBadge);
