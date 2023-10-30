import { memo } from 'react';
import { Text } from '../../ui/components/Text';

type Props = {
  value: string;
};

const _DataTypeText = ({ value }: Props) => {
  return <Text className="text-xs font-normal italic text-zinc-400">{value}</Text>;
};

export const DataTypeText = memo(_DataTypeText);
