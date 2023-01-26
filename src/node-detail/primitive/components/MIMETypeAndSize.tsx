'use client';

import { styled, Text } from '@nextui-org/react';
import prettyBytes from 'pretty-bytes';
import { memo, useEffect, useState } from 'react';
import { noop } from '../../../utils/function.util';
import { isNumber, isString } from '../../../utils/json.util';
import { AudioSrc, Base64AudioSrc } from '../types/audio-src.type';
import { HttpUri } from '../types/http-uri.type';
import { Base64ImageSrc, ImageSrc } from '../types/image-src.type';
import { VideoSrc, Base64VideoSrc } from '../types/video-src.type';

type Props = {
  mediaSrc: ImageSrc | AudioSrc | VideoSrc;
};

const startsWithHttpOrHttps = (v: string): v is HttpUri => {
  return v.startsWith('http:') || v.startsWith('https:');
};

const extractBase64MediaType = (base64MediaSrc: Base64ImageSrc | Base64AudioSrc | Base64VideoSrc): string => {
  const sliceEnd: number = base64MediaSrc.indexOf(';base64');

  return base64MediaSrc.slice(0, sliceEnd).replace('data:', '');
};

const _MIMETypeAndSize = ({ mediaSrc }: Props) => {
  const [mimeType, setMimeType] = useState<string | null>(null); // e.g. 'image/png', 'image/jpeg', 'audio/mp3', ...
  const [mimeBytes, setMimeBytes] = useState<number | null>(null);

  useEffect(() => {
    if (startsWithHttpOrHttps(mediaSrc)) {
      fetch(mediaSrc, { method: 'HEAD' })
        .then((response) => {
          if (response.ok) {
            const contentType: string | null = response.headers.get('Content-Type');
            const contentLength: string | null = response.headers.get('Content-Length');

            setMimeType(contentType);
            setMimeBytes(isString(contentLength) ? Number(contentLength) : null);
          }
        })
        .catch(noop);
    } else {
      setMimeType(extractBase64MediaType(mediaSrc));
    }
  }, [mediaSrc]);

  if (!isString(mimeType) && !isNumber(mimeBytes)) {
    return null;
  }

  return (
    <StyledHost>
      <Text size="$xs" color="$gray800">
        {mimeType}
      </Text>

      <Text size="$xs" color="$gray800">
        {isNumber(mimeBytes) ? prettyBytes(mimeBytes) : ''}
      </Text>
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const MIMETypeAndSize = memo(_MIMETypeAndSize);
