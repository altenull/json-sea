# DetailObject._DetailObject

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\components\DetailObject.tsx` (lines 16-42)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ chip, obj, childObjectNodeId }: Props) => {
  const selectNode = useJsonDiagramViewStore((state) => state.selectNode);

  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(obj);
    const counting: string = formatCounting(Object.keys(obj).length, 'property', 'properties');

    return `${jsonDataType} ${counting}`;
  }, [obj]);

  return (
    <>
      <CardHeader>
        <div className="flex flex-col gap-1">
          {isValidElement(chip) && chip}
          <DataTypeText value={dataTypeText} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-0">
        <Button variant="flat" size="sm" color="primary" onPress={() => selectNode(childObjectNodeId)}>
          View object
        </Button>
      </CardBody>
    </>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _DetailObject = ({ chip, obj, childObjectNodeId }: Props) => {
  const selectNode = useJsonDiagramViewStore((state) => state.selectNode);

  const dataTypeText: string = useMemo(() => {
    const jsonDataType: JsonDataType = getJsonDataType(obj);
    const counting: string = formatCounting(Object.keys(obj).length, 'property', 'properties');

    return `${jsonDataType} ${counting}`;
  }, [obj]);

  return (
    <>
      <CardHeader>
        <div className="flex flex-col gap-1">
          {isValidElement(chip) && chip}
          <DataTypeText value={dataTypeText} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-0">
        <Button variant="flat" size="sm" color="primary" onPress={() => selectNode(childObjectNodeId)}>
          View object
        </Button>
      </CardBody>
    </>
  );
};
```

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
