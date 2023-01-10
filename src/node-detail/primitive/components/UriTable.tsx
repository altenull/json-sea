import { memo, useCallback } from 'react';
import { HttpUri } from '../types/http-uri.type';
import { PropertyValueTable, PropertyValueTableRow } from './PropertyValueTable';

type Props = {
  httpUri: HttpUri;
};

type URLProperty = keyof Pick<
  URL,
  'href' | 'origin' | 'protocol' | 'hostname' | 'port' | 'pathname' | 'hash' | 'search'
>;

const DISPLAY_TARGET_URL_PROPERTIES: URLProperty[] = [
  'href',
  'origin',
  'protocol',
  'hostname',
  'port',
  'pathname',
  'hash',
  'search',
];

const _UriTable = ({ httpUri }: Props) => {
  const getUriTableRows = useCallback((httpUri: HttpUri): PropertyValueTableRow[] => {
    const httpUrlObject: URL = new URL(httpUri);

    return DISPLAY_TARGET_URL_PROPERTIES.filter((urlProperty) => httpUrlObject[urlProperty].length > 0).map(
      (urlProperty) =>
        ({
          property: urlProperty,
          value: httpUrlObject[urlProperty],
        } as PropertyValueTableRow)
    );
  }, []);

  return <PropertyValueTable rows={getUriTableRows(httpUri)} />;
};

/**
 * @example
 * href : "http://www.naver.com:1234/hello#abc?query=test"
 * origin: 'http://www.naver.com:1234';
 * protocol: 'http:';
 * hostname: 'www.naver.com';
 * port: '1234';
 * pathname: '/hello';
 * hash: '#abc?query=test';
 * search: '?query=test';
 */
export const UriTable = memo(_UriTable);
