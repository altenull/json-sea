import { Text } from '@nextui-org/react';
import { memo } from 'react';
import { stringParser } from '../helpers/string-parser.helper';
import { ColorPreview } from './ColorPreview';

type Props = {
  value: string;
};

const _StringInspector = ({ value }: Props) => {
  const doubleQuotedValue = `"${value}"`;
  const { isColor } = stringParser(value);

  return (
    <>
      <Text css={{ textAlign: 'right' }} weight="medium">
        {doubleQuotedValue}
      </Text>
      {isColor && <ColorPreview color={value} />}
    </>
  );
};

export const StringInspector = memo(_StringInspector);
