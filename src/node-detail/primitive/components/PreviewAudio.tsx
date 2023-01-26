import { memo } from 'react';
import { Base64AudioDataUri } from '../types/media-src.type';
import { AudioViewer } from './AudioViewer';

type Props = {
  audioSrc: Base64AudioDataUri;
};

const _PreviewAudio = ({ audioSrc }: Props) => {
  return <AudioViewer audioSrc={audioSrc} />;
};

export const PreviewAudio = memo(_PreviewAudio);
