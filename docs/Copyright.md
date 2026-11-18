# Module: Copyright

**File:** `\src\foundation\components\Copyright.tsx`

## Overview

Module `Copyright` contains 3 analyzed entities.

```
import { Link } from "@heroui/link";
import { memo } from 'react';
import { externalLink } from '../../environment';
import { Text } from '../../ui/components/Text';

const _Copyright = () => {
  const renderCreatedBy = () => (
    <>
      Created by{' '}
      <Link isExternal href={externalLink.altenullGithub} size="sm">
        altenull
      </Link>
    </>
  );

  const renderCopyright = () => {
    const currentYear: number = new Date().getFullYear();

    return <>© {currentYear} JSON SEA</>;
  };

  return (
    <Text className="mt-auto text-right text-sm text-default-400">
      {renderCreatedBy()} · {renderCopyright()}
    </Text>
  );
};

export const Copyright = memo(_Copyright);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `Copyright._Copyright` | function | No description |
| `Copyright.renderCopyright` | function | No description |
| `Copyright.renderCreatedBy` | function | No description |

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 1
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
