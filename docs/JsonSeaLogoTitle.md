# Module: JsonSeaLogoTitle

**File:** `\src\foundation\components\JsonSeaLogoTitle.tsx`

## Overview

Module `JsonSeaLogoTitle` contains 1 analyzed entities.

```
import { Tooltip } from "@heroui/tooltip";
import { memo } from 'react';
import { sizes } from '../../ui/constants/sizes.constant';
import { useJsonSeaRecommendedWidth } from '../../ui/hooks/useJsonSeaRecommendedWidth';

const _JsonSeaLogoTitle = () => {
  const { isJsonSeaRecommendedWidth } = useJsonSeaRecommendedWidth();

  return (
    <Tooltip
      className="break-all p-2"
      color="warning"
      isOpen={!isJsonSeaRecommendedWidth}
      isDisabled={isJsonSeaRecommendedWidth}
      content={
        <>
          We recommend diving into the JSON Sea at least <b>{sizes.jsonSeaRecommendedWidth}px</b>
        </>
      }
      placement="bottom"
    >
      <svg className="h-[36px] w-auto" viewBox="0 0 225 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 'J' */}
        <path
          className="fill-titleJson"
          d="M82.5924 19.3182H87.4567V35.5455C87.4567 37.0455 87.1195 38.3485 86.4452 39.4545C85.7785 40.5606 84.8503 41.4129 83.6608 42.0114C82.4712 42.6098 81.0884 42.9091 79.5125 42.9091C78.1108 42.9091 76.8379 42.6629 75.6938 42.1705C74.5573 41.6705 73.6556 40.9129 72.9889 39.8977C72.3221 38.875 71.9926 37.5909 72.0001 36.0455H76.8985C76.9137 36.6591 77.0387 37.1856 77.2736 37.625C77.516 38.0568 77.8456 38.3902 78.2623 38.625C78.6866 38.8523 79.1867 38.9659 79.7625 38.9659C80.3687 38.9659 80.8801 38.8371 81.2968 38.5795C81.7211 38.3144 82.0431 37.928 82.2628 37.4205C82.4826 36.9129 82.5924 36.2879 82.5924 35.5455V19.3182Z"
        />
        {/* 'S' */}
        <path
          className="fill-titleJson"
          d="M104.152 26.0114C104.061 25.0947 103.671 24.3826 102.981 23.875C102.292 23.3674 101.356 23.1136 100.174 23.1136C99.3712 23.1136 98.693 23.2273 98.1399 23.4545C97.5868 23.6742 97.1625 23.9811 96.867 24.375C96.5791 24.7689 96.4352 25.2159 96.4352 25.7159C96.42 26.1326 96.5072 26.4962 96.6966 26.8068C96.8936 27.1174 97.1625 27.3864 97.5035 27.6136C97.8445 27.8333 98.2384 28.0265 98.6855 28.1932C99.1325 28.3523 99.6098 28.48
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `JsonSeaLogoTitle._JsonSeaLogoTitle` | function | No description |

## Git History

- Commits: 8
- Authors: 1
- Bug fixes: 1
- Features: 4

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
