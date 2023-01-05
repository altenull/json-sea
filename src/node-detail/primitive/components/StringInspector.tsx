import { memo } from 'react';
import { encloseDoubleQuote } from '../../../utils/string.util';
import { useStringSubtypeValidator } from '../hooks/useStringSubtypeValidator';
import { HttpUri } from '../types/http-uri.type';
import { Base64ImageSrc } from '../types/image-src.type';
import { PreviewColor } from './PreviewColor';
import { PreviewDatetime } from './PreviewDatetime';
import { PreviewHttpUri } from './PreviewHttpUri';
import { PreviewImage } from './PreviewImage';
import { PreviewImageUri } from './PreviewImageUri';
import { TextCopyBox } from './TextCopyBox';

type Props = {
  value: string;
};

const _StringInspector = ({ value }: Props) => {
  const { isColor, isDatetime, isEmail, isHttpUri, isImage, isImageUri } = useStringSubtypeValidator(value);

  return (
    <>
      <TextCopyBox text={encloseDoubleQuote(value)} />
      {isColor && <PreviewColor color={value} />}
      {isDatetime && <PreviewDatetime datetime={value} />}
      {isHttpUri && <PreviewHttpUri httpUri={value as HttpUri} />}
      {isImage && <PreviewImage imageSrc={value as Base64ImageSrc} />}
      {isImageUri && <PreviewImageUri imageUri={value as HttpUri} />}
    </>
  );
};

export const StringInspector = memo(_StringInspector);
