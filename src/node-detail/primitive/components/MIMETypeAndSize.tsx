'use client';

import { styled, Text } from '@nextui-org/react';
import prettyBytes from 'pretty-bytes';
import { memo } from 'react';
import { useMediaHeadApi } from '../../../api/media-head-api/useMediaHeadApi';
import { isNull, isNumber } from '../../../utils/json.util';
import { AudioSrc, ImageSrc, VideoSrc } from '../types/media-src.type';

type Props = {
  mediaSrc: ImageSrc | AudioSrc | VideoSrc;
};

const _MIMETypeAndSize = ({ mediaSrc }: Props) => {
  const { isSuccess, data } = useMediaHeadApi({ mediaSrc });

  if (!isSuccess || (isNull(data.mimeType) && isNull(data.mimeBytes))) {
    return null;
  }

  return (
    <S_Host>
      <Text size="$xs" color="$gray800">
        {data.mimeType}
      </Text>

      <Text size="$xs" color="$gray800">
        {isNumber(data.mimeBytes) ? prettyBytes(data.mimeBytes) : ''}
      </Text>
    </S_Host>
  );
};

const S_Host = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const MIMETypeAndSize = memo(_MIMETypeAndSize);
