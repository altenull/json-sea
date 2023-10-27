import { Chip } from '@nextui-org/chip';
import { memo } from 'react';

type Props = {
  propertyK: string;
  inferred?: boolean;
};

const _PropertyKeyChip = ({ propertyK, inferred = false }: Props) => {
  return (
    <Chip variant={inferred ? 'bordered' : 'flat'} color="secondary" size="md">
      {propertyK}
    </Chip>
  );
};

export const PropertyKeyChip = memo(_PropertyKeyChip);
