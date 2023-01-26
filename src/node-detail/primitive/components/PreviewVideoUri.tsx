import { memo } from 'react';
import { HttpUri } from '../types/http-uri.type';
import { VideoViewer } from './VideoViewer';
import { UriTable } from './UriTable';

type Props = {
  videoUri: HttpUri;
};

const _PreviewVideoUri = ({ videoUri }: Props) => {
  return (
    <>
      <VideoViewer videoSrc={videoUri} />
      <UriTable httpUri={videoUri} />
    </>
  );
};

export const PreviewVideoUri = memo(_PreviewVideoUri);
