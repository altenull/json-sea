'use client';

import { Badge, Image, Input, Navbar, Text } from '@nextui-org/react';
import { SearchIcon } from '../../ui/components/SearchIcon';
import { useEnv } from '../../utils/react-hooks/useEnv';
import { ThemeToggle } from './ThemeToggle';

const _GlobalNav = () => {
  const { isLocalhost } = useEnv();

  return (
    <Navbar isBordered isCompact maxWidth="fluid">
      <Navbar.Brand>
        <Image
          width={48}
          height={48}
          src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/water-wave.png"
          alt="JSON Sea Logo"
        />

        <Text b color="inherit" css={{ ml: '$8' }} hideIn="xs">
          JSON Sea
        </Text>
      </Navbar.Brand>

      {isLocalhost && (
        <Badge
          style={{ position: 'fixed', left: '50%', top: 0, transform: 'translateX(-50%)' }}
          isSquared
          color="warning"
        >
          Localhost
        </Badge>
      )}

      <Navbar.Content
        css={{
          '@xsMax': {
            w: '100%',
            jc: 'space-between',
          },
        }}
      >
        <Navbar.Item
          css={{
            '@xsMax': {
              w: '100%',
              jc: 'center',
            },
          }}
        >
          <ThemeToggle />
        </Navbar.Item>

        <Navbar.Item
          css={{
            '@xsMax': {
              w: '100%',
              jc: 'center',
            },
          }}
        >
          <Input
            clearable
            contentLeft={<SearchIcon fill="var(--nextui-colors-accents6)" size={16} />}
            contentLeftStyling={false}
            css={{
              w: '100%',
              '@xsMax': {
                mw: '300px',
              },
              '& .nextui-input-content--left': {
                h: '100%',
                ml: '$4',
                dflex: 'center',
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export const GlobalNav = _GlobalNav;
