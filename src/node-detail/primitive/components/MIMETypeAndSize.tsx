import prettyBytes from 'pretty-bytes';
import { memo } from 'react';
import { useMediaHeadApi } from '../../../api/media-head-api/useMediaHeadApi';
import { Text } from '../../../ui/components/Text';
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
    <div className="flex items-center justify-between">
      <Text className="text-xs text-zinc-400">{data.mimeType}</Text>
      <Text className="text-xs text-zinc-400">{isNumber(data.mimeBytes) ? prettyBytes(data.mimeBytes) : ''}</Text>
    </div>
  );
};

export const MIMETypeAndSize = memo(_MIMETypeAndSize);
