# NodePathCard.NodePathCard

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\components\NodePathCard.tsx` (lines 9-23)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ fullNodePath }: Props) => {
  return (
    <Card fullWidth shadow="sm">
      <CardHeader>
        <Chip variant="faded" color="default" size="md">
          Node Path
        </Chip>
      </CardHeader>

      <CardBody className="pb-unit-sm px-3 pt-0">
        <TextCopyBox text={fullNodePath} />
      </CardBody>
    </Card>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
export const NodePathCard = ({ fullNodePath }: Props) => {
  return (
    <Card fullWidth shadow="sm">
      <CardHeader>
        <Chip variant="faded" color="default" size="md">
          Node Path
        </Chip>
      </CardHeader>

      <CardBody className="pb-unit-sm px-3 pt-0">
        <TextCopyBox text={fullNodePath} />
      </CardBody>
    </Card>
  );
};
```

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
