import { Chip } from "@heroui/chip";
import { memo } from 'react';

type Props = {
  value: string;
};

const _NodeDetailChip = ({ value }: Props) => {
  return (
    <Chip variant="faded" color="default" size="lg" radius="sm">
      {value}
    </Chip>
  );
};

export const NodeDetailChip = memo(_NodeDetailChip);
