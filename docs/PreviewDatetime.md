# Module: PreviewDatetime

**File:** `\src\node-detail\primitive\components\PreviewDatetime.tsx`

## Overview

Module `PreviewDatetime` contains 0 analyzed entities.

```
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { addMinutes, format } from 'date-fns';
import { Key, memo, useEffect, useState } from 'react';
import { Calendar } from './Calendar';
import { PROPERTY_VALUE_TABLE_COLUMNS, PropertyValueTableColumnKey } from './PropertyValueTable';
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
        (({
          property: propertyName,
          value: map[propertyName]
        }) as Row),
    );

    setRows(rows);
  }, [datetime]);

  return (
    <>
      <Calendar date={new Date(datetime)} />

      <Table
        className="h-auto min-w-full"
        classNames={{
          wrapper: 'py-1 px-2',
        }}
        hideHeader
        fullWidth
        aria-label="datetime table"
      >
        <TableHeader columns={PROPERTY_VALUE_TABLE_COL
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 1
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
