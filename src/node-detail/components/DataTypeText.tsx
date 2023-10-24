import { memo } from 'react';
import { Text } from '../../ui/components/Text';

type Props = {
  children: React.ReactNode;
};

const _DataTypeText = ({ children }: Props) => {
  return <Text className="text-sm font-medium italic text-gray-800">{children}</Text>;
};

export const DataTypeText = memo(_DataTypeText);
