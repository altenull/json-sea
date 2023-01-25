'use client';

import { styled, Text } from '@nextui-org/react';
import prettyBytes from 'pretty-bytes';
import { memo, useEffect, useState } from 'react';
import { noop } from '../../../utils/function.util';
import { isNull, isString } from '../../../utils/json.util';
import { AudioSrc, Base64AudioSrc } from '../types/audio-src.type';
import { HttpUri } from '../types/http-uri.type';

type Props = {
  audioSrc: AudioSrc;
};

const startsWithHttpOrHttps = (v: string): v is HttpUri => {
  return v.startsWith('http:') || v.startsWith('https:');
};

const extractBase64AudioType = (base64AudioSrc: Base64AudioSrc): string => {
  const sliceEnd: number = base64AudioSrc.indexOf(';base64');

  return base64AudioSrc.slice(0, sliceEnd).replace('data:', '');
};

const _AudioViewer = ({ audioSrc }: Props) => {
  const [audioType, setAudioType] = useState<string | null>(null); // e.g. 'audio/mp3', ...
  const [audioBytes, setAudioBytes] = useState<number | null>(null);

  useEffect(() => {
    if (startsWithHttpOrHttps(audioSrc)) {
      fetch(audioSrc, { method: 'HEAD' })
        .then((response) => {
          if (response.ok) {
            const contentType: string | null = response.headers.get('Content-Type');
            const contentLength: string | null = response.headers.get('Content-Length');

            if (isString(contentType)) {
              setAudioType(contentType);
            }
            if (isString(contentLength)) {
              setAudioBytes(Number(contentLength));
            }
          }
        })
        .catch(noop);
    } else {
      setAudioType(extractBase64AudioType(audioSrc));
    }
  }, [audioSrc]);

  return (
    <StyledHost>
      <StyledAudio controls src={audioSrc} />

      {(!isNull(audioType) || !isNull(audioBytes)) && (
        <StyledAudioMetaContainer>
          {!isNull(audioType) && (
            <Text size="$xs" color="$gray800">
              {audioType}
            </Text>
          )}

          {!isNull(audioBytes) && (
            <Text size="$xs" color="$gray800">
              {prettyBytes(audioBytes)}
            </Text>
          )}
        </StyledAudioMetaContainer>
      )}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  backgroundColor: '$gray50',
  borderRadius: '$xs',
  padding: '$4',
});

const StyledAudio = styled('audio', {
  display: 'block',
  width: '100%',
});

const StyledAudioMetaContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const AudioViewer = memo(_AudioViewer);
