import { memo } from 'react';
import { AudioSrc } from '../types/audio-src.type';
import { AudioViewer } from './AudioViewer';

type Props = {
  audioSrc: AudioSrc;
};

const _PreviewAudio = ({ audioSrc }: Props) => {
  return <AudioViewer audioSrc={audioSrc} />;
};

export const PreviewAudio = memo(_PreviewAudio);
