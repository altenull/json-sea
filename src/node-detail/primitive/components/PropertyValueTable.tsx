import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { Key, memo } from 'react';

type Props = {
  rows: PropertyValueTableRow[];
  ariaLabel: string; // To resolve warning message.
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

const _PropertyValueTable = ({ rows, ariaLabel }: Props) => {
  return (
    <Table className="h-auto min-w-full p-1" isStriped aria-label={ariaLabel}>
      <TableHeader columns={PROPERTY_VALUE_TABLE_COLUMNS}>
        {({ key, label }) => (
          <TableColumn key={key} className="hidden">
            {label}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody items={rows} className="text-sm">
        {(row) => (
          <TableRow key={row.property}>
            {(columnKey: Key) => (
              <TableCell
                className={`${columnKey === PropertyValueTableColumnKey.Property ? 'font-medium' : 'font-normal'}`}
              >
                {row[columnKey as PropertyValueTableColumnKey]}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export const PropertyValueTable = memo(_PropertyValueTable);
