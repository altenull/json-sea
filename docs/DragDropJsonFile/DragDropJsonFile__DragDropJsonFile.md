# DragDropJsonFile._DragDropJsonFile

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-editor\components\DragDropJsonFile.tsx` (lines 17-48)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ afterFileReadSuccess }: Props) => {
  const fileInputId: string = useId();
  const { theme } = useCustomTheme();
  const { dropzoneRef, isDragging, handleFileInputChange } = useDragDropJsonFile(afterFileReadSuccess);

  return (
    <div className="relative h-[200px] w-full max-w-full">
      <input
        className="hidden"
        type="file"
        accept="application/JSON"
        id={fileInputId}
        onChange={handleFileInputChange}
      />

      <label
        ref={dropzoneRef}
        className={isDragging ? dropzoneClassName.dragging : dropzoneClassName.normal}
        htmlFor={fileInputId}
      >
        <Icon
          icon="cloud-upload"
          size={40}
          color={isDragging ? (semanticColors[theme].success as any).DEFAULT : semanticColors[theme].default[500]}
        />
        <Text className={isDragging ? 'text-sm text-success' : 'text-sm text-default-800'}>
          {isDragging ? 'Drop it to import' : 'Drop a your JSON file, or click here'}
        </Text>
      </label>
    </div>
  );
}
```

## Docstring

_No docstring provided._

## Source

```
const _DragDropJsonFile = ({ afterFileReadSuccess }: Props) => {
  const fileInputId: string = useId();
  const { theme } = useCustomTheme();
  const { dropzoneRef, isDragging, handleFileInputChange } = useDragDropJsonFile(afterFileReadSuccess);

  return (
    <div className="relative h-[200px] w-full max-w-full">
      <input
        className="hidden"
        type="file"
        accept="application/JSON"
        id={fileInputId}
        onChange={handleFileInputChange}
      />

      <label
        ref={dropzoneRef}
        className={isDragging ? dropzoneClassName.dragging : dropzoneClassName.normal}
        htmlFor={fileInputId}
      >
        <Icon
          icon="cloud-upload"
          size={40}
          color={isDragging ? (semanticColors[theme].success as any).DEFAULT : semanticColors[theme].default[500]}
        />
        <Text className={isDragging ? 'text-sm text-success' : 'text-sm text-default-800'}>
          {isDragging ? 'Drop it to import' : 'Drop a your JSON file, or click here'}
        </Text>
      </label>
    </div>
  );
};
```

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 1
- Features: 2

## Callers

None

## Callees

None
