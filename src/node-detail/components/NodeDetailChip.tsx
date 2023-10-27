import { Chip } from '@nextui-org/chip';
import { memo } from 'react';

type Props = {
  value: string;
};

const _NodeDetailChip = ({ value }: Props) => {
  return (
    // TODO: enableShadow
    <Chip variant="flat" color="default" size="lg" radius="sm">
      {value}
    </Chip>
  );
};

export const NodeDetailChip = memo(_NodeDetailChip);
