# infer-map.helper.inferMap

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\object\helpers\infer-map.helper.ts` (lines 24-62)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(obj: object, nodeId: string): InferredLatLngMapCardProps[] => {
  const inferMapCases: Record<string, InferMapCase> = {
    // Lowercase
    lowercase1: {
      latWord: 'latitude',
      lngWords: ['longitude'],
    },
    lowercase2: {
      latWord: 'lat',
      lngWords: ['lng', 'long'],
    },
    // Uppercase
    uppercase1: {
      latWord: 'LATITUDE',
      lngWords: ['LONGITUDE'],
    },
    uppercase2: {
      latWord: 'LAT',
      lngWords: ['LNG', 'LONG'],
    },
  };

  let result: InferredLatLngMapCardProps[] = [];

  for (let caseKey in inferMapCases) {
    const { latWord, lngWords } = inferMapCases[caseKey];

    if (isNumber((obj as any)[latWord])) {
      for (let lngWord of lngWords) {
        if (isNumber((obj as any)[lngWord])) {
          result.push(convertInferredLatLngMapCardProps(obj, nodeId, [latWord, lngWord]));
          break;
        }
      }
    }
  }

  return result;
}
```

## Docstring

_No docstring provided._

## Source

```
export const inferMap = (obj: object, nodeId: string): InferredLatLngMapCardProps[] => {
  const inferMapCases: Record<string, InferMapCase> = {
    // Lowercase
    lowercase1: {
      latWord: 'latitude',
      lngWords: ['longitude'],
    },
    lowercase2: {
      latWord: 'lat',
      lngWords: ['lng', 'long'],
    },
    // Uppercase
    uppercase1: {
      latWord: 'LATITUDE',
      lngWords: ['LONGITUDE'],
    },
    uppercase2: {
      latWord: 'LAT',
      lngWords: ['LNG', 'LONG'],
    },
  };

  let result: InferredLatLngMapCardProps[] = [];

  for (let caseKey in inferMapCases) {
    const { latWord, lngWords } = inferMapCases[caseKey];

    if (isNumber((obj as any)[latWord])) {
      for (let lngWord of lngWords) {
        if (isNumber((obj as any)[lngWord])) {
          result.push(convertInferredLatLngMapCardProps(obj, nodeId, [latWord, lngWord]));
          break;
        }
      }
    }
  }

  return result;
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
