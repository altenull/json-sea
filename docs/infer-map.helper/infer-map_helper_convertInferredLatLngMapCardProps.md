# infer-map.helper.convertInferredLatLngMapCardProps

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\object\helpers\infer-map.helper.ts` (lines 4-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(
  obj: object,
  nodeId: string,
  propertyKeys: [string, string]
): InferredLatLngMapCardProps => {
  const [latPropertyK, lngPropertyK] = propertyKeys;

  return {
    nodeId,
    latPropertyK,
    lngPropertyK,
    latLng: [(obj as any)[latPropertyK], (obj as any)[lngPropertyK]],
  };
}
```

## Docstring

_No docstring provided._

## Source

```
const convertInferredLatLngMapCardProps = (
  obj: object,
  nodeId: string,
  propertyKeys: [string, string]
): InferredLatLngMapCardProps => {
  const [latPropertyK, lngPropertyK] = propertyKeys;

  return {
    nodeId,
    latPropertyK,
    lngPropertyK,
    latLng: [(obj as any)[latPropertyK], (obj as any)[lngPropertyK]],
  };
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Callers

None

## Callees

None
