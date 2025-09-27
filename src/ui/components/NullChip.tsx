import { Chip } from "@heroui/chip";
import { memo } from 'react';

type Props = {
  size?: any;
  className?: any;
};

const _NullChip = ({ size = 'md', className }: Props) => {
  return (
    <Chip className={className} variant="flat" size={size} color="default" radius="sm">
      {JSON.stringify(null)}
    </Chip>
  );
};

export const NullChip = memo(_NullChip);
