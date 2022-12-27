import { Table } from '@nextui-org/react';
import { Key, memo, useEffect, useRef, useState } from 'react';
import { featureFlag } from '../../../environment';
import { isNull } from '../../../utils/json.util';
import { JsonLink, useJsonLinkApi } from '../hooks/useJsonLinkApi';
import { PreviewOgMeta } from './PreviewOgMeta';

type Props = {
  httpUri: string;
  isImage: boolean;
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

enum ColumnKey {
  Property = 'property',
  Value = 'value',
}

const COLUMNS = [
  {
    key: ColumnKey.Property,
    label: 'PROPERTY',
  },
  {
    key: ColumnKey.Value,
    label: 'VALUE',
  },
];

type Row = {
  [P in ColumnKey]: string;
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
const _PreviewHttpUri = ({ httpUri, isImage }: Props) => {
  const [rows, setRows] = useState<Row[]>([]);
  const httpUrlObject: URL = useRef(new URL(httpUri)).current;

  const jsonLink: JsonLink | null = useJsonLinkApi(isImage || !featureFlag.ogMetaPreview ? null : httpUri);

  useEffect(() => {
    const rows: Row[] = DISPLAY_TARGET_URL_PROPERTIES.filter(
      (urlProperty) => httpUrlObject[urlProperty].length > 0
    ).map(
      (urlProperty) =>
        ({
          property: urlProperty,
          value: httpUrlObject[urlProperty],
        } as Row)
    );

    setRows(rows);
  }, [httpUrlObject]);

  return (
    <>
      {!isNull(jsonLink) && <PreviewOgMeta jsonLink={jsonLink} />}

      <Table
        lined
        sticked
        aria-label="http/https URL table"
        css={{
          height: 'auto',
          minWidth: '100%',
          padding: '$1',
        }}
      >
        <Table.Header columns={COLUMNS}>
          {({ key, label }) => (
            <Table.Column css={{ display: 'none' }} key={key}>
              {label}
            </Table.Column>
          )}
        </Table.Header>

        <Table.Body items={rows} css={{ fontSize: '$xs' }}>
          {(row) => (
            <Table.Row key={row.property}>
              {(columnKey: Key) => <Table.Cell>{row[columnKey as ColumnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
};

export const PreviewHttpUri = memo(_PreviewHttpUri);
