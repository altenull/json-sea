import { memo } from 'react';
import { stringParser } from '../helpers/string-parser.helper';
import { ColorPreview } from './ColorPreview';
import { TextCopyBox } from './TextCopyBox';

type Props = {
  value: string;
};

const _StringInspector = ({ value }: Props) => {
  const { isColor } = stringParser(value);

  return (
    <>
      <TextCopyBox text={`"${value}"`} />
      {isColor && <ColorPreview color={value} />}
    </>
  );
};

export const StringInspector = memo(_StringInspector);
