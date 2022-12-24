import { styled, Text } from '@nextui-org/react';
import prettyBytes from 'pretty-bytes';
import { memo, useEffect, useState } from 'react';
import { isString } from '../../../utils/json.util';

type Props = {
  imageSrc: string;
};

type ImageMeta = {
  type: string;
  size: number; // bytes
};

const _PreviewImage = ({ imageSrc }: Props) => {
  const [imageMeta, setImageMeta] = useState<ImageMeta | null>(null);

  useEffect(() => {
    // TODO: Determine whether imageSrc is a link or not.
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
  }, [imageSrc]);

  return (
    <StyledHost>
      <StyledImg src={imageSrc} alt="image preview" />

      {imageMeta !== null && (
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
  width: '100%',
  height: 'auto',
});

const StyledImageMetaContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const PreviewImage = memo(_PreviewImage);
