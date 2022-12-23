import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { useIntlNumberFormat } from '../hooks/useIntlNumberFormat';
import { TextCopyBox } from './TextCopyBox';

type Props = {
  value: number;
};

const _NumberInspector = ({ value }: Props) => {
  const { intlNumberFormat } = useIntlNumberFormat();

  return (
    <>
      <TextCopyBox text={`${value}`} />
      <Text css={{ textAlign: 'right', paddingRight: '$4' }} size="$xs" color="$gray800">
        {intlNumberFormat.format(value)}
      </Text>
    </>
  );
};

export const NumberInspector = memo(_NumberInspector);
