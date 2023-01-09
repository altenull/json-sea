import { Link, Text } from '@nextui-org/react';
import { memo } from 'react';
import { externalLink } from '../../environment';

const _Copyright = () => {
  const renderCreatedBy = () => (
    <>
      Created by{' '}
      <Link href={externalLink.altenullGithub} target="_blank" rel="noopener noreferrer">
        Altenull
      </Link>
    </>
  );

  const renderCopyright = () => {
    const currentYear: number = new Date().getFullYear();

    return <>© {currentYear} JSON SEA</>;
  };

  return (
    <Text
      css={{
        marginTop: 'auto',
        textAlign: 'right',
        color: '$gray600',
      }}
      size="$sm"
    >
      {renderCreatedBy()} · {renderCopyright()}
    </Text>
  );
};

export const Copyright = memo(_Copyright);
