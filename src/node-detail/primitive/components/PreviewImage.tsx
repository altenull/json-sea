import { memo } from 'react';
import { Base64ImageDataUri, ImageSrc } from '../types/media-src.type';
import { ImageViewer } from './ImageViewer';

type Props = {
  imageSrc: Base64ImageDataUri;
};

const _PreviewImage = ({ imageSrc }: Props) => {
  return <ImageViewer imageSrc={imageSrc} />;
};

export const PreviewImage = memo(_PreviewImage);
