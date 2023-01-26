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
      <StyledAudio controls src={audioSrc} />
      <MIMETypeAndSize mediaSrc={audioSrc} />
    </MediaViewerBox>
  );
};

const StyledAudio = styled('audio', {
  display: 'block',
  width: '100%',
});

export const AudioViewer = memo(_AudioViewer);
