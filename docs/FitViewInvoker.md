# Module: FitViewInvoker

**File:** `\src\json-diagram\components\FitViewInvoker.tsx`

## Overview

Module `FitViewInvoker` contains 1 analyzed entities.

```
import { memo, useEffect } from 'react';
import { Node, useReactFlow } from 'reactflow';

type Props = {
  seaNodes: Node[];
};

const _FitViewInvoker = ({ seaNodes }: Props) => {
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    reactFlowInstance.fitView();
    reactFlowInstance.zoomOut();
  }, [reactFlowInstance, seaNodes]);

  return <></>;
};

/**
 * The reason I put this component is that useReactFlow hook can only be callable under `ReactFlow`.
 */
export const FitViewInvoker = memo(_FitViewInvoker);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `FitViewInvoker._FitViewInvoker` | function | No description |

## Git History

- Commits: 2
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
