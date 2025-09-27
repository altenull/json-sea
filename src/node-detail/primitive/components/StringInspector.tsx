import { CircularProgress } from "@heroui/progress";
import { memo } from 'react';
import { encloseDoubleQuote } from '../../../utils/string.util';
import { StringSubtypeValidator } from '../helpers/string-subtype.helper';
import { HttpUri } from '../types/http-uri.type';
import { Base64AudioDataUri, Base64ImageDataUri, Base64VideoDataUri } from '../types/media-src.type';
import { PreviewAudio } from './PreviewAudio';
import { PreviewAudioUri } from './PreviewAudioUri';
import { PreviewColor } from './PreviewColor';
import { PreviewDatetime } from './PreviewDatetime';
import { PreviewHttpUri } from './PreviewHttpUri';
import { PreviewImage } from './PreviewImage';
import { PreviewImageUri } from './PreviewImageUri';
import { PreviewVideo } from './PreviewVideo';
import { PreviewVideoUri } from './PreviewVideoUri';
import { TextCopyBox } from './TextCopyBox';

type Props = {
  stringSubtypeValidator: StringSubtypeValidator;
  value: string;
  isLoading: boolean;
};

const _StringInspector = ({ stringSubtypeValidator, value, isLoading }: Props) => {
  const { isColor, isDatetime, isEmail, isHttpUri, isImage, isImageUri, isAudio, isAudioUri, isVideo, isVideoUri } =
    stringSubtypeValidator;

  return (
    <>
      <TextCopyBox text={encloseDoubleQuote(value)} />

      {isLoading ? (
        <CircularProgress className="mx-auto" color="primary" size="sm" aria-label="Loading..." />
      ) : (
        <>
          {isColor && <PreviewColor color={value} />}
          {isDatetime && <PreviewDatetime datetime={value} />}
          {isHttpUri && <PreviewHttpUri httpUri={value as HttpUri} />}
          {isImage && <PreviewImage imageSrc={value as Base64ImageDataUri} />}
          {isImageUri && <PreviewImageUri imageUri={value as HttpUri} />}
          {isAudio && <PreviewAudio audioSrc={value as Base64AudioDataUri} />}
          {isAudioUri && <PreviewAudioUri audioUri={value as HttpUri} />}
          {isVideo && <PreviewVideo videoSrc={value as Base64VideoDataUri} />}
          {isVideoUri && <PreviewVideoUri videoUri={value as HttpUri} />}
        </>
      )}
    </>
  );
};

export const StringInspector = memo(_StringInspector);
