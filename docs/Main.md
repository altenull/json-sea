# Module: Main

**File:** `\src\foundation\components\Main.tsx`

## Overview

Module `Main` contains 1 analyzed entities.

```
type Props = {
  children: React.ReactNode;
};

const _Main = ({ children }: Props) => {
  // 3.375rem is height of `<GlobalNav>`
  return <main className="flex h-[calc(100vh-3.375rem)] justify-between">{children}</main>;
};

export const Main = _Main;
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `Main._Main` | function | No description |

## Git History

- Commits: 4
- Authors: 1
- Bug fixes: 1
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
