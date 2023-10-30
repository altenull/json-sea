import { memo } from 'react';
import { Text } from '../../../ui/components/Text';
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
      <Text className="pr-2 text-right text-sm font-light text-default-400">{intlNumberFormat.format(value)}</Text>
    </>
  );
};

export const NumberInspector = memo(_NumberInspector);
