import { Badge, BadgeProps } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  value: boolean;
  size?: BadgeProps['size'];
  css?: BadgeProps['css'];
};

const _BooleanBadge = ({ value, size, css }: Props) => {
  return (
    <Badge css={css} isSquared variant="flat" size={size} color={value ? 'success' : 'error'}>
      {JSON.stringify(value)}
    </Badge>
  );
};

export const BooleanBadge = memo(_BooleanBadge);
