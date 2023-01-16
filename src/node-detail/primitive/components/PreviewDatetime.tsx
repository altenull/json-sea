import { Table } from '@nextui-org/react';
import { addMinutes, format } from 'date-fns';
import { Key, memo, useEffect, useState } from 'react';
import { PropertyValueTableColumnKey, PROPERTY_VALUE_TABLE_COLUMNS } from './PropertyValueTable';
import { RelativeTimeFormatter } from './RelativeTimeFormatter';

type Props = {
  datetime: string;
};

type PropertyName = 'Unix(ms)' | 'Unix(s)' | 'GMT' | 'Your timezone' | 'Relative';

const PROPERTY_NAMES: PropertyName[] = ['Unix(ms)', 'Unix(s)', 'GMT', 'Your timezone', 'Relative'];

type Row = {
  [PropertyValueTableColumnKey.Property]: PropertyName;
  [PropertyValueTableColumnKey.Value]: string | number;
};

const _PreviewDatetime = ({ datetime }: Props) => {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    const date: Date = new Date(datetime);
    const gmtDate: Date = addMinutes(date, date.getTimezoneOffset());

    const formatWithoutGMT: string = 'EEE, MMM d, yyyy, HH:mm:ss';
    const formatWithGMT: string = `${formatWithoutGMT} OOOO`;

    const unixTimestamp = date.getTime(); // (ms)

    const map: Record<PropertyName, string | number> = {
      'Unix(ms)': unixTimestamp,
      'Unix(s)': Math.floor(unixTimestamp / 1000),
      GMT: format(gmtDate, formatWithoutGMT).concat(' GMT+00:00'),
      'Your timezone': format(date, formatWithGMT),
      Relative: unixTimestamp,
    };

    const rows: Row[] = PROPERTY_NAMES.map(
      (propertyName) =>
        ({
          property: propertyName,
          value: map[propertyName],
        } as Row)
    );

    setRows(rows);
  }, [datetime]);

  return (
    <Table
      lined
      sticked
      aria-label="datetime table"
      css={{
        height: 'auto',
        minWidth: '100%',
        padding: '$1',
      }}
    >
      <Table.Header columns={PROPERTY_VALUE_TABLE_COLUMNS}>
        {({ key, label }) => (
          <Table.Column key={key} css={{ display: 'none' }}>
            {label}
          </Table.Column>
        )}
      </Table.Header>

      <Table.Body items={rows} css={{ fontSize: '$xs' }}>
        {(row) => (
          <Table.Row key={row.property}>
            {(columnKey: Key) => (
              <Table.Cell
                css={{ fontWeight: columnKey === PropertyValueTableColumnKey.Property ? '$medium' : '$normal' }}
              >
                {row.property === 'Relative' && columnKey === PropertyValueTableColumnKey.Value ? (
                  <RelativeTimeFormatter unixTimestamp={row[columnKey as PropertyValueTableColumnKey] as number} />
                ) : (
                  row[columnKey as PropertyValueTableColumnKey]
                )}
              </Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export const PreviewDatetime = memo(_PreviewDatetime);
