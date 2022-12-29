import { Badge } from '@nextui-org/react';
import { memo } from 'react';
import { encloseDoubleQuote } from '../../../utils/string.util';

type Props = {
  propertyK: string;
};

const _PropertyKeyBadge = ({ propertyK }: Props) => {
  return (
    <Badge variant="flat" color="secondary" size="md">
      {encloseDoubleQuote(propertyK)}
    </Badge>
  );
};

export const PropertyKeyBadge = memo(_PropertyKeyBadge);
