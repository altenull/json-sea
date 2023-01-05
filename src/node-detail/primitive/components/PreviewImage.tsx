import { memo } from 'react';
import { ImageSrc } from '../types/image-src.type';
import { ImageViewer } from './ImageViewer';

type Props = {
  imageSrc: ImageSrc;
};

const _PreviewImage = ({ imageSrc }: Props) => {
  return <ImageViewer imageSrc={imageSrc} />;
};

export const PreviewImage = memo(_PreviewImage);
