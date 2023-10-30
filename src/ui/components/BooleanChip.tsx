import { Chip } from '@nextui-org/chip';
import { memo } from 'react';

type Props = {
  value: boolean;
  size?: any;
  className?: any;
};

const _BooleanChip = ({ value, size = 'md', className }: Props) => {
  return (
    <Chip className={className} variant="flat" size={size} color={value ? 'success' : 'danger'} radius="sm">
      {JSON.stringify(value)}
    </Chip>
  );
};

export const BooleanChip = memo(_BooleanChip);
