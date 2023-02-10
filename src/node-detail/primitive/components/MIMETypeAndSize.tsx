'use client';

import { styled, Text } from '@nextui-org/react';
import prettyBytes from 'pretty-bytes';
import { memo } from 'react';
import { useQuery } from 'react-query';
import { isNull, isNumber, isString } from '../../../utils/json.util';
import { HttpUri } from '../types/http-uri.type';
import {
  AudioSrc,
  Base64AudioDataUri,
  Base64ImageDataUri,
  Base64VideoDataUri,
  ImageSrc,
  VideoSrc,
} from '../types/media-src.type';

type Props = {
  mediaSrc: ImageSrc | AudioSrc | VideoSrc;
};

const startsWithHttpOrHttps = (v: string): v is HttpUri => {
  return v.startsWith('http:') || v.startsWith('https:');
};

const extractBase64MediaType = (
  base64MediaDataUri: Base64ImageDataUri | Base64AudioDataUri | Base64VideoDataUri
): string => {
  const sliceEnd: number = base64MediaDataUri.indexOf(';base64');

  return base64MediaDataUri.slice(0, sliceEnd).replace('data:', '');
};

type MimeTypeAndBytes = {
  mimeType: string | null; // 'image/png', 'video/mp4', 'audio/mp3'
  mimeBytes: number | null;
};

const fetchMediaHead = (mediaSrc: HttpUri): Promise<MimeTypeAndBytes> => {
  return fetch(mediaSrc, { method: 'HEAD' })
    .then((response) => {
      const contentType: string | null = response.headers.get('Content-Type');
      const contentLength: string | null = response.headers.get('Content-Length');

      return {
        mimeType: contentType,
        mimeBytes: isString(contentLength) ? Number(contentLength) : null,
      };
    })
    .catch((error) => {
      return {
        mimeType: null,
        mimeBytes: null,
      };
    });
};

const _MIMETypeAndSize = ({ mediaSrc }: Props) => {
  const { isSuccess, data } = useQuery<MimeTypeAndBytes, Error>(
    ['getMediaHeaders', mediaSrc],
    async () =>
      startsWithHttpOrHttps(mediaSrc)
        ? await fetchMediaHead(mediaSrc)
        : await Promise.resolve({
            mimeType: extractBase64MediaType(mediaSrc),
            mimeBytes: null,
          }),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  if (!isSuccess || (isNull(data.mimeType) && isNull(data.mimeBytes))) {
    return null;
  }

  return (
    <StyledHost>
      <Text size="$xs" color="$gray800">
        {data.mimeType}
      </Text>

      <Text size="$xs" color="$gray800">
        {isNumber(data.mimeBytes) ? prettyBytes(data.mimeBytes) : ''}
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
