import { Badge, BadgeProps } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  size?: BadgeProps['size'];
  css?: BadgeProps['css'];
};

const _NullBadge = ({ size, css }: Props) => {
  return (
    <Badge css={css} isSquared variant="flat" size={size} color="default">
      {JSON.stringify(null)}
    </Badge>
  );
};

export const NullBadge = memo(_NullBadge);
