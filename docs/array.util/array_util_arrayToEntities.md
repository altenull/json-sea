# array.util.arrayToEntities

- **Type:** function
- **Language:** typescript
- **File:** `\src\utils\array.util.ts` (lines 5-14)
- **Role:** internal
- **Stability:** unknown

## Signature

```
<T>(array: T[], id: string): Entities<T> => {
  return array.reduce((acc: Entities<T>, item: T) => {
    return (item as any)[id] === undefined
      ? acc
      : {
          ...acc,
          [(item as any)[id]]: item,
        };
  }, {});
}
```

## Docstring

_No docstring provided._

## Source

```
export const arrayToEntities = <T>(array: T[], id: string): Entities<T> => {
  return array.reduce((acc: Entities<T>, item: T) => {
    return (item as any)[id] === undefined
      ? acc
      : {
          ...acc,
          [(item as any)[id]]: item,
        };
  }, {});
};
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
