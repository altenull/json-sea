'use client';

import { Badge, Image, Navbar, Text } from '@nextui-org/react';
import { useEnv } from '../../utils/react-hooks/useEnv';
import { GithubButton } from './GithubButton';
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

      <Navbar.Content gap="$4">
        <Navbar.Item>
          <GithubButton />
        </Navbar.Item>
        <Navbar.Item>
          <ThemeToggle />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export const GlobalNav = _GlobalNav;
