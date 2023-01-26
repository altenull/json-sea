import { memo } from 'react';
import { VideoSrc } from '../types/video-src.type';
import { VideoViewer } from './VideoViewer';

type Props = {
  videoSrc: VideoSrc;
};

const _PreviewVideo = ({ videoSrc }: Props) => {
  return <VideoViewer videoSrc={videoSrc} />;
};

export const PreviewVideo = memo(_PreviewVideo);
