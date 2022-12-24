import { memo, useEffect, useState } from 'react';
import { stringParser, StringParserReturn } from '../helpers/string-parser.helper';
import { PreviewColor } from './PreviewColor';
import { PreviewHttpUrl } from './PreviewHttpUrl';
import { PreviewImage } from './PreviewImage';
import { TextCopyBox } from './TextCopyBox';

type Props = {
  value: string;
};

const _StringInspector = ({ value }: Props) => {
  const [{ isColor, isDatetime, isEmail, isImage, isHttpUrl }, setStringParserReturn] = useState<StringParserReturn>({
    isColor: false,
    isDatetime: false,
    isEmail: false,
    isImage: false,
    isHttpUrl: false,
  });

  useEffect(() => {
    stringParser(value).then(setStringParserReturn);
  }, [value]);

  return (
    <>
      <TextCopyBox text={`"${value}"`} />
      {isColor && <PreviewColor color={value} />}
      {isImage && <PreviewImage imageSrc={value} />}
      {isHttpUrl && <PreviewHttpUrl httpUrl={value} />}
    </>
  );
};

export const StringInspector = memo(_StringInspector);
