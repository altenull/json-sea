'use client';

import { Navbar } from '@nextui-org/react';
import { useId } from 'react';
import { GithubButton } from './GithubButton';
import { JsonEditorToggle } from './JsonEditorToggle';
import { JsonSeaLogoTitle } from './JsonSeaLogoTitle';
import { SettingsButton } from './SettingsButton';
import { ThemeToggle } from './ThemeToggle';

const _GlobalNav = () => {
  /**
   * Set id prop of each `Navbar.Item` component to resolve below warning message.
   * @warning - Warning: Prop `id` did not match. Server: "react-aria-1" Client: "react-aria-2"
   */
  const navItemId1 = useId();
  const navItemId2 = useId();
  const navItemId3 = useId();
  const navItemId4 = useId();

  return (
    <Navbar isBordered isCompact maxWidth="fluid">
      <Navbar.Content>
        <Navbar.Item id={navItemId1}>
          <JsonEditorToggle />
        </Navbar.Item>
      </Navbar.Content>

      <Navbar.Brand>
        <JsonSeaLogoTitle height={36} />
      </Navbar.Brand>

      <Navbar.Content gap="$4">
        <Navbar.Item id={navItemId2}>
          <GithubButton />
        </Navbar.Item>

        <Navbar.Item id={navItemId3}>
          <ThemeToggle />
        </Navbar.Item>

        <Navbar.Item id={navItemId4}>
          <SettingsButton />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export const GlobalNav = _GlobalNav;
