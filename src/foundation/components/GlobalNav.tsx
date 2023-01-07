'use client';

import { Image, Navbar, Text } from '@nextui-org/react';
import { GithubButton } from './GithubButton';
import { JsonEditorToggle } from './JsonEditorToggle';
import { ThemeToggle } from './ThemeToggle';

const _GlobalNav = () => {
  return (
    <Navbar isBordered isCompact maxWidth="fluid">
      <Navbar.Content gap="$4">
        <Navbar.Item>
          <JsonEditorToggle />
        </Navbar.Item>
      </Navbar.Content>

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
