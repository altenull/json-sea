import { Table } from '@nextui-org/react';
import { Key, memo } from 'react';

type Props = {
  rows: PropertyValueTableRow[];
};

export enum PropertyValueTableColumnKey {
  Property = 'property',
  Value = 'value',
}

export type PropertyValueTableRow = {
  [P in PropertyValueTableColumnKey]: string | number;
};

export const PROPERTY_VALUE_TABLE_COLUMNS = [
  {
    key: PropertyValueTableColumnKey.Property,
    label: 'PROPERTY',
  },
  {
    key: PropertyValueTableColumnKey.Value,
    label: 'VALUE',
  },
];

const _PropertyValueTable = ({ rows }: Props) => {
  return (
    <Table
      lined
      sticked
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
                {row[columnKey as PropertyValueTableColumnKey]}
              </Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export const PropertyValueTable = memo(_PropertyValueTable);
