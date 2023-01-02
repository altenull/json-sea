import { styled, Text } from '@nextui-org/react';
import prettyBytes from 'pretty-bytes';
import { memo, useCallback, useEffect, useState } from 'react';
import { isNull, isString } from '../../../utils/json.util';

type Props = {
  imageSrc: `data:image/${string}` | `http:${string}` | `https:${string}`;
};

type ImageMeta = {
  type: string;
  size: number; // bytes
};

const startsWithHttpOrHttps = (v: string): v is `http:${string}` | `https:${string}` => {
  return v.startsWith('http:') || v.startsWith('https:');
};

const _ImageViewer = ({ imageSrc }: Props) => {
  const [imageMeta, setImageMeta] = useState<ImageMeta | null>(null);

  useEffect(() => {
    if (startsWithHttpOrHttps(imageSrc)) {
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

  const handleImageClick = useCallback(() => {
    window.open(imageSrc, '_blank', 'noopener,noreferrer');
  }, [imageSrc]);

  return (
    <StyledHost>
      <StyledImg src={imageSrc} alt="image preview" onClick={handleImageClick} />

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
  cursor: 'pointer',
});

const StyledImageMetaContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ImageViewer = memo(_ImageViewer);
