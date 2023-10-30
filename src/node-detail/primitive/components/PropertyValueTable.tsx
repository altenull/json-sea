import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table';
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
    <Table
      className="h-auto min-w-full"
      classNames={{
        wrapper: 'py-1 px-2',
      }}
      hideHeader
      fullWidth
      aria-label={ariaLabel}
    >
      <TableHeader columns={PROPERTY_VALUE_TABLE_COLUMNS}>
        {({ key, label }) => <TableColumn key={key}>{label}</TableColumn>}
      </TableHeader>

      <TableBody items={rows} className="[&+&]:border-t-1 [&+&]:border-solid [&+&]:border-t-default-200">
        {(row) => (
          <TableRow key={row.property} className="[&+&]:border-t-1 [&+&]:border-solid [&+&]:border-t-default-200">
            {(columnKey: Key) => {
              const isPropertyColumn = columnKey === PropertyValueTableColumnKey.Property;

              return (
                <TableCell
                  className={isPropertyColumn ? 'text-xs font-semibold' : 'text-xs font-normal text-default-600'}
                >
                  {row[columnKey as PropertyValueTableColumnKey]}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export const PropertyValueTable = memo(_PropertyValueTable);
