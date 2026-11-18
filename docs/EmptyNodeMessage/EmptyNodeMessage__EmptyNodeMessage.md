# EmptyNodeMessage._EmptyNodeMessage

- **Type:** function
- **Language:** typescript
- **File:** `\src\node-detail\components\EmptyNodeMessage.tsx` (lines 16-26)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ nodeType }: Props) => {
  return (
    <div className="m-auto flex flex-col items-center">
      <Image src="/oceania.png" alt="oceania" width="200" height="200" />
      <Text className="text-lg font-medium text-gray-600">{nodeTypeToSyntaxMap[nodeType]}</Text>
      <Text className="font-semibold">
        You have just selected an empty {nodeTypeToTextMap[nodeType].toLowerCase()}.
      </Text>
    </div>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _EmptyNodeMessage = ({ nodeType }: Props) => {
  return (
    <div className="m-auto flex flex-col items-center">
      <Image src="/oceania.png" alt="oceania" width="200" height="200" />
      <Text className="text-lg font-medium text-gray-600">{nodeTypeToSyntaxMap[nodeType]}</Text>
      <Text className="font-semibold">
        You have just selected an empty {nodeTypeToTextMap[nodeType].toLowerCase()}.
      </Text>
    </div>
  );
};
```

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 1
- Features: 2

## Callers

None

## Callees

None
