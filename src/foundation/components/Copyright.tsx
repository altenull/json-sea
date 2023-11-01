import { Link } from '@nextui-org/link';
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
