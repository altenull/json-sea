# InferredDetailCard._InferredDetailCard

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\object\components\InferredDetailCard.tsx` (lines 13-44)
- **Role:** internal
- **Stability:** unknown

## Signature

```
(
  { propertyKeys, inferredDataType, children }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const renderPropertyKeyChips = useCallback(() => {
    return propertyKeys.map((propertyK: string, index: number, selfArray: string[]) => {
      const isLast: boolean = index === selfArray.length - 1;

      return (
        <Fragment key={propertyK}>
          <PropertyKeyChip inferred value={propertyK} />
          {!isLast && ` + `}
        </Fragment>
      );
    });
  }, [propertyKeys]);

  return (
    <Card ref={ref} fullWidth shadow="sm" className="group">
      <span className="blue-dot-for-card invisible group-hover:visible" />

      <CardHeader>
        <div className="flex flex-col gap-1">
          <div>{renderPropertyKeyChips()}</div>
          <InferredDataTypeText dataType={inferredDataType} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-0">{children}</CardBody>
    </Card>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _InferredDetailCard = (
  { propertyKeys, inferredDataType, children }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const renderPropertyKeyChips = useCallback(() => {
    return propertyKeys.map((propertyK: string, index: number, selfArray: string[]) => {
      const isLast: boolean = index === selfArray.length - 1;

      return (
        <Fragment key={propertyK}>
          <PropertyKeyChip inferred value={propertyK} />
          {!isLast && ` + `}
        </Fragment>
      );
    });
  }, [propertyKeys]);

  return (
    <Card ref={ref} fullWidth shadow="sm" className="group">
      <span className="blue-dot-for-card invisible group-hover:visible" />

      <CardHeader>
        <div className="flex flex-col gap-1">
          <div>{renderPropertyKeyChips()}</div>
          <InferredDataTypeText dataType={inferredDataType} />
        </div>
      </CardHeader>

      <CardBody className="px-3 pb-unit-sm pt-0">{children}</CardBody>
    </Card>
  );
};
```

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 0
- Features: 3

## Callers

None

## Callees

None
