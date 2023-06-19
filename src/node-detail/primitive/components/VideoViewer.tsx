'use client';

import { styled } from '@nextui-org/react';
import { memo } from 'react';
import { VideoSrc } from '../types/media-src.type';
import { MediaViewerBox } from './MediaViewerBox';
import { MIMETypeAndSize } from './MIMETypeAndSize';

type Props = {
  videoSrc: VideoSrc;
};

const _VideoViewer = ({ videoSrc }: Props) => {
  return (
    <MediaViewerBox>
      <S_Video controls preload="metadata" src={videoSrc} />
      <MIMETypeAndSize mediaSrc={videoSrc} />
    </MediaViewerBox>
  );
};

const S_Video = styled('video', {
  display: 'block',
  width: '100%',
});

export const VideoViewer = memo(_VideoViewer);
