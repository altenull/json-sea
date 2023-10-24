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
      <video className="block w-full" controls preload="metadata" src={videoSrc} />
      <MIMETypeAndSize mediaSrc={videoSrc} />
    </MediaViewerBox>
  );
};

export const VideoViewer = memo(_VideoViewer);
