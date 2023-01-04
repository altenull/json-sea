import { Badge } from '@nextui-org/react';
import { memo } from 'react';
import { encloseDoubleQuote } from '../../../utils/string.util';

type Props = {
  propertyK: string;
  inferred?: boolean;
};

const _PropertyKeyBadge = ({ propertyK, inferred = false }: Props) => {
  return (
    <Badge variant={inferred ? 'bordered' : 'flat'} color={inferred ? 'success' : 'secondary'} size="md">
      {encloseDoubleQuote(propertyK)}
    </Badge>
  );
};

export const PropertyKeyBadge = memo(_PropertyKeyBadge);
