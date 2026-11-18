# Copyright._Copyright

- **Type:** function
- **Language:** typescript
- **File:** `\src\foundation\components\Copyright.tsx` (lines 6-27)
- **Role:** internal
- **Stability:** unknown

## Signature

```
() => {
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

```

## Docstring

_No docstring provided._

## Source

```
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
```

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 1
- Features: 3

## Callers

None

## Callees

None
