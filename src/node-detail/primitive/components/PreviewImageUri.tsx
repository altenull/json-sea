import { memo } from 'react';
import { ImageViewer } from './ImageViewer';
import { UriTable } from './UriTable';

type Props = {
  imageUri: string;
};

const _PreviewImageUri = ({ imageUri }: Props) => {
  return (
    <>
      <ImageViewer imageSrc={imageUri} />
      <UriTable httpUri={imageUri} />
    </>
  );
};

export const PreviewImageUri = memo(_PreviewImageUri);
