# Module: providers

**File:** `\app\providers.tsx`

## Overview

Module `providers` contains 1 analyzed entities.

```
'use client';

import { HeroUIProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 20, // 20 seoncds
      gcTime: 1000 * 60 * 5, //  5 minutes
    },
  },
});

const Providers = ({ children }: Props) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          {children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
};

export default Providers;
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `providers.Providers` | function | No description |

## Git History

- Commits: 9
- Authors: 1
- Bug fixes: 0
- Features: 3

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
