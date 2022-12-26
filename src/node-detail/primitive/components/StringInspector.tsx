import { memo } from 'react';
import { doubleQuote } from '../../../utils/string.util';
import { useStringSubtypeValidator } from '../hooks/useStringSubtypeValidator';
import { PreviewColor } from './PreviewColor';
import { PreviewDatetime } from './PreviewDatetime';
import { PreviewHttpUri } from './PreviewHttpUri';
import { PreviewImage } from './PreviewImage';
import { TextCopyBox } from './TextCopyBox';

type Props = {
  value: string;
};

const _StringInspector = ({ value }: Props) => {
  const { isColor, isDatetime, isEmail, isImage, isHttpUri } = useStringSubtypeValidator(value);

  return (
    <>
      <TextCopyBox text={doubleQuote(value)} />
      {isColor && <PreviewColor color={value} />}
      {isDatetime && <PreviewDatetime datetime={value} />}
      {isImage && <PreviewImage imageSrc={value} />}
      {isHttpUri && <PreviewHttpUri httpUri={value} />}
    </>
  );
};

export const StringInspector = memo(_StringInspector);
