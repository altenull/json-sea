import { Chip } from "@heroui/chip";
import { memo } from 'react';

type Props = {
  value: string;
  inferred?: boolean;
};

const _PropertyKeyChip = ({ value, inferred = false }: Props) => {
  return (
    <Chip variant={inferred ? 'bordered' : 'flat'} color="secondary" size="md">
      {value}
    </Chip>
  );
};

export const PropertyKeyChip = memo(_PropertyKeyChip);
