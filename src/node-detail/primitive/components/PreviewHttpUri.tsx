import { memo } from 'react';
import { HttpUri } from '../types/http-uri.type';
import { LinkViewer } from './LinkViewer';
import { UriTable } from './UriTable';

type Props = {
  httpUri: HttpUri;
};

const _PreviewHttpUri = ({ httpUri }: Props) => {
  return (
    <>
      <LinkViewer httpUri={httpUri} />
      <UriTable httpUri={httpUri} />
    </>
  );
};

export const PreviewHttpUri = memo(_PreviewHttpUri);
