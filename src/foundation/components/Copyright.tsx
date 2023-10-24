import { Link } from '@nextui-org/react';
import { memo } from 'react';
import { externalLink } from '../../environment';
import { Text } from '../../ui/components/Text';

const _Copyright = () => {
  const renderCreatedBy = () => (
    <>
      Created by{' '}
      <Link href={externalLink.altenullGithub} target="_blank" rel="noopener noreferrer">
        altenull
      </Link>
    </>
  );

  const renderCopyright = () => {
    const currentYear: number = new Date().getFullYear();

    return <>© {currentYear} JSON SEA</>;
  };

  return (
    <Text className="mt-auto text-right text-sm text-gray-600">
      {renderCreatedBy()} · {renderCopyright()}
    </Text>
  );
};

export const Copyright = memo(_Copyright);
