import { Chip } from '@nextui-org/chip';
import { memo } from 'react';

type Props = {
  arrayItemName: string;
};

const _ArrayItemNameChip = ({ arrayItemName }: Props) => {
  return (
    <Chip variant="flat" color="secondary" size="md">
      {arrayItemName}
    </Chip>
  );
};

export const ArrayItemNameChip = memo(_ArrayItemNameChip);
