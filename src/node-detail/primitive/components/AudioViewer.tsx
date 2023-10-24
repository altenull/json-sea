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
      <audio className="block w-full" controls preload="metadata" src={audioSrc} />
      <MIMETypeAndSize mediaSrc={audioSrc} />
    </MediaViewerBox>
  );
};

export const AudioViewer = memo(_AudioViewer);
