import { memo } from 'react';
import { Base64VideoDataUri } from '../types/media-src.type';
import { VideoViewer } from './VideoViewer';

type Props = {
  videoSrc: Base64VideoDataUri;
};

const _PreviewVideo = ({ videoSrc }: Props) => {
  return <VideoViewer videoSrc={videoSrc} />;
};

export const PreviewVideo = memo(_PreviewVideo);
