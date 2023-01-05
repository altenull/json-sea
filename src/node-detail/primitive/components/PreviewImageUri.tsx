import { memo } from 'react';
import { HttpUri } from '../types/http-uri.type';
import { ImageViewer } from './ImageViewer';
import { UriTable } from './UriTable';

type Props = {
  imageUri: HttpUri;
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
