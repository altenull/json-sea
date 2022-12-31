import { styled, Text } from '@nextui-org/react';
import prettyBytes from 'pretty-bytes';
import { memo, useEffect, useState } from 'react';
import { isNull, isString } from '../../../utils/json.util';

type Props = {
  imageSrc: `data:image/${string}` | `http:${string}` | `https:${string}`;
};

type ImageMeta = {
  type: string;
  size: number; // bytes
};

const _ImageViewer = ({ imageSrc }: Props) => {
  const [imageMeta, setImageMeta] = useState<ImageMeta | null>(null);

  useEffect(() => {
    if (imageSrc.startsWith('http:') || imageSrc.startsWith('https:')) {
      try {
        fetch(imageSrc, { method: 'HEAD' }).then((response) => {
          if (response.ok) {
            const contentLength: string | null = response.headers.get('Content-Length');
            const contentType: string | null = response.headers.get('Content-Type');

            if (isString(contentLength) && isString(contentType)) {
              setImageMeta({
                type: contentType,
                size: Number(contentLength),
              });
            }
          }
        });
      } catch (e) {}
    }
  }, [imageSrc]);

  return (
    <StyledHost>
      <StyledImg src={imageSrc} alt="image preview" />

      {!isNull(imageMeta) && (
        <StyledImageMetaContainer>
          <Text size="$xs" color="$gray800">
            {imageMeta.type}
          </Text>

          <Text size="$xs" color="$gray800">
            {prettyBytes(imageMeta.size)}
          </Text>
        </StyledImageMetaContainer>
      )}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  backgroundColor: '$gray50',
  borderRadius: '$xs',
  padding: '$4',
});

const StyledImg = styled('img', {
  display: 'block',
  width: 'auto',
  height: '120px',
  margin: 'auto',
  boxShadow: '$md',
});

const StyledImageMetaContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ImageViewer = memo(_ImageViewer);
