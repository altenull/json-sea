import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { memo } from 'react';
import { JsonLink } from '../../../api/json-link-api/json-link.types';
import { Text } from '../../../ui/components/Text';
import { isEmptyArray } from '../../../utils/array.util';
import { isString } from '../../../utils/json.util';
import { openLinkAsNewTab } from '../../../utils/window.util';

type Props = {
  jsonLink: JsonLink;
};

const _PreviewOgMeta = ({ jsonLink }: Props) => {
  const { title, description, images } = jsonLink;

  if (!isString(title) && !isString(description) && isEmptyArray(images)) {
    return null;
  }

  return (
    <Card isPressable shadow="sm" onClick={() => openLinkAsNewTab(jsonLink.url)}>
      {images.length > 0 && (
        <CardBody className="p-0">
          <Image className="h-[120px] object-cover" src={images[0]} width="100%" alt={title} />
        </CardBody>
      )}

      <CardFooter className="flex-col items-start">
        {isString(title) && (
          <Text className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold" title={title}>
            {title}
          </Text>
        )}

        {isString(description) && (
          <Text
            className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-normal text-zinc-400"
            title={description}
          >
            {description}
          </Text>
        )}
      </CardFooter>
    </Card>
  );
};

export const PreviewOgMeta = memo(_PreviewOgMeta);
