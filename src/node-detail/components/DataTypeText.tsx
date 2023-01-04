import { Text } from '@nextui-org/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const _DataTypeText = ({ children }: Props) => {
  return (
    <Text
      i
      size="$xs"
      weight="medium"
      css={{
        color: '$gray800',
      }}
    >
      {children}
    </Text>
  );
};

export const DataTypeText = memo(_DataTypeText);
