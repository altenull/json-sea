# DetailArray._DetailArray

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\components\DetailArray.tsx` (lines 14-36)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ chip, array }: Props) => {
  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(array);
    const counting: string = formatCounting(array.length, 'item', 'items');

    return `${jsonDataType} ${counting}`;
  }, [array]);

  return (
    <>
      <CardHeader>
        <div className="flex flex-col gap-1">
          {isValidElement(chip) && chip}
          <DataTypeText value={dataTypeText} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-2">
        <ArrayInspector array={array} />
      </CardBody>
    </>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _DetailArray = ({ chip, array }: Props) => {
  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(array);
    const counting: string = formatCounting(array.length, 'item', 'items');

    return `${jsonDataType} ${counting}`;
  }, [array]);

  return (
    <>
      <CardHeader>
        <div className="flex flex-col gap-1">
          {isValidElement(chip) && chip}
          <DataTypeText value={dataTypeText} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-2">
        <ArrayInspector array={array} />
      </CardBody>
    </>
  );
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
