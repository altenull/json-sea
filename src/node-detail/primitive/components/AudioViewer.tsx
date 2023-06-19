'use client';

import { styled } from '@nextui-org/react';
import { memo } from 'react';
import { AudioSrc } from '../types/media-src.type';
import { MediaViewerBox } from './MediaViewerBox';
import { MIMETypeAndSize } from './MIMETypeAndSize';

type Props = {
  audioSrc: AudioSrc;
};

const _AudioViewer = ({ audioSrc }: Props) => {
  return (
    <MediaViewerBox>
      <S_Audio controls preload="metadata" src={audioSrc} />
      <MIMETypeAndSize mediaSrc={audioSrc} />
    </MediaViewerBox>
  );
};

const S_Audio = styled('audio', {
  display: 'block',
  width: '100%',
});

export const AudioViewer = memo(_AudioViewer);
