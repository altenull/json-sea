import { memo } from 'react';
import { useJsonLinkApi } from '../../../api/json-link-api/useJsonLinkApi';
import { isNull } from '../../../utils/json.util';
import { HttpUri } from '../types/http-uri.type';
import { PreviewOgMeta } from './PreviewOgMeta';

type Props = {
  httpUri: HttpUri;
};

const _LinkViewer = ({ httpUri }: Props) => {
  const { data } = useJsonLinkApi({ httpUri });

  if (isNull(data) || data === undefined) {
    return null;
  }

  return <PreviewOgMeta jsonLink={data} />;
};

export const LinkViewer = memo(_LinkViewer);
