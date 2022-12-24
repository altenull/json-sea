import { memo, useEffect, useState } from 'react';
import { stringParser, StringParserReturn } from '../helpers/string-parser.helper';
import { ColorPreview } from './ColorPreview';
import { ImagePreview } from './ImagePreview';
import { TextCopyBox } from './TextCopyBox';

type Props = {
  value: string;
};

const _StringInspector = ({ value }: Props) => {
  const [{ isColor, isDatetime, isEmail, isImage, isLink }, setStringParserReturn] = useState<StringParserReturn>({
    isColor: false,
    isDatetime: false,
    isEmail: false,
    isImage: false,
    isLink: false,
  });

  useEffect(() => {
    stringParser(value).then(setStringParserReturn);
  }, [value]);

  return (
    <>
      <TextCopyBox text={`"${value}"`} />
      {isColor && <ColorPreview color={value} />}
      {isImage && <ImagePreview imageSrc={value} />}
    </>
  );
};

export const StringInspector = memo(_StringInspector);
