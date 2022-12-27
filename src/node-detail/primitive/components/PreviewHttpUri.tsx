import { memo } from 'react';
import { LinkViewer } from './LinkViewer';
import { UriTable } from './UriTable';

type Props = {
  httpUri: string;
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
