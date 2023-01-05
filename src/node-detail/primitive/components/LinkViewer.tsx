import { memo } from 'react';
import { featureFlag } from '../../../environment';
import { isNull } from '../../../utils/json.util';
import { JsonLink, useJsonLinkApi } from '../hooks/useJsonLinkApi';
import { HttpUri } from '../types/http-uri.type';
import { PreviewOgMeta } from './PreviewOgMeta';

type Props = {
  httpUri: HttpUri;
};

const _LinkViewer = ({ httpUri }: Props) => {
  const jsonLink: JsonLink | null = useJsonLinkApi(!featureFlag.ogMetaPreview ? null : httpUri);

  if (isNull(jsonLink)) {
    return null;
  }

  return <PreviewOgMeta jsonLink={jsonLink} />;
};

export const LinkViewer = memo(_LinkViewer);
