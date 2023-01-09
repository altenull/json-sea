'use client';

import { Navbar } from '@nextui-org/react';
import { GithubButton } from './GithubButton';
import { JsonEditorToggle } from './JsonEditorToggle';
import { JsonSeaLogoTitle } from './JsonSeaLogoTitle';
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
        <JsonSeaLogoTitle height={36} />
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
