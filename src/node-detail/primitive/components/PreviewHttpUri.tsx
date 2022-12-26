import { Table } from '@nextui-org/react';
import { Key, memo, useEffect, useRef, useState } from 'react';

type Props = {
  httpUri: string;
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

const COLUMNS = [
  {
    key: 'property',
    label: 'Property',
  },
  {
    key: 'value',
    label: 'Value',
  },
];

type Row = {
  property: string;
  value: string;
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
const _PreviewHttpUri = ({ httpUri }: Props) => {
  const [rows, setRows] = useState<Row[]>([]);
  const httpUrlObject: URL = useRef(new URL(httpUri)).current;

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
          <Table.Row key={row.property}>{(columnKey: Key) => <Table.Cell>{row[columnKey]}</Table.Cell>}</Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export const PreviewHttpUri = memo(_PreviewHttpUri);
