'use client';

import { Image, Input, Navbar, Text } from '@nextui-org/react';
import SearchIcon from '../../ui/components/SearchIcon';

const GlobalNav = () => {
  return (
    <Navbar isBordered isCompact variant="sticky">
      <Navbar.Brand css={{ mr: '$4' }}>
        <Image
          width={48}
          height={48}
          style={{ marginRight: 8 }}
          src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/water-wave.png"
          alt="JSON Sea Logo"
        />

        <Text b color="inherit" css={{ mr: '$11' }} hideIn="xs">
          JSON Sea
        </Text>
      </Navbar.Brand>

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

export default GlobalNav;
