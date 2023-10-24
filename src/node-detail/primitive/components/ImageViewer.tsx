import { Image } from '@nextui-org/react';
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
      <Image
        className="m-auto block h-[120px] w-auto cursor-pointer shadow-md"
        src={imageSrc}
        alt="image preview"
        onClick={() => openLinkAsNewTab(imageSrc)}
      />
      <MIMETypeAndSize mediaSrc={imageSrc} />
    </MediaViewerBox>
  );
};

export const ImageViewer = memo(_ImageViewer);
