import { memo } from 'react';
import { ImageViewer } from './ImageViewer';

type Props = {
  imageSrc: string;
};

const _PreviewImage = ({ imageSrc }: Props) => {
  return <ImageViewer imageSrc={imageSrc} />;
};

export const PreviewImage = memo(_PreviewImage);
