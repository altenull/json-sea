import { memo } from 'react';
import { HttpUri } from '../types/http-uri.type';
import { AudioViewer } from './AudioViewer';
import { UriTable } from './UriTable';

type Props = {
  audioUri: HttpUri;
};

const _PreviewAudioUri = ({ audioUri }: Props) => {
  return (
    <>
      <AudioViewer audioSrc={audioUri} />
      <UriTable httpUri={audioUri} />
    </>
  );
};

export const PreviewAudioUri = memo(_PreviewAudioUri);
