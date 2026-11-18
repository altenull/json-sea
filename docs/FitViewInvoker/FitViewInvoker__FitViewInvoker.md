# FitViewInvoker._FitViewInvoker

- **Type:** function
- **Language:** typescript
- **File:** `\src\json-diagram\components\FitViewInvoker.tsx` (lines 8-17)
- **Role:** internal
- **Stability:** unknown

## Signature

```
({ seaNodes }: Props) => {
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    reactFlowInstance.fitView();
    reactFlowInstance.zoomOut();
  }, [reactFlowInstance, seaNodes]);

  return <></>;
}
```

## Docstring

_No docstring provided._

## Source

```
const _FitViewInvoker = ({ seaNodes }: Props) => {
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    reactFlowInstance.fitView();
    reactFlowInstance.zoomOut();
  }, [reactFlowInstance, seaNodes]);

  return <></>;
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
