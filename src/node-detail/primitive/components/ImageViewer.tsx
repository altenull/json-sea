'use client';

import { styled } from '@nextui-org/react';
import { memo } from 'react';
import { openLinkAsNewTab } from '../../../utils/window.util';
import { ImageSrc } from '../types/media-src.type';
import { MediaViewerBox } from './MediaViewerBox';
import { MIMETypeAndSize } from './MIMETypeAndSize';

type Props = {
  imageSrc: ImageSrc;
};

const _ImageViewer = ({ imageSrc }: Props) => {
  return (
    <MediaViewerBox>
      <S_Img src={imageSrc} alt="image preview" onClick={() => openLinkAsNewTab(imageSrc)} />
      <MIMETypeAndSize mediaSrc={imageSrc} />
    </MediaViewerBox>
  );
};

const S_Img = styled('img', {
  display: 'block',
  width: 'auto',
  height: '120px',
  margin: 'auto',
  boxShadow: '$md',
  cursor: 'pointer',
});

export const ImageViewer = memo(_ImageViewer);
