# InferredDataTypeText._InferredDataTypeText

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\object\components\InferredDataTypeText.tsx` (lines 9-18)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ dataType }: Props) => {
  const inferredDataTypeToTextMap: Record<InferredDataType, string> = useMemo(
    () => ({
      [InferredDataType.LatLngMap]: 'inferred/latLng',
    }),
    [],
  );

  return <DataTypeText value={inferredDataTypeToTextMap[dataType]} />;
}
```

## Docstring

_No docstring provided._

## Source

```
const _InferredDataTypeText = ({ dataType }: Props) => {
  const inferredDataTypeToTextMap: Record<InferredDataType, string> = useMemo(
    () => ({
      [InferredDataType.LatLngMap]: 'inferred/latLng',
    }),
    [],
  );

  return <DataTypeText value={inferredDataTypeToTextMap[dataType]} />;
};
```

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
