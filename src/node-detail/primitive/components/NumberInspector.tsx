import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { useIntlNumberFormat } from '../hooks/useIntlNumberFormat';

type Props = {
  value: number;
};

const _NumberInspector = ({ value }: Props) => {
  const { intlNumberFormat } = useIntlNumberFormat();

  return (
    <>
      <Text css={{ textAlign: 'right' }} weight="medium">
        {value}
      </Text>
      <Text css={{ textAlign: 'right' }} size="$xs" color="$gray800">
        {intlNumberFormat.format(value)}
      </Text>
    </>
  );
};

export const NumberInspector = memo(_NumberInspector);
