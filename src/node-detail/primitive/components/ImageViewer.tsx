import { styled, Text } from '@nextui-org/react';
import prettyBytes from 'pretty-bytes';
import { memo, useCallback, useEffect, useState } from 'react';
import { isNull, isString } from '../../../utils/json.util';
import { HttpUri } from '../types/http-uri.type';
import { ImageSrc } from '../types/image-src.type';

type Props = {
  imageSrc: ImageSrc;
};

const startsWithHttpOrHttps = (v: string): v is HttpUri => {
  return v.startsWith('http:') || v.startsWith('https:');
};

const _ImageViewer = ({ imageSrc }: Props) => {
  const [imageType, setImageType] = useState<string | null>(null); // e.g. 'image/png', 'image/jpeg', ...
  const [imageBytes, setImageBytes] = useState<number | null>(null);

  useEffect(() => {
    if (startsWithHttpOrHttps(imageSrc)) {
      try {
        fetch(imageSrc, { method: 'HEAD' }).then((response) => {
          if (response.ok) {
            const contentType: string | null = response.headers.get('Content-Type');
            const contentLength: string | null = response.headers.get('Content-Length');

            if (isString(contentType)) {
              setImageType(contentType);
            }
            if (isString(contentLength)) {
              setImageBytes(Number(contentLength));
            }
          }
        });
      } catch (e) {}
    } else {
      const sliceEnd: number = imageSrc.indexOf(';base64');
      const base64ImageType: string = imageSrc.slice(0, sliceEnd).replace('data:', '');

      setImageType(base64ImageType);
    }
  }, [imageSrc]);

  const handleImageClick = useCallback(() => {
    window.open(imageSrc, '_blank', 'noopener,noreferrer');
  }, [imageSrc]);

  return (
    <StyledHost>
      <StyledImg src={imageSrc} alt="image preview" onClick={handleImageClick} />

      {(!isNull(imageType) || !isNull(imageBytes)) && (
        <StyledImageMetaContainer>
          {!isNull(imageType) && (
            <Text size="$xs" color="$gray800">
              {imageType}
            </Text>
          )}

          {!isNull(imageBytes) && (
            <Text size="$xs" color="$gray800">
              {prettyBytes(imageBytes)}
            </Text>
          )}
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
