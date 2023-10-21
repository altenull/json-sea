import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { HttpUri } from '../../node-detail/primitive/types/http-uri.type';
import {
  AudioSrc,
  Base64AudioDataUri,
  Base64ImageDataUri,
  Base64VideoDataUri,
  ImageSrc,
  VideoSrc,
} from '../../node-detail/primitive/types/media-src.type';
import { isString } from '../../utils/json.util';
import { MediaHead } from './media-head.types';

const queryKeys = {
  all: ['mediaHeads'],
  mediaHeadBySrc: (mediaSrc: UseMediaHeadApiRequest['mediaSrc']) => [...queryKeys.all, mediaSrc],
} as const;

type UseMediaHeadApiRequest = {
  mediaSrc: ImageSrc | AudioSrc | VideoSrc;
};

const startsWithHttpOrHttps = (v: string): v is HttpUri => v.startsWith('http:') || v.startsWith('https:');

const extractBase64MediaType = (
  base64MediaDataUri: Base64ImageDataUri | Base64AudioDataUri | Base64VideoDataUri
): string => {
  const sliceEnd: number = base64MediaDataUri.indexOf(';base64');

  return base64MediaDataUri.slice(0, sliceEnd).replace('data:', '');
};

export const useMediaHeadApi = (request: UseMediaHeadApiRequest): UseQueryResult<MediaHead, Error> => {
  async function getMediaHead(): Promise<MediaHead> {
    if (startsWithHttpOrHttps(request.mediaSrc)) {
      const url = request.mediaSrc;

      const mediaHead: MediaHead = await fetch(url, { method: 'HEAD' })
        .then((response) => {
          const contentType: string | null = response.headers.get('Content-Type');
          const contentLength: string | null = response.headers.get('Content-Length');

          return {
            mimeType: contentType,
            mimeBytes: isString(contentLength) ? Number(contentLength) : null,
          };
        })
        .catch(() => ({
          mimeType: null,
          mimeBytes: null,
        }));

      return mediaHead;
    } else {
      return {
        mimeType: extractBase64MediaType(request.mediaSrc),
        mimeBytes: null,
      };
    }
  }

  return useQuery<MediaHead, Error>({ queryKey: queryKeys.mediaHeadBySrc(request.mediaSrc), queryFn: getMediaHead });
};
